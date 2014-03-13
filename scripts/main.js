require([
        'backbone',
        'application',
        'regionManager'
    ],
    function(Backbone, App) {
        'use strict';

        require(['modules/homeModule','modules/navigationModule'],
            function() {
                App.start();
            });
    });