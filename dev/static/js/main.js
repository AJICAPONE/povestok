$(document).ready(function () {
    $('.fixed-upper-button').click(function() {
        $('html, body').animate({scrollTop: 0}, 500);
    });

    var swiperTarif = new Swiper(".tarif-slider", {
        slidesPerView: 5,
        //autoHeight: true,
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
        //autoHeight: true,
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
            },
            1399: {
                slidesPerView: 3,
            }
        }
    });

    var swiperPractice = new Swiper(".practice-slider", {
        // slidesPerView: 'auto',
        slidesPerView: 3,
        //autoHeight: true,
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
            1399:{
                slidesPerView: 3,
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
            992:{
                slidesPerView: 3
            },
            1200:{
                slidesPerView: 3
            },
            1350:{
                slidesPerView: 3
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
                slidesPerView: 1,
            },
            768:{
                slidesPerView: 2
            },
            992:{
                slidesPerView: 2
            },
            1200:{
                slidesPerView: 3
            },
            1350:{
                slidesPerView: 3
            },
        }
    });

    var swiperEmplo = new Swiper(".emplo-slider", {
        slidesPerView: 'auto',
        //slidesPerView: 4,
        autoHeight: true,
        watchOverflow: true,
        watchSlidesProgress: true,
        spaceBetween: 28,
        navigation: {
            nextEl: ".emplo-button-next",
            prevEl: ".emplo-button-prev",
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
                slidesPerView: 2
            },
            992:{
                slidesPerView: 2
            },
            1200:{
                slidesPerView: 3
            },
            1350:{
                slidesPerView: 3
            },
        }
    });

    var swiperAbout = new Swiper(".about-data__slider", {
        slidesPerView: 1,
        //slidesPerView: 4,
        autoHeight: true,
        watchOverflow: true,
        watchSlidesProgress: true,
        //spaceBetween: 28,
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
            //     slidesPerView: 2
            // },
            // 992:{
            //     slidesPerView: 2
            // },
            // 1200:{
            //     slidesPerView: 3
            // },
            // 1350:{
            //     slidesPerView: 3
            // },
        }
    });


    if($(window).width() <= 1199){
        var swiperAdvantages = new Swiper(".tarif-advantages", {
            // slidesPerView: 'auto',
            autoHeight: true,
            watchOverflow: true,
            watchSlidesProgress: true,
            spaceBetween: 30,
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

        var swiperVideo = new Swiper(".video-employer__list", {
            slidesPerView: 'auto',
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
                    slidesPerView: 1,
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
    }

    if($(window).width() <= 768){
        var swiperAbouts = new Swiper(".about-basics__list", {
            slidesPerView: 'auto',
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
                    slidesPerView: 1,
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
    }

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

    $('.s-review__item-rateyo').each(function () {
        var rating = $(this).attr("data-rating");
        $(this).rateYo(
            {
                rating: 5, //rating
                readOnly: true,
                "ratedFill": "#FFA800",
                "starWidth": "15px",
                "spacing": "3px",
                "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">\n' +
                    '<path d="M7.5 0L9.27051 5.72949H15L10.3647 9.27051L12.1353 15L7.5 11.459L2.86475 15L4.63526 9.27051L0 5.72949H5.72949L7.5 0Z"/>\n' +
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

    $('.h-search').on('click',function () {
        $('.desctop-search').addClass('active');
        $('body').addClass('overflow-body-hidden');
    });
    $('.search-close').on('click',function () {
        $('.desctop-search').removeClass('active');
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

    $('.tarif-input-check').on('click',function () {
       $(this).addClass('active').siblings().removeClass('active');
    });

    $('.modal-stock-block').on('click',function () {
       $(this).toggleClass('active');
    });

    $('.input-value').on('input',function () {
       let this_val = $(this).val();
       if(this_val.length > 0){
           $(this).parents('.input-block__js').addClass('active');
           $('.mobile-input__search,.b-search__button').attr('style','display:none;');
           $('.mobile-input__delete,.b-delete__button').attr('style','display:flex;margin-right:0;');
       } else {
           $(this).parents('.input-block__js').removeClass('active');
           $('.mobile-input__search,.b-search__button').attr('style','display:flex;');
           $('.mobile-input__delete,.b-delete__button').attr('style','display:none;');
       }
    });
    $('.mobile-input__delete,.b-delete__button').on('click',function () {
        $(this).parents('.input-block__js').find('.input-value').val('');
        $('.mobile-input__delete,.b-delete__button').attr('style','display:none;');
        $('.mobile-input__search,.b-search__button').attr('style','display:flex;');
        $(this).parents('.input-block__js').removeClass('active');
    });

    $('.h-top-left__location').on('click',function () {
       $(this).parents('.header-top__left').toggleClass('active');
       $('.h-top-left__loc-menu').slideToggle(200);
    });

    $('.h-tllm__item').on('click',function () {
       let this_val = $(this).text();
       $('.h-tllm__select span').text(this_val);
       $('.h-top-left__loc-menu').slideUp(200);
    });

    $('.team-choise__top').on('click',function () {
       $(this).toggleClass('active');
       $(this).next('.team-choise__block').slideToggle(200);
    });
    $('.team-city__elem').on('click',function () {
       let this_text = $(this).text();
       $('.team-choise__text').text(this_text);
       $(this).parents('.team-choise__city').find('.team-choise__top').removeClass('active');
       $(this).parents('.team-choise__city').find('.team-choise__block').slideUp(200);
       let array_city = [];
       $('.team-chosen__city').each(function () {
          let name = $(this).find('span').text();
          array_city.push(name);
       });

       let html = `
            <div class="team-chosen__city">
                <span>${this_text}</span>
                <div class="team-chosen__city-close">
                    <svg class="icon icon-close">
                      <use xlink:href="static/img/svg/symbol/sprite.svg#close"></use>
                    </svg>
                </div>
            </div>
       `;

       if(array_city.includes(this_text)){

       } else {
           $('.team-choise__chosen').append(html);
       }
        $('.team-chosen__city-close').on('click',function () {
            $(this).parents('.team-chosen__city').remove();
        });

    });


    $(document).click(function (e) {
        if (!$(e.target).closest(".team-choise__city").length) {
            $('.team-choise__block').slideUp(200);
            $('.team-choise__top').removeClass('active')
        }
        e.stopPropagation();
    });


    $(window).on('scroll',function () {
        let top = $(this).scrollTop();
        if(top >= 222){
            $('.header-bottom__contacts-fixed').addClass('active');
        } else {
            $('.header-bottom__contacts-fixed').removeClass('active');
        }
    });

    // $('.h-menu__item').on('mouseenter',function () {
    //     $(this).find('.h-menu__item-depth2__wrap').slideDown(200);
    // });
    //
    // $('.h-menu__item').on('mouseleave',function () {
    //     $(this).find('.h-menu__item-depth2__wrap').slideUp(200);
    // });

    // $('.h-menu__item-depth1').hover(menuHoverIn,menuHoverOut);
    //
    // function menuHoverIn(e) {
    //     let this_el = $(this);
    //     // $('.header-nav-menu__bar').slideDown(200);
    //     $(this).addClass('active');
    //     $('.header-nav-menu__bar').slideDown(200);
    //     $('.header-nav-menu__bar').mouseleave(function () {
    //         $(this).slideUp(200);
    //     });
    // }
    //
    // function menuHoverOut() {
    //     let this_el = $(this);
    //     $(this).removeClass('active');
    //     $('.header-nav-menu__bar').slideUp(200);
    // }

    $('.h-menu__item').hover(menuHoverIn,menuHoverOut);

    function menuHoverIn() {
        let currentSelectEl = $(this).find('.h-menu__item-depth2__wrap');
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).hasClass('h-menu__item-depth1')){
            currentSelectEl.slideDown(200);
            $('.h-menu__item-depth2__wrap').not(currentSelectEl).slideUp(200);
            $('.header-nav-menu__bar').slideDown(200);
        } else {
            $('.header-nav-menu__bar').slideUp(200)
            $('.h-menu__item-depth2__wrap').slideUp(200);

        }
    }
    function menuHoverOut() {
        $(this).removeClass('active');
    }

    $('.header-bottom__contacts,.header-nav-menu__bar').hover(function (e) {

        if (!$(e.target).closest(".h-menu__item-depth1,.h-menu__item-depth2__wrap").length) {
            $('.header-nav-menu__bar').slideUp(200);
            $('.h-menu__item-depth2__wrap').slideUp(200);
        }
        e.preventDefault();
    });


    let location_url = window.location.href;
    $('.copy-link').attr('data-href',location_url);
    $('.copy-link').on('click',function () {
        let href = $(this).attr('data-href');
        let tempInput = document.createElement("input");
        tempInput.value = href;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        $(this).find('span').text('Скопировано');
    });

    $('.test-app__ajax').on('click','#test-start',testStart);
    function testStart() {
        let html = `
            <div class="test-app__left">
              <div class="sub-title-2">16 вопросов, которые помогут разобраться в своей годности к службе в армии</div>
              <div class="button-2" id="test-1">Начать тест</div>
            </div>
            <img class="test-app__right" src="/static/img/general/img4.png">
        `;
        $('.test-app__ajax').html(html);
        $('.test-app__wrapper').removeClass('active');
        $('body').removeClass('overflow-body-hidden');
    }

    $('.test-app__ajax').on('click','#test-1',test_1);
    function test_1() {
        let html = `
                <div class="test-app__left">
                    <div class="test-app__left-progress test-progress-11"></div>
                    <div class="test-app__progress-complete">Пройдено: <span class="progress-procent">11%</span></div> 
                    <div class="sub-title">Укажите возраст призывника</div>
                    <div class="test-app__radios">
                        <div class="radio-flex active">
                            <div class="radio"></div>
                            <span>Менее 16 лет</span>
                        </div>
                        <div class="radio-flex">
                            <div class="radio"></div>
                            <span>18-30 лет</span>
                        </div>
                        <div class="radio-flex">
                            <div class="radio"></div>
                            <span>16-18 лет</span>
                        </div>
                        <div class="radio-flex">
                            <div class="radio"></div>
                            <span>Больше 30 лет</span>
                        </div>
                    </div> 
                    <div class="test-app__buttons">
                         <div class="test-back" id="test-start">
                            <svg class="icon icon-left-arrow ">
                              <use xlink:href="static/img/svg/symbol/sprite.svg#left-arrow"></use>
                            </svg>
                         </div>
                         <div class="button-2" id="test-2">Далее</div>
                    </div>
                </div>
                <img class="test-app__right" src="/static/img/general/img4.png" alt="">   
        `;
        $('.test-app__ajax').html(html);
        $('.test-app__wrapper').addClass('active');
        $('body').addClass('overflow-body-hidden');
        $('.radio-flex').on('click',function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    }
    $('.test-app__ajax').on('click','#test-2',test_2);
    function test_2() {
        let html = `
                <div class="test-app__left">
                    <div class="test-app__left-progress test-progress-22"></div>
                    <div class="test-app__progress-complete">Пройдено: <span class="progress-procent">22%</span></div> 
                    <div class="sub-title">Что вас интересует?</div>
                    <div class="test-check-pictures">
                         <div class="test-check__picture active">
                            <img src="/static/img/general/img1.png" alt="">
                            <span>Военный билет</span>
                         </div>
                         <div class="test-check__picture">
                            <img src="/static/img/general/img2.png" alt="">
                            <span>Отсрочка от службы</span>
                         </div>
                    </div> 
                    <div class="test-app__buttons">
                         <div class="test-back" id="test-1">
                            <svg class="icon icon-left-arrow ">
                              <use xlink:href="static/img/svg/symbol/sprite.svg#left-arrow"></use>
                            </svg>
                         </div>
                         <div class="button-2" id="test-3">Далее</div>
                    </div>
                </div>
                <img class="test-app__right" src="/static/img/general/img4.png" alt="">   
        `;
        $('.test-app__ajax').html(html);
        $('.test-check__picture').on('click',function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    }

    $('.test-app__ajax').on('click','#test-3',test_3);
    function test_3() {
        let html = `
                <div class="test-app__left">
                    <div class="test-app__left-progress test-progress-33"></div>
                    <div class="test-app__progress-complete">Пройдено: <span class="progress-procent">33%</span></div> 
                    <div class="sub-title">Есть ли у вас хронические заболевания?</div>
                    <div class="test-check__yesno">
                         <div class="test-check__button">
                            <div class="test-check__icon">
                                <svg class="icon icon-ok ">
                                  <use xlink:href="static/img/svg/symbol/sprite.svg#ok"></use>
                                </svg>
                            </div>
                            <span>Да</span>
                         </div>
                         <div class="test-check__button">
                            <div class="test-check__icon">
                                <svg class="icon icon-close2 ">
                                  <use xlink:href="static/img/svg/symbol/sprite.svg#close2"></use>
                                </svg>
                            </div>
                            <span>Нет</span>
                         </div>
                    </div> 
                    <div class="test-app__buttons">
                         <div class="test-back" id="test-2">
                            <svg class="icon icon-left-arrow ">
                              <use xlink:href="static/img/svg/symbol/sprite.svg#left-arrow"></use>
                            </svg>
                         </div>
                         <div class="button-2" id="test-4">Далее</div>
                    </div>
                </div>
                <img class="test-app__right" src="/static/img/general/img4.png" alt="">   
        `;
        $('.test-app__ajax').html(html);
        $('.test-check__button').on('click',function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    }

    $('.test-app__ajax').on('click','#test-4',test_4);
    function test_4() {
        let html = `
                <div class="test-app__left width-100">
                    <div class="test-app__left-progress test-progress-44 width-48"></div>
                    <div class="test-app__progress-complete width-48">Пройдено: <span class="progress-procent">44%</span></div> 
                    <div class="sub-title pb-0">Чем вы болеете??</div>
                    <div class="sub-title__desc">Выберите один или несколько</div>
                    <div class="b-categ__list test-categ__tags">
                         <div class="b-categ__item">
                            <span>Респираторное заболевание</span>
                            <div class="b-categ__icon">
                                <svg class="icon icon-close ">
                                  <use xlink:href="static/img/svg/symbol/sprite.svg#close"></use>
                                </svg>
                            </div>
                         </div>
                         <div class="b-categ__item">
                            <span>Боли в суставах</span>
                            <div class="b-categ__icon">
                                <svg class="icon icon-close ">
                                  <use xlink:href="static/img/svg/symbol/sprite.svg#close"></use>
                                </svg>
                            </div>
                         </div>
                         <div class="b-categ__item">
                            <span>Мигрень</span>
                            <div class="b-categ__icon">
                                <svg class="icon icon-close ">
                                  <use xlink:href="static/img/svg/symbol/sprite.svg#close"></use>
                                </svg>
                            </div>
                         </div>
                         <div class="b-categ__item">
                            <span>Эпилепсия</span>
                            <div class="b-categ__icon">
                                <svg class="icon icon-close ">
                                  <use xlink:href="static/img/svg/symbol/sprite.svg#close"></use>
                                </svg>
                            </div>
                         </div>
                         <div class="b-categ__item">
                            <span>Гипертония</span>
                            <div class="b-categ__icon">
                                <svg class="icon icon-close ">
                                  <use xlink:href="static/img/svg/symbol/sprite.svg#close"></use>
                                </svg>
                            </div>
                         </div>
                         <div class="b-categ__item">
                            <span>Нарушение слуха</span>
                            <div class="b-categ__icon">
                                <svg class="icon icon-close ">
                                  <use xlink:href="static/img/svg/symbol/sprite.svg#close"></use>
                                </svg>
                            </div>
                         </div>
                         <div class="b-categ__item">
                            <span>Заболевание щитовидной железы</span>
                            <div class="b-categ__icon">
                                <svg class="icon icon-close ">
                                  <use xlink:href="static/img/svg/symbol/sprite.svg#close"></use>
                                </svg>
                            </div>
                         </div>
                         <div class="b-categ__item">
                            <span>Хроническое заболевание почек</span>
                            <div class="b-categ__icon">
                                <svg class="icon icon-close ">
                                  <use xlink:href="static/img/svg/symbol/sprite.svg#close"></use>
                                </svg>
                            </div>
                         </div>
                         <div class="b-categ__item">
                            <span>Психическое нарушение</span>
                            <div class="b-categ__icon">
                                <svg class="icon icon-close ">
                                  <use xlink:href="static/img/svg/symbol/sprite.svg#close"></use>
                                </svg>
                            </div>
                         </div>
                         <div class="b-categ__item">
                            <span>Другое</span>
                            <div class="b-categ__icon">
                                <svg class="icon icon-close ">
                                  <use xlink:href="static/img/svg/symbol/sprite.svg#close"></use>
                                </svg>
                            </div>
                         </div>
                    </div> 
                    <div class="test-app__buttons tab-jcsb">
                        <div class="test-tag__choisen">Выбрано: <span>0</span></div>
                         <div class="test-more__content">
                            <div class="test-back" id="test-3">
                                <svg class="icon icon-left-arrow ">
                                  <use xlink:href="static/img/svg/symbol/sprite.svg#left-arrow"></use>
                                </svg>
                             </div>
                             <div class="button-2" id="test-5">Далее</div>
                         </div>
                    </div>
                </div>
                
        `;
        $('.test-app__ajax').html(html);
        $('.b-categ__item').on('click',function () {
            $(this).toggleClass('active');
            let count_el = $('.b-categ__item.active').length;
            $(this).parents('.test-app__left').find('.test-tag__choisen span').text(count_el);
        });
    }

    $('.test-app__ajax').on('click','#test-5',test_5);
    function test_5() {
        let html = `
                <div class="test-app__left">
                    <div class="test-app__left-progress test-progress-55"></div>
                    <div class="test-app__progress-complete">Пройдено: <span class="progress-procent">55%</span></div> 
                    <div class="sub-title">Есть ли высыпания/пятна на коже?</div>
                    <div class="test-app__radios grid-column-3">
                        <div class="radio-flex active">
                            <div class="radio"></div>
                            <span>Да</span>
                        </div>
                        <div class="radio-flex">
                            <div class="radio"></div>
                            <span>Не обращал внимания</span>
                        </div>
                        <div class="radio-flex">
                            <div class="radio"></div>
                            <span>Нет</span>
                        </div>
                    </div> 
                    <div class="test-app__buttons">
                         <div class="test-back" id="test-4">
                            <svg class="icon icon-left-arrow ">
                              <use xlink:href="static/img/svg/symbol/sprite.svg#left-arrow"></use>
                            </svg>
                         </div>
                         <div class="button-2" id="test-6">Далее</div>
                    </div>
                </div>
                <img class="test-app__right" src="/static/img/general/img4.png" alt="">   
        `;
        $('.test-app__ajax').html(html);
        $('.radio-flex').on('click',function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    }

    $('.test-app__ajax').on('click','#test-6',test_6);
    function test_6() {
        let html = `
                <div class="test-app__left">
                    <div class="test-app__left-progress test-progress-66"></div>
                    <div class="test-app__progress-complete">Пройдено: <span class="progress-procent">66%</span></div> 
                    <div class="sub-title">Какое у вас зрение?</div>
                    <div class="test-app__radios grid-column-3">
                        <div class="radio-flex active">
                            <div class="radio"></div>
                            <span>Плохое</span>
                        </div>
                        <div class="radio-flex">
                            <div class="radio"></div>
                            <span>Среднее</span>
                        </div>
                        <div class="radio-flex">
                            <div class="radio"></div>
                            <span>Хорошее</span>
                        </div>
                    </div> 
                    <div class="test-app__buttons">
                         <div class="test-back" id="test-5">
                            <svg class="icon icon-left-arrow ">
                              <use xlink:href="static/img/svg/symbol/sprite.svg#left-arrow"></use>
                            </svg>
                         </div>
                         <div class="button-2" id="test-7">Далее</div>
                    </div>
                </div>
                <img class="test-app__right" src="/static/img/general/img4.png" alt="">   
        `;
        $('.test-app__ajax').html(html);
        $('.radio-flex').on('click',function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    }

    $('.test-app__ajax').on('click','#test-7',test_7);
    function test_7() {
        let html = `
                <div class="test-app__left">
                    <div class="test-app__left-progress test-progress-77"></div>
                    <div class="test-app__progress-complete">Пройдено: <span class="progress-procent">77%</span></div> 
                    <div class="sub-title">Вам требуется комментарий по результатам теста:</div>
                    <div class="test-app__radios">
                        <div class="radio-flex active">
                            <div class="radio"></div>
                            <span>От медицинского специалиста-эксперта</span>
                        </div>
                        <div class="radio-flex">
                            <div class="radio"></div>
                            <span>От юриста по военному праву</span>
                        </div>
                    </div> 
                    <div class="test-app__buttons">
                         <div class="test-back" id="test-6">
                            <svg class="icon icon-left-arrow ">
                              <use xlink:href="static/img/svg/symbol/sprite.svg#left-arrow"></use>
                            </svg>
                         </div>
                         <div class="button-2" id="test-8">Далее</div>
                    </div>
                </div>
                <img class="test-app__right" src="/static/img/general/img4.png" alt="">   
        `;
        $('.test-app__ajax').html(html);
        $('.radio-flex').on('click',function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    }

    $('.test-app__ajax').on('click','#test-8',test_8);
    function test_8() {
        let html = `
                <div class="test-app__left width-100">
                    <div class="sub-title__description width-48">Отлично, последний шаг!</div>
                    <div class="test-app__left-progress test-progress-88 width-48"></div>
                    <div class="test-app__progress-complete">Пройдено: <span class="progress-procent">88%</span></div> 
                    <div class="sub-title">Введите для получения результата</div>
                    <div class="test-app__inputs width-80">
                        <input class="input-value" type="text" placeholder="Имя">
                        <input class="input-value" type="tel" placeholder="+7 (___) ___-__-__" data-mask="+7 (000) 000-00-00">
                    </div>
                    <div class="test-app-input__desc">Отправляя заявку вы соглашаетесь с политикой обработки персональных данных.</div> 
                    <div class="test-app__buttons width-48">
                         <div class="test-back" id="test-7">
                            <svg class="icon icon-left-arrow ">
                              <use xlink:href="static/img/svg/symbol/sprite.svg#left-arrow"></use>
                            </svg>
                         </div>
                         <div class="button-2" id="test-finish">Далее</div>
                    </div>
                </div>
               
        `;
        $('.test-app__ajax').html(html);
        $('.radio-flex').on('click',function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    }

    $('.test-app__ajax').on('click','#test-finish',testFinish);
    function testFinish() {
        let html = `
                <div class="test-app__over-wrapper">
                    <div class="test-app__left result-test">
                        <div class="test-app__result-block">
                            <div class="test-app__result-left">
                                <div class="sub-title">Результаты теста</div>
                                <div class="test-app__date">31.10.2023</div>
                                <div class="test-over__title">Ограниченно годен к военной службе</div>
                                <div class="sub-title__desc">Вероятней всего, вы можете рассчитывать на категорию годности “В” и зачисление в запас</div>
                                <div class="test-over__buttons">
                                    <div class="test-over__copy copy-link" data-href="${window.location.href}">
                                        <span>Скопировать ссылку</span>
                                        <svg class="icon icon-copy ">
                                          <use xlink:href="static/img/svg/symbol/sprite.svg#copy"></use>
                                        </svg>
                                    </div>
                                    <div class="test-over__share" data-cus-target="popup-share">
                                        <span>Поделиться</span>
                                        <svg class="icon icon-share ">
                                          <use xlink:href="static/img/svg/symbol/sprite.svg#share"></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="test-app__result-right">
                                <div class="test-over__res">
                                    <div class="test-over__res-title">Категория годности </div>
                                    <div class="test-over__category">B</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="test-app__recommend-block">
                             <div class="sub-title">Индивидуальная рекоммендация</div>
                             <div class="sub-title__desc">Вероятней всего, вы можете рассчитывать на категорию годности “В” и зачисление в запас</div>
                             <div class="recommend-test__articles">
                                <a class="recommend-test__article" href="/">
                                    <div class="recommend-test__article-top">
                                        <div class="recommend-test__tab">Советуем почитать</div>
                                        <svg class="icon icon-right-arrow ">
                                          <use xlink:href="static/img/svg/symbol/sprite.svg#right-arrow"></use>
                                        </svg>
                                    </div>
                                    <div class="recommend-test__article-bot">
                                        <div class="recommend-test__article-title">Как не пойти в армию по закону в 2023 году</div>
                                        <div class="recommend-test__article-desc">Объясняем, какие есть законные способы избежать службы по призыву в российской армии.</div>
                                    </div>
                                </a>
                                <a class="recommend-test__article" href="/">
                                    <div class="recommend-test__article-top">
                                        <div class="recommend-test__tab">Советуем почитать</div>
                                        <svg class="icon icon-right-arrow ">
                                          <use xlink:href="static/img/svg/symbol/sprite.svg#right-arrow"></use>
                                        </svg>
                                    </div>
                                    <div class="recommend-test__article-bot">
                                        <div class="recommend-test__article-title">Как не пойти в армию по закону в 2023 году</div>
                                        <div class="recommend-test__article-desc">Объясняем, какие есть законные способы избежать службы по призыву в российской армии.</div>
                                    </div>
                                </a>
                                <a class="recommend-test__article" href="/">
                                    <div class="recommend-test__article-top">
                                        <div class="recommend-test__tab">Советуем почитать</div>
                                        <svg class="icon icon-right-arrow ">
                                          <use xlink:href="static/img/svg/symbol/sprite.svg#right-arrow"></use>
                                        </svg>
                                    </div>
                                    <div class="recommend-test__article-bot">
                                        <div class="recommend-test__article-title">Как не пойти в армию по закону в 2023 году</div>
                                        <div class="recommend-test__article-desc">Объясняем, какие есть законные способы избежать службы по призыву в российской армии.</div>
                                    </div>
                                </a>
                             </div>
                        </div>
                       
                        
                    </div>
                    
                </div>
                
               
        `;
        $('.test-app__ajax').html(html);
        $('.test-app__wrapper').removeClass('active');
        $('body').removeClass('overflow-body-hidden');
        $('.form-question__comment').attr('style','display:block;');
        $('.copy-link').on('click',function () {
            let href = $(this).attr('data-href');
            let tempInput = document.createElement("input");
            tempInput.value = href;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            $(this).find('span').text('Скопировано');
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
    }
    $('.themes-tab').on('click',function () {
       $(this).addClass('active').siblings().removeClass('active');
    });

    $('.rule-content__top').on('click',function () {
        let toggleEL = $(this).next('.rule-content__bottom');
        $(this).parents('.rule-content__item').toggleClass('active').siblings().removeClass('active');
        toggleEL.slideToggle(200);
        $('.rule-content__bottom').not(toggleEL).slideUp(200);
    });

    $('.rule-section__dropdown-top').on('click',function () {
        let toggleEL = $(this).next('.rule-section__dropdown-bottom');
        $(this).parents('.rule-section__dropdown').toggleClass('active').siblings().removeClass('active');
        toggleEL.slideToggle(200);
        $('.rule-section__dropdown-bottom').not(toggleEL).slideUp(200);
    });


});