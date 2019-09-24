$(document).ready(function () {





    $("#redline").on("change paste keyup", function () {
        $("#warning").addClass("d-flex");




    });

    $(".enter-wrapper button").on("click", function () {
        $("#error-show").addClass("d-flex");
        $("#redline").addClass("error");
        $("#redlines").addClass("error");
        $("#reminder").addClass("error");

    });


})