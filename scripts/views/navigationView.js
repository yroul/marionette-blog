define([
	'backbone'
],
function(Backbone){
    'use strict';

	return Backbone.Marionette.CollectionView.extend(

        (function() {
            //private
            var menuEntry = [
                {
                    name : "Home",
                    route : "#!/home"
                },{
                    name : "Contact",
                    route : "#!/contact"
            }];
            //public
            return {
                tagName : "nav",
                initialize: function() {
                    console.log("initialize a Navigationview View");
                }
            };
        })()
    );
});
