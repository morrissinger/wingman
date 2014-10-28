angular.module('signIn', [])

		.config(function($stateProvider) {
			$stateProvider
					.state('signIn', {
						url: '/signIn',
						templateUrl: 'modules/signIn/templates/signIn.html',
						controller: 'signInCtrl'
					})
					.state('newAccount', {
						url: '/newAccount',
						abstract: true,
						templateUrl: 'modules/signIn/templates/newAccount.html'
					})
					.state('newAccount.addPassword', {
						url: '/addPassword',
						views: {
							addAccount: {
								templateUrl: 'modules/signIn/templates/addPassword.html',
								controller: 'addPasswordCtrl'
							}
						}
					})
					.state('newAccount.addFriends', {
						url: '/addFriends',
						views: {
							addAccount: {
								templateUrl: 'modules/signIn/templates/addFriends.html',
								controller: 'addFriendsCtrl'
							}
						}
					})
		});
