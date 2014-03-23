(function() {
	'use strict';

	var root = this;

	root.define([
		'views/navigationView'
		],
		function( Navigationview ) {

			describe('Navigationview View', function () {

				it('should be an instance of Navigationview View', function () {
					var navigationView = new Navigationview();
					expect( navigationView ).to.be.an.instanceof( Navigationview );
				});

				/*it('should have more test written', function(){
					expect( false ).to.be.ok;
				});*/
			});

		});

}).call( this );