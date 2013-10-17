// Karma configuration
// Generated on Mon Apr 01 2013 12:40:33 GMT-0500 (CDT)


function jsAssetTree(leafPath){
  return "app/assets/javascripts/" + leafPath + "/**/*.js"
};

module.exports = function(config){
  config.set({
    basePath: '../',
    frameworks: ["jasmine"],

    javascriptAssetRoot: "app/assets/javascripts/",
    // list of files / patterns to load in the browser
    files: [
      'jspec/components/jquery/jquery.js',
      'jspec/components/jasmine-given/dist/jasmine-given.js',
      'vendor/assets/javascripts/**/*.js',

      //mirroring the loading of files as they happen in the application.js file
      //will need to revisit this
      jsAssetTree("core"),
      jsAssetTree("movies"),
      'jspec/**/*_spec.js',
      {pattern: '**/*_spec.js', included: false}
    ],

    preprocessors:  {
      '**/*.coffee': 'coffee'
    },


    // list of files to exclude
    exclude:  [

    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit'
    reporters:  ['dots'],


    // web server port
    port:  9876,


    // cli runner port
    runnerPort: 9100,


    // enable / disable colors in the output (reporters and logs)
    colors:  true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel:  config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch:  false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers:  ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout:  60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun:  false
    });
};
