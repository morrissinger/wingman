describe('nearbyCtrl', function() {

	var nearbyCtrl, $scope;

	beforeEach(function (done) {

		angular.mock.module('starter');

		inject(function ($rootScope, $controller, _$httpBackend_) {
			$scope = $rootScope.$new();
			$httpBackend = _$httpBackend_;

			createMockEndpoints($httpBackend);

			nearbyCtrl = $controller('nearbyCtrl', {
				$scope: $scope,
				venues: mockData.nearby
			});

			done();
		});
	});

    it('should add the decorated venues onto $scope', function (done) {
		var decoratedVenues = [];
		_.each(mockData.nearby, function (venue) {
			var decoratedVenue = _.clone(venue);
			$scope.decorate(decoratedVenue);
			decoratedVenues.push(decoratedVenue);
		});

		expect($scope.venues).to.be.like(decoratedVenues);
		done();
	});

	describe('decorate method', function () {
		it('exists', function (done) {
			expect($scope.decorate).to.exist;
			done();
		});

		it('throws an error if no venue is passed', function (done) {
			var testFunction = function () {
				$scope.decorate();
			};

			expect(testFunction).to.throw('No venue passed to venue decorator');
			done();
		});

		it('adds a single element to star-based rating when venue rating is 1', function (done) {
			var venue = {rating: 1};
			$scope.decorate(venue);
			expect(venue.stars).to.exist;
			expect(venue.stars.length).to.equal(1);
			done();
		});

		it('adds two elements to star-based rating when venue rating is 1.5', function (done) {
			var venue = {rating: 1.5};
			$scope.decorate(venue);
			expect(venue.stars).to.exist;
			expect(venue.stars.length).to.equal(2);
			done();
		});

		it('adds a full star to the star-based rating when the venue rating is 1', function (done) {
			var venue = {rating: 1};
			$scope.decorate(venue);
			expect(venue.stars).to.exist;
			expect(venue.stars[0]).to.equal(1);
			done();
		});

		it('adds a full star and a half star to the star-based rating when the venue rating is 1.5', function (done) {
			var venue = {rating: 1.5};
			$scope.decorate(venue);
			expect(venue.stars).to.exist;
			expect(venue.stars[0]).to.equal(1);
			expect(venue.stars[1]).to.equal(0.5);
			done();
		});
	});

});