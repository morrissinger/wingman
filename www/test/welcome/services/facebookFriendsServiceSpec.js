describe('facebookFriendsService', function() {

	/*
	 *	(1) Make a place to store any services that we will use later
	 *      on in our tests
	 */
	var $httpBackend, $rootScope, facebookFriendsService;

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
		inject(function (_$httpBackend_, _$rootScope_, _facebookFriendsService_) {

			/*
			 * (4) Assign each injected service to one of the variables that you
			 *     created in Step (1).
			 */
			$httpBackend = _$httpBackend_;
			$rootScope = _$rootScope_;
			facebookFriendsService = _facebookFriendsService_;

			// Create mock backend
			createMockEndpoints($httpBackend);
			$httpBackend.whenGET(/\/templates\/.*?\.html/).respond('');
			/*
			 * (5) Call done(), which was passed in to the function that you passed
			 *     to the beforeEach call.
			 */
			done();
		});

	});

	describe('getUsers method', function () {
		it ('should exist', function (done) {
			expect(facebookFriendsService.getUsers).to.not.be.undefined;
			done();
		});

		it ('should return mock facebookFriends data', function(done) {
			$httpBackend.whenGET(/\/templates\//).respond('NO TEMPLATE');

			facebookFriendsService.getUsers().success(function (data) {
				expect(data).to.be.like(mockData.users.byFacebookID);
				done();
			})
			.error(function () {
				throw new Error('Backend returned an error. Expecting successful response.');
			});
			$httpBackend.flush();
		});
	});

	describe ('getFacebookFriends method', function () {
		it ('should exist', function (done) {
			expect(facebookFriendsService.getFacebookFriends).to.not.be.undefined;
			done();
		});
		it ('should throw an error when not passed a Facebook ID', function (done) {
			var testFunction = function() {
				facebookFriendsService.getFacebookFriends();
			};

			expect(testFunction).to.throw('Invalid Facebook ID');
			done();
		});
		it ('should return the mock data when passed a Facebook ID', function(done) {
			var aggregatedData = _(mockData.facebookFriends[1]).map(function (page) {
				return page.data;
			}).reduce(function (result, page) {
				result = result || [];
				return result.concat(page);
			});

			facebookFriendsService.getFacebookFriends('1').then(function (users) {
				expect(users).to.be.like(aggregatedData);
				done();
			});
			$httpBackend.flush();
		})
	});
	describe('addFriends method', function() {
		it ('should exist', function (done) {
			expect(facebookFriendsService.addFriends).to.not.be.undefined;
			done();
		});
		it ('should pass the same array that I give it back', function(done) {
			var friends = mockData.addedFriends;
			facebookFriendsService.addFriends(friends).then(function (response) {
				expect(response).to.be.like(friends);
				done();
			});
			$httpBackend.flush();
		});
		it ('should hit the back end with an array that includes friend', function(done) {
			var friends = mockData.addedFriends;
			$httpBackend.expectPOST('http://api.wingman.com/users/123/friends', friends);
			facebookFriendsService.addFriends(friends).then(function (response) {
				done();
			});
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.flush();
		});
	});
});
