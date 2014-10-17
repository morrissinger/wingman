angular.module('friends')

		.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
			$scope.friend = Friends.get($stateParams.friendId);
		});