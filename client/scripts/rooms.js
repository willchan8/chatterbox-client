var Rooms = {

  roomsContainer: {},

  add: function(roomName) {
    Rooms.roomsContainer[roomName] = roomName;
    RoomsView.renderRoom(roomName);
  }
};