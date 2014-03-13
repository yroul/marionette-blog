define(function(require) {
        'use strict';


        // Use Christi require style
        // <3
        var Backbone = require('backbone'),
            Template = require('hbs!tmpl/TestViewTmpl_tmpl'),
            Colors = require('i18n!../nls/colors');

        return Backbone.Marionette.ItemView.extend({
            initialize: function(options) {
                // this.Communicator = options.Communicator;
                // this.Communicator.mediator.on("APP:START", function() {
                //     console.log("TestView heard about an application starting...")
                // });
            },
            template: Template({
                helloWorld: Colors.green
            }),
            ui: {
                "cat": ".dog"
            },
            events: {
                "click .dog": "onButtonClick"
            },
            onButtonClick: function() {
                console.log('click on button');
                //this.Communicator.mediator.trigger("CLICK");
            },
            onRender: function() {
                console.log("testview render");

                // this.Communicator.mediator.trigger("TEST");
            },
        });
    });