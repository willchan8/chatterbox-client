var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    /* This initialize function runs which retrieves data from server and passes the 
    data.results array into the MessagesView.render callback */
    Parse.readAll((data) => {
      MessagesView.render(data); // Invoke the render function on the data object
      // $('.username').on('click', function() {
      //   alert('hello');
      // })
    });
  },
  
  render: function(data) {
    // Iterate through the array of objects (used ES6 for...of method), rendering each message onto the DOM 
    for (let msgObj of data.results) {
      MessagesView.renderMessage(msgObj);
    }
  },

  renderMessage: function(message) {
    // If the message obj contains a username and text, append the message onto the DOM (see messageView.JS)
    if (message.username && message.text) {
      var html = $(MessageView.render(message));
      MessagesView.$chats.append(html);

      html.find('.username').on('click', function() {
        Friends.toggleStatus($(this).text());
      });
    }
  },

};