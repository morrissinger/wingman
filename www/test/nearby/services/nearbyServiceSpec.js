describe('nearbyService', function() {

	/*
	 *	(1) Make a place to store any services that we will use later
	 *      on in our tests
	 */
	var $httpBackend, nearbyService;

	beforeEach(function (done) {

		/*
		 * (2) Use ngMock to create a mock version of your module.
		 */
		angular.mock.module('starter');

		/*
		 * (3) Manually trigger dependency injection for each dependency.
		 *     Note: Pass in each dependency with a name that has an underscore
		 *     on each side. Angular knows to strip out underscores in order to
		 *     figure out which service to inject.
		 */
		inject(function (_$httpBackend_, _nearbyService_) {

			/*
			 * (4) Assign each injected service to one of the variables that you
			 *     created in Step (1).
			 */
			$httpBackend = _$httpBackend_;
			nearbyService = _nearbyService_;

			// Create mock backend
			createMockEndpoints($httpBackend);

			/*
			 * (5) Call done(), which was passed in to the function that you passed
			 *     to the beforeEach call.
			 */
			done();
		});

	});

	describe('getVenues Method', function () {
		it ('should exist', function (done) {
			expect(nearbyService.getVenues).to.exist;
			done();
		});

		it ('should throw an error if it is not passed a location', function(done) {
			var testFunction = function () {
				nearbyService.getVenues();
			};

			expect(testFunction).to.throw('No location provided');
			done();
		});
		it ('should return an array of venues', function (done) {
			var location = {};

			nearbyService.getVenues(location).success(function (data) {
				expect(data).to.be.like(mockData.nearby);
				done();
			}).error(function () {
				throw new Error('Backend returned an error. Expecting a successful response.');
			});
			$httpBackend.flush();
		});
	});
});
