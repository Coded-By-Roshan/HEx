
$(window).scroll(function () {
    if (this.scrollY > 20) {
        $(".navabr").addClass("sticky");

    }
    else {

        $(".navabr").removeClass("sticky");
    }
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 3
        },
        750: {
            items: 5
        }
    }
})

$('.menu-toggler').click(function () {
    $(this).toggleClass('active');
    $('.navabr').toggleClass('active');
});

