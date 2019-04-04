$(document).ready(function() {


    (function() {

        //Target countdown element in DOM
        var attrData = $(".countdown").attr("data-time");
        var countDownDate = new Date(attrData).getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {


            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = "DAYS: " + Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = "HOURS: " + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = "MINUTES: " + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = "SECONDS: " + Math.floor((distance % (1000 * 60)) / 1000);


            //Countdown conditional logic
            if (days < 10) days = "0" + days;
            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;
            if (seconds < 10) seconds = "0" + seconds;


            $("#circledays").html(days);

            $("#circlehours").html(hours);
            $("#circleminutes").html(minutes);
            $("#circleseconds").html(seconds);

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);

                $(".countdown").html("<b>THE DATE HAS ARRIVED!</b>");


            }
        }, 1000);


    })();

    

});