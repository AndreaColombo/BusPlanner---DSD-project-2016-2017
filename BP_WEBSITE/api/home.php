<?php
header("Access-Control-Allow-Origin: *");
?>

<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox" data-pause="hover">
    <div class="item active">
    <img src="Images/Homepage2.jpg" style="min-width:100%; min-height:62%;" alt="Homepage2">
    <div class="carousel-caption">
    <h2>Fleet management</h2>
    </div>
    </div>
    <div class="item">
    <img src="Images/Homepage1.png" style="min-width:100%; min-height:62%;" alt="Homepage1">
    <div class="carousel-caption">
    <h2>Customer trip management</h2>
    </div></div>
    <div class="item">
    <img src="Images/Homepage3.jpg" style="min-width:100%; max-height:62%;" alt="Homepage1">
    <div class="carousel-caption">
    <h2>Customer relationship <br> management (CRM)</h2>
    </div></div></div>
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="icon icon-prev" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="icon icon-next" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
    </a>
</div>
