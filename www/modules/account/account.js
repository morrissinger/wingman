angular.module('account', [])

		.config(function($stateProvider) {
			$stateProvider
					.state('tab.account', {
						url: '/account',
						views: {
							'tab-account': {
								templateUrl: 'modules/account/templates/tab-account.html',
								controller: 'AccountCtrl'
							}
						}
					});
		});