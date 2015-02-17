describe('searchCtrl', function() {

	var searchCtrl, $scope, $state;

	beforeEach(function (done) {

		angular.mock.module('starter');

		inject(function ($rootScope, $controller) {
			$scope = $rootScope.$new();
			$state = {
				current: {}
			};

			searchCtrl = $controller('searchCtrl', {
				$scope: $scope,
				$state: $state
			});

			done();
		});
	});


});