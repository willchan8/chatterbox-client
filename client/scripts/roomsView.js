var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
 
  initialize: function() {
    RoomsView.$button.on('click', function() {
      // Insert event to prompt user to add a room name that gets passed to the select dropdown
      var roomname = prompt("Please enter a room name");
      
      Rooms.render(roomname);
      

    });
  },

  render: function() {
  },
  
  // renderRoom function
  renderRoom: function(room) {
    console.log('room is', room);
    // let html = $(Rooms.render(room))
    // var html = Rooms.render(room) 
    console.log('html',html)
    // RoomsView.$select.append((Rooms.render(room)));
  }
};


// var html = $(MessageView.render(message));
// MessagesView.$chats.append(html);