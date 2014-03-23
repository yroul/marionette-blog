

define(function(require){
    'use strict';

    var App = require('application'),
        Communicator = require('communicator'),
        NavigationView = require('views/collection/navbarView');


    var NavigationModule = App.module("NavigationModule", function(test, App, Backbone, Marionette, $, _) {
        this.startWithParent = true;

        this.menuEntry = [{
            name : "Home",
            route : "#!/home"
        },{
            name : "Contact",
            route : "#!/contact"
        }];

        this.addInitializer(function(){

        });

        this.on('start',function(options){
            console.log("Module : navigation is starting...");
            Communicator.mediator.trigger("NAVIGATION_MODULE:START");
            this.isRunning = true;
            this.view = new NavigationView({collection: new Backbone.Collection(this.menuEntry)});
            App.navigation.show(this.view);
        });
        this.on('stop',function(options){
            console.log("Module : navigation is stopping...");
            Communicator.mediator.trigger("NAVIGATION_MODULE:STOP");
            this.isRunning = false;
        });


    });

    return NavigationModule;

});

