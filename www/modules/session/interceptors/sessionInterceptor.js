angular.module('session')

		.factory('sessionInterceptor', function ($q, $window, $injector) {
			var service = {
				responseError: function (rejection) {
					if (rejection.status === 401) {
						$window.localStorage.removeItem('token');
						$window.localStorage.removeItem('user');

						var $http = $injector.get('$http');
						delete $http.defaults.headers.common['x-access-token'];
					}

					return $q.reject(rejection);
				}
			};

			return service;
		});
