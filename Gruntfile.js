// Project configuration.


module.exports = function(grunt) {

    grunt.initConfig({
      connect: {
        server: {
          options: {
            hostname: 'localhost',
            port: 8080,
            keepalive: true
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
