function hahaFunny() {
    const min = 30;
    const max = 60;

    const randNum = Math.floor(Math.random() * (max - min) + min);
    const miliseconds = randNum * 1000;

    const bigScaryJumpScare = setTimeout(() => {
        $("body").hide();
        $("html").addClass("scaryFace");

       setTimeout(() => {
            $("body").show();
            $("html").removeClass("scaryFace");

           bigScaryJumpScare.break;
       }, 15000);
    }, miliseconds);
};

hahaFunny();

