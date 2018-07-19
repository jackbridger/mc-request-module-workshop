"use strict";

// This is the npm Request module that you are trying to emulated with `myRequest` below:
const request = require('request');

const myRequest = () => {
  /*
  create your own request module here.
  It should take a url to make a http GET request, and a callback function with three arguments;
  1. error (String: if an error occurred),
  2. response(Object; includes the response & statusCode of the request),
  3. body (String; includes the body of the request)
  */
}

// Helper function - do not change this code! This is the test to check your myRequest function works the same as the Request npm module. 
const testRequest = (module) => {
  module('http://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
  });
};

// Request module test
testRequest(request);

// myRequest module test
testRequest(myRequest);
