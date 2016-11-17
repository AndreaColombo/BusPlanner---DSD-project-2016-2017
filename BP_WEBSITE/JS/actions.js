/**loading modal -- spinner*/
$body = $("body");

$(document).on({
    ajaxStart: function() {
        $body.addClass("loading");    },
    ajaxStop: function() { $body.removeClass("loading"); }
});


$( document ).ready(function() {
    //loads home main
    $.ajax({
        type:'GET',
        url: "api/home.php",
        crossDomain: true,
    }).success(function(result){
        $("#main").html(result);
    });
    
    $( "body" ).on( "click", "#login",function(e){
        $.ajax({
            type:'GET',
            url: "api/login.php",
            crossDomain: true,
        }).success(function(result){
            $("#main").html(result);
        });
        window.location.hash = "login";
        e.preventDefault();
    });

    $( "body" ).on( "click", "#login2",function(e){
        $.ajax({
            type:'GET',
            url: "api/homeFleetManager.php",
            crossDomain: true,
        }).success(function(result){
            $("#main").html(result);
        });
        window.location.hash = "login";
        e.preventDefault();
    });
});