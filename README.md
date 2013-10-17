# Interview

## Running JavaScript Tests

### Setup

JavaScript tests are run using the [karma test runner][1] by
Google. To get started:

* Install [PhantomJS][2]
* Install karma
  - npm install -g karma
* Install bower
  - npm install -g bower
* Install the local copies of the js requirement
  - cd jspec
  - bower install

    
### Running

* karma start jspec/karma.conf.js

  karma start jspec/karma.conf.js
  INFO [karma]: Karma server started at http://localhost:9876/
  INFO [launcher]: Starting browser PhantomJS
  INFO [PhantomJS 1.8 (Mac)]: Connected on socket id WT8wEr49DmRqo-on3ka3

* karm run 

  PhantomJS 1.8 (Mac): Executed 4 of 4 SUCCESS (0.183 secs / 0.013 secs)
    

[1]:http://karma-runner.github.com/ 
[2]:http://phantomjs.org/