angular.module('tabs', [])

		.config(function($stateProvider) {
			$stateProvider
					.state('tab', {
						url: "/tab",
						abstract: true,
						templateUrl: "modules/tabs/templates/tabs.html"
					});
		});