$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});
$('.overlay').click(function() {
    $(this).removeClass('open');
    $('.navBurger').removeClass('active');
});


var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next' ,
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    loop: true,
    autoplay: true,
    delay: 1000,
    breakpoints:{
        1200:{

        },
        1000:{
            slidesPerView: 2,
        },
        780:{
            slidesPerView: 1,

        },
        400:{
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 1,
        }

    },
});