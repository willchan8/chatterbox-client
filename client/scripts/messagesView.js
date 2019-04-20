var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    /* This initialize function runs which retrieves data from server and passes the 
    data.results array into the MessagesView.render callback */
    Parse.readAll((data) => {
      MessagesView.render(data.results);
    });

  },
  
  render: function(dataArray) {
    // Iterate through the array of objects (used ES6 for...of method), rendering each message onto the DOM 
    for (let msgObj of dataArray) {
      MessagesView.renderMessage(msgObj);
    }
  },

  renderMessage: function(message) {
    // If the message obj contains a username and text, append the message onto the DOM (see messageView.JS)
    if (message.username && message.text) {
      MessagesView.$chats.append(MessageView.render(message));
    }
  },

};