define([
		'backbone',
		'communicator',
		'hbs!tmpl/welcome',
		'views/TestView',
		'views/Test2View'
	],

	function(Backbone, Communicator, Welcome_tmpl, TestView,Test2View) {
		'use strict';

		var welcomeTmpl = Welcome_tmpl,
			App = new Backbone.Marionette.Application();


		/* Add application regions here */
		App.addRegions({
			test: "#test",
			test2 : "#test2"
		});

		/* Add initializers here */
		App.addInitializer(function() {
			//document.body.innerHTML = welcomeTmpl({ success: "CONGRATS!" });
			var test = new TestView({
				Communicator: Communicator
			});

			App.test.show(test);


		});
		App.on("start", function() {
			console.log("App trigger start");
			Communicator.mediator.trigger("APP:START");

			Communicator.mediator.on("CLICK",function(){
				if(App.module('LoginModule').isRunning){
					App.module('LoginModule').stop();
				}else{
					App.module('LoginModule').start();
				}
			});
		});




		var testModule = App.module("LoginModule", function() {
			this.startWithParent = false;
		});
		testModule.addInitializer(function() {
			console.log("initialize testmodule")
		});
		testModule.on("start", function(options) {
			console.log("start module");
			this.isRunning = true;
			var test = new Test2View({
				Communicator: Communicator
			});

			App.test.show(test);
		});
		testModule.on("stop", function(options) {
			console.log("stop module");
			App.test2.close();
			this.isRunning = false;
		});

		return App;
	});