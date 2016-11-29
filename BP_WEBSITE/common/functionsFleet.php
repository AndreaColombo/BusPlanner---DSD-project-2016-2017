<?php
/**
 * Created by PhpStorm.
 * User: Redevil
 * Date: 28/11/16
 * Time: 17:39
 */
function getBusFromDatabase() {
    var query = firebase.database().ref("Bus").orderByKey();
    query.once("value")
    .then(function(snapshot){
        snapshot.forEach(function(childSnaphot){
            var key = childSnaphot.key;
            var childData = childSnaphot.val();
            return childData;
            console.log(childData);
            });
        });
    }



?>