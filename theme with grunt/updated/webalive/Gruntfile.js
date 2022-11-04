'use strict';
module.exports = function( grunt ) {
    var pkg = grunt.file.readJSON( 'package.json' );
    grunt.initConfig({

        // Setting folder templates
        dirs: {
            dist: 'assets/dist/',
            source: 'assets/source/',
        },

        // Minify all css files
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                sourceMap: true,
            },
            target: {
                files: {
                    '<%= dirs.dist %>/css/theme.min.css': [
                        '<%= dirs.source %>/css/theme.css',
                        '<%= dirs.source %>/css/elements.css',
                        '<%= dirs.source %>/css/woocommerce.css',
                        '<%= dirs.source %>/css/responsive.css',
                    ],
                    '<%= dirs.dist %>/css/bootstrap.min.css': '<%= dirs.source %>/css/bootstrap.min.css',
                }
            }
        },

        // Convert in to modern javascript
        babel: {
            options: {
                // sourceMap: true,
                presets: ['@babel/preset-env']
            },
            dist: {
                files: {
                    '<%= dirs.dist %>js/navigation.js': '<%= dirs.source %>js/navigation.js',
                    '<%= dirs.dist %>js/skip-link-focus-fix.js': '<%= dirs.source %>js/skip-link-focus-fix.js',
                    '<%= dirs.dist %>js/theme.js': '<%= dirs.source %>js/theme.js',
                }
            }
        },

        // Minify all js files
        uglify: {
            options: {
                mangle: false,
                sourceMap: true
            },
            my_target: {
                files: {
                    '<%= dirs.dist %>/js/libs.min.js': [
                        '<%= dirs.source %>/js/libs/popper.min.js',
                        '<%= dirs.source %>/js/libs/bootstrap.min.js',
                    ],
                    '<%= dirs.dist %>/js/theme.min.js': [
                        '<%= dirs.dist %>/js/navigation.js',
                        '<%= dirs.dist %>/js/skip-link-focus-fix.js',
                        '<%= dirs.dist %>/js/theme.js',
                    ],
                }
            }
        },

        // Watch & Reload
        watch: {
            css: {
                files: [
                    '<%= dirs.source %>/css/**/*.css',
                ],
                tasks: ['cssmin'],
                options: {
                    livereload: 35729
                }
            },
            scripts: {
                files: [
                    '<%= dirs.source %>/js/*.js',
                ],
                tasks: ['babel', 'uglify'],
                options: {
                    livereload: 35729
                }
            },
            php : {
                files: ['**/*.php'],
                options: {
                    livereload: 35729
                }
            }
        },

        // Generate POT files.
        makepot: {
            target: {
                options: {
                    domainPath: '/languages/', // Where to save the POT file.
                    potFilename: 'theme.pot', // Name of the POT file.
                    type: 'wp-theme', // Type of project (wp-plugin or wp-theme).
                    potHeaders: {
                        'report-msgid-bugs-to': 'https://example.com.au',
                        'language-team': 'LANGUAGE <EMAIL@ADDRESS>'
                    }
                }
            }
        },

        // Generate Text Domain
        addtextdomain: {
            options: {
                textdomain: 'webalive-test',
                updateDomains: ['webalive']
            },
            target: {
                files: {
                    src: [
                        '*.php',
                        '**/*.php',
                        '!node_modules/**',
                        '!tests/**'
                    ]
                }
            }
        },

        // Clean up build directory
        clean: {
            main: ['build/']
        },

        // Copy the plugin into the build directory
        copy: {
            main: {
                files: [
                    {
                        src: [
                            '**',
                            '!node_modules/**',
                            '!build/**',
                            '!bin/**',
                            '!.git/**',
                            '!Gruntfile.js',
                            '!package.json',
                            '!debug.log',
                            '!phpunit.xml',
                            '!.gitignore',
                            '!.gitmodules',
                            '!npm-debug.log',
                            '!assets/less/**',
                            '!tests/**',
                            '!**/Gruntfile.js',
                            '!**/package.json',
                            '!**/package-lock.json',
                            '!**/README.md',
                            '!**/export.sh',
                            '!**/*~'
                        ],
                        dest: 'build/'
                    }
                ]
            }
        },

        //Compress build directory into <name>.zip and <name>-<version>.zip
        compress: {
            main: {
                options: {
                    mode: 'zip',
                    archive: './build/theme-'+ pkg.version + '.zip'
                },
                expand: true,
                cwd: 'build/',
                src: ['**/*'],
                dest: 'theme'
            }
        },
    });

    // Load NPM tasks to be used here
    grunt.loadNpmTasks( 'grunt-wp-i18n' );
    grunt.loadNpmTasks( 'grunt-contrib-clean' );
    grunt.loadNpmTasks( 'grunt-contrib-copy' );
    grunt.loadNpmTasks( 'grunt-contrib-compress' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-babel' );

    grunt.registerTask( 'default', [
        'minifycss', 'babel', 'minifyjs', 'watch'
    ]);

    grunt.registerTask( 'minifycss', [
        'cssmin'
    ]);

    grunt.registerTask( 'minifyjs', [
        'uglify'
    ]);

    grunt.registerTask('release', [
        'makepot',
    ]);

    grunt.registerTask( 'textdomain', [
        'addtextdomain'
    ]);

    grunt.registerTask( 'zip', [
        'clean',
        'uglify',
        'cssmin',
        'copy',
        'compress'
    ])
};