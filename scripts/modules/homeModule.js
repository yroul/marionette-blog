//WARNING : require another communicator(which IS NOT a singleton, may cause trigger to be loose)
//two or many communicators have no link between each other
//EDIT : Not sure about that
define(['application', 'communicator'], function(App, Communicator) {

    var homeModule = App.module("homeModule", function(homeModule, App, Backbone, Marionette, $, _) {
        this.startWithParent = false;
    });
    homeModule.addInitializer(function() {
        this.listenTo(App, 'homeModule:HELLO', function(args) {
            console.log('homemodule need to perform ' + args[0] + ' action with args ' + args[1]);
        });
    });
    homeModule.on("start", function(options) {
        console.log("Module : homeModule is starting...");
        Communicator.mediator.trigger("HOME_MODULE:START");
        this.isRunning = true;
    });
    homeModule.on("stop", function(options) {
        console.log("Module : homeModule is stopping...");
        Communicator.mediator.trigger("HOME_MODULE:STOP");
        this.isRunning = false;
    });

    return homeModule;

});