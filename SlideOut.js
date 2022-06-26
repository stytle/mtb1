define(
    [
        "dojo/_base/declare",
        "dijit/_WidgetBase",
        "dijit/registry",
        "dojo/query",
        "dojo/dom-class",
        "dojo/html",
        "dojo/dom-construct",
        "dojo/on",
        "dojo/dom",
        "dojo/Deferred",
        "dojo/dom-geometry",
        "dojo/_base/window",
        "dojo/window",
        "dojo/dom-style",
        "dojo/_base/lang",
        "dojo/dom-attr",
        "dojo/request",
        "dojo/store/Memory",
        "dijit/focus",
        "dojo/parser",
        "dojo/topic",
        "dojo/fx",
        "dojo/window",
        "dojo/NodeList-traverse",
        "dojo/NodeList-dom",
        "dojo/NodeList-manipulate",
    ],
    function(declare, _WidgetBase, registry, query, domClass, html, domConstruct, on, dom, Deferred, domGeom, winBase, win, domStyle, lang, domAttr, request, memory, focusUtil, parser, topic, coreFx, win) {

        return declare("hsbcwidget.SlideOut", [_WidgetBase], {
            tabbableEl: true,
            classes: {
                close: 'close',
                open: 'open'
            },
            selectors: {
                trigger: '.jsSliderTrigger',
                slideOverlay: '.slideOverlay',
                slider: '.slideOut',
                sliderContent: '#sliderContent',
                close: '.jsClose',
                defaultOpen: 'defaultOpen',
            },
            $slider: null,
            $slideOverlay: null,
            $sliderContent: null,
            store: null,
            currStoreId: null,
            currentTrigger: null,
            currentTargetID: null,
            cookieBasedSlideOutTargetIDs: ['sliderContentSecurityDP270', 'sliderContentDobSecurityDP270', 'sliderSecureKeyHelpDP270', 'sliderContentSecurityMOB', 'sliderSecureKeyHelpMOB', 'sliderContentSecuritygo3', 'sliderSecureKeyHelpgo3'], //			
            timer: 0,
            isOpen: false,
            transitioning: false,


            postCreate: function() {
                this.init();
                this.bindCloseEvent(this.$slider);
                this._bindTriggerEvents();

                if (this._defaultOpen) {
                    this._defaultOpen.click();
                }

                topic.subscribe('switchView', lang.hitch(this, '_viewSwitchedHandler'));
                topic.subscribe('callSliderMethod', lang.hitch(this, '_externalCallHandler'));
            },
            getCookie: function(cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return null;
            },
            flushCookie: function() {
                document.cookie = 'slideOutFlag=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                document.cookie = 'lastOpenedModel=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            },

            init: function() {
                this.$slider = query(this.selectors.slider)[0];
                this.$slideOverlay = query(this.selectors.slideOverlay)[0];
                this.$sliderContent = query(this.selectors.sliderContent)[0];
                domStyle.set(this.$slider, 'display', 'none');
                domAttr.set(this.$slider, 'aria-hidden', 'true');
                this.store = new memory({});
            },

            containsFocus: function(node) {
                var def = new Deferred();
                setTimeout(lang.hitch(this, function() {
                    if (dom.isDescendant(document.activeElement, this.$slider)) {
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
                    this.bindTriggerEvent($node, 'click');
                    domAttr.set($node, 'aria-expanded', 'false');
                    if (domClass.contains($node, this.selectors.defaultOpen)) {
                        this._defaultOpen = $node;
                    }

                }));
                on(this.$slideOverlay, 'click', lang.hitch(this, function(e) {
                    this.hide();
                }));
            },

            _viewSwitchedHandler: function(flag) {
                //check, if switch from scode page and slideout is open or close
                var slideOutFlag = this.getCookie('slideOutFlag'),
                    lastOpenedModel = this.getCookie('lastOpenedModel');

                //explicitly hide panel
                this.isOpen = (!flag) ? true : this.isOpen;
                if (this.isOpen) {
                    if (!flag) {
                        this.animating = false;
                    }
                    this.hide();
                }

                if (slideOutFlag != null) {
                    document.cookie = "slideOutFlag=" + slideOutFlag;
                    document.cookie = "lastOpenedModel=" + lastOpenedModel;
                }
            },

            _externalCallHandler: function(req) {
                switch (req.name) {
                    case 'show':
                        this.show();
                        break;

                    case 'hide':
                        this.hide();
                        break;

                    case 'flushCookie':
                        this.flushCookie();
                        break;

                    case 'loadContent':
                        if (req.param2) {
                            this.loadContent(req.param1, req.param2);
                        } else {
                            this.loadContent(req.param1);
                        }
                        break;

                    default:
                        console.log('no action specify..');
                }
            },

            bindTriggerEvent: function($trigger, event) {
                on($trigger, event, lang.hitch(this, function(e) {
                    e.preventDefault();

                    if (domClass.contains(this.$slider, 'open') && this.currentTrigger != $trigger) {
                        this.hideQuick($trigger);
                    } else if (!domClass.contains(this.$slider, 'open')) {
                        this.currentTrigger = $trigger;
                        this.currentTargetID = domAttr.get(this.currentTrigger, 'data-target-id'); //						
                        this.loadContent($trigger);
                        this.show();
                    } else {
                        this.currentTrigger = $trigger;
                        this.currentTargetID = domAttr.get(this.currentTrigger, 'data-target-id'); //
                        this.hide();
                    }
                }));
            },

            bindCloseEvent: function($node) {
                query(this.selectors.close, $node).forEach(lang.hitch(this, function($el) {
                    on($el, 'click, keyup', lang.hitch(this, function(e) {
                        e.preventDefault();
                        //new close code
                        if (e.type == 'keyup') {
                            if (e.which == '13' || e.which == 13) {
                                this.hide();
                            }
                        }
                        if (e.type == 'keyup' && e.which != 13) {
                            return;
                        }
                        if (!domClass.contains($el, "invalid")) {
                            this.hide();
                        }
                    }));
                }));
            },

            show: function() {
                domAttr.set(this.currentTrigger, 'disabled', 'true');
                domStyle.set(this.$slider, 'display', 'block');
                domClass.add(this.$slideOverlay, 'veil');

                var windowWidth = win.getBox().w;
                rightVal = windowWidth < 960 ? 0 : -domStyle.get(this.$slider, 'width');

                if (this.animating) {
                    return;
                }

                this.animating = true;

                coreFx.slideTo({
                    node: this.$slider,
                    duration: 500,
                    properties: {
                        right: rightVal
                    },
                    onEnd: lang.hitch(this, function() {
                        this.isOpen = true;
                        this.animating = false;
                        domAttr.remove(this.$slider, 'role');
                        domAttr.set(this.$slider, {
                            'aria-hidden': 'false'


                        });
                        domAttr.set(this.currentTrigger, 'aria-expanded', 'true');
                        // domAttr.set(this.currentTrigger, 'aria-describedby', 'sliderContent');
                        domAttr.remove(this.currentTrigger, 'disabled');
                        on.emit(this.$slider, "onslideropen", {
                            bubbles: true,
                            cancelable: true
                        });
                        domClass.add(this.$slider, 'open');
                        domStyle.set(this.$slider, 'right', '');
                        //focusUtil.focus(this.domNode);
                        //domAttr.set(this.$sliderContent, 'aria-live', 'assertive');
                        //domAttr.set(this.$sliderContent, 'aria-atomic', 'true');
                        var cur = document.getElementById('close_btn');
                        if (cur)
                            cur.focus();

                    })
                }).play();
                if (this.cookieBasedSlideOutTargetIDs.indexOf(this.currentTargetID) >= 0) {
                    document.cookie = "slideOutFlag" + "=true";
                    document.cookie = "lastOpenedModel=" + this.currentTargetID;
                }
            },

            hide: function() {
                var windowWidth = win.getBox().w;
                rightVal = windowWidth < 960 ? domStyle.get(this.$slider, 'width') * 1.1 : 0;

                if (this.animating) {
                    return;
                }

                this.animating = true;

                coreFx.slideTo({
                    node: this.$slider,
                    duration: 500,
                    properties: {
                        right: rightVal
                    },
                    onEnd: lang.hitch(this, function() {
                        this.isOpen = false;
                        this.animating = false;
                        domAttr.set(this.$slider, 'aria-hidden', 'true');

                        //domAttr.set(this.$slider, 'aria-live', 'off');
                        // domAttr.set(this.$slider, 'aria-atomic', 'false');
                        if (this.currentTrigger) {
                            domAttr.set(this.currentTrigger, 'aria-expanded', 'false');
                            // domAttr.set(this.currentTrigger, 'aria-describedby', '');
                        }
                        on.emit(this.$slider, "onsliderclose", {
                            bubbles: true,
                            cancelable: true
                        });
                        domStyle.set(this.$slider, 'right', '');
                        domStyle.set(this.$slider, 'display', 'none');
                        domClass.remove(this.$slider, 'open');
                        domClass.remove(this.$slideOverlay, 'veil');
                        focusUtil.focus(this.currentTrigger);
                        domAttr.set(this.$sliderContent, 'aria-live', '');
                        domAttr.set(this.$sliderContent, 'aria-atomic', '');
                        if (this.currStoreId) {
                            this.removeContent();
                        }
                    })
                }).play();
                if (this.cookieBasedSlideOutTargetIDs.indexOf(this.currentTargetID) >= 0) {
                    document.cookie = "slideOutFlag" + "=false";
                    document.cookie = "lastOpenedModel=" + this.currentTargetID;
                }
            },

            hideQuick: function($trigger) {
                var windowWidth = win.getBox().w;
                this.$newTrigger = $trigger;
                rightVal = windowWidth < 960 ? domStyle.get(this.$slider, 'width') * 1.1 : 0;

                if (this.animating) {
                    return;
                }

                this.animating = true;

                coreFx.slideTo({
                    node: this.$slider,
                    duration: 500,
                    properties: {
                        right: rightVal
                    },
                    onEnd: lang.hitch(this, function() {
                        this.isOpen = false;
                        this.animating = false;
                        domAttr.set(this.$slider, 'aria-hidden', 'true');
                        domAttr.set(this.$slider, 'role', 'presentation');
                        if (this.currentTrigger) {
                            domAttr.set(this.currentTrigger, 'aria-expanded', 'false');
                            domAttr.set(this.currentTrigger, 'aria-describedby', '');
                        }
                        on.emit(this.$slider, "onsliderclose", {
                            bubbles: true,
                            cancelable: true
                        });
                        domStyle.set(this.$slider, 'right', '');
                        domStyle.set(this.$slider, 'display', 'none');
                        domClass.remove(this.$slider, 'open');

                        if (this.currStoreId) {
                            this.removeContent();
                        }
                        this.currentTrigger = this.$newTrigger;
                        this.loadContent(this.$newTrigger);
                        this.show();
                    })
                }).play();
                if (this.cookieBasedSlideOutTargetIDs.indexOf(this.currentTargetID) > 0) {
                    document.cookie = "slideOutFlag" + "=false";
                    document.cookie = "lastOpenedModel=" + this.currentTargetID;
                }
            },

            removeContent: function() {
                this.store.put({
                    node: query(this.$sliderContent).children().remove()[0]
                }, {
                    id: this.currStoreId
                });
                on.emit(this.$slider, 'onsliderempty', {
                    bubbles: true,
                    cancelable: true
                });
            },

            loadContent: function($trigger, passedTargetID) {
                //set currentTrigger if called by external
                if (this.currentTrigger === null) {
                    this.currentTrigger = $trigger;
                }

                if (passedTargetID != null) {
                    var $content = query('#' + passedTargetID)[0];
                    this.addContent($trigger, $content);
                } else {
                    var targetId = domAttr.get($trigger, 'data-target-id');
                    if (this.store.get(targetId)) {
                        var target = domAttr.get($trigger, 'data-target-id'),
                            $content = query('#' + target)[0];
                        this.addContent($trigger, $content);
                    } else if (domAttr.has($trigger, 'data-ajax-target')) {
                        var target = domAttr.get($trigger, 'data-ajax-target');
                        request(target).then(lang.hitch(this, function(response) {
                            this.addContent($trigger, response);
                        }));
                    } else if (targetId) {
                        var target = domAttr.get($trigger, 'data-target-id'),
                            $content = query('#' + target)[0];
                        this.addContent($trigger, $content);
                    } else {
                        throw new Error('Dojo slider: All slider triggers must either specify a target id (data-target-id) or target uri (data-ajax-target).');
                    }
                }

            },

            addContent: function($trigger, $content, id) {
                if (!this.store.get(id)) {
                    domStyle.set($content, 'display', 'none');
                    $content = lang.clone($content);
                    domStyle.set($content, 'display', 'block');
                    domAttr.remove($content, 'aria-hidden');
                    domAttr.remove($content, 'role');
                    domConstruct.place($content, this.$sliderContent, 'only');
                    parser.parse({
                        rootNode: $content,
                        scope: 'slider'
                    }).then(lang.hitch(this, function(instances) {
                        this.currStoreId = this.store.put({
                            id: $content.id,
                            $node: $content
                        });
                        this.bindCloseEvent($content);
                        on.emit(this.$sliderContent, 'onslidercontentadd', {
                            bubbles: true,
                            cancelable: true
                        });
                    }));
                } else {
                    this.currStoreId = id;
                    var $node = (this.store.get(id).node) ? this.store.get(id).node : this.store.get(id).$node;
                    if ($node == undefined)
                        $node = query('#' + id)[0];
                    $content = $node;
                    domStyle.set($node, 'display', 'block');
                    domAttr.remove($node, 'role');
                    domAttr.remove($node, 'aria-hidden');
                    domConstruct.place($node, this.$sliderContent, 'only');
                    on.emit(this.$sliderContent, 'onslidercontentadd', {
                        bubbles: true,
                        cancelable: true
                    });
                }
            }
        });
    }
);