$(document).ready(function() {

    //scrollfire initialization

    var options = [
        { selector: '.class', offset: 200, callback: customCallbackFunc },
        {
            selector: '.other-class',
            offset: 200,
            callback: function() {
                customCallbackFunc();
            }
        },
    ];
    Materialize.scrollFire(options);

    // icon animation

    let time = 1000;

    $(".dev-icons").get().forEach(function(icon) {
        $(icon).hide();
        setTimeout(function() {
            $(icon).show().addClass('animated fadeIn');
        }, time);
        time += 250;
    });
});