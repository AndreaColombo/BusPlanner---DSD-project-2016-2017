function header() {
    var r = '';
    r+='<nav class="navbar navbar-default">';
    r+='<div class="container-fluid" style="min-height:70px">';
    r+='<div class="navbar-header">';
    r+='<a class="navbar-brand" href="#" id="btnLogo1"><img alt="Brand" style="max-height:40px" src="Images/BusLogo.gif"></a>';
    r+='<a class="navbar-brand" style="padding-top:25px" href="#" id="btnLogo2">BusPlanner</a>';
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

function home() {
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
    //r+='<button type="button" onclick="getEmailAndPassword(txtEmail, txtPassword)" class="btn btn-success" id="btnSignUp" style="min-width:20%; margin-left:3%;">SignUp</button>';
    
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
                    r+='<a class="navbar-brand" href="indexFleet.html" id="btnLogo1Fleet"><img alt="Brand" style="max-height:40px" src="Images/BusLogo.gif"></a>';
                    r+='<a class="navbar-brand" style="padding-top:25px" href="indexFleet.html" id="btnLogo2Fleet">BusPlanner</a>';
                r+='</div>';
                r+='<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
                    r+='<ul class="nav navbar-nav navbar-right">';
                        r+='<li><a id="btnBus" href="#" style="padding-top:25px">Bus Managment</a></li>';
                        r+='<li><a id="btnDriver" href="#" style="padding-top:25px">Driver</a></li>';
		                r+='<li><a id="btnSchedule" href="#" style="padding-top:25px">Route Schedule</a></li>';
                        r+='<li><a id="btnTime" href="#" style="padding-top:25px">Schedule Time</a></li>';
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
                        r+='<li><a id="btnBus" href="#" style="padding-top:25px">View user requests</a></li>';
                        r+='<li><a id="btnDriver" href="#" style="padding-top:25px">Manage user requests</a></li>';
		                r+='<li><a id="btnSchedule" href="#" style="padding-top:25px">View schedule</a></li>';
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
                r+='<div class="col-md-11 col-sm-11 col-xs-11">';
                    r+='<div class="jumbotron" id="jumboStyle" style="background-image: url(Images/modifyBuses.jpg)" align= "center">';
                        r+='<h3 id="imageText">Modify Buses</h3>';
                        r+='<h4 id="imageText">Here you can add, remove or modify our buses </h4>';
                        r+='<button type="button" class="btn btn-primary" id= "btnBus"> <span class="glyphicon glyphicon-scissors"></span>Modify Buses</button>';
                    r+='</div>';
                r+='</div>';
            r+='</div>';
        r+='</div>';
            
       //<!--MODIFY DRIVERS -->     
        r+='<div class="col-md-6 col-sm-6 col-xs-6">';
            r+='<div class="row">';
                r+='<div class="col-md-11 col-sm-11 col-xs-11">';
                    r+='<div class="jumbotron" id="jumboStyle" align= "center">';
                        r+='<h3 id="imageText">Modify Drivers</h3>';
                        r+='<h4 id="imageText">Here we can see and modify all the drivers of our company </h4>';
                        r+='<button type="button" class="btn btn-primary" id= "buttonHomeFleet"><span class="glyphicon glyphicon-scissors"></span>Modify Buses</button>';
                    r+='</div>';
                r+='</div>';
                r+='<div class="col-md-1 col-sm-1 col-xs-1"></div>';
            r+='</div>';
        r+='</div>';
    r+='</div>';

    //<!--MODIFY ROUTE -->
    r+='<div class="row">';
        r+='<div class="col-md-6 col-sm-6 col-xs-6">';
            r+='<div class="row">';
                r+='<div class="col-md-1 col-sm-1 col-xs-1"></div>';
                r+='<div class="col-md-11 col-sm-11 col-xs-11">';
                    r+='<div class="jumbotron" id="jumboStyle" align= "center">';
                        r+='<h3 id="imageText">Modify Routes</h3>';
                        r+='<h4 id="imageText">Here you can add, remove or modify the routes that the buses will cover </h4>';
                        r+='<button type="button" class="btn btn-primary" id= "buttonHomeFleet"><span class="glyphicon glyphicon-scissors"></span>Modify Buses</button>';
                    r+='</div>';
                r+='</div>';
            r+='</div>';
        r+='</div>';
            
        //<!--MODIFY SCHEDULE TIME -->  
        r+='<div class="col-md-6 col-sm-6 col-xs-6">';
            r+='<div class="row">';
                r+='<div class="col-md-11 col-sm-11 col-xs-11">';
                    r+='<div class="jumbotron" id="jumboStyle" align= "center">';
                        r+='<h3  id="imageText">Modify Drivers</h3>';
                        r+='<h4 id="imageText">Here we can see and modify all the drivers of our company </h4>';
                        r+='<button type="button" class="btn btn-primary" id= "buttonHomeFleet"><span class="glyphicon glyphicon-scissors"></span>Modify Buses</button>';
                    r+='</div>';
                r+='</div>';
                r+='<div class="col-md-1 col-sm-1 col-xs-1"></div>';
            r+='</div>';
        r+='</div>';
    r+='</div>';
    
    //<!-- VIEW USER REQUEST-->>
    r+='<div>';
        r+='<div class="row">';
            r+='<div class="col-md-3 col-sm-3 col-xs-3"></div>';
            r+='<div class="col-md-6 col-sm-6 col-xs-6">';
                r+='<div class="jumbotron" id="jumboStyle" align= "center">';
                        r+='<h3 id="imageText">View User Request</h3>';
                        r+='<h4 id="imageText">Here you can view and map the user request </h4>';
                        r+='<button type="button" class="btn btn-primary" id= "buttonHomeFleet"><span class="glyphicon glyphicon-scissors"></span>View User Request</button>';
                    r+='</div>';
            r+='</div>';
            r+='<div class="col-md-3 col-sm-3 col-xs-3"></div>';
        
        r+='</div>';
    r+='</div>';

    return r;
}

function mainDriver() {
    var r = '';
    
    // View user requests
    r+='<div class="row">';
        r+='<div class="col-md-6 col-sm-6 col-xs-6">';
            r+='<div class="row">';
                r+='<div class="col-md-1 col-sm-1 col-xs-1"></div>';
                r+='<div class="col-md-11 col-sm-11 col-xs-11">';
                r+='<a href="#" id="viewRequests">';
                    r+='<div class="jumbotron" id="jumboStyle" style="background-image: url(Images/ViewRequests6.png)" align= "center">';
                        r+='<h3 id="imageText">View user requests</h3>';
                        r+='<h4 id="imageText">Here you can view the user requests on a map.</h4>';
                    r+='</div>';
                r+='</a>';
                r+='</div>';
            r+='</div>';
        r+='</div>';
    
    // Manage user requests
    r+='<div class="col-md-6 col-sm-6 col-xs-6">';
            r+='<div class="row">';
                r+='<div class="col-md-11 col-sm-11 col-xs-11">';
                r+='<a href="#" id="manageRequests">';
                    r+='<div class="jumbotron" id="jumboStyle" style="background-image: url(Images/ManageUserRequests2.png)" align= "center">';
                        r+='<h3 id="imageText">Manage user requests</h3>';
                        r+='<h4 id="imageText">Here you can manage the user requests.</h4>';
                    r+='</div>';
                r+='</a>';
                r+='</div>';
                r+='<div class="col-md-1 col-sm-1 col-xs-1"></div>';
            r+='</div>';
        r+='</div>';
    r+='</div>';
    
    // View schedule
    r+='<div>';
        r+='<div class="row">';
            r+='<div class="col-md-3 col-sm-3 col-xs-3"></div>';
            r+='<div class="col-md-6 col-sm-6 col-xs-6">';
            r+='<a href="#" id="viewSchedule">';
                r+='<div class="jumbotron" id="jumboStyle" style="background-image: url(Images/modifyBuses.jpg)" align= "center">';
                        r+='<h3 id="imageText">View schedule</h3>';
                        r+='<h4 id="imageText">Here you can view your schedule.</h4>';
                    r+='</div>';
            r+='</a>';
            r+='</div>';
            r+='<div class="col-md-3 col-sm-3 col-xs-3"></div>'; 
        r+='</div>';
    r+='</div>';
    
    return r;
}

function viewUserRequests() {
    var r = "";
    r+='<div id="map1">';
    r+='<button type="button" onclick="getMapDriver()" class="btn">Submit</button>';
    r+='</div>';
    return r;
}

function manageUserRequests() {
    
}

function viewScheduleDriver(data) {
    var r = "";
    r+='<div class = "row">';
    r+='<div class="col-md-5 col-sm-5 col-xs-5">';
    r+='<div class="col-md-1 col-sm-1 col-xs-1"></div>';
    r+='<div class="col-md-11 col-sm-11 col-xs-11 scroll container" style="height:500px">';
    
    r+='<h2 style="padding-left:5%">YOUR SCHEDULE</h2>';
    r+='<ul style="padding-left:10%">';
    
    data.forEach(function (d) {
        r+='<li>'+d.val()+'<br>';
        r+='<p style="color:red">To take:</p>';
        r+='</li>';
    });

    r+='</ul>';
    r+='</div>';
    r+='</div>';
    
    r+='<div class="col-md-7 col-sm-7 col-xs-7" id="map1">';
    r+='<button type="button" onclick="getMapDriver()" class="btn">Submit</button>';
    r+='</div>';
    r+='</div>';
    return r;
}

function getBus(data) {
    var r = "";
    r+='<div class = "intestation" id="intestation">';
        r+='<div class = "row" >';
            r+='<div class="col-md-6 col-sm-6 col-xs-6" >';
                r+='<h3 id = "titleIntestation" >Bus Management</h3>';
                r+='<h4 id = "minimalDescription">Here you can add, remove, or modify our buses </h4>';
            r+='</div>';
            r+='<div class="col-md-6 col-sm-6 col-xs-6">';
                r+='<img src = "Images/modifyBuses.jpg" class = "intestationImages"  >';
            r+='</div>';
        r+='</div>';
    r+='</div>';

    r+='<div class="row">';
        r+='<div class="col-md-6 col-sm-6 col-xs-6" id="busList">';
        data.forEach(function (d) {
            r += '<div><h3>' +"Bus Id: "+ d.child('Bus_id').val() +
                ' &emsp;<a data-toggle="modal" data-target="#modalView'+d.child('Bus_id').val()+'">Info</a>&emsp;'+'<a data-toggle="modal" data-target="#modalModify'+d.child('Bus_id').val()+'">Modify</a>&emsp;' + '<a data-toggle="modal" data-target="#modalDelete'+d.child('Bus_id').val()+'">Delete</a></h3></div>';

            //<!-- start modalView -->
            r += '<div id="modalView'+d.child('Bus_id').val()+'" class="modal fade" role="dialog">';
                r += '<div class="modal-dialog">';

                //<!-- Modal content-->
                    r +='<div class="modal-content">' ;
                        r +='<div class="modal-header">';
                            r +='<button type="button" class="close" data-dismiss="modal">&times;</button>';
                            r +='<h4 class="modal-title">Bus '+ d.child('Bus_id').val()+ ' Information</h4>';
                        r +='</div>';
                        r +='<div class="modal-body">';
                            r +='<p>Bus capacity: '+d.child('Bus_capacity').val() +'<br>' +
                            'Bus Type:'+ d.child('Bus_type').val()+'<br>' +
                            'Driver Id: '+ d.child('Driver_id').val()+'<br>' +
                            'Latitude: '+ d.child('Latitude').val()+'<br>' +
                            'Longitude: '+ d.child('Longitude').val()+'<br>' +
                            '</p>';
                        r +='</div>';
                        r +='<div class="modal-footer">';
                            r +='<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
                        r +='</div>';
                    r +='</div>';

                r +='</div>';
            r +='</div>';
            //<!-- end modalView -->

            //<!-- start modalModify -->
            r += '<div id="modalModify'+d.child('Bus_id').val()+'" class="modal fade" role="dialog">';
                r += '<div class="modal-dialog">';

                    //<!-- Modal content-->
                    r +='<div class="modal-content">' ;
                        r += '<div class="modal-header">';
                            r +='<button type="button" class="close" data-dismiss="modal">&times;</button>';
                            r +='<h4 class="modal-title">Insert the value of the Bus '+ d.child('Bus_id').val()+ ' to modify</h4>';
                        r +='</div>';
                        r +='<div class="modal-body">';
        r +='<form>'+
            '<div class="form-group">'+
            '<label for="id">Bus Id:</label>'+
            '<input type="text" class="form-control" id="busId'+d.child('Bus_id').val()+'" value="'+ d.child("Bus_id").val() +'">'+
            '</div>'+
            '<div class="form-group">'+
            '<label for="capacity">Capacity:</label>'+
            '<input type="text" class="form-control" id="busCapacity'+d.child('Bus_id').val()+'" value="'+ d.child("Bus_capacity").val() +'">'+
            '</div>'+
            '<div class="form-group">'+
            '<label for="type">Type:</label>'+
            '<input type="text" class="form-control" id="busType'+d.child('Bus_id').val()+'" value="'+ d.child("Bus_type").val() +'">'+
            '</div>'+
            '<div class="form-group">'+
            '<label for="driver">Driver:</label>'+
            '<input type="text" class="form-control" id="busDriver'+d.child('Bus_id').val()+'" value="'+ d.child("Driver_id").val() +'">'+
            '</div>'+
            '<div class="form-group">'+
            '<label for="latitude">Latitude:</label>'+
            '<input type="text" class="form-control " id="busLatitude'+d.child('Bus_id').val()+'" value="'+ d.child("Latitude").val() +'" disabled>'+
            '</div>'+
            '<div class="form-group">'+
            '<label for="longitude">Longitude:</label>'+
            '<input type="text" class="form-control " id="busLongitude'+d.child('Bus_id').val()+'" value="'+ d.child("Longitude").val() +'" disabled>'+
            '</div>'+
                //i have to put in get data the dynamic index
            '<button type="submit" onclick="modifyBusData('+d.child('Bus_id').val() +')" id="submitModBus'+d.child('Bus_id').val()+'" class="btn btn-default">Submit</button>'+
            '</form>';


                        r +='</div>';
                        r +='<div class="modal-footer">';
                            r +='<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
                        r +='</div>';
                    r +='</div>';

                r +='</div>';
            r +='</div>';
            //<!-- end modalModify -->


            //<!-- start deleteModify -->
            r += '<div id="modalDelete'+d.child('Bus_id').val()+'" class="modal fade" role="dialog">';
            r += '<div class="modal-dialog">';
            var busIdent = d.child('Bus_id').val();
            //<!-- Modal content-->
            r +='<div class="modal-content">' ;
            r += '<div class="modal-header">';
            r +='<button type="button" class="close" data-dismiss="modal">&times;</button>';
            r +='<h4 class="modal-title">Deleting the bus '+ d.child('Bus_id').val()+ '</h4>';
            r +='</div>';
            r +='<div class="modal-body">';
            r +='<div>'+
                '<p>Bus capacity: '+d.child('Bus_capacity').val() +'<br>' +
                'Bus Type:'+ d.child('Bus_type').val()+'<br>' +
                'Driver Id: '+ d.child('Driver_id').val()+'<br>' +
                'Latitude: '+ d.child('Latitude').val()+'<br>' +
                'Longitude: '+ d.child('Longitude').val()+'<br>' +
                '</p>'+
                //i have to put in get data the dynamic index
                '<button type="submit" onclick="deleteBus('+d.child('Bus_id').val() +')" id="deleteBus'+d.child('Bus_id').val()+'" class="btn btn-default" data-dismiss="modal">Delete</button>'+
                '</div>';


            r +='</div>';
            r +='<div class="modal-footer">';
            r +='<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
            r +='</div>';
            r +='</div>';

            r +='</div>';
            r +='</div>';
            //<!-- end delete Modal -->


        });
        //adding bus button
        r+='<div style="padding-left:100px ">';
        r+='<button class="btn btn-info btn-lg" data-toggle="modal" data-target="#addingBusModal" class="btn btn-lg btn-primary btn-circle">ADD BUS<i class="fa fa-plus"></i></button>';
        //<!-- Modal add bus -->
        r+='<div id="addingBusModal" class="modal fade" role="dialog">';
        r+='<div class="modal-dialog">';

        //  <!-- Modal content add bus-->
        r+='<div class="modal-content">';
        r+='<div class="modal-header">';
        r+='<button type="button" class="close" data-dismiss="modal">&times;</button>',
        r+='<h4 class="modal-title">Modal Header</h4>';
        r+='</div>';
        r+='<div class="modal-body">';
    r +='<form>'+
        '<div class="form-group">'+
        '<label for="id">Bus Id:</label>'+
        '<input type="text" class="form-control" id="addBusId" >'+
        '</div>'+
        '<div class="form-group">'+
        '<label for="capacity">Capacity:</label>'+
        '<input type="text" class="form-control" id="addBusCapacity" >'+
        '</div>'+
        '<div class="form-group">'+
        '<label for="type">Type:</label>'+
        '<input type="text" class="form-control" id="addBusType" >'+
        '</div>'+
        '<div class="form-group">'+
        '<label for="driver">Driver:</label>'+
        '<input type="text" class="form-control" id="addBusDriver" >'+
        '</div>'+
        '<div class="form-group">'+
        '<label for="latitude">Latitude:</label>'+
        '<input type="text" class="form-control " id="addBusLatitude" >'+
        '</div>'+
        '<div class="form-group">'+
        '<label for="longitude">Longitude:</label>'+
        '<input type="text" class="form-control " id="addBusLongitude" >'+
        '</div>'+
        //i have to put in get data the dynamic index
        '<button type="submit" onclick="insertBus()" id="submitModBus" class="btn btn-default" data-dismiss="modal">Submit</button>'+
        '</form>';
        r+='</div>';
        r+='<div class="modal-footer">';
        r+='<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
        r+='</div>';
        r+='</div>';

        r+='</div>';
        r+='</div>';
        //end modal add bus

        r+='</div>';
        r+='</div>';
        r+='<div class="col-md-6 col-sm-6 col-xs-6">';
            r+='<div id="mapBus" style="width:500px;height:500px;background:yellow">';
                r+= '<button type="button" onclick="getMapBus()" id="mapBus" class="btn btn-default">Submit</button>';
            r+='</div>';
        r+='</div>';
    r+='</div>';
    return r;
}



function getDriver(data) {
    var r = "";
    r+='<div class = "intestation" id="intestation">';
    r+='<div class = "row" >';
    r+='<div class="col-md-6 col-sm-6 col-xs-6" >';
    r+='<h3 id = "titleIntestation" >Driver Management</h3>';
    r+='<h4 id = "minimalDescription">Here you can see and modify the drivers of our company </h4>';
    r+='</div>';
    r+='<div class="col-md-6 col-sm-6 col-xs-6">';
    r+='<img src = "Images/modifyBuses.jpg" class = "intestationImages"  >';
    r+='</div>';
    r+='</div>';
    r+='</div>';

    r+='<div>';
    r+='<div class="row">';
    r+='<div class="col-md-6 col-sm-6 col-xs-6" id="busList">';
    data.forEach(function (d) {
        r += '<div><h4>' + d.child('Bus_id').val() + '</h4></div>';
    });
    r+='</div>';
    r+='<div class="col-md-6 col-sm-6 col-xs-6">';
    r+='</div>';
    r+='</div>';
    r+='</div>';
    return r;
}