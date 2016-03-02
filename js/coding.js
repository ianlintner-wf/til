$(document).ready(function(){
  $.getJSON('http://codeivate.com/users/ianlintner.json?callback=?',
    function data(data) {
      var programming_now_message;

      $('#programming-name').html(data.name);

      if(data.programming_now) {
        programming_now_message = "Is writing ";
        programming_now_message += data.current_language + ".";
        programming_now_message += ' right now';
        if(data.streaking_now) {
          programming_now_message += " He is in the zone!";
        }
      } else {
        programming_now_message = "Is not programming :(";
      }
      $('#programming-message').html(programming_now_message);

    });

});