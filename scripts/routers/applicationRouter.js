define([
    'backbone',
    'controllers/appRouterController'
], function(Backbone, Controller) {


    var MyRouter = Backbone.Marionette.AppRouter.extend({
        initialize: function() {},
        controller: new Controller,
        appRoutes: {
            "!/home/": "homeAction",
            "!/blog/": "blogAction",
            "!/contact/": "contactAction",
        }
    });
    return MyRouter;


});