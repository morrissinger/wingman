angular.module('welcome')
		.controller('addFriendsCtrl', function ($scope, facebookFriendsService) {

			/**
			 * Steps to finish:
			 * (0) Create a new service that instantiates a new resource using $resource.
			 * (1) Inject the new resource into the addFriendsCtrl controller.
			 * (2) Remove hard-coded data from $scope.friends.
			 * (3) Use the newly-injected resource to retrieve data from the back end.
			 * (4) Add that data from the back end onto $scope.friends.
			 */

			$scope.friends = [
				{
					id: 0,
					firstName: 'Jeff',
					lastName: 'Ljungquist',
					avatar: 'http://localhost:8100/test/mock/img/jeffLjungquist.jpg'
				},
				{
					id: 1,
					firstName: 'Robert',
					lastName: 'Beal',
					avatar: 'http://localhost:8100/test/mock/img/robertBeal.jpg'
				},
				{
					id: 2,
					firstName: 'Chris',
					lastName: 'Bell',
					avatar: 'http://localhost:8100/test/mock/img/chrisBell.jpg'
				},
				{
					id: 3,
					firstName: 'Kennebelle',
					lastName: 'DeLuca',
					avatar: 'http://localhost:8100/test/mock/img/kennebelleDeLuca.jpg'
				},
				{
					id: 4,
					firstName: 'Josephine',
					lastName: 'Aquino',
					avatar: 'http://localhost:8100/test/mock/img/josephineAquino.jpg'
				},
				{
					id: 5,
					firstName: 'Rochelle',
					lastName: 'Seinfeld',
					avatar: 'http://localhost:8100/test/mock/img/rochelleSeinfeld.jpg'
				}
			];
		});