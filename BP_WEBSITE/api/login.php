<?php
header("Access-Control-Allow-Origin: *");
?>

<div class="background-image" id="backgroundimage"></div>
    <div class="content" id="content">
    <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-3"></div>
        <div class="col-md-6 col-sm-6 col-xs-6">
            <div class="jumbotron" id="jumbo" style="height:50px">
                <div class="col-md-2 col-sm-2 col-xs-2"></div>
                <div class="col-md-8 col-sm-8 col-xs-8">
                <ul class="nav nav-tabs" style="margin-bottom:8%; margin-top:35%">
                    <li role="presentation" class="active"><a href="#">Fleet manager</a></li>
                    <li role="presentation"><a href="#">Bus driver</a></li>
                </ul>
                <div class="form-group form-group-lg">
                    <input type="text" class="form-control" style="margin-bottom:3%" placeholder="Username">
                    <input type="text" class="form-control" placeholder="Password">
                </div>
                <div class="text-center"><button type="button" class="btn btn-primary" style="min-width:20%">Login</button></div>
                <h4 class="text-center">Did you forget your password? <a href="#">Click here</a></h4> 
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2"></div>
            </div>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-3"></div>
    </div>
</div>