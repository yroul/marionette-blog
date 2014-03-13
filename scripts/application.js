define([
        'backbone',
        'communicator',
        'routers/applicationRouter'
    ],

    function(Backbone, Communicator, AppRouter) {
        'use strict';

        //---------------------------------------------- MAIN APP--------------------------------------
        var App = new Backbone.Marionette.Application({
            iDontKnowHowToCallIt: function(module, action, args) {


                if (this.currentModule instanceof Backbone.Marionette.Module) {
                    if (this.currentModule !== this[module]) {
                        console.log('stop current module');
                        this.currentModule.stop();
                        this[module].start();
                        this.currentModule = this[module];
                    } else {
                        console.log("module " + module + " already running")
                    }

                } else {
                    console.log('startModule');
                    this[module].start();
                    this.currentModule = App.homeModule;
                }
                console.log("app trigger =>"+'homeModule:' + action, args);
                this.trigger('homeModule:' + action, args);
            }
        });



        /* Add application regions here */
        App.addRegions({
            testRegion: "#test",
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


            this.listenTo(appRouter.controller, "DISPATCH", function(eventArgs) {
                var module = eventArgs[0],
                    action = eventArgs[1],
                    args = eventArgs[2];



                switch (module) {
                    case 'HOME':
                        this.iDontKnowHowToCallIt("homeModule", action, args);
                        break;
                    default:
                        throw 'Error : uknow module ' + module;
                        break;
                }



            });






            // this.listenTo(appRouter.controller, "HOME_ACTION", function() {

            //     if (this.currentModule instanceof Backbone.Marionette.Module) {
            //         if (this.currentModule !== App.homeModule) {
            //             console.log('stop current module');
            //             this.currentModule.stop();
            //             App.homeModule.start();
            //         } else {
            //             console.log('Home module is already running');
            //         }

            //     } else {
            //         App.homeModule.start();
            //     }

            //     this.currentModule = App.homeModule;
            // });

            // this.listenTo(appRouter.controller, "HOME:HELLO", function(args) {
            //     console.log(args)
            //     if (this.currentModule instanceof Backbone.Marionette.Module) {
            //         if (this.currentModule !== App.homeModule) {
            //             console.log('stop current module');
            //             this.currentModule.stop();
            //             App.homeModule.start();
            //         } else {
            //             console.log('Home module is already running');
            //         }

            //     } else {
            //         App.homeModule.start();
            //     }

            //     this.currentModule = App.homeModule;
            // });


            // this.listenTo(appRouter.controller, "BLOG_ACTION", function() {
            //     console.log(this.currentModule)
            //     if (this.currentModule instanceof Backbone.Marionette.Module) {
            //         console.log('stop current module');
            //         this.currentModule.stop();
            //     }
            //     this.currentModule = undefined;
            //     console.log('we should now start blog module');
            //     // App.homeModule.start();
            //     // this.currentModule = App.homeModule;
            // });

        });
        App.on("start", function() {
            console.log("Application starting...");
            Communicator.mediator.trigger("APP:START");

            Backbone.history.start();

        });




        return App;
    });