function header() {
    var r = '';
    r+='<nav class="navbar navbar-default">';
    r+='<div class="container-fluid" style="min-height:70px">';
    r+='<div class="navbar-header">';
    r+='<a class="navbar-brand" href="#"><img alt="Brand" style="max-height:40px" src="Images/BusLogo.gif"></a>';
    r+='<a class="navbar-brand" style="padding-top:25px" href="#">BusPlanner</a>';
    r+='</div>';
    r+='</div>';
    r+='</nav>';
    return r;
}

function home() {
    var r='';
    // Users
        r+='<div class="row">';
            r+='<div class="col-md-6 col-sm-6 col-xs-6">';
                r+='<div class="row">';
                    r+='<div class="col-md-1 col-sm-1 col-xs-1"></div>';
                    r+='<a href="#" id="btnUser" class="col-md-11 col-sm-11 col-xs-11 ">';
                        r+='<div class="jumbotron grow" style="background-image: url(Images/Users.png); border: 1px solid black; height: 500px;" align= "center">';
                            r+='<h1 id="imageText">Users</h1>';
                            
                        r+='</div>';
                    r+='</a>';
                r+='</div>';
            r+='</div>';
            
       // Fleet managers and bus drivers     
            r+='<div class="col-md-6 col-sm-6 col-xs-6">';
                r+='<div class="row">';
                    r+='<a href="#" id="btnFleetAndDriver" class="col-md-11 col-sm-11 col-xs-11">';
                        r+='<div class="jumbotron grow" style="background-image: url(Images/FleetDriver.png); border: 1px solid black; height: 500px;" align= "center">';
                            r+='<h1 id="imageText">Fleet managers <br> & Bus drivers</h1>';
                        r+='</div>';
                    r+='</a>';
                    r+='<div class="col-md-1 col-sm-1 col-xs-1"></div>';
                r+='</div>';
            r+='</div>';
        r+='</div>';
    return r;
}

function headerUser() {
    var r='';
    r+='<nav class="navbar navbar-default">';
            r+='<div class="container-fluid" style="min-height:70px">';
                r+='<div class="navbar-header">';
                    r+='<a class="navbar-brand" href="#" id="btnLogo1User"><img alt="Brand" style="max-height:40px" src="Images/BusLogo.gif"></a>';
                    r+='<a class="navbar-brand" style="padding-top:25px" href="#" id="btnLogo2User">BusPlanner</a>';
                r+='</div>';
                r+='<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
                    r+='<ul class="nav navbar-nav navbar-right">';
    /*
                        r+='<li><a id="btnMap" href="#" style="padding-top:25px">MAP</a></li>';
                        r+='<li><a id="btnRead" href="#" style="padding-top:25px">Read JSON</a></li>';
		                r+='<li><a id="btnWrite" href="#" style="padding-top:25px">Write JSON</a></li>';
                        r+='<li><a id="signup" href="#" style="padding-top:25px">Sign up</a></li>';
                        r+='<li><a id="btnLogin" href="#" style="padding-top:25px">Log in</a></li>';
                        */
                    r+='</ul>';
                r+='</div>';
            r+='</div>';
        r+='</nav>';
    return r;
}

function mainUser() {
    var r = '';
    r+='<div class="content" id="content">';
    r+='<div class="row">';
    r+='<div class="col-md-3 col-sm-3 col-xs-3"></div>';
    r+='<div class="col-md-6 col-sm-6 col-xs-6">';
    r+='<div class="jumbotron" id="jumboUser">';
    r+='<div class="row">';
    r+='<h2 class="text-center" style="margin-bottom:5%; font-size:50px; color:#F89406;">Reserve a seat</h2>';
    r+='<div class="col-md-1 col-sm-1 col-xs-1"></div>';
    r+='<div class="col-md-10 col-sm-10 col-xs-10"> ';
    r+='<div class="form-group form-group-lg">';
    
    r+='<div style="margin-bottom:3%" class="input-group">';
    r+='<input type="text" class="form-control" placeholder="Email" aria-describedby="basic-addon1">';
    r+='<span class="input-group-addon" id="basic-addon1">@example.com</span>';
    r+='</div>';
    r+='<div style="margin-bottom:3%" class="input-group">';
    r+='<span class="input-group-addon" id="basic-addon1">From:</span>';
    r+='<input type="text" class="form-control" placeholder="Search" aria-describedby="basic-addon1">';
    r+='</div>';
    r+='<div class="input-group">';
    r+='<span class="input-group-addon" id="basic-addon1">To:&emsp;</span>';
    r+='<input type="text" class="form-control" placeholder="Search" aria-describedby="basic-addon1">';
    r+='</div>';
    
    r+='</div>';
    r+='<div class="text-center">';
    r+='<button type="button" onclick="getStops(txtFrom, txtTo)" class="btn btn-warning btn-lg"  id="btnSeat" style="min-width:20%">Continue</button>';
    
        <!-- start modalView -->
        r += '<div id="#loginModal" class="modal fade" role="dialog">';
        r += '<div class="modal-dialog">';

        <!-- Modal content-->
        r +='<div class="modal-content">' ;
        r +='<div class="modal-header">';
        r +='<button type="button" class="close" data-dismiss="modal">&times;</button>';
        r +='<h2 class="modal-title">LOGIN ERROR</h2>';
        r +='</div>';
        r +='<div class="modal-body">';
        r +='<p>Wrong credentials.</p>';
        r +='</div>';
        r +='<div class="modal-footer">';
        r +='<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
        r +='</div>';
        r +='</div>';
        r +='</div>';
        r +='</div>';
        <!-- end modalView -->
    
    r+='</div>';
    r+='</div>';
    r+='<div class="col-md-1 col-sm-1 col-xs-1"></div>';
    r+='</div>';
    r+='</div>';
    r+='</div>';
    r+='<div class="col-md-3 col-sm-3 col-xs-3"></div>';
    r+='</div>';
    r+='</div>';
    return r;
}

function headerFleetAndDriver() {
    var r = '';
    r+='<nav class="navbar navbar-default">';
    r+='<div class="container-fluid" style="min-height:70px">';
    r+='<div class="navbar-header">';
    r+='<a class="navbar-brand" href="#" id="btnLogo1FleetDriver"><img alt="Brand" style="max-height:40px" src="Images/BusLogo.gif"></a>';
    r+='<a class="navbar-brand" style="padding-top:25px" href="#" id="btnLogo2FleetDriver">BusPlanner</a>';
    r+='</div>';
    r+='<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
    r+='<ul class="nav navbar-nav navbar-right">';
    r+='<li><a id="btnMap" href="#" style="padding-top:25px">MAP</a></li>';
    r+='<li><a id="btnRead" href="#" style="padding-top:25px">Read JSON</a></li>';
    r+='<li><a id="btnWrite" href="#" style="padding-top:25px">Write JSON</a></li>';
    r+='</ul>';
    r+='</div>';
    r+='</div>';
    r+='</nav>';
    return r;
}

function homeFleetAndDriver() {
    var r = '';
    r+='<div class="background-image" id="backgroundimage"></div>';
    r+='<div class="content" id="content">';
    r+='<div class="row">';
    r+='<div class="col-md-3 col-sm-3 col-xs-3"></div>';
    r+='<div class="col-md-6 col-sm-6 col-xs-6">';
    r+='<div class="jumbotron" style="margin-top:9%" id="jumbo">';
    r+='<div class="row">';
    r+='<h2 class="text-center" style="margin-bottom:5%; font-size:50px;">Enter your credentials</h2>';
    r+='<div class="col-md-2 col-sm-2 col-xs-2"></div>';
    r+='<div class="col-md-8 col-sm-8 col-xs-8"> ';
    r+='<div class="form-group form-group-lg">';
    r+='<input type="text" id="txtEmail" class="form-control" style="margin-bottom:3%" placeholder="Username">';
    r+='<input type="password" id="txtPassword" class="form-control" placeholder="Password">';
    r+='</div>';
    r+='<div class="text-center">';
    r+='<button type="button" onclick="getEmailAndPassword(txtEmail, txtPassword)" class="btn btn-primary"  id="btnLogin" style="min-width:20%">Log in</button>';
    
        <!-- start modalView -->
        r += '<div id="#loginModal" class="modal fade" role="dialog">';
        r += '<div class="modal-dialog">';

        <!-- Modal content-->
        r +='<div class="modal-content">' ;
        r +='<div class="modal-header">';
        r +='<button type="button" class="close" data-dismiss="modal">&times;</button>';
        r +='<h2 class="modal-title">LOGIN ERROR</h2>';
        r +='</div>';
        r +='<div class="modal-body">';
        r +='<p>Wrong credentials.</p>';
        r +='</div>';
        r +='<div class="modal-footer">';
        r +='<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
        r +='</div>';
        r +='</div>';
        r +='</div>';
        r +='</div>';
        <!-- end modalView -->
    
    r+='</div>   ';
    r+='<h4 class="text-center">Did you forget your password? <a href="#">Click here</a></h4> ';
    r+='</div>';
    r+='<div class="col-md-2 col-sm-2 col-xs-2"></div>';
    r+='</div>';
    r+='</div>';
    r+='</div>';
    r+='<div class="col-md-3 col-sm-3 col-xs-3"></div>';
    r+='</div>';
    r+='</div>';
    return r;
}

function headerFleet() {
    var r = '';
    r+='<nav class="navbar navbar-default">';
            r+='<div class="container-fluid" style="min-height:70px">';
                r+='<div class="navbar-header">';
                    r+='<a class="navbar-brand" href="#" id="btnLogo1Fleet"><img alt="Brand" style="max-height:40px" src="Images/BusLogo.gif"></a>';
                    r+='<a class="navbar-brand" style="padding-top:25px" href="#" id="btnLogo2Fleet">BusPlanner</a>';
                r+='</div>';
                r+='<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
                    r+='<ul class="nav navbar-nav navbar-right">';
                        r+='<li><a id="btnBus" href="#" style="padding-top:25px">Bus Managment</a></li>';
                        r+='<li><a id="btnDriver" href="#" style="padding-top:25px">Driver</a></li>';
		                r+='<li><a id="btnRoute" href="#" style="padding-top:25px">Route Schedule</a></li>';
                        r+='<li><a id="btnTime" href="#" style="padding-top:25px">Schedule Time</a></li>';
                        r+='<li><a id="btnRequest" href="#" style="padding-top:25px">User Request</a></li>';
                        r+='<li><a id="btnLogout" href="#" style="padding-top:25px">Log out</a></li>';
                   r+='</ul>';
                r+='</div>';
            r+='</div>';
        r+='</nav>';
    return r;
}

function headerDriver() {
    var r = '';
    r+='<nav class="navbar navbar-default">';
            r+='<div class="container-fluid" style="min-height:70px">';
                r+='<div class="navbar-header">';
                    r+='<a class="navbar-brand" href="#" id="btnLogo1Driver"><img alt="Brand" style="max-height:40px" src="Images/BusLogo.gif"></a>';
                    r+='<a class="navbar-brand" style="padding-top:25px" href="#" id="btnLogo2Driver">BusPlanner</a>';
                r+='</div>';
                r+='<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
                    r+='<ul class="nav navbar-nav navbar-right">';
                        r+='<li><a id="btnLogout" href="#" style="padding-top:25px">Log out</a></li>';
                   r+='</ul>';
                r+='</div>';
            r+='</div>';
        r+='</nav>';
    return r;
}

function mainFleet() {
    var r = '';
    //<!--MODIFY BUSES -->
        r+='<div class="row">';
        r+='<div class="col-md-6 col-sm-6 col-xs-6">';
            r+='<div class="row">';
                r+='<div class="col-md-1 col-sm-1 col-xs-1"></div>';
                r+='<a href=# class="col-md-11 col-sm-11 col-xs-11">';
                    r+='<div class="jumbotron grow" id="btnBus" style="background-image: url(Images/modBuses.jpg); border: 1px solid black; height: 200px; background-size: 620px 290px;" align= "center">';
                        r+='<h1 id="imageText">Buses</h1>';
                        r+='<h4 id="imageText">Here you can add, remove or modify our buses </h4>';
                    r+='</div>';
                r+='</a>';
            r+='</div>';
        r+='</div>';
            
       //<!--MODIFY DRIVERS -->     
        r+='<div class="col-md-6 col-sm-6 col-xs-6">';
            r+='<div class="row">';
                r+='<a href=# class="col-md-11 col-sm-11 col-xs-11">';
                    r+='<div class="jumbotron grow" id="btnDriver" style="background-image: url(Images/modifyDriver.jpg); border: 1px solid black; height: 200px; background-size: 620px 290px;" align= "center">';
                        r+='<h1 id="imageText">Drivers</h1>';
                        r+='<h4 id="imageText">Here we can see and modify all the drivers of our company </h4>';
                    r+='</div>';
                r+='</a>';
                r+='<div class="col-md-1 col-sm-1 col-xs-1"></div>';
            r+='</div>';
        r+='</div>';
    r+='</div>';

    //<!--MODIFY ROUTE -->
    r+='<div class="row">';
        r+='<div class="col-md-6 col-sm-6 col-xs-6">';
            r+='<div class="row">';
                r+='<div class="col-md-1 col-sm-1 col-xs-1"></div>';
                r+='<a href=# class="col-md-11 col-sm-11 col-xs-11">';
                    r+='<div class="jumbotron grow" id="btnRoute" style="background-image: url(Images/modifyRoute.jpg); border: 1px solid black; height: 200px; background-size: 620px 290px;" align= "center">';
                        r+='<h1 id="imageText">Routes</h1>';
                        r+='<h4 id="imageText">Here you can add, remove or modify the routes the buses will cover</h4>';
                    r+='</div>';
                r+='</a>';
            r+='</div>';
        r+='</div>';
            
        //<!--MODIFY SCHEDULE TIME -->  
        r+='<div class="col-md-6 col-sm-6 col-xs-6">';
            r+='<div class="row">';
                r+='<a href=# class="col-md-11 col-sm-11 col-xs-11">';
                    r+='<div class="jumbotron grow" id="buttonHomeFleet" style="background-image: url(Images/modifySchedule.jpg); border: 1px solid black; height: 200px; background-size: 620px 290px;" align= "center">';
                        r+='<h1  id="imageText">Schedule</h1>';
                        r+='<h4 id="imageText">Here you can see and modify all the schedule time of our company</h4>';
                    r+='</div>';
                r+='</a>';
                r+='<div class="col-md-1 col-sm-1 col-xs-1"></div>';
            r+='</div>';
        r+='</div>';
    r+='</div>';
    
    //<!-- VIEW USER REQUEST-->>
    r+='<div style="margin-bottom: 40px">';
        r+='<div class="row">';
            r+='<div class="col-md-3 col-sm-3 col-xs-3"></div>';
            r+='<a href=# class="col-md-6 col-sm-6 col-xs-6">';
                r+='<div class="jumbotron grow" id="btnRequest" style="background-image: url(Images/modifyUser.jpg); border: 1px solid black; height: 200px; background-size: 620px 290px;" align= "center">';
                    r+='<h1 id="imageText">User Requests</h1>';
                    r+='<h4 id="imageText">Here you can view all the user requests</h4>';
                r+='</div>';
            r+='</a>';
            r+='<div class="col-md-3 col-sm-3 col-xs-3"></div>';
        
        r+='</div>';
    r+='</div>';

    return r;
}

function mainDriver(data) {
    var r = "";
    r+='<div class = "row" style="margin-bottom:60px">';
    r+='<div class="col-md-5 col-sm-5 col-xs-5">';
    r+='<div class="col-md-1 col-sm-1 col-xs-1"></div>';
    r+='<div class="col-md-11 col-sm-11 col-xs-11 scroll container text-center" style="height:500px">';
    
    r+='<h2>YOUR SCHEDULE TODAY</h2>';
    r+='<ul class="list-group">';
    var count = 1;
    data.forEach(function (d) {
        r+='<a href="#" onclick="changeMarker('+count+')" class="list-group-item"><span style="background-color:red" class="badge">14</span><span style="background-color:green" class="badge">13</span>'+data.child('BusStop'+count).child('Name').val()+'</a>';
        count++;
    });
    r+='</ul>';
    r+='</div>';
    r+='</div>';
    
    r+='<div class="col-md-7 col-sm-7 col-xs-7">';
    r+='<div class="col-md-11 col-sm-11 col-xs-11" id="map1"></div>';
    r+='<div class="col-md-1 col-sm-1 col-xs-1"></div>';
    r+='</div>';
    
    r+='</div>';
    
    return r;
}

function getBus(data) {
    
    var r = "";
    r += '<div class = "intestation" id="intestation">';
    r += '<div class = "row" >';
    r += '<div class="col-md-6 col-sm-6 col-xs-6" >';
    r += '<h1 id = "titleIntestation" >Bus Management</h1>';
    r += '<h4 id = "minimalDescription">Here you can add, modify and remove buses.</h4>';
    r += '</div>';
    r += '<div class="col-md-6 col-sm-6 col-xs-6">';
    r += '<img src = "Images/modBuses.jpg" align="right" class = "intestationImages img-responsive">';
    r += '</div>';
    r += '</div>';
    r += '</div>';
    r += '<div class="row">';
    r += '<div class="col-md-5 col-sm-5 col-xs-5" style="margin-top: 60px">';
    r += '<div class=" col-md-2 col-sm-2 col-xs-2"></div>' +
         '<div class=" col-md-9 col-sm-9 col-xs-9 scroll container" style="height: 500px" >';    //to close row and col 10

    var cont = 0;
    var count = 1;
    r+= '<ul class ="list-group" id="busListGroup">';
    data.forEach(function (d) {
        count++;

        if(cont++ == 0){
            r += '<div class="list-group-item" align="center" id="busItem'+d.child('Bus_id').val()+'" style="margin-top: 13px"><h5>' + "Bus Id: " + d.child('Bus_id').val() +
                ' &emsp;<a href="#" data-toggle="modal"  data-target="#modalView' + d.child('Bus_id').val() + '">Info</a>&emsp;' + '<a href="#" data-toggle="modal" data-target="#modalModify' + d.child('Bus_id').val() + '">Modify</a>&emsp;' + '<a href="#" data-toggle="modal" data-target="#modalDelete' + d.child('Bus_id').val() + '">Delete</a></h5></div>';
        }
        else {
            r += '<div class="list-group-item" id="busItem'+d.child('Bus_id').val()+'" align="center"><h5>' + "Bus Id: " + d.child('Bus_id').val() +
                ' &emsp;<a href="#" data-toggle="modal"  data-target="#modalView' + d.child('Bus_id').val() + '">Info</a>&emsp;' + '<a href="#" data-toggle="modal" data-target="#modalModify' + d.child('Bus_id').val() + '">Modify</a>&emsp;' + '<a href="#" data-toggle="modal" data-target="#modalDelete' + d.child('Bus_id').val() + '">Delete</a></h5></div>';
        }
        //<!-- start modalView -->
        r += '<div id="modalView' + d.child('Bus_id').val() + '" class="modal fade" role="dialog">';
        r += '<div class="modal-dialog">';

        //<!-- Modal content-->
        r += '<div class="modal-content">';
        r += '<div class="modal-header">';
        r += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
        r += '<h4 class="modal-title">Bus ' + d.child('Bus_id').val() + ' Information</h4>';
        r += '</div>';
        r += '<div class="modal-body">';
        r += '<p>Bus capacity: ' + d.child('Bus_capacity').val() + '<br>' +
            'Bus Type:' + d.child('Bus_type').val() + '<br>' +
            'Driver Id: ' + d.child('Driver_id').val() + '<br>' +
            'Latitude: ' + d.child('Latitude').val() + '<br>' +
            'Longitude: ' + d.child('Longitude').val() + '<br>' +
            '</p>';
        r += '</div>';
        r += '<div class="modal-footer">';
        r += '<button href="#" type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
        r += '</div>';
        r += '</div>';
        r += '</div>';
        r += '</div>';
        //<!-- end modalView -->

        //<!-- start modalModify -->
        r += '<div id="modalModify' + d.child('Bus_id').val() + '" class="modal fade" role="dialog">';
        r += '<div class="modal-dialog">';

        //<!-- Modal content-->
        r += '<div class="modal-content">';
        r += '<div class="modal-header">';
        r += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
        r += '<h4 class="modal-title">Insert the value of the Bus ' + d.child('Bus_id').val() + ' to modify</h4>';
        r += '</div>';
        r += '<div class="modal-body">';
        r += '<form>' +
            '<div class="form-group">' +
            '<label for="id">Bus Id:</label>' +
            '<input type="text" class="form-control" id="busId' + d.child('Bus_id').val() + '" value="' + d.child("Bus_id").val() + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="capacity">Capacity:</label>' +
            '<input type="text" class="form-control" id="busCapacity' + d.child('Bus_id').val() + '" value="' + d.child("Bus_capacity").val() + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="type">Type:</label>' +
            '<input type="text" class="form-control" id="busType' + d.child('Bus_id').val() + '" value="' + d.child("Bus_type").val() + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="driver">Driver:</label>' +
            '<input type="text" class="form-control" id="busDriver' + d.child('Bus_id').val() + '" value="' + d.child("Driver_id").val() + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="latitude">Latitude:</label>' +
            '<input type="text" class="form-control " id="busLatitude' + d.child('Bus_id').val() + '" value="' + d.child("Latitude").val() + '" disabled>' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="longitude">Longitude:</label>' +
            '<input type="text" class="form-control " id="busLongitude' + d.child('Bus_id').val() + '" value="' + d.child("Longitude").val() + '" disabled>' +
            '</div>' +
            //i have to put in get data the dynamic index
            '<button href="#" type="submit" onclick="modifyBusData(' + d.child('Bus_id').val() + ')" id="submitModBus' + d.child('Bus_id').val() + '" class="btn btn-default">Submit</button>' +
            '</form>';
        r += '</div>';
        r += '<div class="modal-footer">';
        r += '<button href="#" type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
        r += '</div>';
        r += '</div>';
        r += '</div>';
        r += '</div>';
        //<!-- end modalModify -->

        //<!-- start deleteModify -->
        r += '<div id="modalDelete' + d.child('Bus_id').val() + '" class="modal fade" role="dialog">';
        r += '<div class="modal-dialog">';
        //<!-- Modal content-->
        r += '<div class="modal-content">';
        r += '<div class="modal-header">';
        r += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
        r += '<h4 class="modal-title">Deleting the bus ' + d.child('Bus_id').val() + '</h4>';
        r += '</div>';
        r += '<div class="modal-body">';
        r += '<div>' +
            '<p>Bus capacity: ' + d.child('Bus_capacity').val() + '<br>' +
            'Bus Type:' + d.child('Bus_type').val() + '<br>' +
            'Driver Id: ' + d.child('Driver_id').val() + '<br>' +
            'Latitude: ' + d.child('Latitude').val() + '<br>' +
            'Longitude: ' + d.child('Longitude').val() + '<br>' +
            '</p>' +
            //i have to put in get data the dynamic index
            '<button href="#" type="submit" onclick="deleteBus(' + d.child('Bus_id').val() + ')" id="deleteBus' + d.child('Bus_id').val() + '" class="btn btn-default" data-dismiss="modal">Delete</button>' +
            '</div>';
        r += '</div>';
        r += '<div class="modal-footer">';
        r += '<button href="#" type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
        r += '</div>';
        r += '</div>';
        r += '</div>';
        r += '</div>';
        //<!-- end delete Modal -->
  
    });

    r += '</ul>';
    r += '<div>';
    //<!-- Modal add bus -->
    r += '<div id="addingBusModal" class="modal fade" role="dialog">';
    r += '<div class="modal-dialog">';

    //  <!-- Modal content add bus-->
    r += '<div class="modal-content">';
    r += '<div class="modal-header">';
    r += '<button type="button" class="close" data-dismiss="modal" >&times;</button>',
    r += '<h4 class="modal-title">Add Bus</h4>';
    r += '</div>';
    r += '<div class="modal-body">';
    r += '<form>' +
        '<div class="form-group">' +
        '<label for="id">Bus Id:</label>' +
        '<input type="text" class="form-control" id="addBusId" value="'+count+'" disabled>' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="capacity">Capacity:</label>' +
        '<input type="text" class="form-control" id="addBusCapacity" >' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="type">Type:</label>' +
        '<input type="text" class="form-control" id="addBusType" >' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="driver">Driver:</label>' +
        '<input type="text" class="form-control" id="addBusDriver" >' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="latitude">Latitude:</label>' +
        '<input type="text" class="form-control " id="addBusLatitude" >' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="longitude">Longitude:</label>' +
        '<input type="text" class="form-control " id="addBusLongitude" >' +
        '</div>' +
        //i have to put in get data the dynamic index
        '<button type="submit" onclick="insertBus('+count+')" id="submitModDriver" class="btn btn-default" data-dismiss="modal">Submit</button>' +
        '</form>';
    r += '</div>';
    r += '<div class="modal-footer">';
    r += '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
    r += '</div>';
    r += '</div>';
    r += '</div>';
    r += '</div>';
    //end modal add bus

    r += '</div>';
    r += '</div>'; //closing col 10
    r += '</div>'; //closing row
    r += '<div class="col-md-7 col-sm-7 col-xs-7">';
    r += '<div class="col-md-11 col-sm-11 col-xs-11" id="mapBus" style="height:500px; margin-top:60px;"></div>';
    r += '<div class="col-md-1 col-sm-1 col-xs-1"></div>';
    r += '</div>';
    r+='<div class="row">'; 
    r+='<div class=" col-md-5 col-sm-5 col-xs-5">';
    r+='<div class=" col-md-2 col-sm-2 col-xs-2"></div>';
    r+='<div class=" col-md-9 col-sm-9 col-xs-9 text-center">'; 
    r +='<button href="#" class="btn btn-info btn-lg" data-toggle="modal" data-target="#addingBusModal" class="btn btn-lg btn-primary btn-circle" style="margin-bottom:70px; margin-top:10px; margin-left:10px;">ADD BUS</button>';
    r += '</div>';
    r += '</div>';
    r+='<div class=" col-md-7 col-sm-7 col-xs-7"></div>';
    r += '</div>';
    r += '</div>';
    r += '</div>';
    return r;
}



function getDriver(data) {
    var r = "";
    r+='<div class = "intestation" id="intestation">';
    r+='<div class = "row" >';
    r+='<div class="col-md-6 col-sm-6 col-xs-6" >';
    r+='<h3 id = "titleIntestation">Driver Management</h3>';
    r+='<h4 id = "minimalDescription">Here you can view, modify and remove the drivers of our company.</h4>';
    r+='</div>';
    r+='<div class="col-md-6 col-sm-6 col-xs-6">';
    r+='<img src = "Images/modifyDriver3.jpg" align="right" class = "intestationImages img-responsive">';
    r+='</div>';
    r+='</div>';
    r+='</div>';
    
    var count = 1;
    r+='<div id="driversListGroup">';
    data.forEach( function(d){
        count++;
        r += '<div class="row" id="driverItem'+d.child('Driver_id').val()+'" style=" margin: 10px">';
        r += '<div class="col-md-1 col-sm-1 col-xs-1"></div>';
        r += '<div class="col-md-3 col-sm-3 col-xs-3">' +
             '<img src="Images/'+d.child('Image').val() +'" class="img-circle" id="imageDriver">' +
             '</div>' +
             '<div class="col-md-7 col-sm-7 col-xs-7">' +
                '<h3 id="dName'+d.child('Driver_id').val()+'">'+ d.child('Driver_name').val()+'</h3>' +
                '<p id="dDescription'+d.child('Driver_id').val()+'" style="font-size: medium">'+d.child('Description').val() +'</p>';
                r += '<h4 align="center">'+
        ' &emsp;<a href="#" data-toggle="modal" data-target="#modalView' + d.child('Driver_id').val() + '">Info</a>&emsp;' + '<a href="#" data-toggle="modal" data-target="#modalModify' + d.child('Driver_id').val() + '">Modify</a>&emsp;' + '<a href="#" data-toggle="modal" data-target="#modalDelete' + d.child('Driver_id').val() + '">Delete</a></h4></div>';
        r += '</div>';
        //<!-- start modalView -->
        r += '<div id="modalView' + d.child('Driver_id').val() + '" class="modal fade" role="dialog">';
        r += '<div class="modal-dialog">';

        //<!-- Modal content-->
        r += '<div class="modal-content">';
        r += '<div class="modal-header">';
        r += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
        r += '<h4 class="modal-title">' + d.child('Driver_name').val() + ' Information</h4>';
        r += '</div>';
        r += '<div class="modal-body">';
        r += '<p>Driver ID: ' + d.child('Driver_id').val() + '<br>' +
            'Driver Name: ' + d.child('Driver_name').val() + '<br>' +
            'Mobile Number: ' + d.child('Mobile_number').val() + '<br>' +
            'Date of birth: ' + d.child('Date_birth').val() + '<br>' +
            '</p>';
        r += '</div>';
        r += '<div class="modal-footer">';
        r += '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
        r += '</div>';
        r += '</div>';

        r += '</div>';
        r += '</div>';
        //<!-- end modalView -->'+

        //<!-- start modalModify -->
        r += '<div id="modalModify' + d.child('Driver_id').val() + '" class="modal fade" role="dialog">';
        r += '<div class="modal-dialog">';

        //<!-- Modal content-->
        r += '<div class="modal-content">';
        r += '<div class="modal-header">';
        r += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
        r += '<h4 class="modal-title">Insert the value of the Driver ' + d.child('Driver_name').val() + ' to modify</h4>';
        r += '</div>';
        r += '<div class="modal-body">';
        r += '<form>' +
            '<div class="form-group">' +
            '<label for="id">Driver Id:</label>' +
            '<input type="text" class="form-control" id="driverId' + d.child('Driver_id').val() + '" value="' + d.child("Driver_id").val() + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="capacity">Name:</label>' +
            '<input type="text" class="form-control" id="driverName' + d.child('Driver_id').val() + '" value="' + d.child("Driver_name").val() + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="type">Date of birth:</label>' +
            '<input type="text" class="form-control" id="driverDateBirth' + d.child('Driver_id').val() + '" value="' + d.child("Date_birth").val() + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="driver">Mobile number:</label>' +
            '<input type="text" class="form-control" id="driverNumber' + d.child('Driver_id').val() + '" value="' + d.child("Mobile_number").val() + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="latitude">Description:</label>' +
            '<input type="text" class="form-control " id="driverDescription' + d.child('Driver_id').val() + '" value="' + d.child("Description").val() + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="longitude">Image:</label>' +
            '<input type="text" class="form-control " id="driverImage' + d.child('Driver_id').val() + '" value="' + d.child("Image").val() + '">' +
            '</div>' +
            //i have to put in get data the dynamic index
            '<button type="submit" onclick="modifyDriverData(' + d.child('Driver_id').val() + ')" id="submitModBus' + d.child('Driver_id').val() + '" class="btn btn-default">Submit</button>' +
            '</form>';


        r += '</div>';
        r += '<div class="modal-footer">';
        r += '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
        r += '</div>';
        r += '</div>';

        r += '</div>';
        r += '</div>';
        //<!-- end modalModify -->

        //<!-- start deleteModify -->
        r += '<div id="modalDelete' + d.child('Driver_id').val() + '" class="modal fade" role="dialog">';
        r += '<div class="modal-dialog">';
        //<!-- Modal content-->
        r += '<div class="modal-content">';
        r += '<div class="modal-header">';
        r += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
        r += '<h4 class="modal-title">Deleting ' + d.child('Driver_name').val() + ' from the driver list</h4>';
        r += '</div>';
        r += '<div class="modal-body">';
        r += '<div>' +
            '<p>Driver ID: ' + d.child('Driver_id').val() + '<br>' +
            'Driver Name: ' + d.child('Driver_name').val() + '<br>' +
            'Mobile Number: ' + d.child('Mobile_number').val() + '<br>' +
            'Date of birth: ' + d.child('Date_birth').val() + '<br>' +
            '</p>' +
            //i have to put in get data the dynamic index
            '<button type="submit" onclick="deleteDriver(' + d.child('Driver_id').val() + ')" id="deleteDriver' + d.child('Driver_id').val() + '" class="btn btn-default" data-dismiss="modal">Delete</button>' +
            '</div>';


        r += '</div>';
        r += '<div class="modal-footer">';
        r += '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
        r += '</div>';
        r += '</div>';

        r += '</div>';
        r += '</div>';
        //<!-- end delete Modal -->

        //could be an errot there



    });
    r+='</div>';

    //button for add new driver
    r+= '<div class="row">' +
        '<div class="col-md-4 col-sm-4 col-xs-4"></div>' +
        '<div class="col-md-4 col-sm-4 col-xs-4 text-center">';
    r+='<button class="btn btn-info btn-lg" data-toggle="modal"  data-target="#addingDriver" class="btn btn-lg btn-primary btn-circle" style="margin: 60px" >NEW DRIVER<i class="fa fa-plus"></i></button>' +
        '</div><div class="col-md-4 col-sm-4 col-xs-4"></div></div>';   //closing row
    //<!-- Modal add driver -->
    r += '<div id="addingDriver" class="modal fade" role="dialog">';
    r += '<div class="modal-dialog">';
    //  <!-- Modal content add driver-->
    r += '<div class="modal-content">';
    r += '<div class="modal-header">';
    r += '<button type="button" class="close" data-dismiss="modal">&times;</button>',
        r += '<h4 class="modal-title">Add Driver</h4>';
    r += '</div>';
    r += '<div class="modal-body">';
    r += '<form>' +
        '<div class="form-group">' +
        '<label for="id">Driver ID:</label>' +
        '<input type="text" class="form-control" id="addDriverId" value="' + count + '" disabled>' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="name">Name:</label>' +
        '<input type="text" class="form-control" id="addDriverName" >' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="number">Mobile Number:</label>' +
        '<input type="text" class="form-control" id="addNumber" >' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="description">Description:</label>' +
        '<input type="text" class="form-control" id="addDescription" >' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="image">Image:</label>' +
        '<input type="text" class="form-control " id="addImage" >' +
        '</div>' +
        //i have to put in get data the dynamic index
        '<button type="submit" onclick="insertDriver('+count+')" id="submitModBus" class="btn btn-default" data-dismiss="modal">Submit</button>' +
        '</form>';
    r += '</div>';
    r += '<div class="modal-footer">';
    r += '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
    r += '</div>';
    r += '</div>';

    r += '</div>';
    r += '</div>';
    //end modal add bus

    return r;
}



function getRoute(data){

    var r = "";
    r+='<div class = "intestation" id="intestation">';
    r+='<div class = "row" >';
    r+='<div class="col-md-6 col-sm-6 col-xs-6" >';
    r+='<h3 id = "titleIntestation">Route Management</h3>';
    r+='<h4 id = "minimalDescription">Here you can view, modify and remove routes.</h4>';
    r+='</div>';
    r+='<div class="col-md-6 col-sm-6 col-xs-6">';
    r+='<img src = "Images/modifyRoute.jpg" align="right" class = "intestationImages">';
    r+='</div>';
    r+='</div>';
    r+='</div>';
    r+='<h3 style="color:#2aabd2; margin-bottom:20px;" class="text-center">Click on the route name to see all its steps on the map:</h3>';
    
    r+='<div class="row" style="margin-bottom:70px">';
    r+='<div class="col-md-5 col-sm-5 col-xs-5">';
    r+='<div class="col-md-1 col-sm-1 col-xs-1"></div>';
    r+='<div class="col-md-11 col-sm-11 col-xs-11 scroll container" style="height: 500px">';
    r+='<ul class="list-group">';
    var count = 1;
    data.forEach(function (d) {
        if(count == 1) {
            r+='<a href="#" id="Route'+count+'" onclick="initeMapRoute('+ d.child('Route_id').val() +')" class="list-group-item active" style="margin-top:17px">'+d.child('Route_name').val()+'</a>';
        }
        else {
            r+='<a href="#" id="Route'+count+'" onclick="initeMapRoute('+ d.child('Route_id').val() +')" class="list-group-item">'+d.child('Route_name').val()+'</a>';
        }
        count++;
    });
    r+='</ul>';
    r+='</div>';
    r+='</div>';
    r+='<div class="col-md-7 col-sm-7 col-xs-7">';
    r+='<div class="col-md-11 col-sm-11 col-xs-11" id="mapRoute"></div>'; 
    r+='<div class="col-md-1 col-sm-1 col-xs-1"></div>';
    r+='</div>'; 
    r+='</div>';
    return r;
}



function getRequest(data){
    var r = "";
    r+='<div class = "intestation" id="intestation">';
    r+='<div class = "row" >';
    r+='<div class="col-md-6 col-sm-6 col-xs-6" >';
    r+='<h3 id = "titleIntestation" >View User Requests</h3>';
    r+='<h4 id = "minimalDescription">Here you can view all the user requests.</h4>';
    r+='</div>';
    r+='<div class="col-md-6 col-sm-6 col-xs-6">';
    r+='<img src = "Images/modifyUser2.jpg" align="right" class = "intestationImages img-responsive">';
    r+='</div>';
    r+='</div>';
    r+='</div>';


    r+="<div style='margin-top: 20px; margin-bottom: 70px' class='row'>" +
        "   <div class='col-md-6 col-sm-6 col-xs-6 '>" +
        "<div class='row'><div class='col-md-1 col-sm-1 col-xs-1'></div>" +
        "<div class='col-md-10 col-sm-10 col-xs-10 container'> " ;


    r+="" +
        "<table class='table table-striped table-hover'>" +
        "<thead class='thead-inverse'>"+
        "<tr>"+
        "<th>User</th>"+
        "<th>Route</th>"+
        "<th>Date</th>" +
        "<th>More Info</th>"+
        "</tr>"+
        "</thead>";
    r+="<tbody>";

    data.forEach(function (d) {
       //initialize all the variables about each user requests
       var name= d.child("user_name").val();
       var route= d.child("route_id").val();
        // date has this pattern 2016-12-09T23:52:13.589861
       var date= d.child("departure_datetime").val().toString();
       var day = date.substring(0, 10);
       var hour = date.substring(12, 19);
       var start= d.child("starting_bus_stop").child("Name").val();
       var end= d.child("ending_bus_stop").child("Name").val();

       r+="<tr>" +
           "<td>"+ name +"</td>" +
           "<td>"+ route +"</td>" +
           "<td>"+ day + " "+ hour +"</td>" +
           //link to the modal that show more information
           "<td><a href='#' data-toggle='modal'  data-target='#modalMoreRequestInfo"+ d.child('id').val()+ "'>Info</a></td>" +
           "</tr>";


        //<!-- start modalView -->
        r += "<div id='modalMoreRequestInfo"+ d.child('id').val()+ "' class='modal fade' role='dialog'>";
        r += '<div class="modal-dialog">';

        //<!-- Modal content-->
        r += '<div class="modal-content">';
        r += '<div class="modal-header">';
        r += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
        r += '<h4 class="modal-title">User Request '+ d.child('id').val()+ ' details</h4>';
        r += '</div>';
        r += '<div class="modal-body">';
        r += '<p>User: ' + name + '<br>' +
            'Day: ' + day + '<br>' +
            'Hour: ' + hour + '<br>' +
            'Start bus stop: ' + start + '<br>' +
            'End bus stop: ' + end + '<br>' +
            '</p>';
        r += '</div>';
        r += '<div class="modal-footer">';
        r += '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
        r += '</div>';
        r += '</div>';

        r += '</div>';
        r += '</div>';
        //<!-- end modalView -->'+





    });

    r+="</tbody></table>";


    r+= "</div>" +
        "<div class='col-md-1 col-sm-1 col-xs-1'></div></div>" +
        "</div>" +
        "   " +
        "   <div class='col-md-6 col-sm-6 col-xs-6'>" +
        "<div class='row'><div class=col-md-1 col-sm-1 col-xs-1'></div><div class=col-md-10 col-sm-10 col-xs-10'>" +
        "   <div id='piechart' style='width: 500px; height: 500px;'></div></div>" +
        "<div class=col-md-1 col-sm-1 col-xs-1'></div></div>" +
        "</div></div>" +
        "</div>";

    /*
     google.charts.load('current', {'packages':['corechart']});
     google.charts.setOnLoadCallback(drawChart);
     function drawChart() {

     var data = google.visualization.arrayToDataTable([
     ['Task', 'Hours per Day'],
     ['Work',     11],
     ['Eat',      2],
     ['Commute',  2],
     ['Watch TV', 2],
     ['Sleep',    7]
     ]);

     var options = {
     title: 'My Daily Activities'
     };

     var chart = new google.visualization.PieChart(document.getElementById('piechart'));

     chart.draw(data, options);
     }
     */



    return r;

}

/*
function login() {
    var r='';
    r+='<div class="background-image" id="backgroundimage"></div>';
    r+='<div class="content" id="content">';
    r+='<div class="row">';
    r+='<div class="col-md-3 col-sm-3 col-xs-3"></div>';
    r+='<div class="col-md-6 col-sm-6 col-xs-6">';
    r+='<div class="jumbotron" style="margin-top:9%" id="jumbo">';
    r+='<div class="row">';
    r+='<h2 class="text-center" style="margin-bottom:5%; font-size:50px;">Enter your credentials</h2>';
    r+='<div class="col-md-2 col-sm-2 col-xs-2"></div>';
    r+='<div class="col-md-8 col-sm-8 col-xs-8"> ';
    r+='<div class="form-group form-group-lg">';
    r+='<input type="text" id="txtEmail" class="form-control" style="margin-bottom:3%" placeholder="Username">';
    r+='<input type="password" id="txtPassword" class="form-control" placeholder="Password">';
    r+='</div>';
    r+='<div class="text-center">';
    r+='<button type="button" onclick="getEmailAndPassword(txtEmail, txtPassword)" class="btn btn-primary"  id="btnLogin2" style="min-width:20%">Log in</button>';
    //r+='<button type="button" onclick="getEmailAndPassword(txtEmail, txtPassword)" class="btn btn-success" id="btnSignUp" style="min-width:20%; margin-left:3%;">SignUp</button>';
    r+='</div>   ';
    r+='<h4 class="text-center">Did you forget your password? <a href="#">Click here</a></h4> ';
    r+='</div>';
    r+='<div class="col-md-2 col-sm-2 col-xs-2"></div>';
    r+='</div>';
    r+='</div>';
    r+='</div>';
    r+='<div class="col-md-3 col-sm-3 col-xs-3"></div>';
    r+='</div>';
    r+='</div>';
    return r;
}
*/
