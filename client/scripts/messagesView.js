var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll((data) => {
      MessagesView.render(data.results);
    });
  },
  render: function(arr) {
    for (var i = 0; i < arr.length; i++) {
      MessagesView.renderMessage(arr[i]);
    }
  },

  renderMessage: function(message) {
    
    // var html = "";
    //loop through data retrieved via ajax call
    if (!message['text']) {
      message['text'] = '';
    }
    if (!message['username']) {
      message['username'] = 'anonymous';
    }
    MessagesView.$chats.append(MessageView.render(message));
  },

};