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

            var dispatch = function(module, action, args) {

                var module = module.toUpperCase(),
                    action = action.toUpperCase();

                if (args) {
                    console.log('Router : dispatch ("' + module + ':"' + action + ')', args);
                    ApplicationRouterController.prototype.trigger(module + ':' + action, args);

                } else {
                    console.log('Router : dispatch ("' + module + ':"' + action + ')');
                    ApplicationRouterController.prototype.trigger(module + ':' + action);
                }
            };
            return {
                initialize: function() {
                    //do some stuff

                },
                homeAction: function() {
                    dispatch('home', 'default');
                },
                homeHello: function(name) {
                    dispatch('home', 'hello', name);
                },
                blogAction: function() {
                    dispatch('blog', 'default');
                },
                contactAction: function() {
                    dispatch('contact', 'default');
                },
                onClose: function() {
                    // put custom code here, to close this controller
                }
            }

        })()
    );
    return ApplicationRouterController;


});