function getTimeLeft() {
    // sets min time to 30 seconds and max to 60 seconds
    const min = 10;
    const max = 20;
    
    const seconds = Math.floor(Math.random() * (max - min) + min);
    const milliseconds = (seconds * 1000) + 1000;

    return {
        seconds: seconds,
        milliseconds: milliseconds
    };
};

function thePainting() {
    $("html").addClass("painting");

    setTimeout(() => {
        $("body").show();
        $("html").removeClass("painting");
    }, 5000)
}

function bigScaryJumpScare() {
    $("html").addClass("scaryFace");
    $("body").hide();

    setTimeout(() => {
        $("body").show();
        $("html").removeClass("scaryFace");
        //thePainting();

    }, 15000);
};

// sets the countdown from n seconds
// clearInterval stops the interval function after n seconds
function countdownTimer(seconds) {
    const hahaFunny = setInterval(() => {
        $("#title").text(seconds);
        $(".subHeading").text("Please wait...");
        seconds --;

        // waits till timer is over than sets text back to normal
        if (seconds <= 0) {
            clearInterval(hahaFunny);
            setTimeout(() => {
                $("#title").text("Hello");
                $(".subHeading").text("My name is Caolin");
            }, 2000)
        }
    }, 1000);
 
};

// assigning seconds and milliseconds from object that function returned
const timeLeft = getTimeLeft();
let seconds = timeLeft.seconds;
const milliseconds = timeLeft.milliseconds;

setTimeout(() => {
    countdownTimer(seconds);

    // sets timeout for bigScaryJumpScare function to n seconds + 1
    setTimeout(() => {
        bigScaryJumpScare();
    }, milliseconds);

}, 10000);

