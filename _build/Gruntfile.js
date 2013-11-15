module.exports = function(grunt) {

    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({

        // This will load in our package.json file so we can have access
        // to the project name and version number.
        pkg: grunt.file.readJSON('package.json'),

        typescript: {
            base: {
                src: ['../ts/Man.ts'],
                dest: '../js/main.js',
                options: {
                    sourcemap: true,
                    declaration: false
                }
            }
        },

        uglify: {
            dist: {
                options: {
                    // Reference to the source map TypeScript created.
                    sourceMapIn: '../js/main.js.map',
                    // Creates our new source map after minifying.
                    sourceMap: '../js/main.min.map',
                    // The root folder where the TypeScript live.
                    sourceMapRoot: '../ts/'
                },
                files: {
                    '../js/main.min.js': ['../js/main.js']
                }
            }
        }

    });

    grunt.registerTask('default', ['typescript', 'uglify']);

};