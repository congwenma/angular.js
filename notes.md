# To run tests
Need to patch this issue

```
[2018-03-09 06:06:09.205] [DEBUG] config - autoWatch set to false, because of singleRun
/Users/congwen.ma/dev/source/angular.js/node_modules/policyfile/lib/server.js:254
Object.keys(process.EventEmitter.prototype).forEach(function proxy (key){
                                ^

TypeError: Cannot read property 'prototype' of undefined
```

by updating `process.EventEmitter` to `require('events')`

