define([
	'backbone',
	'backbone.marionette'
],
function( Backbone ) {
    'use strict';

    var instance = null;

	var Communicator = Backbone.Marionette.Controller.extend({
		initialize: function( options ) {
			console.log("initialize a Communicator");

			// create a pub sub
			this.mediator = new Backbone.Wreqr.EventAggregator();

			//create a req/res
			this.reqres = new Backbone.Wreqr.RequestResponse();

			// create commands
			this.command = new Backbone.Wreqr.Commands();
		}
	});
    if(instance === null){
        instance = new Communicator();
    }

	return instance;
});
