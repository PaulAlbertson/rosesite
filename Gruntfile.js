module.exports = function(grunt){
	
	'use strict'
	grunt.initConfig({
		// Set the configs for grunt
		pkg: grunt.file.readJSON('package.json'),
		// Set the source and target directories for grunt
		dirs: {
      top: '/',
			src: './src',
			dest: './target'
		},
    // Execute shell commands
    // shell: {
    //   target: {
    //     command: [
    //       'cd src/careers/',
    //       'rm -Rf sitemap.xml',
    //       'php sitemap.php',
    //       'cd ../../'
    //     ].join('&&')
    //   }
    // },
    scripts: '<%= dirs.dest %>/site/snippets/scripts.php',
		// Clean the target directory
		clean: {
			dist: {
				src: ['<%= dirs.dest %>/']
			}
		},
    // Sync files from src to target
    sync: {
      dev: {
        files: [{
          cwd: '<%= dirs.src %>',
          src: ['**', '.*'],
          dest: '<%= dirs.dest %>'
        }],
        // Run log of sync?
        verbose: false
      },
      dist: {
        files: [{
          cwd: '<%= dirs.src %>',
          src: ['**', '.*', '!assets/scss/**'],
          dest: '<%= dirs.dest %>'
        }],
      }
    },
    //Set up Compass scss compiler
    compass: {
      // Dev build script
      dev: {
        options: {
          bundleExec: true,
          config: 'conf/config.rb',
          environment: 'development',
          outputStyle: 'expanded'
        }
      },
      // Production build script
      dist: {
        options: {
          bundleExec: true, 
          config: 'conf/config.rb',
          environment: 'production'
        }
        // Stub to fill in
      }
    },
    fileblocks: {
      dist: {
        src: '<%= scripts %>',
        blocks: {
          reload: {
            removeBlock: true
          }
        }
      }

    },
    // Usemin to minify, uglify etc
    useminPrepare: {
      html: '<%= scripts %>',
      options: {
        dest: '<%= dirs.dest %>',
        root: '<%= dirs.src %>',
        flow: {
          steps: {
            js: ['concat', 'uglifyjs']
          },
          post: {
            js: [{
              name: 'uglify',
              createConfig: function (context, block) {
                var generated = context.options.generated;
                if (!generated.options) generated.options = {}
                if (!generated.options.compress) generated.options.compress = {}
                generated.options.compress.drop_console = true;
              }
            }]
          }
        }
      }
    },
    usemin: {
      html: '<%= scripts %>',
    },
    //Javascript hint
    jshint: {
      files: ['<%= dirs.src %>/assets/js/src/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    // SASS linter
    scsslint: {
      dist: ['<%= dirs.src %>/assets/scss/**/*.scss', '!<%= dirs.src %>/assets/scss/_animate.scss'],
      options: {
        bundleExec: true,
        config: '.scss-lint.yml',
        compact: true,
        colorizeOutput: true
      }
    },
    watch: {
      sync: {
        files: ['<%= dirs.src %>/site/templates/**', '<%= dirs.src %>/site/snippets/**', '<%= dirs.src %>/site/config/**','<%= dirs.src %>/content/**','<%= dirs.src %>/assets/**', '!<%= dirs.src %>/assets/scss/**/*.scss'
        //, '<%= dirs.src %>/careers/**'
        ], // ! .coffee, or whatever else
        tasks: ['jshint', 'sync:dev']
      },
      compass: {
        files: ['<%= dirs.src %>/assets/scss/**/*'],
        tasks: ['scsslint', 'compass:dev']
      },
      livereload: {
        options: { livereload : true },
        files: ['<%= dirs.src %>/site/templates/**', '<%= dirs.src %>/site/snippets/**', '<%= dirs.src %>/site/config/**','<%= dirs.src %>/content/**','<%= dirs.src %>/assets/**', 
        //'<%= dirs.src %>/careers/**'
        ]
      }
    }

	});

  // load all tasks declared in devDependencies
  Object.keys(require('./package.json').devDependencies).forEach(function (dep) {
    if (dep.substring(0, 6) === 'grunt-') {
      grunt.loadNpmTasks(dep);
    }
  });

	grunt.registerTask('dev',['clean','sync:dev','jshint', 'scsslint', 'compass:dev']);

  // Still working on the default build script
  grunt.registerTask('default',['clean','sync:dist','jshint', 'scsslint','compass:dist','fileblocks:dist', 'useminPrepare', 'concat', 'uglify', 'usemin']);

}