module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	clean: ['build'],
	jshint:{
		build: {
        src: 'src/*.js'        
      }
	},
    uglify: {
      options: {
      },
      build: {
		files:{
			'build/just-me.min.js':['src/just-me.js'],
			'build/just-named.min.js':['src/just-named.js'],
			'build/collapse-all.min.js':['src/collapse-all.js'],
			'build/expand-all.min.js':['src/expand-all.js']
			}
      }
    },
	js2uri: {
		'build/just-me.js':['build/just-me.min.js'],
		'build/just-named.js':['build/just-named.min.js'],
		'build/collapse-all.js':['build/collapse-all.min.js'],
		'build/expand-all.js':['build/expand-all.min.js']
	},
	assemble: {
		options: {			
			partials: ['build/*.js']
		},
		bookmarks: {
			files: {
				'bookmarks.html': ['src/bookmarks.html']
			}
		}
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('js2uri');
  // Default task(s).
  grunt.registerTask('default', ['clean','jshint','uglify','js2uri','assemble']);

};