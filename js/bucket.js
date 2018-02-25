$(document).ready(function() {
    $(".toggle").click(function() {
        $(".text").toggle();
    });
});

// jQuery UI Widgets
$(function() {
    $("#accordion").accordion();
});

// jQuery UI effect 'pulsate'
$("a.btn").click(function() {
    $(".jumbotron").toggle('pulsate', 1400); // jQuery UI effect 'pulsate'
    $('h1').text('Haruki Murakami');
});

$('.jumbotron').hide().delay(500).fadeIn(1400);