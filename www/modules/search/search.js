angular.module('search', [])

		.config(function($stateProvider) {
			$stateProvider
					.state('tab.search', {
						url: '/search',
						views: {
							'tab-search': {
								templateUrl: 'modules/search/templates/tab-search.html',
								controller: 'searchCtrl'
							}
						}
					});
		});