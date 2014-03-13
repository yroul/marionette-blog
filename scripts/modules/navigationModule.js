

define(function(require){
    'use strict';

    var App = require('application'),
        Communicator = require('communicator'),
        NavigationView = require('views/navigationView');


    var NavigationModule = App.module("NavigationModule", function(test, App, Backbone, Marionette, $, _) {
        this.startWithParent = true;
    });
    NavigationModule.addInitializer(function(){

    });
    NavigationModule.on('start',function(options){
        console.log("Module : navigation is starting...");
        Communicator.mediator.trigger("NAVIGATION_MODULE:START");
        this.isRunning = true;
        this.view = new NavigationView();
    });
    NavigationModule.on('stop',function(options){
        console.log("Module : navigation is stopping...");
        Communicator.mediator.trigger("NAVIGATION_MODULE:STOP");
        this.isRunning = false;
    });
    return NavigationModule;

});

