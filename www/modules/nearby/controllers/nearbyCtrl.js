(function () {

	var addStars = function(venue) {
		var length = Math.round(venue.rating),
				containsHalfStar = (venue.rating === Math.round(venue.rating)) ? false : true;

		venue.stars = new Array(length);
		venue.stars = _.map(venue.stars, function (star) {
			return 1;
		});

		if (containsHalfStar) {
			venue.stars[length - 1] = 0.5;
		}

	}

	angular.module('nearby')
			.controller('nearbyCtrl', function($scope, $state, venues) {

				$scope.decorate = function (venue) {
					if (typeof venue === 'undefined') {
						throw new Error('No venue passed to venue decorator');
					}

					addStars(venue);
				};

				$scope.venues = venues;
				_.each($scope.venues, function (venue) {
					$scope.decorate(venue);
				});

			});

})();