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