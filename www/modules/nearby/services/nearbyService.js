angular.module('nearby')
		.factory('nearbyService', function ($http) {

			var service = {
				getVenues: function (location) {
					if (typeof location === 'undefined') {
						throw new Error('No location provided');
					}

					return $http({
						url: 'http://api.wingman.com/nearby',
						method: "GET",
						params: {longitude: location.longitude, latitude: location.latitude}
					});
				}
			};
			return service;
		});