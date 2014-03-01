define([
    'backbone',
    'backbone.marionette',
], function(Backbone, Marionette) {

    var ApplicationRouterController = Marionette.Controller.extend({
        initialize: function() {
            //do some stuff
        },
        homeAction: function() {
            console.log('trigger HOME')
            this.trigger('HOME_ACTION');
        },
        blogAction: function() {
            console.log('trigger BLOG')
            this.trigger('BLOG_ACTION');
        },
        contactAction: function() {
            this.trigger('CONTACT_ACTION');
        },
        onClose: function() {
            // put custom code here, to close this controller
        }
    });
    return ApplicationRouterController;


});