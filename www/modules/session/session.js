angular.module('session', [])
		.config(function ($httpProvider) {
			$httpProvider.interceptors.push('sessionInterceptor');
		});