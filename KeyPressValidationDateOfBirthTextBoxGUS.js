define(
    [
        'dojo/_base/declare',
        'dijit/_WidgetBase',
        'dojo/parser',
        'dojo/on',
        'dojo/query',
        'hsbcwidget/ext!/saas/Components/resource/jsbundle/logon/nls/error.js?aggregationRequired',
        'dojo/_base/lang', 'dojo/dom-construct', 'dojo/dom-attr',
        'dijit/focus', 'dojo/NodeList-dom'
    ],
    function(declare, widgetBaseDob, parser, on, query, i18n_error, lang,
        domConstruct, domAttr, focusUtil) {

        return declare(
            [widgetBaseDob], {
                i18n_error: i18n_error,
                confirmMessage: 'Confirmed',
                day: null,
                month: null,
                year: null,
                dayNode: null,
                monthNode: null,
                yearNode: null,
                isDateValid: false,
                validationNode: null,
                focusId: null,
                postCreate: function() {
                    this.inherited(arguments);
                    this.getComponentHandlers();
                    this.setDateLayout();

                    if (this.innerContent) {
                        parser.parse({
                            rootNode: this.innerContent,
                            scope: 'dt'
                        }).then(lang.hitch(this, function(instances) {
                            this.registerEvents();
                        }));
                    }

                },

                focus: function() {
                    if (this.focusId && dijit.byId(this.focusId)) {
                        dijit.byId(this.focusId).focus();
                    }
                },

                getComponentHandlers: function() {
                    this.innerContent = query(".dobContent",
                        this.domNode);
                    if (this.innerContent.length > 0 &&
                        this.innerContent[0]) {
                        this.innerContent = this.innerContent[0];
                        this.dayNode = query("[data-date-type='date']", this.innerContent)[0];
                        this.monthNode = query("[data-date-type='month']", this.innerContent)[0];
                        this.yearNode = query("[data-date-type='year']", this.innerContent)[0];
                    }

                },

                setDateLayout: function() {
                    var firstNode = this.getNode(this.pattern[0]);
                    var lastNode = this.getNode(this.pattern[2]);

                    var firstNodeInput = query(".keyPressValidationTextBox", firstNode)[0];
                    this.focusId = domAttr.get(firstNodeInput, "widgetId");

                    domConstruct.place(firstNode, this.innerContent, "first");
                    domConstruct.place(lastNode, this.innerContent, "last");
                },

                getNode: function(position) {
                    if (position == 1) {
                        return this.dayNode;
                    } else if (position == 2) {
                        return this.monthNode;
                    } else {
                        return this.yearNode;
                    }
                },

                registerEvents: function() {
                    try {
                        var dayNode = query("[data-date-type='date'] .dateDay", this.innerContent)[0];
                        var monthNode = query("[data-date-type='month'] .dateMonth", this.innerContent)[0];
                        var yearNode = query("[data-date-type='year'] .dateYear", this.innerContent)[0];

                        if (dayNode != undefined) {
                            var widgetId = domAttr.get(dayNode, "widgetId");
                            this.day = dijit.byId(widgetId);
                        }
                        if (monthNode != undefined) {
                            var widgetId = domAttr.get(monthNode, "widgetId");
                            this.month = dijit.byId(widgetId);
                        }
                        if (yearNode != undefined) {
                            var widgetId = domAttr.get(yearNode, "widgetId");
                            this.year = dijit.byId(widgetId);
                        }
                        this.day.postValid = lang.hitch(this, function(isValid) {
                            return this.checkDob(isValid);
                        });
                        this.month.postValid = lang.hitch(this, function(isValid) {
                            return this.checkDob(isValid);
                        });
                        this.year.postValid = lang.hitch(this, function(isValid) {
                            return this.checkDob(isValid);
                        });

                    } catch (e) {
                        console.log("unable to register events for KeyPressValidationDateTextBos");
                    }

                },
                onKeyUp: function(e) {
                    this.inherited(arguments);
                },
                validate: function(isFocused) {
                    var isValid = this.inherited(arguments);
                    if (!isValid)
                        isValid = this.isDateValid;
                    return isValid;
                },
                isValid: function() {
                    var areChildWidgetValid = true;
                    areChildWidgetValid = this.checkDob(this.day.isValid() && this.month.isValid() && this.year.isValid());
                    return this.isDateValid && areChildWidgetValid;
                },

                isEmpty: function(value) {
                    return (value == undefined || value == "" || value == null);
                },

                checkDob: function(isValid) {
                    if (!this.isEmpty(this.day.get("value")) && !this.isEmpty(this.month.get("value")) &&
                        !this.isEmpty(this.year.get("value"))) {

                        var year = parseInt(this.year.get("value"));
                        var month = parseInt(this.month.get("value"));
                        var day = parseInt(this.day.get("value"));

                        var validDays = 31;

                        //Check for feb month with leap year
                        if (month == 2) {
                            validDays = 28;
                            if ((year % 4) == 0) {
                                validDays = 29;
                            }
                        } else if ([4, 6, 9, 11].indexOf(month) != -1) {
                            validDays = 30;
                        }

                        if (day <= validDays) {
                            var date = new Date(year, month - 1, day);
                            var today = new Date();

                            if (!(date > today)) {
                                this.isDateValid = isValid;
                            } else {
                                this.isDateValid = false;
                                this.day.set("message", i18n_error.LOGON_DOB_GREATER_MESSAGE);
                            }
                        } else {
                            this.isDateValid = false;
                            this.day.set("message", i18n_error.LOGON_DOB_DAY_GREATER_MESSAGE + validDays);
                        }
                    }
                    return this.isDateValid;
                }
            });
    });