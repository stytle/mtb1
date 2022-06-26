define([
    'dojo/_base/declare',
    'dijit/form/ValidationTextBox',

    'dojo/on',
    'dojo/query',
    'dojo/_base/lang',
    'dojo/dom-construct',
    'dijit/focus',
    'dojo/NodeList-dom'
], function(
    declare, ValidationTextBox,
    on, query, lang, domConstruct, focusUtil) {



    return declare([ValidationTextBox], {

        confirmMessage: 'Confirmed',

        validationNode: null,
        postCreate: function() {
            on(this.domNode, 'keyup', lang.hitch(this, 'onKeyUp'));
            this.parentQuestion = query(this.domNode).closest('.jsQuestion');
            this.inlineErrorMessage = query('.jsValidationMsg', this.parentQuestion[0]);
        },

        onKeyUp: function(e) {

            //this.inlineErrorMessage.removeAttr('role', 'alert');
            this.validate(true);


        },

        displayMessage: function( /*String*/ message) {
            if (this.inlineErrorMessage.length > 0) {
                if (message == "") {
                    message = " ";
                    this.textbox.removeAttribute('aria-describedby');
                } else {
                    this.textbox.setAttribute('aria-describedby', this.inlineErrorMessage[0].id);
                }

                if (message !== this.inlineErrorMessage.innerHTML()) {
                    this.inlineErrorMessage.innerHTML(message);
                    this.textbox.setAttribute('aria-describedby', this.inlineErrorMessage[0].id);
                }
                if (message === this.confirmMessage) {
                    //    this.inlineErrorMessage.addClass('confirm');
                    this.inlineErrorMessage.innerHTML(' ');
                    this.textbox.removeAttribute('aria-describedby');
                }
            } else {
                this.textbox.removeAttribute('aria-describedby');
                throw new Error(this.id + ': Validation message must be set');
            }

        },

        _onBlur: function() {
            if (this.disabled) {
                return;
            }
            this.inherited(arguments);
            this._updatePlaceHolder();
            //this.inlineErrorMessage.attr('role', 'alert');
        },

        _onFocus: function() {
            if (this.disabled || this.readOnly) {
                return;
            }
            this.inherited(arguments);
            this._updatePlaceHolder();
            //this.inlineErrorMessage.removeClass('blurred');
        },

        validate: function(isFocused) {
            on.emit(this.parentQuestion[0], 'validate', {
                bubbles: true,
                cancelable: true
            });

            return this.postValid(this.inherited(arguments));
        },

        postValid: function(isValid) {
            return isValid;
        }
    });

});