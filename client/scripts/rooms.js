var Rooms = {

    render: _.template(`
    <option><%- room %></option>
    `),

    add : function(roomname){
        // send created room to the server
        console.log(roomname);
    },
};