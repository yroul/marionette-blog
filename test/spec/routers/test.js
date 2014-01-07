(function () {
    'use strict';

    var root = this;

    root.define([
            'routers/test'
        ],
        function (Test) {

            describe('Test Router', function () {

                it('should be an instance of Test Router', function () {
                    var test = new Test();
                    expect(test).to.be.an.instanceof(Test);
                });

                it('should have more test written', function () {
                    expect(true).to.be.ok;
                });
            });

        });

}).call(this);