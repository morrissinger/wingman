describe('sessionService', function () {

	var sessionService, sessionInterceptor, $window;

	beforeEach(function (done) {

		angular.mock.module('starter');

		inject(function (_sessionService_, _sessionInterceptor_, _$window_) {

			sessionService = _sessionService_;
			sessionInterceptor = _sessionInterceptor_;
			$window = _$window_;

			done();
		});
	});

	beforeEach(function (done) {
		$window.localStorage.removeItem('user');
		$window.localStorage.removeItem('token');
		done();
	});

	describe ('responseError method', function () {
		it ('exists', function (done) {
			expect(sessionInterceptor.responseError).to.exist;
			done();
		});
//		it ('adds the token to the request header, if the token is in localStorage', function (done) {
//			var signIn = {
//				email: 'user@example.com',
//				password: 'password'
//			};
//			sessionService.signIn(signIn.email, signIn.password).then(function (response) {
//
//				done();
//			});
//			$httpBackend.flush();
//
//		});
	});

});