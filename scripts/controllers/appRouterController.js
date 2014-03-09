define([
    'backbone',
    'backbone.marionette',
], function(Backbone, Marionette) {

    var ApplicationRouterController = Marionette.Controller.extend(
        (function() {

            /**
             * Dispatch
             * @param  {String} module target module
             * @param  {String} action action name
             * @param  Array args
             */

            var dispatch = function(instance, module, action, args) {

                var module = module.toUpperCase(),
                    action = action.toUpperCase();

                if (args) {
                    instance.trigger("DISPATCH", [module, action, args]);

                } else {
                    instance.trigger("DISPATCH", [module, action]);
                }
            };
            return {
                initialize: function() {
                    //do some stuff

                },
                homeAction: function() {
                    dispatch(this, 'home', 'default');
                },
                homeHello: function(word, name) {
                    dispatch(this, 'home', 'hello', [word, name]);
                },
                blogAction: function() {
                    dispatch(this, 'blog', 'default');
                },
                contactAction: function() {
                    dispatch(this, 'contact', 'default');
                },
                onClose: function() {
                    // put custom code here, to close this controller
                }
            }

        })()
    );
    return ApplicationRouterController;


});