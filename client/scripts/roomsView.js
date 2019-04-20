var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', function() {
      // Insert event to prompt user to add a room name that gets passed to the select dropdown
      alert('clicked');
    });
  },

  render: function() {
  },
  
  // renderRoom function
  renderRoom: function(room) {
    RoomsView.$select.append($(`<div>${room}</div>`));
  }
};
