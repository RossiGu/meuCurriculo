let botton = document.getElementById("bottonFixed");

botton.addEventListener("click", function () {
    window.scrollTo(0, 0);
}); // Estava sem JQuery

$("#professional").click(function() {
    $('html, body').animate({
        scrollTop: $("#performance").offset().top
    }, 1000);
});

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutme").offset().top
    }, 1000);
});

$("#formation1").click(function() {
    $('html, body').animate({
        scrollTop: $("#formation").offset().top
    }, 1000);
});

$("#tools").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 1000);
});