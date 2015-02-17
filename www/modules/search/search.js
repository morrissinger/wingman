angular.module('search', [])

		.config(function($stateProvider) {
			$stateProvider
					.state('tab.search', {
						url: '/search',
						abstract: true,
						views: {
							'tab-search': {
								templateUrl: 'modules/search/templates/tab-search.html',
								controller: 'searchCtrl'
							}
						}
					})
					.state('tab.search.list', {
						url: '/list',
						views: {
							'search-results': {
								templateUrl: 'modules/search/templates/search-list.html'
							}
						}
					})
					.state('tab.search.map', {
						url: '/map',
						views: {
							'search-results': {
								templateUrl: 'modules/search/templates/search-map.html'
							}
						}
					});
		});