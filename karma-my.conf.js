var angularFiles = require(__dirname + '/angularFiles.js');

// console.log('angularFiles', angularFiles)
files = angularFiles.mergeFiles(JASMINE, JASMINE_ADAPTER, 'jstdModules', 'angularSrcModules', 'jstdJquery', 'angularSrc', 'angularTest');
exclude = ['**/*jasmine*/**', '**/*jstd*/**'];

autoWatch = true;
logLevel = LOG_INFO;
logColors = true;
browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/modules.xml',
  suite: 'modules'
};
