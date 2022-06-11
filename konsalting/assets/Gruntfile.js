module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Concatenate Configuration
		concat: {
			options: {
				separator: ';'
			},
			script: {
				src: [
					'dist/js/script.js'
				],
				dest: '../markup/js/script.min.js'
			}
		},

		// Uglify Configuration
		uglify: {
			dist: {
				files: {
					'../markup/js/jquery.min.js': ['dist/js/plugin/jquery.js'],
					'../markup/js/jquery.mask.min.js': ['dist/js/plugin/jquery.mask.js'],
					'../markup/js/jquery.fancybox.min.js': ['dist/js/plugin/jquery.fancybox.js'],
					'../markup/js/jcf.min.js': ['dist/js/plugin/jcf.js'],
					'../markup/js/jcf.radio.min.js': ['dist/js/plugin/jcf.radio.js'],
					'../markup/js/jcf.checkbox.min.js': ['dist/js/plugin/jcf.checkbox.js'],
					'../markup/js/jcf.select.min.js': ['dist/js/plugin/jcf.select.js'],
					'../markup/js/slick.min.js': ['dist/js/plugin/slick.js'],
					'../markup/js/fm.revealator.jquery.min.js': ['dist/js/plugin/fm.revealator.jquery.js'],
					'../markup/js/jquery.mCustomScrollbar.min.js': ['dist/js/plugin/jquery.mCustomScrollbar.js'],

					'../markup/js/script.min.js': ['dist/js/script.js'],
				}
			}
		},

		// Sass Configuration
		sass: {
			options: {
				loadPath: ['bower_components/foundation/foundation.scss']
			},
			dist: {
				options: {
					sourcemap: 'none',
					style: 'compressed'
				},
				files: [{
					expand: true,
					cwd: 'dist/scss/',
					src: ['*.scss'],
					dest: '../markup/css/',
					ext: '.css'
				}]
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 8', 'ie 9']	
			},
			files: {
				'../markup/css/*.css': '../markup/css/*.css'
			}
		},

		// postcss: {
		// 	options: {
		// 	  map: true,
		// 	  processors: [
		// 		require('autoprefixer')({browsers: ['last 2 version']})
		// 	  ]
		// 	},
		// 	dist: {
		// 	  src: 'dist/scss/*.scss'
		// 	}
		//   },

		

		// Watch Configuration
		watch: {
			grunt: { files: ['Gruntfile.js'], tasks: ['default'] },

			sass: {
				files: 'dist/scss/*.scss',
				tasks: ['buildCss']
			},

			script: {
				files: 'dist/js/*.js',
				tasks: ['buildJs']
			},

			markup: {
				files: '*.html',
				tasks: ['htmlbuild']
			}
		},

		fixturesPath: './',
		sourcesPath: '../markup',

		htmlbuild: {
			dist: {
				src: '*.html',
				dest: '<%= sourcesPath %>/templates/',
				options: {
					beautify: true,
					prefix: '../',
					relative: false,
					sections: {
						views: '<%= fixturesPath %>/*.html',
						templates: '<%= fixturesPath %>/*.html',
						layout: {
							footer: '<%= fixturesPath %>/templates/footer.html',
							header: '<%= fixturesPath %>/templates/header.html',
							popup: '<%= fixturesPath %>/templates/popup.html',
						}
					},
				}
			}
		}


	});

	// Load Grunt tasks
	// grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-html-build');

	// Register Grunt tasks
	grunt.registerTask('buildCss', ['sass','autoprefixer']);
	grunt.registerTask('buildJs', ['concat', 'uglify']);
	grunt.registerTask('default', ['buildCss', 'buildJs', 'watch', 'sass']);

}
