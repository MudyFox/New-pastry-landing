$(function () {
    $("#navToggle").on('click', function () {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("open");
        // this line ▼ prevents content scroll-behind
        $("body").toggleClass("locked");
    });
    $('.overlay').on('click', function () {
        $(this).removeClass('open');
        $('.navBurger').removeClass('active');
    });


    let swiper = new Swiper('.swiper-container', {
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
    $(function(){
        $('a[href^="#"]').on('click', function () {
            let target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top}, 800);
            return false;
        });
    });

})
