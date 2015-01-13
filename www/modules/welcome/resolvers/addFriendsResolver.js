angular.module('welcome')
		.factory('addFriendsResolver', function ($q, facebookFriendsService) {
			var deferred = $q.defer();

			facebookFriendsService.getFacebookFriends('fakeFacebookID')
					.then(facebookFriendsService.getUsers)
					.then(function (response) {
						deferred.resolve(response.data);
					})
					.catch(function (err) {
						deferred.reject(err);
					});

			return deferred.promise;
		});
