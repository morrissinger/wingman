angular.module('signIn', [])

		.config(function($stateProvider) {
			$stateProvider
					.state('signIn', {
						url: '/signIn',
						templateUrl: 'modules/signIn/templates/signIn.html',
						controller: 'signInCtrl'
					});
		});
