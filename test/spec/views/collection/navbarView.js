(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/navbarView',
        'backbone',
        'backbone.marionette'
		],
		function( Navbarview ,Backbone,Marionette) {

			describe('Navbarview Collectionview', function () {

				it('should be an instance of Navbarview Collectionview', function () {
					var navbarView = new Navbarview();
					expect( navbarView ).to.be.an.instanceof( Navbarview );
				});

				it('should have a collection passed as arguments', function(){
                    var navbarView = new Navbarview({
                        collection : new Backbone.Collection([{
                            name : "Home",
                            route : "#!/home"
                        },{
                            name : "Contact",
                            route : "#!/contact"
                        }])
                    });
					expect( navbarView.collection ).to.be.an.instanceof( Backbone.Collection );
                    assert.equal( 2,navbarView.collection.length);
				});
                it('should render the right amount of item views',function(){
                    var navbarView = new Navbarview({
                        collection : new Backbone.Collection([{
                            name : "Home",
                            route : "#!/home"
                        },{
                            name : "Contact",
                            route : "#!/contact"
                        }])
                    });
                    navbarView.render();
                    assert.equal(2,navbarView.$("li").size());
                });
			});

		});

}).call( this );