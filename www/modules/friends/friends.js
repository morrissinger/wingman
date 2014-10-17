angular.module('friends', [])

		.config(function($stateProvider) {
			$stateProvider
					.state('tab.friends', {
						url: '/friends',
						views: {
							'tab-friends': {
								templateUrl: 'modules/friends/templates/tab-friends.html',
								controller: 'FriendsCtrl'
							}
						}
					})
					.state('tab.friend-detail', {
						url: '/friend/:friendId',
						views: {
							'tab-friends': {
								templateUrl: 'modules/friends/templates/friend-detail.html',
								controller: 'FriendDetailCtrl'
							}
						}
					});
		});