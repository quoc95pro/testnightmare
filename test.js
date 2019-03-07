var Nightmare = require('nightmare');

var google = new Nightmare()
  .goto('http://google.com')
  .evaluate(function() {
    return document.querySelector('#SIvCob a')
      .href;
  })
  //run the queue of commands specified, followed by logging the HREF
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error){
    console.error('an error has occurred: ' + error);
  });