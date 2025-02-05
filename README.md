# Morning challenge - Build a request module
This week in your project you will be making API calls from the backend. In the past few weeks you have been making API calls from the frontend with the XMLHttpRequest object and methods. Now that you are in the backend we would like you to learn how to make similar requests using the Node core [http module](https://nodejs.org/api/http.html). This workshop is intended to familiarise you with how backend requests are made, and practice using callbacks.

### Learning outcome
To become familiar with making API calls from the backend using the Node core [http module](https://nodejs.org/api/http.html).

### When would I need to make an API call from the backend?
Example 1 - I want to avoid Cross Origin Resource Sharing [(CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) - you may have come across this in API week

Example 2 - I would like to make a request to an API that requires an API key to use - I want to keep this key secret so I can't make a request from the frontend

### The challenge

Create a function called `myRequest` which makes a request to an API url using an http GET request.

It should take two arguments: the url to make the request to, and a callback function.

The callback function should take two arguments:

  1. error (null if no error occurred; an error object if an error occurred)
  2. response (Object: includes the body & statusCode of the request)
      <details>
      <summary>Click if you're stuck</summary>

      **Hint**:  One way to do this is to pass on the response object from the API directly, or you may want to construct this object yourself.
      </details>

**Hint**: relate to your knowledge of streams and sending data in chunks.

To complete this challenge you will need to use the [`http.get`](https://nodejs.org/api/http.html#http_http_get_options_callback) method of the node core `http` module.

### Start here!
1) Clone this repo & run `npm install`
2) Run `npm test` in your command line to start the test watcher. The tests should fail as your function doesn't do anything yet
3) Open `app.js` and write your function!

### Bonus round
Most modern APIs will use https protocol.
Try using your function with this url (http://jsonplaceholder.typicode.com/users/1) and console logging in the callback function.
<details>
<summary>Example</summary>

``` javascript
const consoleLoggingCallback = (error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log({ body: response.body, statusCode: response.statusCode });
  }
};

myRequest("http://jsonplaceholder.typicode.com/users/1", consoleLoggingCallback);
```

</details>

If you try again using the Pokemon API (https://pokeapi.co/api/v2/pokemon/squirtle), you'll see that using an API url which starts with `https` will error.

Alter your `myRequest` function to check which protocol the url is using (http or https) and use the appropriate Node core module. You will need to require `https`. You can test this by uncommenting the second test in `app.test.js`.
