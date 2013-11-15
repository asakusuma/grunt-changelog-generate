/*
 * grunt-auto-changelog
 * https://github.com/asakusuma/changelog-test
 *
 * Copyright (c) 2013 asakusuma
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  console.log('The module!');

  grunt.registerMultiTask('auto_changelog', 'The best Grunt plugin ever.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });
    console.log(this.files);
    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.

        var content = grunt.file.read(filepath);

        grunt.file.write(filepath, content + ' - Asa is awesome');

        return content;
      });
    });
  });

};
