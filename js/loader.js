$(document).on("load", function() {
    console.log ("loading");
    $("#loader").show();
});

$(document).ready(function() {
    console.log ("ready"); $("#loader").show();
    setTimeout(function() {
        console.log ("faded out");
        $("#loader").fadeOut("slow");
    }, 1000);
});