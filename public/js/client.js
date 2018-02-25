$(document).ready(function() {

    $(".button-collapse").sideNav();

    let time = 1000;

    $(".dev-icons").get().forEach(function(icon) {
    	$(icon).hide();
        setTimeout(function() {
            $(icon).show().addClass('animated zoomIn');
        }, time);
        time += 250; 
    });
});