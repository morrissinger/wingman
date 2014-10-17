angular.module('nearby', [])

		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
					.state('tab.nearby', {
						url: '/nearby',
						views: {
							'tab-nearby': {
								templateUrl: 'modules/nearby/templates/tab-nearby.html',
								controller: 'nearbyCtrl'
							}
						}
					});

			$urlRouterProvider.otherwise('/tab/nearby');
		});
