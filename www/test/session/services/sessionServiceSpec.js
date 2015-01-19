describe('sessionService', function () {

	var sessionService, $httpBackend, $window, $http;

	beforeEach(function (done) {

		angular.mock.module('starter');

		inject(function (_sessionService_, _$httpBackend_, _$window_, _$http_) {

			sessionService = _sessionService_;
			$httpBackend = _$httpBackend_;
			$window = _$window_;
			$http = _$http_;

			createMockEndpoints($httpBackend);

			done();
		});
	});

	beforeEach(function (done) {
		$window.localStorage.removeItem('user');
		$window.localStorage.removeItem('token');
		done();
	});

	describe('signIn method', function() {
		it ('should exist', function (done) {
			expect(sessionService.signIn).to.not.be.undefined;
			done();
		});
		it ('should throw an error if there is no email address provided', function (done) {
			var testFunction = function () {
				sessionService.signIn();
			};

			expect(testFunction).to.throw('No email address provided');
			done();
		});
		it ('should throw an error if there is no password provided', function (done) {
			var testFunction = function () {
				sessionService.signIn('user@example.com');
			};

			expect(testFunction).to.throw('No password provided');
			done();
		});
		it ('should hit back end with email address and password', function (done) {
			var signIn = {
				email: 'user@example.com',
				password: 'password'
			};
			$httpBackend.expectPOST('http://api.wingman.com/signin', signIn);
			sessionService.signIn(signIn.email, signIn.password).then(function (response) {
				done();
			});
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.flush();
		});
		it ('should store the token in localStorage', function (done) {
			var signIn = {
				email: 'user@example.com',
				password: 'password'
			};
			sessionService.signIn(signIn.email, signIn.password).then(function (response) {
				var token = response.data['x-access-token'];
				expect($window.localStorage.getItem('token')).to.equal(token);
				done();
			});
			$httpBackend.flush();
		});
		it ('should store the user in localStorage', function (done) {
			var signIn = {
				email: 'user@example.com',
				password: 'password'
			};
			sessionService.signIn(signIn.email, signIn.password).then(function (response) {
				var user = response.data['user'];
				var storedUser = JSON.parse($window.localStorage.getItem('user'));
				expect(storedUser).to.be.like(user);
				done();
			});
			$httpBackend.flush();
		});
		it ('adds the token to the $http default headers', function (done) {
			var signIn = {
				email: 'user@example.com',
				password: 'password'
			};
			sessionService.signIn(signIn.email, signIn.password).then(function (response) {
				expect(Object.keys($http.defaults.headers.common)).to.include('x-access-token');
				expect($http.defaults.headers.common['x-access-token']).to.equal(response.data['x-access-token']);
				done();
			});
			$httpBackend.flush();
		});
	});

	describe('current user method', function () {
		it ('exists', function (done) {
			expect(sessionService.currentUser).to.exist;
			done();
		});
		it ('gets an empty object if there is no current user', function (done) {
			expect(sessionService.currentUser()).to.be.like({});
			done();
		});
		it ('gets the current user if there is a current user', function (done) {
			var signIn = {
				email: 'user@example.com',
				password: 'password'
			};
			sessionService.signIn(signIn.email, signIn.password).then(function (response) {
				expect(sessionService.currentUser()).to.be.like(response.data.user);
				done();
			});
			$httpBackend.flush();
		});

	});
	describe('sign out method', function () {
		it ('exists', function (done) {
			expect(sessionService.signOut).to.exist;
			done();
		});
		it ('removes the current user information and token from localStorage', function (done) {
			var signIn = {
				email: 'user@example.com',
				password: 'password'
			};
			sessionService.signIn(signIn.email, signIn.password).then(function (response) {
				sessionService.signOut();
				expect($window.localStorage.getItem('token')).to.be.null;
				expect($window.localStorage.getItem('user')).to.be.null;
				done();
			});
			$httpBackend.flush();
		});
		it ('removes the token and user from localStorage', function (done) {
			$window.localStorage.setItem('token', 'myFakeToken');
			$window.localStorage.setItem('user', JSON.stringify({id: 123}));

			$http.get('accessDenied').catch(function () {
				expect($window.localStorage.getItem('token')).to.be.null;
				expect($window.localStorage.getItem('user')).to.be.null;
				done();
			});

			$httpBackend.flush();
		});

		it ('removes the x-access-token from the default $http headers', function (done) {
			$http.defaults.headers.common['x-access-token'] = 'token';

			$http.get('accessDenied').catch(function () {
				expect(Object.keys($http.defaults.headers.common)).to.not.include('x-access-token');
				done();
			});

			$httpBackend.flush();
		});
	});
});