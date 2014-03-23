
define(['application', 'communicator', 'views/TestView'], function(App, Communicator, TestView) {
    'use strict';



    var homeModule = App.module('homeModule', function(homeModule, App, Backbone) {
        this.startWithParent = false;


        this.test = function() {
            console.log('Home module default action');
        };
        this.addInitializer(function() {
            this.listenTo(App, 'homeModule:HELLO', function() {
                console.log('HomeModuleSay Hello');

                var view  = new TestView();
                App.content.show(view);
            });
            this.listenTo(App, 'homeModule:DEFAULT',function(){
                console.log('homeModule:DEFAULT');
                App.content.show(new Backbone.Marionette.View({
                    tagName: 'p'
                }));
            });
        });
        this.on('start', function() {
            console.log('Module : homeModule is starting...');
            Communicator.mediator.trigger('HOME_MODULE:START');
            this.isRunning = true;
        });

        this.on('stop', function() {
            console.log('Module : homeModule is stopping...');
            Communicator.mediator.trigger('HOME_MODULE:STOP');
            this.isRunning = false;
        });

    });


    return homeModule;

});