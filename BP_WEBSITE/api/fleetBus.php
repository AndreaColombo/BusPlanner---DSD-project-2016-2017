<?php
header("Access-Control-Allow-Origin: *");
?>

<div class = "intestation" id="intestation">
    <div class = "row" >
        <div class="col-md-6 col-sm-6 col-xs-6" >
            <h3 id = "titleIntestation" >Bus Management</h3>
            <h4 id = "minimalDescription">
                Here you can add, remove, or modify our buses
            </h4>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-6">
            <img src = "../Images/modifyBuses.jpg" class = "intestationImages"  >
        </div>
    </div>
</div>

<div>
    <div class="row">
        
        <!--Bus list from database, button to add a bus -->
        <div class="col-md-6 col-sm-6 col-xs-6" id="busList">
        <script>
        $(document).ready( function(){
            
            document.getElementById('firebaseui-auth-container').classList.add('hide');
            document.getElementById('map').classList.add('hide');
            document.getElementById('Login').classList.remove('hide');
            document.getElementById('list').classList.remove('hide');
  
            var ref = firebase.database().ref("Login");
            var busList = document.getElementById('busList');
            
            ref.once("value")
            .then(function(snapshot) {
                var name = snapshot.child("Login1").val(); // { first: "Ada", last: "Lovelace"}
                console.log(name);
	           var Login_id = snapshot.child("Login1").child("Login_id").val(); // "Ada"
	           busList.value += '\n'+ Login_id;
	           var Password = snapshot.child("Login1").child("Password").val(); // "Lovelace"
	           busList.value += '\n'+ Password;
	           var User_name = snapshot.child("Login1").child("User_name").val();
               busList.value += '\n'+ User_name;
	           var User_type_id= snapshot.child("Login1").child("User_type_id").val();
	           busList.value += '\n'+ User_type_id;
            });
        });
        </script>
        
            
        </div>
        
        
        <!-- Map with the location of all the bus -->
        <div class="col-md-6 col-sm-6 col-xs-6">
        </div>
    </div>
</div>