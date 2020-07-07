$(document).on("load", function() {
    $("#loader").show();
});

$(document).ready(function() {
    setTimeout(function() {
        $("#loader").fadeOut("slow");
    }, $("#loader").attr("loader-time") || 1000);
});