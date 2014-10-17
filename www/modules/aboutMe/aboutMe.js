angular.module('aboutMe', [])

		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
					.state('tab.aboutMe', {
						url: '/aboutMe',
						views: {
							'tab-aboutMe': {
								templateUrl: 'modules/aboutMe/templates/tab-aboutMe.html',
								controller: 'aboutMeCtrl'
							}
						}
					});

			$urlRouterProvider.otherwise('/tab/aboutMe');
		});
