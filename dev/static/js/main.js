$(document).ready(function () {


    $(window).on('load',function () {
        var swiperTarif = new Swiper(".tarif-slider", {
            slidesPerView: 5,
            autoHeight: true,
            watchOverflow: true,
            watchSlidesProgress: true,
            spaceBetween: 28,
            navigation: {
                nextEl: ".slider-button-next",
                prevEl: ".slider-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
            },
            breakpoints: {
                // mobile + tablet - 320-990
                320: {
                    slidesPerView: 'auto',
                },
                576:{
                    slidesPerView: 2,
                },
                768:{
                    slidesPerView: 2,
                },
                // desktop >= 991
                992: {
                    slidesPerView: 3,
                },
                1199: {
                    slidesPerView: 4,
                },
                1399: {
                    slidesPerView: 5,
                }
            }
        });

        var swiperReviews = new Swiper(".reviews-slider", {
            slidesPerView: 'auto',
            //slidesPerView: 4,
            autoHeight: true,
            watchOverflow: true,
            watchSlidesProgress: true,
            spaceBetween: 28,
            navigation: {
                nextEl: ".review-button-next",
                prevEl: ".review-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
            },
            breakpoints: {
                // mobile + tablet - 320-990
                // 320: {
                //     slidesPerView: 'auto',
                // },
                // 576:{
                //     slidesPerView: 1,
                // },
                // 768:{
                //     slidesPerView: 1,
                // }
            }
        });

        var swiperReviews2 = new Swiper(".reviews-2-slider", {
            // slidesPerView: 'auto',
            slidesPerView: 3,
            autoHeight: true,
            watchOverflow: true,
            watchSlidesProgress: true,
            spaceBetween: 28,
            navigation: {
                nextEl: ".review-button-next",
                prevEl: ".review-button-prev",
            },
            breakpoints: {
                // mobile + tablet - 320-990
                320: {
                    slidesPerView: 'auto',
                },
                576:{
                    slidesPerView: 1,
                },
                768:{
                    slidesPerView: 2,
                },
                // desktop >= 991
                992: {
                    slidesPerView: 2,
                }
                // 1399: {
                //     slidesPerView: 5,
                // }
            }
        });

        var swiperPractice = new Swiper(".practice-slider", {
            // slidesPerView: 'auto',
            slidesPerView: 3,
            autoHeight: true,
            watchOverflow: true,
            watchSlidesProgress: true,
            spaceBetween: 26,
            navigation: {
                nextEl: ".practice-button-next",
                prevEl: ".practice-button-prev",
            },
            breakpoints: {
                // mobile + tablet - 320-990
                320: {
                    slidesPerView: 'auto',
                },
                576:{
                    slidesPerView: 1,
                },
                768:{
                    slidesPerView: 2,
                },
            }
        });

        var swiperTask = new Swiper(".task-slider", {
            // slidesPerView: 'auto',
            slidesPerView: 5,
            autoHeight: true,
            watchOverflow: true,
            watchSlidesProgress: true,
            spaceBetween: 26,
            navigation: {
                nextEl: ".review-button-next",
                prevEl: ".review-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
            },
            breakpoints: {
                // mobile + tablet - 320-990
                320: {
                    slidesPerView: 'auto',
                },
                576:{
                    slidesPerView: 'auto',
                },
                768:{
                    slidesPerView: 2,
                },
            }
        });
        var swiperPaket = new Swiper(".paketi-slider", {
            slidesPerView: 'auto',
            //slidesPerView: 4,
            autoHeight: true,
            watchOverflow: true,
            watchSlidesProgress: true,
            spaceBetween: 28,
            navigation: {
                nextEl: ".practice-button-next",
                prevEl: ".practice-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
            },
            breakpoints: {
                // mobile + tablet - 320-990
                320: {
                    slidesPerView: 'auto',
                },
                576:{
                    slidesPerView: 2,
                },
                768:{
                    slidesPerView: 2
                },
            }
        });


        if($(window).width() <= 1199){
            var swiperAdvantages = new Swiper(".tarif-advantages", {
                // slidesPerView: 'auto',
                autoHeight: true,
                watchOverflow: true,
                watchSlidesProgress: true,
                spaceBetween: 20,
                navigation: {
                    nextEl: ".practice-button-next",
                    prevEl: ".practice-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                },
                breakpoints: {
                    // mobile + tablet - 320-990
                    320: {
                        slidesPerView: 'auto',
                    },
                    576:{
                        slidesPerView: 1,
                    },
                    768:{
                        slidesPerView: 1,
                    },
                    // desktop >= 991
                    992: {
                        slidesPerView: 2,
                    }
                    // 1399: {
                    //     slidesPerView: 5,
                    // }
                }

            });
        }
    });

    $('.faq-question').on('click',function () {
       let currentSelectEl = $(this).parents('.faq-item').find('.faq-answer');
       $(this).parents('.faq-item').toggleClass('active').siblings().removeClass('active');
       currentSelectEl.slideToggle(200);
       $('.faq-answer').not(currentSelectEl).slideUp(200);
    });

    $('.radio-flex').on('click',function () {
       $(this).addClass('active').siblings().removeClass('active');
    });

    $('.b-categ__item').on('click',function () {
       $(this).toggleClass('active');
       let count_el = $('.b-categ__item.active').length;
       $(this).parents('.blog-category').find('.b-categ__title span').text('('+ count_el +')');
    });

    $('.b-tags__item').on('click',function () {
        $(this).toggleClass('active');
        let count_el = $('.b-tags__item.active').length;
        $(this).parents('.blog-tags').find('.b-tags__title span').text('('+ count_el +')');
    });

    $("#rateyo").each( function() {
        var rating = $(this).attr("data-rating");
        $(this).rateYo(
            {
                rating: 5, //rating
                "ratedFill": "#FACC15",
                "starWidth": "30px",
                "spacing": "8px",
                "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30">\n' +
                    '<path fill-rule="evenodd" clip-rule="evenodd" d="M29.8333 10.6173C30.0619 10.8038 30.234 11.0557 30.3286 11.3425C30.4014 11.6292 30.3951 11.9317 30.3102 12.2148C30.2254 12.4979 30.0655 12.75 29.8492 12.9418L23.6627 19.2135L25.1606 28.1193C25.2141 28.4132 25.1861 28.717 25.0799 28.9949C24.9737 29.2727 24.7938 29.5129 24.5614 29.6872C24.3044 29.882 23.9949 29.9863 23.6776 29.9851C23.4363 29.9859 23.1988 29.9211 22.9886 29.7969L15.349 25.6106L7.70937 29.7969C7.4581 29.9456 7.17114 30.0152 6.88299 29.9972C6.59485 29.9793 6.3178 29.8745 6.08518 29.6956C5.85256 29.5168 5.67427 29.2713 5.57176 28.9889C5.46925 28.7064 5.44689 28.399 5.50737 28.1036L7.00533 19.1978L0.818752 12.9261C0.626201 12.725 0.489608 12.4728 0.423632 12.1965C0.357656 11.9203 0.364788 11.6305 0.444262 11.3582C0.531084 11.0795 0.690791 10.8319 0.90526 10.6435C1.11973 10.455 1.38037 10.3332 1.65761 10.292L10.181 8.97495L14.0008 0.88448C14.1235 0.61939 14.315 0.395825 14.5534 0.239396C14.7919 0.0829664 15.0676 0 15.349 0C15.6304 0 15.9061 0.0829664 16.1445 0.239396C16.383 0.395825 16.5745 0.61939 16.6971 0.88448L20.5169 8.99063L29.0403 10.292C29.3292 10.3179 29.6046 10.4309 29.8333 10.6173ZM9.0126 25.5008L13.851 22.8354L15.349 21.9772L16.8469 22.8354L21.6854 25.5008L20.6068 18.9156C20.5675 18.666 20.5865 18.4101 20.6621 18.1698C20.7378 17.9296 20.8678 17.712 21.0412 17.5358L25.61 12.9261L19.3036 11.9697C19.0609 11.9343 18.8302 11.8373 18.6318 11.6869C18.4333 11.5366 18.2731 11.3376 18.1651 11.1073L16.8469 8.30074L15.349 4.02028L13.851 8.30074L12.6077 11.0132C12.4998 11.2435 12.3396 11.4425 12.1411 11.5928C11.9426 11.7432 11.7119 11.8403 11.4693 11.8756L5.16284 12.832L9.65672 17.5358C9.8301 17.712 9.96017 17.9296 10.0358 18.1698C10.1115 18.4101 10.1304 18.666 10.0911 18.9156L9.0126 25.5008Z"/>\n' +
                    '</svg>'
                //readOnly: true
            }
        );
    });

    $('.article-widget__content').on('click',function () {
       $(this).toggleClass('active');
       $('.article-content__container').slideToggle(200);
    });

    $('.practice-articles__title').on('click',function () {
       $(this).toggleClass('active');
       $('.b-articles__list').slideToggle(200)
    });

    $('.practice-tab').on('click',function () {
       let tab = $(this).attr('data-tab');
       $(this).addClass('active').siblings().removeClass('active');

    });


    $(function () {
        $('[data-cus-target]').on('click',function () {
            let get_target = $(this).attr('data-cus-target');
            $('.popup[id='+ get_target +']').addClass('active');
            $('body').addClass('modal-active');
        });
        $('.popup-close').on('click',function () {
            $(this).parents('.popup').removeClass('active');
            $('body').removeClass('modal-active');
        });

        $('.popup').click(function (e) {
            if (!$(e.target).closest(".popup__wrapper").length) {
                $('.popup').removeClass('active');
                $('body').removeClass('modal-active');
            }
            e.stopPropagation();
        });
    });

    $(function () {
        $('.input-select').on('click',function () {
            $(this).toggleClass('active');
            $(this).next().slideToggle(200);
        });

        $(document).click(function (e) {
            if (!$(e.target).closest(".input-select,.input-select__list").length) {
                $('.input-select__list').slideUp(200);
            }
            e.stopPropagation();
        });

        $('.input-select__item').on('click',function () {
           let get_val = $(this).text();
           $(this).parent('.input-select__list').prev().find('.input-select__placeholder').text(get_val);
           $(this).parent().slideUp(200);
        });
    });

    $('.search-button').on('click',function () {
       $('.mobile-search').addClass('active');
        $('body').addClass('overflow-body-hidden');
    });
    $('.search-close').on('click',function () {
        $('.mobile-search').removeClass('active');
        $('body').removeClass('overflow-body-hidden');
    });

    $('[data-menu]').on('click',function () {
       let this_attr = $(this).attr('data-menu');
       $(this).addClass('active').siblings().removeClass('active');
       if($(this).hasClass('active')){
           $('body').addClass('overflow-body-hidden');
           $('#'+ this_attr).addClass('active').siblings().removeClass('active');
       } else {
           $('body').removeClass('overflow-body-hidden');
       }
    });
    $('.menu-tab__close').on('click',function () {
       $('body').removeClass('overflow-body-hidden');
       $(this).parents('.menu-tab').removeClass('active');
    });

    $('.stock-close').on('click',function () {
       $('.stock-wrapper').slideUp(200);
    });
});