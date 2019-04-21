var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', function() {
      // Insert event to prompt user to add a room name that gets passed to the select dropdown
      var roomname = prompt("Please enter a room name");
      RoomsView.renderRoom(roomname);
      console.log('roomname is', roomname);
    });
  },

  render: function() {
  },
  
  // renderRoom function
  renderRoom: function(room) {
    console.log('room is', room);
    var html = $(Rooms.render(room))
    RoomsView.$select.append($(html));
  }
};


// var html = $(MessageView.render(message));
// MessagesView.$chats.append(html);