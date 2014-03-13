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
                    this.currentModule = this[module];
                }
                console.log("app trigger =>"+'homeModule:' + action, args);
                this.trigger(this[module]+':' + action, args);
            }
        });



        /* Add application regions here */
        App.addRegions({
            navigation : "#navigation",
            content : "#content",
            footer : "#footer"
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
            this.listenTo(Communicator.mediator,"CLICK",function(){
                console.log('Application heard about click on test view. Communicator is working fine...');
            });

        });
        App.on("start", function() {
            console.log("Application starting...");
            Communicator.mediator.trigger("APP:START");

            Backbone.history.start();

        });




        return App;
    });