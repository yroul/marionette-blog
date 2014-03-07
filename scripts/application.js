define([
        'backbone',
        'communicator',
        'routers/applicationRouter'
    ],

    function(Backbone, Communicator, AppRouter) {
        'use strict';

        //---------------------------------------------- MAIN APP--------------------------------------
        var App = new Backbone.Marionette.Application();


        /* Add application regions here */
        App.addRegions({
            // test: "#test",
            // test2 : "#test2"
        });

        /* Add initializers here */
        App.addInitializer(function() {

            // to try : define the router like a an App.attribute
            //like this, inside submodule, i can access to the router...
            //in module : 
            //listenTo(parent.appRouter.controller,'eventname',doSomething(){});
            //but is it usefull ?
            //warning of memory leak if event stay binded ?

            var appRouter = new AppRouter();

            this.listenTo(appRouter.controller, "HOME_ACTION", function() {
                if (this.currentModule instanceof Backbone.Marionette.Module) {
                    console.log('stop current module');
                    this.currentModule.stop();
                }
                App.homeModule.start();
                this.currentModule = App.homeModule;
            });
            this.listenTo(appRouter.controller, "BLOG_ACTION", function() {
                if (this.currentModule instanceof Backbone.Marionette.Module) {
                    console.log('stop current module');
                    this.currentModule.stop();
                }

                console.log('we should now start blog module');
                // App.homeModule.start();
                // this.currentModule = App.homeModule;
            });

        });
        App.on("start", function() {
            console.log("Application starting...");
            Communicator.mediator.trigger("APP:START");

            Backbone.history.start();

        });




        return App;
    });