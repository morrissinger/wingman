angular.module('dashboard', [])

		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
					.state('tab.dash', {
						url: '/dash',
						views: {
							'tab-dash': {
								templateUrl: 'modules/dashboard/templates/tab-dash.html',
								controller: 'DashCtrl'
							}
						}
					});

			$urlRouterProvider.otherwise('/tab/dash');
		});
