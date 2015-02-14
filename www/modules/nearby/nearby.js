angular.module('nearby', [])
		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
					.state('tab.nearby', {
						url: '/nearby',
						views: {
							'tab-nearby': {
								templateUrl: 'modules/nearby/templates/tab-nearby.html',
								controller: 'nearbyCtrl',
								resolve: {
									venues: function ($q, nearbyService) {
										var deferred = $q.defer();

										// TODO: Pass an actual location via ngCordova's geolocation service.
										var location = {longitude: 123, latitude: 456};
										nearbyService.getVenues(location).success(function (data) {
											deferred.resolve(data);
										});

										return deferred.promise;
									}
								}
							}
						}
					})
					.state('tab.venueDetails', {
						url: '/venue',
						views: {
							'tab-nearby': {
								templateUrl: 'modules/nearby/templates/venue.html'
							}
						}
					});

			$urlRouterProvider.otherwise('/tab/nearby');
		});
