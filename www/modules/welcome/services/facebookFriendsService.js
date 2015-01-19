angular.module('welcome')
		.factory('facebookFriendsService', function ($http, $q) {
			var service = {
				getUsers: function(facebookFriendIDs) {
					return $http.post('http://api.wingman.com/users/byFacebookID', facebookFriendIDs);
				},
				getFacebookFriends: function(facebookID) {
					if(typeof facebookID === 'undefined') {
						throw new Error('Invalid Facebook ID');
					}

					var getAllFriends = function getAllFriends(initialUrl) {
						var deferred = $q.defer();

						var allFriends = [];
						var getPage = function getPage(url) {
							$http.get(url)
									.success(function (data) {
										var friends = data.data,
											nextUrl = data.paging.next;

										if (friends.length > 0) {
											allFriends = allFriends.concat(friends);
											getPage(nextUrl);
										} else {
											deferred.resolve(allFriends);
										}
									})
									.error(function (err) {
										deferred.reject(err);
									});
						};

						getPage(initialUrl);

						return deferred.promise;
					};

					return getAllFriends('https://graph.facebook.com/v2.2/FACEBOOKID/friends');
				},
				addFriends: function(friends) {
					var deferred = $q.defer();
					$http.post('http://api.wingman.com/users/123/friends', friends)
							.success(function (data) {
								deferred.resolve(data);
							})
							.error(function (err) {
								deferred.reject(err);
							});
					return deferred.promise;
				}
			};
			return service;
		});