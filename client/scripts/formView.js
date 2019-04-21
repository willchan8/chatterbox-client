var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit) 
      // Insert event to add username as friend
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
  event.preventDefault();

  var message = {
    username : App.username, // username

    text : $('form #message').val(), // text
  
    roomname : "lobby" // roomname
  }

  Parse.create(message);
    // console.log($(this).text());
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};