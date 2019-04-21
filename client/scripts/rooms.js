var Rooms = {

    // render: _.template(`
    // <option><%- room %></option>
    // `),
    render: function (val) {
        var $newRoom = $(`<option value ='room'>${val}</option>`);
        RoomsView.$select.append($newRoom);
    },

    add : function(roomname){
        // send created room to the server
        console.log(roomname);
    },
};