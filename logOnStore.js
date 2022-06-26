/*
 * Licensed Internal Code - Property of HSBC
 * Restricted Materials of HSBC
 * Package: app.jsModules.bijit
 * (c) Copyright HSBC 2013
 * All Rights Reserved
 */
define([
        'module',
        'dojo/_base/declare',
        'dojo/request',
        'dojo/json',
        'dojo/Deferred',
        'dojo/_base/lang',
        'dojo/topic',
        './_BaseStore',
        '../../../../config/logon/MasterConfig'
    ],
    function(module, declare, request, json, Deferred, lang, topic, _BaseStore, config) {
        var MID = module.id;

        return declare([_BaseStore], {

            /**
             * get
             *
             *  Service calls related to Logon journey
             */
            _setServiceEndPoint: function(url) {
                var F = MID + '._setServiceEndPoint(): ';
                console.log(F, arguments);

                this.serviceEndPoint = url;
            },

            _setDataFromResponse: function(response) {
                return response;
            },


            userLogon: function(requestData, token) {
                //alert("abc 123");
                F = MID + '.userLogon(): ';
                console.log(F + "abc request :::: " + JSON.stringify(requestData));
                this._setServiceEndPoint(config.serviceEndPoint.logon._loginContinue);
                //alert("in abc" + this._get(requestData));
                return this._query(requestData, token);
                // return "000";

            },

            authenticate: function(requestData, tbCookieValue, browserVer, osVer) {
                //alert("abc 123");
                F = MID + '.userLogon(): ';
                console.log(F + "abc request :::: " + JSON.stringify(requestData));
                this._setServiceEndPoint(config.serviceEndPoint.logon._passAuthenticate);
                //alert("in abc" + this._get(requestData));
                return this._get(requestData, tbCookieValue, browserVer, osVer);
                // return "000";

            },

            secureKeyAuth: function(requestData, tbCookieValue, browserVer, osVer) {
                //alert("abc 123");
                F = MID + '.userLogon(): ';
                console.log(F + "abc request :::: " + JSON.stringify(requestData));
                this._setServiceEndPoint(config.serviceEndPoint.logon._secureKeyAuth);
                //alert("in abc" + this._get(requestData));
                return this._get(requestData, tbCookieValue, browserVer, osVer);
                // return "000";

            },

            sessionRequest: function(requestData) {
                //alert("abc 123");
                F = MID + '.sessionCmd(): ';
                console.log(F + "abc request :::: " + JSON.stringify(requestData));
                this._setServiceEndPoint(config.serviceEndPoint.logon._sessionAuthenticate);
                //alert("in abc" + this._get(requestData));
                return this._get(requestData);
                // return "000";

            },
            sessionRequestPost: function(form, requestData) {
                //alert("abc 123");
                F = MID + '.sessionCmd(): ';
                console.log(F + "abc request :::: " + JSON.stringify(requestData));
                this._setServiceEndPoint(config.serviceEndPoint.logon._sessionAuthenticate);
                //alert("in abc" + this._get(requestData));
                return this._post(form, requestData);
                // return "000";

            },

            forgotPassword: function(requestData) {
                //alert("abc 123");
                F = MID + '.sessionCmd(): ';
                console.log(F + "abc request :::: " + JSON.stringify(requestData));
                this._setServiceEndPoint(config.serviceEndPoint.logon._saasOLR);
                //alert("in abc" + this._get(requestData));
                return this._get(requestData);
                // return "000";

            },

            secureKeyToken: function(requestData) {
                //alert("abc 123");
                F = MID + '.sessionCmd(): ';
                console.log(F + "abc request :::: " + JSON.stringify(requestData));
                this._setServiceEndPoint(config.serviceEndPoint.logon._saasTokenPinReset);
                //alert("in abc" + this._get(requestData));
                return this._get(requestData);
                // return "000";

            },
            sendActivation: function(requestData) {
                //alert("abc 123");
                F = MID + '.sessionCmd(): ';
                console.log(F + "abc request :::: " + JSON.stringify(requestData));
                this._setServiceEndPoint(config.serviceEndPoint.trustedbrowser._sendActivationCode);
                //alert("in abc" + this._get(requestData));
                return this._get(requestData);
                // return "000";

            },

            authenticateStepUp: function(requestData) {
                var F = MID + '.authenticateStepUp(): ';
                console.log(F + "authenticateStepUp request :::: " + JSON.stringify(requestData));
                this._setServiceEndPoint(config.serviceEndPoint.trustedbrowser._authenticateStepUp);
                return this._get(requestData);

            },

            verifyOTP: function(requestData) {
                var F = MID + '.verifyOTP(): ';
                console.log(F + "Verify OTP request :::: " + JSON.stringify(requestData));
                this._setServiceEndPoint(config.serviceEndPoint.trustedbrowser._verifyOTP);
                return this._get(requestData);

            },

            addTB: function(requestData) {
                var F = MID + '.addTB(): ';
                console.log(F + "Add RB request :::: " + JSON.stringify(requestData));
                this._setServiceEndPoint(config.serviceEndPoint.trustedbrowser._addTB);
                return this._get(requestData);
            },



            // getUser: function(requestData){
            // F = MID + '.getUser(): ';
            // console.log(F+"getUser request :::: " + JSON.stringify(requestData));
            // this._setServiceEndPoint(config.serviceEndPoint.logon._initLogon);
            // return this._get(requestData);

            // },
            // passLogin: function(requestData){
            // // alert("passLogin password");
            // F = MID + '.passLogin(): ';
            // console.log(F+"abc request :::: " + JSON.stringify(requestData));
            // this._setServiceEndPoint(config.serviceEndPoint.logon._logonbtn);
            // //alert("in abc" + this._get(requestData));
            // return this._get(requestData);
            // // return "000";

            // }






        });
    });