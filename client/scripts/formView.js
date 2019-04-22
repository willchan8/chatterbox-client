var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
  // Stop the browser from submitting the form
    event.preventDefault();

    var message = {
      username: App.username, // username
      text: $('form #message').val(), // text
      roomname: $('#rooms select').val() || 'Room Test' // roomname
    };

    Parse.create(message, function() {
      MessagesView.renderNewMessage(message);
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};