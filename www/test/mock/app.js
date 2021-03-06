// MOCK Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'welcome', 'messages', 'nearby', 'search', 'tabs', 'aboutMe', 'ngResource', 'ngMockE2E'])

		.run(function($ionicPlatform, $httpBackend) {
			$httpBackend.whenGET(/\/templates\//).passThrough();

			/*
			 * Mock data gets wired up to the back end here.
			 */
			createMockEndpoints($httpBackend);

			/*
			 * End mock data inclusion.
			 */

			$ionicPlatform.ready(function() {
				// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
				// for form inputs)
				if(window.cordova && window.cordova.plugins.Keyboard) {
					cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				}
				if(window.StatusBar) {
					// org.apache.cordova.statusbar required
					StatusBar.styleDefault();
				}
			});
		});

// MS: This is commented out for now because Angular was
// getting bootstrapped twice.
// TODO: Investigate for a true solution.
//angular.element(document).ready(function() {
//	if (window.cordova) {
//		document.addEventListener('deviceready', function() {
//			angular.bootstrap(document, ['starter']);
//		}, false);
//	} else {
//		angular.bootstrap(document, ['starter']);
//	}
//});