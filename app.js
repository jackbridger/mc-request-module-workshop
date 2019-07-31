const http = require('http');

"use strict";

const myRequest = (url, cb) => {
  http.get(url, res => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if(statusCode !== 200) {
      error = new Error('Request failed. \n Status code: ', statusCode);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error('Invalid content type.\n. Expected app/json but received: ', contentType);
    }

    if(error) {
      console.error(error.message);
      res.resume();
      return;
    }
  });
};

module.exports = myRequest;

/*
  create your own request module here.
  It should take a url to make a http GET request, and a callback function with two arguments;
  1. error (String: if an error occurred),
  2. response(Object; includes the body & statusCode of the request)
  */
