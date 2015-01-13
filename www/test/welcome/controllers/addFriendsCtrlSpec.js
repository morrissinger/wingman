describe('addFriendsCtrl', function() {

	var $httpBackend, addFriendsCtrl, facebookFriendsService, $scope;

	beforeEach(function (done) {

		angular.mock.module('starter');

		inject(function ($rootScope, $controller, _$httpBackend_, _facebookFriendsService_) {
			$scope = $rootScope.$new();
			$httpBackend = _$httpBackend_;
			facebookFriendsService = _facebookFriendsService_;

			createMockEndpoints($httpBackend);

			addFriendsCtrl = $controller('addFriendsCtrl', {
				$scope: $scope,
				facebookFriends: mockData.users.byFacebookID
			});

			done();
		});
	});

	it('should add the friend data onto $scope', function (done) {
		expect($scope.friends).to.be.like(mockData.users.byFacebookID);
		done();
	});

	describe('addFriends', function() {

		it('exists', function(done) {
			expect($scope.addFriends).to.be.not.undefined;
			done();
		});
		it('returns a promise', function(done) {
			expect($scope.addFriends().then).to.be.not.undefined;
			done();
		});
		it('should call the addFriends method of the facebookFriendsService', function(done) {
			var friends = mockData.addedFriends;
			_.each($scope.friends, function (el) {
				if (_.findWhere(friends, {id: el.id})) {
					el.selected = true;
				}
			});

			sinon.spy(facebookFriendsService, "addFriends");
			$scope.addFriends().then(function () {
				expect(facebookFriendsService.addFriends.calledOnce).to.equal(true);
				expect(facebookFriendsService.addFriends.getCall(0).args[0]).to.be.like(friends);
				facebookFriendsService.addFriends.restore();
				done();
			});

			$httpBackend.flush();
		});
	});
});