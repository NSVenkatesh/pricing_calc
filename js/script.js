$(document).ready(function(){
    $("#range").val("1")
    $("#range").change(function(){
       var  x=$("#range").val();
        $("#user").html(x)
        var calc=x*4.99;
        $("#price").html("$ "+calc.toFixed(2));
    })
    $("#range").on("mousemove touchmove",function(){
        var valueInput=$("#range").val();
        var percent=valueInput/2;
        var val="linear-gradient(to right,white 0%, white "+percent+"%, #75bbf8 "+percent+"%, #75bbf8 100%)"
        $("#range").css("background",val)
    })
})

