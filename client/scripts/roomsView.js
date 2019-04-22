var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
 
  initialize: function() {
    RoomsView.$button.on('click', function() {
      // Insert event to prompt user to add a room name that gets passed to the select dropdown via renderRoom function
      var newRoom = prompt('Please enter a room name');
      // Add room to container
      Rooms.add(newRoom);
    });

    // Need to update this
    RoomsView.$select.on('change', function() {
      Parse.readAll((data) => {

        var selectedRoom = $('select option:selected').text();

        console.log(selectedRoom);

        if (selectedRoom === 'Main Room') {
          MessagesView.initialize(); // Reinitialize all messages
        } else {
          // Filters messages containing the selected room name
          var messagesWithSelectedRoom = _.filter(data.results, function(message) { return message.roomname === selectedRoom; });

          MessagesView.$chats.empty();
        
          for (var i = 0; i < messagesWithSelectedRoom.length; i++) {
            MessagesView.renderMessage(messagesWithSelectedRoom[i]);
          }
        }
      });
    });
  },

  renderRoom: function(newRoom) {
    var $roomOption = $(`<option value ='room'>${newRoom}</option>`);
    RoomsView.$select.append($roomOption);
  }
};