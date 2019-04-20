var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', function(event) {
      // Insert event
    });
  },

  render: function() {
  },
  
  // renderRoom function
  renderRoom: function(room) {
    RoomsView.$select.append($(`<div>${room}</div>`));
  }
};
