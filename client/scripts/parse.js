var Parse = {

  server: 'http://parse.sfo.hackreactor.com/chatterbox/classes/messages',

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: Parse.server, // where the AJAX request is made 
      type: 'POST', // HTTP method used
      data: JSON.stringify(message), //
      contentType: 'application/json', // type of data returned from AJAX request
      success: successCB, // this callback will get called if the AJAX request was successful
      error: errorCB || function (data) { // this callback will get called if AJAX request fails
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};