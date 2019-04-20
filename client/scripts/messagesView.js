var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    App.fetch(function(data){
      for (var key in data) {
        MessagesView.renderMessages(data);
      });
  },

  renderMessages: function(data) {

    var html = "";
    //loop through data retrieved via ajax call
    for (var i = 0; i < data.results.length; i++) {
      html = MessageView.render(data.results[i]);
      $("#chats").append(html);
    }  
  },

};