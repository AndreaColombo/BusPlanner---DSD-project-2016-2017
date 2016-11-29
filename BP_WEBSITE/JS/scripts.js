<<<<<<< HEAD
function home() {
    var r='';
    r+='<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">';
    r+='<ol class="carousel-indicators">';
    r+='<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>';
    r+='<li data-target="#carousel-example-generic" data-slide-to="1"></li>';
    r+='<li data-target="#carousel-example-generic" data-slide-to="2"></li>';
    r+='</ol>';
    r+='<div class="carousel-inner" role="listbox" data-pause="hover">';
    r+='<div class="item active">';
    r+='<img src="Images/Homepage2.jpg" style="min-width:100%; min-height:62%;" alt="Homepage2">';
    r+='<div class="carousel-caption">';
    r+='<h2>Fleet management</h2>';
    r+='</div>';
    r+='</div>';
    r+='<div class="item">';
    r+='<img src="Images/Homepage1.png" style="min-width:100%; min-height:62%;" alt="Homepage1">';
    r+='<div class="carousel-caption">';
    r+='<h2>Customer trip management</h2>';
    r+='</div></div>';
    r+='<div class="item">';
    r+='<img src="Images/Homepage3.jpg" style="min-width:100%; max-height:62%;" alt="Homepage1">';
    r+='<div class="carousel-caption">';
    r+='<h2>Customer relationship <br> management (CRM)</h2>';
    r+='</div></div></div>';
    r+='<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">';
    r+='<span class="icon icon-prev" aria-hidden="true"></span>';
    r+='<span class="sr-only">Previous</span>';
    r+='</a>';
    r+='<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">';
    r+='<span class="icon icon-next" aria-hidden="true"></span>';
    r+='<span class="sr-only">Next</span>';
    r+='</a>';
    r+='</div>';
    return r;
}

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
    r+='<button type="button" onclick="getEmailAndPassword(txtEmail, txtPassword)" class="btn btn-primary"  id="btnLogin2" style="min-width:20%; margin-right:3%;">Log in</button>';
    r+='<button type="button" onclick="getEmailAndPassword(txtEmail, txtPassword)" class="btn btn-success" id="btnSignUp" style="min-width:20%; margin-left:3%;">SignUp</button>';
    r+='<button type="button" class="btn btn-default hide" id="btnLogout" style="min-width:20%">Log out</button>';
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
=======
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
>>>>>>> origin/master
    return r;
}