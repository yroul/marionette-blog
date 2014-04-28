define([
	'backbone',
	'views/item/navbarItem'
],
function( Backbone, Navbaritem  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.CollectionView.extend(

        (function(){


            //public
            return {
                tagName: 'ul',
                className: 'list-unstyled list-inline',

                initialize: function(opts) {
                    console.log('initialize a Navbarview CollectionView');
                    if(opts && opts.collection) {
                        this.collection = opts.collection;
                    }
                },

                itemView: Navbaritem,


                /* ui selector cache */
                ui: {},

                /* Ui events hash */
                events: {},

                /* on render callback */
                onRender: function() {},

                onAfterItemAdded: function(itemView){
                    this.listenTo(itemView,'navbarItemView:click',this.onItemViewClick);
                },
                onItemViewClick: function(itemView){
                    this.$('.menuItem.active').removeClass('active');
                    itemView.$el.addClass('active');
                }
            };
        })()

	);

});
