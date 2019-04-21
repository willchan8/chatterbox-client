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
  },

  renderRoom: function(newRoom) {
    var $roomOption = $(`<option value ='room'>${newRoom}</option>`);
    RoomsView.$select.append($roomOption);
  }
};