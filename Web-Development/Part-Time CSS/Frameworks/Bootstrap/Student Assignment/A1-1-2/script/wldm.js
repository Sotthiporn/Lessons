$(document).ready(function(){
   /* $("#internet").fadeOut(5000);
    $("#internet").fadeIn(5000);
    $("#internet").fadeTo(5000,0.3);
*/
    $("#hide").click(function(){
        $("h1").text("Event, Effect:hide, Animation & DOM");
        $("#internet").hide();
    });
    $("#show").click(function(){
        $("h1").text("Event, Effect:Show, Animation & DOM");
        $("#internet").show();
    });
    $("#fadeout").click(function(){
        $("h1").text("Event:Change, Effect:Fade Out, Animation & DOM");
        $("#internet").fadeOut(5000);
    });
    $("#fadein").click(function(){
        $("h1").text("Event:Change, Effect:Fade In, Animation & DOM");
        $("#internet").fadeIn(5000);
    });
    $("#fadeTo").change(function(){
        $("h1").text("Event:Change, Effect:Fade To, Animation & DOM");
        $("#internet").fadeTo(5000,$(this).val()/100);
    });
    $("#slideUp").click(function(){
        $("h1").text("Event:Change, Effect:Slide Up, Animation & DOM");
        $("#internet").slideUp(2000);
    });
    $("#slideDown").click(function(){
        $("h1").text("Event:Change, Effect:Slide Down, Animation & DOM");
        $("#internet").slideDown(3000);
    });
    $("#slideLeft").click(function(){
        $("h1").text("Event:Change, Effect:Slide Up, Animation & DOM");
        $("#internet").animate({width:"0",height:"0"},2500);
        $("#internet").animate({width:"975px",height:"500px"},2500);

    });
});