function hahaFunny() {
    const min = 30;
    const max = 60;

    const randNum = Math.floor(Math.random() * (max - min) + min);
    const miliseconds = randNum * 1000;

    const bigScaryJumpScare = setTimeout(() => {
        $("html").addClass("scaryFace");
        $("body").hide();

       setTimeout(() => {
            $("body").show();
            $("html").removeClass("scaryFace");

           bigScaryJumpScare.break;
       }, 15000);
    }, miliseconds);
};

hahaFunny();

