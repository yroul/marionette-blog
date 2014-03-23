define([
	'backbone',
	'hbs!tmpl/item/navbarItem_tmpl'
],
function( Backbone, NavbaritemTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({
        tagName :'li',
        className: 'menuItem',
		initialize: function() {
			console.log("initialize a Navbaritem ItemView");
		},
		
    	template: NavbaritemTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {
            'click':'onClick'
        },
        onClick: function(e){
            this.trigger('navbarItemView:click',this);
        },

		/* on render callback */
		onRender: function() {}
	});

});
