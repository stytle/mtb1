define(
    [
        "dojo/_base/declare",
        "dijit/_WidgetBase",
        "dijit/_Templated",
        "dijit/registry",
        "dojo/text!hsbcwidget/themes/ursula/templates/Lightbox1.html",
        "dojo/query",
        "dojo/dom-class",
        "dojo/html",
        "dojo/dom-construct",
        "dojo/on",
        "dojo/dom",
        "dojo/topic",
        "dojo/Deferred",
        "dojo/dom-geometry",
        "dojo/_base/window",
        'dojo/_base/array',
        "dojo/window",
        "dojo/dom-style",
        "dojo/_base/lang",
        "dojo/dom-attr",
        "dojo/request",
        "dojo/store/Memory",
        "dijit/focus",
        "dojo/parser",
        "dojo/ready",
        "dojo/NodeList-traverse",
        "dojo/NodeList-dom",
        "dojo/NodeList-manipulate"
    ],
    function(declare, _WidgetBase, _Templated, registry, template, query, domClass, html, domConstruct, on, dom, topic, Deferred, domGeom, winBase, array, win, domStyle, lang, domAttr, request, memory, focusUtil, parser, ready) {
        var lightBoxAlreadyAvailable = false;

        var Lightbox1 = declare("hsbcwidget.Lightbox", [_WidgetBase, _Templated], {
            templateString: template,
            tabbableEl: true,
            scrollTop: 0,
            validationNodes: null,
            allEvents: null,
            classes: {
                close: 'close',
                noPrint: 'noPrint',
                overlayOpen: 'bodyFixed',
                overflowX: 'lightboxOverflow',
                hideClose: 'hideClose',
                disableOverlayClose: 'disableOverlayClose'
            },
            selectors: {
                trigger: '.jsLightboxTrigger1',
                printButton: '.jsPrint',
                overlay: '.overlay',
                lightbox: '.lightbox',
                lightboxContent: '.lightboxInner2',
                close: '.jsClose',
                dialogTitle: '.dialogTitle',
                defaultOpen: 'defaultOpen'
            },
            $overlay: null,
            $lightbox: null,
            $lightboxContent: null,
            $tabbableNode: null,
            store: null,
            lightBoxOriginalWidth: null,
            currStoreId: null,
            NextIdNum: 1,
            overlayCloseDisabled: false,
            currentTrigger: null,
            pageHashValue: null,
            lightBoxLastNode: null,
            isInValidEle: false,
            LightboxLastEle: null,
            isFirefox: null,

            postCreate: function() {
                this.setHashValue();
                if (lightBoxAlreadyAvailable) { // This condition is added to allow only one instance of LightBox1 to be initialized, no matter how many times is declared in page.
                    if (dijit.byId(lightBoxAlreadyAvailable)) {

                        if (this.getHashValue() != dijit.byId(lightBoxAlreadyAvailable).getHashValue()) {
                            dijit.byId(lightBoxAlreadyAvailable).destroyRecursive(false);
                            lightBoxAlreadyAvailable = false;
                        } else {
                            dijit.byId(lightBoxAlreadyAvailable)._reStart();
                            this.destroyRecursive(false);
                            return;
                        }
                    }

                }

                this.allEvents = [];
                this.init();
                this.lightBoxOriginalWidth = domStyle.get(this.$lightbox, "width");
                this.bindCloseEvent(this.$lightbox);
                this.buildTabbableElement();
                this.setOverlayDimensions();
                this.bindOverlayEvents();
                ready(lang.hitch(this, function() { //added for delay event mapping - Himanshu
                    this._bindTriggerEvents();
                    if (this._defaultOpen) {
                        this._defaultOpen.click();
                    }
                }));
                lightBoxAlreadyAvailable = this.id;

                topic.subscribe("lightbox/show", lang.hitch(this, function() {
                    this.show();
                }));

                topic.subscribe("lightbox/hide", lang.hitch(this, function(data) {
                    var nextOverlay = false;
                    if (data && data.nextOverlay) {
                        nextOverlay = data.nextOverlay;
                    }
                    this.hide(nextOverlay);
                    this.removeContent();
                }));

                topic.subscribe("lightbox/changeAndShow", lang.hitch(this, function(data) {
                    if (this.delayTrigger) {
                        return;
                    }
                    this._setAndShow(data);
                }));

                topic.subscribe("lightbox/restart", lang.hitch(this, function(data) {
                    this._reStart();
                }));
                topic.subscribe("lightbox/processtrigger", lang.hitch(this, function($trigger) {
                    this.processTrigger($trigger);
                }));
                if (this.isFirefox) {
                    domAttr.set(this.domNode, 'aria-describedby', 'idLightboxContent');
                    domAttr.set(this.innerNode, 'id', 'idLightboxContent');
                }
            },

            setHashValue: function() {
                this.pageHashValue = window.location.hash.substr(1);
            },

            getHashValue: function() {
                return this.pageHashValue;
            },

            _reStart: function() {
                array.forEach(this.allEvents, lang.hitch(this, function(currEvent) {
                    currEvent.remove();
                }));
                this.delayTrigger = false;
                this.allEvents = [];
                this._getAttachPoints();
                this.bindCloseEvent(this.$lightbox);
                this.bindOverlayEvents();
                this._bindTriggerEvents();
                if (this._defaultOpen) {
                    this._defaultOpen.click();
                }

            },

            init: function() {

                domConstruct.place(this.domNode, winBase.body(), 'last');
                domConstruct.place(template, winBase.body(), 'last');
                this._getAttachPoints();
                this.isFirefox = typeof InstallTrigger !== 'undefined';
            },

            _getAttachPoints: function() {
                this.$overlay = query(this.selectors.overlay)[0];
                this.$lightbox = query(this.selectors.lightbox)[0];
                this.$lightboxContent = query(this.selectors.lightboxContent)[0];
                this.store = new memory({});
            },

            /**
             * Adds Tabbable element to the overlay that is focused when the overlay is opened.
             */
            buildTabbableElement: function() {
                query(this.selectors.close, this.domNode).forEach(lang.hitch(this, function($node) {
                    this.mapShiftTab($node, 'keydown');
                }));
            },
            mapShiftTab: function($trigger, event) {
                on($trigger, event, lang.hitch(this, function(e) {
                    if (e.shiftKey && e.which == 9) {
                        e.preventDefault();
                        //console.log("in shif tab", this.lightBoxLastNode);
                        focusUtil.focus(this.lightBoxLastNode);
                    }
                }));
            },

            containsFocus: function(node) {
                var def = new Deferred();
                setTimeout(lang.hitch(this, function() {
                    if (dom.isDescendant(document.activeElement, this.$lightbox)) {
                        def.resolve();
                    } else {
                        def.reject();
                    }
                }), 0);

                return def.promise;
            },

            /**
             * Binds click events to triggers
             * @private
             */
            _bindTriggerEvents: function() {
                query(this.selectors.trigger).forEach(lang.hitch(this, function($node) {
                    this.bindTriggerEvent($node, 'click, keydown');

                    if (domClass.contains($node, this.selectors.defaultOpen)) {
                        this._defaultOpen = $node;
                    }
                }));
            },

            bindTriggerEvent: function($trigger, event) {

                var trrigerEvents = on($trigger, event, lang.hitch(this, function(e) {

                    if (e.type == 'keydown' && e.which != 13) {
                        //e.preventDefault();
                        return;
                    }

                    if (this.delayTrigger) {
                        return;
                    }

                    e.preventDefault();
                    if (window.isfromLightbox) {
                        window.isfromLightbox = false;
                        return;
                    }
                    this.processTrigger($trigger);
                }));
                this.allEvents.push(trrigerEvents[0]);
                this.allEvents.push(trrigerEvents[1]);
            },
            processTrigger: function($trigger) {
                var valid = true;
                if (domAttr.get($trigger, "data-validation-widget")) {
                    valid = registry.byId(domAttr.get($trigger, "data-validation-widget")).validate();
                }

                if (valid) {
                    domClass.add($trigger, "hide");
                    this.show();
                    this.currentTrigger = $trigger;
                    this.loadContent($trigger);
                }
            },

            bindOverlayEvents: function() {

                var globalResizeEvent = on(winBase.global, 'resize', lang.hitch(this, function() {
                    this.setOverlayDimensions();

                }));

                var iOSOrientationChangeEvent = null
                var userAgent = window.navigator.userAgent;

                if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
                    iOSOrientationChangeEvent = on(winBase.global, 'orientationchange', lang.hitch(this, function() {
                        this.setOverlayDimensions();
                    }));
                }

                var overlayBlurEvent = on(this.$overlay, 'click', lang.hitch(this, function(e) {
                    e.preventDefault();
                    if (!this.overlayCloseDisabled) {
                        this.hide();
                    }

                }));

                var overlayPrintEvent = on(this.domNode, on.selector(this.selectors.printButton, 'click, keyup'), lang.hitch(this, function(e) {

                    e.preventDefault();
                    if (e.type === 'keyup' && e.which !== 13) {
                        return;
                    }

                    query(this.domNode).siblings(':not(script)').addClass(this.classes.noPrint);
                    this.printing = true;
                    window.print();
                }));

                var overlayTabEvent = on(this.domNode, 'keydown', lang.hitch(this, function(e) {
                    if (e.which === 9) {
                        //if the user tabs out of the lightbox
                        //give focus back to the lightbox.
                        this.containsFocus().then(function() {}, lang.hitch(this, function() {
                            //this.$tabbableNode.focus();
                            this.focusNode = null;
                            if (domClass.contains(this.closeButton, this.classes.hideClose)) {
                                this.focusNode = query('a:first', this.$lightboxContent)[0];
                            } else {
                                this.focusNode = query(this.selectors.close, this.domNode)[0];
                            }
                            this.focusNode.focus();
                        }));
                    } else if (e.which === 27) {
                        if (!this.overlayCloseDisabled) {
                            this.hide();
                        }
                    }
                }));

                this.allEvents.push(globalResizeEvent);
                this.allEvents.push(overlayBlurEvent);
                this.allEvents.push(overlayPrintEvent[0]);
                this.allEvents.push(overlayPrintEvent[1]);
                this.allEvents.push(overlayTabEvent);

                /* on(this.domNode,"blur",lang.hitch(this,function(){
                 	this.hide();
                 }))*/
            },

            _attachGlobalSubscribe: function() {
                topic.subscribe("/dojo/hashchange", lang.hitch(this, function(hash) {
                    if (lightBoxAlreadyAvailable && dijit.byId(lightBoxAlreadyAvailable)) {
                        dijit.byId(lightBoxAlreadyAvailable).destroyRecursive(false);
                    }
                    lightBoxAlreadyAvailable = false;
                    this.hide();
                    this.destroyRecursive(false);
                }));
            },

            bindCloseEvent: function($node) {
                query(this.selectors.close, $node).forEach(lang.hitch(this, function($el) {
                    var closeEvent = on($el, 'click, keydown', lang.hitch(this, function(e) {
                        //e.preventDefault();

                        if (e.type == 'keydown' && e.which != 13) {
                            return;
                        }

                        this.Validation = query("[data-lightbox-validate='true']", this.$lightboxContent);
                        array.some(this.Validation, lang.hitch(this, function(node) {

                            if (!dijit.byId(domAttr.get(node, "id")).validate()) {
                                domClass.add($el, "invalid");
                                return true;
                            }
                            domClass.remove($el, "invalid");
                        }));

                        if (!domClass.contains($el, "invalid")) {
                            this.hide();
                        }

                    }));

                    this.allEvents.push(closeEvent[0]);
                    this.allEvents.push(closeEvent[1]);

                }));
            },

            show: function() {
                this.lightboxNode.setAttribute("tabindex", "0");
                if (this.isFirefox) {
                    this.innerNode.setAttribute("tabindex", "-1");
                }
                this.isOpen = true;
                var nodes = query("#mainContainer, #top, #main");
                nodes.forEach(function(node) {
                    domAttr.set(node, "aria-hidden", "true");
                });
                this.scrollTop = query('body')[0].scrollTop;
                query('body').addClass(this.classes.overlayOpen);
                domStyle.set(this.$overlay, 'display', 'block');
                domAttr.set(this.$lightbox, "aria-hidden", "false");
                domStyle.set(this.$lightbox, 'display', 'block');
                this.setPos();

                //if aria hidden true then false it
                var isAriaHidden = dojo.hasAttr(this.$overlay, 'aria-hidden');
                if (isAriaHidden) {
                    domAttr.remove(node, "aria-hidden");
                }
                on.emit(this.$lightbox, "onlightboxopen", {
                    bubbles: true,
                    cancelable: true
                });
                this.getLastNodeofOverlay();
            },
            getLastNodeofOverlay: function() {
                array.forEach(query(":focusable", this.$lightboxContent), lang.hitch(this, function(node) {
                    var eleNames = ["A", "INPUT", "BUTTON", "SELECT", "TEXTAREA"].indexOf(node.nodeName) >= 0;

                    if (eleNames) {
                        //ignore hidden, tabIndex -1 and disable element
                        if (node.type == "hidden") {
                            this.isInValidEle = true;
                        } else if (domAttr.get(node, 'tabindex') == "-1") {
                            this.isInValidEle = true;
                        } else if (domAttr.has(node, 'disabled')) {
                            this.isInValidEle = true;
                        }
                        if (!this.isInValidEle) {
                            this.LightboxLastEle = node;
                        }
                        this.isInValidEle = false;
                    }
                }));
                if (this.LightboxLastEle == null) {
                    this.lightBoxLastNode = query(this.selectors.close, this.domNode)[0];
                } else {
                    this.lightBoxLastNode = this.LightboxLastEle;
                }
            },
            hide: function(nextOverlay) {
                this.lightboxNode.setAttribute("tabindex", "-1");
                this.isOpen = false;
                var nodes = query("#mainContainer, #top, #main");
                nodes.forEach(function(node) {
                    domAttr.remove(node, "aria-hidden");
                });
                if (this.currentTrigger) {
                    domClass.remove(this.currentTrigger, "hide");
                }
                if (this.currStoreId) {
                    this.removeContent();
                }
                if (this.isFirefox) {
                    this.innerNode.removeAttribute("tabindex");
                }
                if (this.printing) {
                    query(this.domNode).siblings(':not(script)').removeClass(this.classes.noPrint);
                }
                domStyle.set(this.$overlay, 'display', 'none');
                domAttr.set(this.$lightbox, "aria-hidden", "true");
                domStyle.set(this.$lightbox, 'display', 'none');
                on.emit(this.$lightbox, 'onlightboxclose', {
                    bubbles: true,
                    cancelable: true
                });
                query('body').removeClass(this.classes.overlayOpen);
                domStyle.set(query('body')[0], "width", "auto");
                domStyle.set(this.$lightbox, 'max-width', '');
                domStyle.set(this.$lightbox, 'width', '');
                domStyle.set(this.closeButton, 'right', '');
                domStyle.set(this.closeButton, 'top', '');
                domStyle.set(this.closeButton, 'position', '');
                domStyle.set(this.innerNode, "height", "");
                domStyle.set(this.innerNode, "width", "");
                domClass.remove(this.innerNode, this.classes.overflowX);
                this.delayTrigger = true;
                focusUtil.focus(this.currentTrigger);

                if (nextOverlay) {
                    this.delayTrigger = false;
                } else {
                    this.currentTrigger = null;
                }


                query('body')[0].scrollTop = this.scrollTop ? this.scrollTop : 0;
                setTimeout(lang.hitch(this, function() {
                    this.delayTrigger = false;
                }), 500);
            },

            removeContent: function() {
                this.store.put({
                    node: query(this.$lightboxContent).children().remove()[0]
                }, {
                    id: this.currStoreId
                });
                on.emit(this.$lightbox, 'onlightboxempty', {
                    bubbles: true,
                    cancelable: true
                });
            },

            setPos: function() {
                var winBox = win.getBox(),
                    top,
                    lightboxBox = domGeom.getContentBox(this.$lightbox),
                    topPos = document.body.scrollTop;
                domStyle.set(this.$lightbox, 'left', ((winBox.w - lightboxBox.w) / 2) + 'px');

                if (lightboxBox.h < winBox.h) {
                    top = topPos + ((winBox.h - lightboxBox.h) / 2);
                } else {
                    top = topPos;
                }

                domStyle.set(this.$lightbox, 'top', top + 'px');
            },

            setOverlayDimensions: function() {

                if (!this.isOpen) {
                    return;
                }

                domStyle.set(this.closeButton, 'right', '');
                domStyle.set(this.closeButton, 'top', '');
                domStyle.set(this.closeButton, 'position', '');
                domStyle.set(this.$lightbox, 'max-width', '');
                domStyle.set(this.$lightbox, 'width', '');
                domStyle.set(query('body')[0], "width", win.getBox().w + "px");

                var docBox = win.getBox(),
                    lightboxBox = domGeom.getContentBox(this.$lightbox),
                    height = Math.max(docBox.h, lightboxBox.h),
                    totalHeight = "",
                    totalWidth = "",
                    winHeight = docBox.h,
                    overflowAction = "remove",
                    width = Math.max(docBox.w, lightboxBox.w),
                    top,
                    topPos = document.body.scrollTop;

                if (this.lightBoxOriginalWidth > docBox.w) {
                    totalWidth = lightboxBox.w + 'px';
                    domStyle.set(this.$overlay, 'position', 'absolute');
                    domStyle.set(this.$lightbox, 'left', '5px');
                    domStyle.set(this.$lightbox, 'right', '5px');
                    domStyle.set(this.$lightbox, 'overflow-x', 'scroll');
                    domStyle.set(this.$lightbox, 'overflow-y', 'auto');
                    domStyle.set(this.closeButton, 'right', '-25px');
                    domStyle.set(this.closeButton, 'position', 'fixed');
                    domStyle.set(this.$lightbox, 'width', (docBox.w - 10) + 'px');

                } else {
                    domStyle.set(this.$lightbox, 'left', ((docBox.w - lightboxBox.w) / 2) + 'px');
                    domStyle.set(this.$lightbox, 'right', '');
                    domStyle.set(this.$lightbox, 'overflow-x', '');
                    domStyle.set(this.$lightbox, 'overflow-y', '');
                }
                domStyle.set(this.$overlay, 'height', height + 'px');
                domStyle.set(this.$overlay, 'width', width + 'px');

                domStyle.set(this.innerNode, "width", totalWidth);

                domStyle.set(this.innerNode, "height", "");

                if (domGeom.getMarginBox(this.$lightbox).h > winHeight) {
                    var lightboxMarginExtents = domGeom.getMarginExtents(this.$lightbox),
                        lightboxInnerMarginExtents = domGeom.getMarginExtents(this.innerNode),
                        lightboxBorderPad = domGeom.getPadBorderExtents(this.$lightbox),
                        lightboxInnerBorderPad = domGeom.getPadBorderExtents(this.innerNode),
                        totalMargin = lightboxMarginExtents.t + lightboxMarginExtents.b + lightboxInnerMarginExtents.t + lightboxInnerMarginExtents.b,
                        totalBorderPad = lightboxBorderPad.t + lightboxBorderPad.b + lightboxInnerBorderPad.t + lightboxInnerBorderPad.b;

                    totalHeight = (winHeight - totalBorderPad - totalMargin) + 'px';
                    overflowAction = "add";
                    top = topPos;
                } else {
                    top = (winHeight - domGeom.getContentBox(this.$lightbox).h) / 2;
                }

                domStyle.set(this.innerNode, "height", totalHeight);

                domStyle.set(this.$lightbox, "top", top + 'px');
                domClass[overflowAction](this.innerNode, this.classes.overflowX);

                if (this.lightBoxOriginalWidth > docBox.w) {
                    var closeButtonTop = domStyle.get(this.$lightbox, "top");
                    domStyle.set(this.closeButton, "top", closeButtonTop + 'px');
                }

            },

            changeContent: function($trigger, $content, id) {
                this.removeContent();
                if (id) {
                    this.addContent(null, null, id);
                } else if (!$trigger && $content) {
                    this.addContent(null, $content, null);
                } else if ($trigger && !$content) {
                    this.loadContent($trigger);
                }
            },

            loadContent: function($trigger) {
                if (domAttr.has($trigger, 'data-initialised-id')) {
                    this.addContent($trigger, null, domAttr.get($trigger, 'data-initialised-id'));
                } else if (domAttr.has($trigger, 'data-ajax-target')) {
                    var target = domAttr.get($trigger, 'data-ajax-target');
                    request(target).then(lang.hitch(this, function(response) {
                        this.addContent($trigger, response);
                    }));
                } else if (domAttr.has($trigger, 'data-target-id')) {
                    var target = domAttr.get($trigger, 'data-target-id'),
                        $content = query('#' + target)[0];
                    this.addContent($trigger, $content);
                } else {
                    throw new Error('Dojo Lightbox: All lightbox triggers must either specify a target id (data-target-id) or target uri (data-ajax-target).');
                }
            },

            _setAndShow: function(data) {
                this.currStoreId = null;
                domConstruct.place(data.content, this.$lightboxContent, 'only');
                if (data.currentTrigger) {
                    this.currentTrigger = data.currentTrigger;
                    domClass.remove(this.currentTrigger, "hide");
                }
                //this.currStoreId = this.store.put({id: this.NextIdNum, $node: $content});
                //this.NextIdNum++;            	 
                this.show();
                on.emit(this.$lightboxContent, 'onlightboxcontentadd', {
                    bubbles: true,
                    cancelable: true
                });
                this.setPos();
                this.setOverlayDimensions();
                this.focusNode = null;
                if (domClass.contains(data.content, this.classes.hideClose)) {
                    domClass.add(this.closeButton, "hide");
                    this.focusNode = query('a:first', data.content)[0];
                } else {
                    domClass.remove(this.closeButton, "hide");
                    this.focusNode = query(this.selectors.close, this.domNode)[0];
                }
                if (this.focusNode) {
                    this.focusNode.focus();
                }
                if (domClass.contains(data.content, this.classes.disableOverlayClose)) {
                    this.overlayCloseDisabled = true;
                } else {
                    this.overlayCloseDisabled = false;
                }
                try {
                    var isFirefox = typeof InstallTrigger !== 'undefined';
                    if (isFirefox) {
                        if (document.getElementsByClassName('lightboxInner1 lightboxScroll lightboxOverflow')[0])
                            document.getElementsByClassName('lightboxInner1 lightboxScroll lightboxOverflow')[0].setAttribute("tabindex", "-1")
                        if (document.getElementsByClassName('innerPage secure')[0])
                            document.getElementsByClassName('innerPage secure')[0].setAttribute("tabindex", "-1")
                    }
                } catch (err) {
                    console.log(err);
                }
            },

            addContent: function($trigger, $content, id) {
                if (id === null || id == undefined) {
                    domStyle.set($content, 'display', 'none');
                    $content = lang.clone($content);
                    domStyle.set($content, 'display', 'block');
                    //remove role and aria-hidden = false as this is visible
                    domAttr.remove($content, 'role');
                    domAttr.set($content, 'aria-hidden', 'false');
                    domConstruct.place($content, this.$lightboxContent, 'only');
                    parser.parse({
                        rootNode: $content,
                        scope: 'lightbox'
                    }).then(lang.hitch(this, function(instances) {
                        this.currStoreId = this.store.put({
                            id: this.NextIdNum,
                            $node: $content
                        });
                        this.NextIdNum++;
                        this.bindCloseEvent($content);
                        if ($trigger) {
                            domAttr.set($trigger, 'data-initialised-id', this.currStoreId);
                        }
                        on.emit(this.$lightboxContent, 'onlightboxcontentadd', {
                            bubbles: true,
                            cancelable: true
                        });
                        this.setPos();
                        this.setOverlayDimensions();
                    }));

                    var title = query(this.selectors.dialogTitle, $content);

                    if (title.length) {

                        title.attr("id", this.id + '_label');
                        domAttr.set(this.domNode, "aria-labelledby", this.id + '_label');

                    }

                } else {
                    this.currStoreId = id;
                    var $node = this.store.get(id).node;
                    $content = $node;
                    domStyle.set($node, 'display', 'block');
                    //remove role and aria-hidden = false as this is visible
                    domAttr.remove($content, 'role');
                    domAttr.set($content, 'aria-hidden', 'false');
                    domConstruct.place($node, this.$lightboxContent, 'only');
                    on.emit(this.$lightboxContent, 'onlightboxcontentadd', {
                        bubbles: true,
                        cancelable: true
                    });
                    this.setPos();
                    this.setOverlayDimensions();
                }

                this.focusNode = null;
                if (domClass.contains($content, this.classes.hideClose)) {
                    domClass.add(this.closeButton, "hide");
                    this.focusNode = query('a:first', $content)[0];
                } else {
                    domClass.remove(this.closeButton, "hide");
                    this.focusNode = query(this.selectors.close, this.domNode)[0];
                }
                if (this.focusNode) {
                    this.focusNode.focus();
                }
                this.getLastNodeofOverlay();

                if (domClass.contains($content, this.classes.disableOverlayClose)) {
                    this.overlayCloseDisabled = true;
                } else {
                    this.overlayCloseDisabled = false;
                }
            }
        });

        return Lightbox1;
    }
);