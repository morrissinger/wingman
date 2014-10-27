module.exports = function(grunt) {

	var indexInjections = {
		options: {
			destFile: 'www/index.html',
			starttag: '    <!-- injector:modules -->',
			endtag: '    <!-- endinjector:modules -->',
			transform: function (file, i, length) {
				return '<script src="' + file.replace('/www/', '') + '"></script>';
			}
		},
		src: [
			'www/modules/*/*.js'
		]
	};

	var indexSubInjections = {
		options: {
			destFile: 'www/index.html',
			starttag: '    <!-- injector:subs -->',
			endtag: '    <!-- endinjector:subs -->',
			transform: function (file, i, length) {
				return '<script src="' + file.replace('/www/', '') + '"></script>';
			}
		},
		src: [
			'www/modules/*/*/*.js'
		]
	};

	var mockInjections = {
		options: {
			destFile: 'www/mock.html',
			starttag: '    <!-- injector:modules -->',
			endtag: '    <!-- endinjector:modules -->',
			transform: function (file, i, length) {
				return '<script src="' + file.replace('/www/', '') + '"></script>';
			}
		},
		src: [
			'www/modules/*/*.js'
		]
	};

	var mockSubInjections = {
		options: {
			destFile: 'www/mock.html',
			starttag: '    <!-- injector:subs -->',
			endtag: '    <!-- endinjector:subs -->',
			transform: function (file, i, length) {
				return '<script src="' + file.replace('/www/', '') + '"></script>';
			}
		},
		src: [
			'www/modules/*/*/*.js'
		]
	};

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		injector: {
			indexInjections: indexInjections,
			indexSubInjections: indexSubInjections,
			mockInjections: mockInjections,
			mockSubInjections: mockSubInjections//,
//			karma: {
//				options: {
//					transform: function (file) {
//						return "			'" + file + "',";
//					},
//					starttag: '			/** injector:js */',
//					endtag: '			/** endinjector */',
//					destFile: 'karma.conf.js'
//				},
//				src: [
//					'assets/modules/**/*Module.js',
//					'assets/modules/**/**/*.js'
//				]
//			}
		},
		watch: {
			scripts: {
				files: ['www/modules/**/*.js', 'www/modules/**/**/*.js'],
				tasks: ['injections']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadNpmTasks('grunt-injector');

	grunt.registerTask('injections', ['injector:indexInjections', 'injector:indexSubInjections', 'injector:mockInjections', 'injector:mockSubInjections']);

	// Default task(s).
	grunt.registerTask('default', []);

};