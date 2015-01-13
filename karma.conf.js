// Karma configuration
// Generated on Sun Nov 09 2014 15:25:13 GMT-0500 (EST)
var _ = require('underscore');
var vendor = [
		'/www/lib/ionic/js/ionic.bundle.js',
		'/www/lib/ionic/js/angular/angular-resource.js',
		'/www/lib/ionic/js/angular/angular-mocks.js'
];

var scripts = [

		'/www/js/app.js',

		/** injector:karma:modules */
			'/www/modules/aboutMe/aboutMe.js',
			'/www/modules/messages/messages.js',
			'/www/modules/nearby/nearby.js',
			'/www/modules/search/search.js',
			'/www/modules/tabs/tabs.js',
			'/www/modules/welcome/welcome.js',
		/** endinjector:modules */

		/** injector:karma:submodules */
			'/www/modules/aboutMe/controllers/aboutMeCtrl.js',
			'/www/modules/messages/controllers/messagesCtrl.js',
			'/www/modules/nearby/controllers/nearbyCtrl.js',
			'/www/modules/search/controllers/searchCtrl.js',
			'/www/modules/welcome/controllers/addFriendsCtrl.js',
			'/www/modules/welcome/controllers/addPasswordCtrl.js',
			'/www/modules/welcome/controllers/frontCtrl.js',
			'/www/modules/welcome/controllers/recoverPasswordCtrl.js',
			'/www/modules/welcome/controllers/signInCtrl.js',
			'/www/modules/welcome/services/facebookFriendsService.js',
		/** endinjector:submodules */

];

function rewritePath(file) {
	if (file[0] === '/') {
		file = file.slice(1);
	}

	return file.replace('www/', '');
}
vendor = _.map(vendor, rewritePath);
scripts = _.map(scripts, rewritePath);

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'www/',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [].concat(
				vendor,
				['test/mock/backend.js'],
				[
					'test/vendor/sinon.js',
					'test/vendor/underscore.js',
					'test/vendor/chai.js',
					'test/vendor/chai-fuzzy.js',
					'test/vendor/chai-as-promised.js',
					'test/setup.js',
					'test/mock/fixtures.js'
				],
				scripts,
				['test/*/*Spec.js', 'test/*/*/*Spec.js']
		),


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
