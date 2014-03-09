define([
    'backbone',
    'controllers/appRouterController'
], function(Backbone, Controller) {


    var MyRouter = Backbone.Marionette.AppRouter.extend({
        initialize: function() {},
        controller: new Controller,
        appRoutes: {
            '!/home': 'homeAction',
            '!/home/say/:word/:name': 'homeHello',
            '!/blog': 'blogAction',
            '!/contact': 'contactAction',
        }
    });
    return MyRouter;


});