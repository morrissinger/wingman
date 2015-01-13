angular.module('welcome')
		.controller('addFriendsCtrl', function ($scope, $q, facebookFriends, facebookFriendsService) {
			$scope.friends = facebookFriends;

			$scope.addFriends = function() {

				var selectedFriends = _.filter($scope.friends, function (el) {
					if (typeof el.selected === 'undefined') {
						return false;
					}
					return el.selected;
				});

				return facebookFriendsService.addFriends(selectedFriends).then(function () {
					alert('Your friends were added!');
				});
			};
		});