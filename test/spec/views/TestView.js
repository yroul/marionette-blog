(function () {
	'use strict';

	var root = this;

	root.define([
			'views/TestView',
			'communicator'
		],
		function (Testview, Com) {

			describe('Testview View', function () {



				it('should be an instance of Testview View', function () {
					var TestView = new Testview({
						Communicator: Com
					});
					expect(TestView).to.be.an.instanceof(Testview);
				});

				it('should have more test written', function () {
					expect(true).to.be.ok;
					var callback = sinon.spy();
					callback();
					expect(callback.called).to.be.true;
				});
				it('should click on button and perform callback', function () {
					sinon.spy(Testview.prototype, 'onButtonClick');
					var TestView = new Testview({
						Communicator: Com
					});

					TestView.render();
					TestView.$('.dog').click();
					expect(TestView.onButtonClick.called).to.be.true;
					Testview.prototype.onButtonClick.restore();
				});
			});

		});

}).call(this);