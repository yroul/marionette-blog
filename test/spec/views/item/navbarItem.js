(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/navbarItem'
		],
		function( Navbaritem ) {

			describe('Navbaritem Itemview', function () {

				it('should be an instance of Navbaritem Itemview', function () {
					var navbarItem = new Navbaritem();
					expect( navbarItem ).to.be.an.instanceof( Navbaritem );
				});


			});

		});

}).call( this );