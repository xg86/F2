﻿define(['jasmine', 'F2'], function() {

	describe('F2Factory', function() {

		it('should be defined as an AMD module', function() {
			var F2Factory;

			// We have to require F2Factory the hard way
			require(['F2Factory'], function(Factory) {
				F2Factory = Factory;
			});

			waitsFor(function() {
				return F2Factory;
			}, DEFAULT_TIMEOUT);

			runs(function() {
				expect(F2Factory).toBeDefined();
			});
		});

		it('should create new instances of F2', function() {
			var F2Factory = require('F2Factory');
			var F2_1 = new F2Factory();
			var F2_2 = new F2Factory();

			expect(F2_1).not.toBe(F2_2);
		});

		it('should not allow changes to F2.prototype', function() {
			var F2Factory = require('F2Factory');

			// Try to null out the "guid" function
			F2Factory.prototype.guid = undefined;

			expect(new F2Factory().guid).toBeDefined();
		});

	});

});
