require([
        'backbone',
        'application',
        'regionManager'
    ],
    function(Backbone, App) {
        'use strict';

        require(['modules/homeModule'],
            function() {
                App.start();
            });
    });