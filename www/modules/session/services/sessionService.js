angular.module('session')

		.factory('sessionService', function ($http, $window) {

			var service = {
				signIn: function (email, password) {

					if (typeof email === 'undefined') {
						throw new Error('No email address provided');
					}

					if (typeof password === 'undefined') {
						throw new Error('No password provided');
					}

					var logIn = {email: email, password: password};
					return $http.post('http://api.wingman.com/signin', logIn)
							.then(function (response) {
								var token = response.data['x-access-token'],
									user = response.data.user || {};

								$window.localStorage.setItem('token', token);
								$window.localStorage.setItem('user', JSON.stringify(user));

								$http.defaults.headers.common['x-access-token'] = token;

								return response;
							});
				},
				currentUser: function () {
					var user = $window.localStorage.getItem('user') || '{}';
					return JSON.parse(user);
				},
				signOut: function () {
					$window.localStorage.removeItem('token');
					$window.localStorage.removeItem('user');
					delete $http.defaults.headers.common['x-access-token'];
				}
			};

			return service;

		});