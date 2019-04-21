var Friends = {
  
  friendsContainer: {},

  toggleStatus: function(friend) {
    // toggles username status
    Friends.friendsContainer[friend] = (!Friends.friendsContainer[friend] ? true : false);
  }

};