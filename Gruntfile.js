    module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'scss/**/*.scss',
            tasks: ['sass']
        },
        sass: {
            dist: {
                options:{
                    trace:true
                },
                files: {
                    'css/build.css': 'scss/base.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./",
                        index: "index.html"
                    }
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
    };