//create firebase reference
var dbRef = firebase.database();
dbRef.auth().signInAnonymously()
.then(function() {
   console.log('Logged in as Anonymous!')
   }).catch(function(error) {
   var errorCode = error.code;
   var errorMessage = error.message;
   console.log(errorCode);
   console.log(errorMessage);
});
 

var contactsRef = dbRef.child('Login');

//load older conatcts as well as any newly added one...
contactsRef.on("child_added", function(snap) {
  console.log("added", snap.key(), snap.val());
  $('#Login').append(contactHtmlFromObject(snap.val()));
});

//save contact
$('.addValue').on("click", function( event ) {  
    event.preventDefault();
    if( $('#name').val() != '' || $('#email').val() != '' ){
      contactsRef
        .push({
          name: $('#name').val(),
          email: $('#email').val(),
          location: {
            city: $('#city').val(),
            state: $('#state').val(),
            zip: $('#zip').val()
          }
        })
        contactForm.reset();
    } else {
      alert('Please fill atlease name or email!');
    }
  });

//prepare conatct object's HTML
function contactHtmlFromObject(Login){
  console.log( Login );
  var html = '';
  html += '<li class="list-group-item Login">';
    html += '<div>';
      html += '<p class="lead">'+Login.id+'</p>';
      html += '<p>'+Login.icona+'</p>';
      html += '<p><small title="'
                +Login.Login1.Login_id+'">'
                +Login.location.city
                +', '
                +Login.location.state
                +'</small></p>';
    html += '</div>';
  html += '</li>';
  return html;
}