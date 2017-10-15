$(function() {
    
    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

   $("#button").click(function() {

    var y = $("#email").val();

    if (y.includes("@")) {

        alert ("Thanks for Subscribing " + y + "!");
    }
       else alert (" Enter a valid email fool!");
   
});

});