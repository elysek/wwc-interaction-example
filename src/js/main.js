//PURE HTML
document.getElementById('show-message').addEventListener( 'click', function(){
  document.getElementById('display-message').innerHTML = document.getElementById('some-text').value;
});


//JQUERY
// $('#show-message').on('click', function(){
//   $('#display-message').html( $('#  some-text').val() );
// });

// $('#show-message').click( function(){
//   $('#display-message').html( $('#some-text').val() );
// });