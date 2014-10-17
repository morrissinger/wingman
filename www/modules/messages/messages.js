angular.module('messages', [])

		.config(function($stateProvider) {
			$stateProvider
					.state('tab.messages', {
						url: '/messages',
						views: {
							'tab-messages': {
								templateUrl: 'modules/messages/templates/tab-messages.html',
								controller: 'messagesCtrl'
							}
						}
					});
		});