angular.module('welcome', [])

		.config(function($stateProvider) {
			$stateProvider
					.state('front', {
						url: '/front',
						templateUrl: 'modules/welcome/templates/front.html',
						controller: 'frontCtrl'
					})
					.state('welcome', {
						url: '/welcome',
						abstract: true,
						templateUrl: 'modules/welcome/templates/welcome.html'
					})
					.state('welcome.addPassword', {
						url: '/addPassword',
						views: {
							welcome: {
								templateUrl: 'modules/welcome/templates/addPassword.html',
								controller: 'addPasswordCtrl'
							}
						}
					})
					.state('welcome.addFriends', {
						url: '/addFriends',
						views: {
							welcome: {
								templateUrl: 'modules/welcome/templates/addFriends.html',
								controller: 'addFriendsCtrl',
								resolve: {
									facebookFriends: 'addFriendsResolver'
								}
							}
						}
					})
					.state('welcome.signIn', {
						url: '/signIn',
						views: {
							welcome: {
								templateUrl: 'modules/welcome/templates/signIn.html',
								controller: 'signInCtrl'
							}
						}
					})
					.state('welcome.recoverPassword', {
						url: '/recoverPassword',
						views: {
							welcome: {
								templateUrl: 'modules/welcome/templates/recoverPassword.html',
								controller: 'recoverPasswordCtrl'
							}
						}
					});
		});
