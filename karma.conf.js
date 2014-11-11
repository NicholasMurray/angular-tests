module.exports = function(config) {
  config.set({
    basePath: '',
    autoWatch: true,
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
        'js/angular.js',
        'js/ui-bootstrap.js',
        'js/angular-mocks.js',
        'app/app.js',
        'app/*.js',
        'tests/*.js'
    ],

    //browsers: ['PhantomJS'],
    browsers: ['Chrome'],

    reporters: ['progress', 'coverage'],
    preprocessors: { 'app/*.js': ['coverage'] },

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    singleRun: true
  });
};