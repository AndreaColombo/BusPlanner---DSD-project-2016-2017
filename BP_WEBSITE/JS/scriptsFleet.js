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
                    r+='<a class="navbar-brand" href="indexFleet.html" id="btnLogo1"><img alt="Brand" style="max-height:40px" src="Images/BusLogo.gif"></a>';
                    r+='<a class="navbar-brand" style="padding-top:25px" href="indexFleet.html" id="btnLogo2">BusPlanner</a>';
                r+='</div>';
                r+='<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
                    r+='<ul class="nav navbar-nav navbar-right">';
                        r+='<li><a id="btnBus" href="#" style="padding-top:25px">Bus Managment</a></li>';
                        r+='<li><a id="btnDriver" href="#" style="padding-top:25px">Driver</a></li>';
		                r+='<li><a id="btnSchedule" href="#" style="padding-top:25px">Route Schedule</a></li>';
                        r+='<li><a id="btnTime" href="#" style="padding-top:25px">Schedele Time</a></li>';
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

function bus(data) {
    var r = "";
    r+='<div class = "intestation" id="intestation">';
    r+='<div class = "row" >';
    r+='<div class="col-md-6 col-sm-6 col-xs-6" >';
    r+='<h3 id = "titleIntestation" >Bus Management</h3>';
    r+='<h4 id = "minimalDescription">Here you can add, remove, or modify our buses </h4>';
    r+='</div>';
    r+='<div class="col-md-6 col-sm-6 col-xs-6">';
    r+='<img src = "../Images/modifyBuses.jpg" class = "intestationImages"  >';
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