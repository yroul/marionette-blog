define([
    'backbone',
    'hbs!tmpl/TestView2Tmpl_tmpl'
],
function(Backbone,Template){
    'use strict';

    return Backbone.Marionette.ItemView.extend({
        initialize: function(options) {
            this.Communicator = options.Communicator
            this.Communicator.mediator.on("APP:START",function(){
                console.log("TestView heard about an application starting...")
            });
        },
        template : Template({
            helloWorld : "YOan"
        }),
        ui : {
            "cat": ".dog"
        },
        events : {
            "click .dog" : "onButtonClick"
        },
        onButtonClick : function(){
            console.log(this.Communicator.mediator.trigger("CLICK"));
        },
        onRender: function () {
              //         console.log("testview render");
                       
            this.Communicator.mediator.trigger("TEST");
                },
    });
});
