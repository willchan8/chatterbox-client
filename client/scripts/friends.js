var Friends = {
  
  friendsContainer: {},

  // Adds friends to container and toggles true and false
  toggleStatus: function(friend) {
    Friends.friendsContainer[friend.text()] = (!Friends.friendsContainer[friend.text()] ? true : false);

    if (Friends.friendsContainer[friend.text()] === true) {
      friend.parent().addClass('friend');
    } else {
      friend.parent().removeClass('friend');
    }
  }
};