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
    
    $("#btnLogo1").click(function(e){
        $.ajax({
            type:'GET',
            url: "api/home.php",
            crossDomain: true,
        }).success(function(result){
            $("#main").html(result);
        });
    });
    
    $("#btnLogo2").click(function(e){
        $.ajax({
            type:'GET',
            url: "api/home.php",
            crossDomain: true,
        }).success(function(result){
            $("#main").html(result);
        });
    });
    
    $("#login").click(function(e){
        $.ajax({
            type:'GET',
            url: "api/driverhomeheader.php",
            crossDomain: true,
        }).success(function(result){
            $("#header").html(result);
        });
        $.ajax({
            type:'GET',
            url: "api/driverhomebody.php",
            crossDomain: true,
        }).success(function(result){
            $("#main").html(result);
        });
    });
});