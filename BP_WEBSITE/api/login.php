<?php
header("Access-Control-Allow-Origin: *");
?>

<div class="background-image" id="backgroundimage"></div>
    <div class="content" id="content">
    <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-3"></div>
        <div class="col-md-6 col-sm-6 col-xs-6">
            <div class="jumbotron" style="margin-top:9%" id="jumbo">
                <div class="row">
                    <h2 class="text-center" style="margin-bottom:5%; font-size:50px;">Enter your credentials</h2>
                    <div class="col-md-2 col-sm-2 col-xs-2"></div>
                    <div class="col-md-8 col-sm-8 col-xs-8"> 
                    <div class="form-group form-group-lg">
                        <input type="text" class="form-control" style="margin-bottom:3%" placeholder="Username">
                        <input type="text" class="form-control" placeholder="Password">
                    </div>
                    <div class="text-center"><button type="button" class="btn btn-primary" id="login2" style="min-width:20%">Login</button></div>
                    <h4 class="text-center">Did you forget your password? <a href="#">Click here</a></h4> 
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-2"></div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-3"></div>
    </div>
</div>