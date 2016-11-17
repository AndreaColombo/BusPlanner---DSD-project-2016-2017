/*home*/
function home(data) {
    var r = "";
    r+='<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">';
    r+='<ol class="carousel-indicators">';
    r+='<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>';
    r+='<li data-target="#carousel-example-generic" data-slide-to="1"></li>';
    r+='<li data-target="#carousel-example-generic" data-slide-to="2"></li>';
    r+='</ol>';
    r+='<div class="carousel-inner" role="listbox" data-pause="hover">';
    r+='<div class="item active">';
    r+='<img src="Images/Homepage2.jpg" style="min-width:100%; min-height:30%;" alt="Homepage2">';
    r+='<div class="carousel-caption">';
    r+='<h2>Fleet management</h2>';
    r+='</div>';
    r+='</div>';
    r+='<div class="item">';
    r+='<img src="Images/Homepage1.png" style="min-width:100%; min-height:30%;" alt="Homepage1">';
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
    r+='</a></div>';
    return r;
}