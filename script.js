$(() => {
    // let bar = 0;
    // $("input[type=text]").one("keyup", (e) => {
    //     let size = $("input").length;
    //     // let valid = $("input ")
    //     bar = bar + $(".status").width() / size;
    //     $(".status .bar").animate({
    //         width: `${bar}`
    //     });
    // });
    $("form").validate({
        rules: {
            name: { required: true, minlength: 4 },
            nature_dl: { required: true },
            smart_dl: { required: true },
        },
        messages: {
            name: "",
            nature_dl: "",
            smart_dl: ""
        }
    });
    $("input").on("change", (e) => {
        let size = $("input").length;
        // let valid = $("input ")
        // if ($(e.target).valid()) {

        // }

        let count = 0;
        $("input").each(function(){
            if ($(this).valid()) count++;
        })
        
        let bar = ($(".status").width() / size) * count;
        $(".status .bar").animate({
            width: `${bar}`
        });


    });

    $(".back").on("click", () => {
        $("#registration_form").trigger("reset");
        $("input").trigger("change");
    })
})