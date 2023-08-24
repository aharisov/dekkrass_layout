'use strict';

/**Optionally add Bootstrap to your project**/
//import 'bootstrap';


/********** Paste your code here! ************/
ymaps.ready(init);

function init () {
    let myMap = new ymaps.Map('map', {
        center: [55.76, 37.64], // Москва
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });

}

/** products sliders in home page */
function homeSlidesInit() {
    const slider1 = document.querySelector('.home_auctions .splide');
    const slider2 = document.querySelector('.brands_slider .splide');

    if (slider1) {
        new Splide( '.home_auctions .splide', {
            perPage: 2,
            breakpoints: {
                1023: {
                    perPage: 1,
                },
            },
            gap: 31,
            pagination: false
        } ).mount();
    }

    if (slider2) {
        new Splide( '.brands_slider .splide', {
            perPage: 5,
            breakpoints: {
                1360: {
                    perPage: 4,
                },
                1199: {
                    perPage: 3,
                },
                639: {
                    perPage: 1,
                },
            },
            gap: 17,
            pagination: false
        } ).mount();
    }

    const sliders = document.querySelectorAll('.product_slider > .splide');
    const gal = document.querySelectorAll('.product_slider .gallery');

    if (sliders) {
        for ( var i = 0; i < sliders.length; i++ ) {
            new Splide( sliders[ i ] , {
                perPage: 4,
                fixedWidth: 397,
                breakpoints: {
                    1360: {
                        perPage: 3,
                    },
                    1023: {
                        perPage: 2,
                    },
                    639: {
                        perPage: 1,
                    }
                },
                gap: 34,
                pagination: false,
                //padding: { left: 20, right: 20 }
            } ).mount();
        }
    }

    if (gal) {
        console.log(gal[1]);
        for ( var i = 0; i < gal.length; i++ ) {
            new Splide( gal[ i ] , {
                perPage: 1,
                pagination: true,
                arrows: false
            } ).mount();
        }
    }
}

/** pictures slider in product anons */
function productPicSlider() {
    const pics = document.querySelectorAll('.products_list .gallery');

    if (pics) {
        for ( var i = 0; i < pics.length; i++ ) {
            new Splide( pics[ i ] , {
                perPage: 1,
                pagination: true,
                arrows: false
            } ).mount();
        }
    }
}

/** home page tabs */
function tabs() {
    const tabs = document.querySelector(".tabs_wrapper");
    const tabButton = document.querySelectorAll(".tab_button");
    const contents = document.querySelectorAll(".tab_content");

    if (tabs) {
        tabs.onclick = e => {
            const id = e.target.dataset.id;
            if (id) {
                tabButton.forEach(btn => {
                    btn.classList.remove("active");
                });
                e.target.classList.add("active");

                contents.forEach(content => {
                    content.classList.remove("active");
                });
                const element = document.getElementById(id);
                element.classList.add("active");
            }
        }
    }
}

/** products popular slider */
function productPopularSlider() {
    const sliders = document.querySelectorAll('.product_slider > .splide');
    //const gal = document.querySelectorAll('.product_slider .gallery');

    if (sliders) {
        for ( var i = 0; i < sliders.length; i++ ) {
            new Splide( sliders[ i ] , {
                perPage: 4,
                breakpoints: {
                    1360: {
                        perPage: 3,
                    },
                    1199: {
                        perPage: 2,
                    },
                    1023: {
                        perPage: 2,
                    },
                    479: {
                        perPage: 1,
                    }
                },
                gap: 34,
                pagination: false,
                fixedWidth: 397,
                //padding: { left: 20, right: 20 }
            } ).mount();
        }
    }

    /*
    if (gal) {
        for ( var i = 0; i < gal.length; i++ ) {
            new Splide( gal[ i ] , {
                perPage: 1,
                pagination: true,
                arrows: false
            } ).mount();
        }
    }*/
}

/** open all props in filter */
function filterShowMore() {
    const showMoreBtns = document.querySelectorAll('.filter_block .show_more');

    if (showMoreBtns) {
        showMoreBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const parent = btn.parentNode;
                const hiddenElems = parent.querySelectorAll('.hidden');

                console.log(btn);
                hiddenElems.forEach(elem => {
                    elem.classList.remove('hidden');    
                })
                
                btn.classList.add('hidden');
            })
        })
    }
}

/** reviews slider */
function reviewsSlider() {
    const slide = document.querySelector('.reviews_slider .splide');

    if (slide) {
        new Splide( '.reviews_slider .splide' , {
            perPage: 2,
            breakpoints: {
                639: {
                    perPage: 1,
                }
            },
            gap: 34,
            pagination: false,
            //arrows: false,
            //fixedWidth: 857,
        } ).mount();
    }
}

/** show product descriptions */
function showProductBlocks() {
    const btn1 = document.querySelector('.show_all_descr');
    const btn2 = document.querySelector('.show_more_specs');

    if (btn1) {        
        btn1.addEventListener('click', () => {
            document.querySelector('.advants').classList.add('opened');
            btn1.classList.add('hidden');
        })
    }

    if (btn2) {
        btn2.addEventListener('click', () => {
            document.querySelector('.specs_list').classList.add('opened');
            btn2.classList.add('hidden');
        })
    }
}

/** open-close faq questions  */
function accordion() {
    const list = document.querySelectorAll('.faq_item .question');
    const answers = document.querySelectorAll('.faq_item .answer');

    if (!list || !answers) {
        return false;
    } else {
        list.forEach(item => {
            item.addEventListener('click', function() {
                answers.forEach(answer => {
                    //answer.classList.remove('show');
                })

                item.classList.toggle('active');
                item.nextElementSibling.classList.toggle('show');
            })
        })
    }
}

/** smooth scroll in product page */
function scroll() {
    const menuItems = document.querySelectorAll('.product_menu a');

    if (!menuItems) {
        return false;
    } else {
        menuItems.forEach(item => {
            let elem = document.querySelector(item.getAttribute('href'));
            console.log(elem);

            item.addEventListener('click', () => {
                if (elem) {
                    elem.scrollIntoView({ behavior: 'smooth' })
                }
            })
        })
    }
}

/** start video play */
function playVideo() {
    const btn = document.querySelector('.article_video .play_btn');
    const video = document.querySelector('.article_video video');

    if (!btn || !video) {
        return false;
    } else {
        btn.addEventListener('click', () => {
            video.setAttribute('controls', '');
            video.play();
            btn.classList.add('hidden');
        })
    }
}

/** phone mask */
function maskPhone() {
    var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};
document.addEventListener("DOMContentLoaded",function(){var a=function(e){var c=e.target,n=c.dataset.phoneClear;c=(c=c.dataset.phonePattern)?c:"+7 (___) ___-__-__";var g=0,k=c.replace(/\D/g,""),d=e.target.value.replace(/\D/g,"");"false"!==n&&"blur"===e.type&&d.length<c.match(/([_\d])/g).length?e.target.value="":(k.length>=d.length&&(d=k),e.target.value=c.replace(/./g,function(l){return/[_\d]/.test(l)&&g<d.length?d.charAt(g++):g>=d.length?"":l}))},b=document.querySelectorAll("[data-phone-pattern]");
  b=$jscomp.makeIterator(b);for(var f=b.next();!f.done;f=b.next()){f=f.value;for(var m=$jscomp.makeIterator(["input","blur","focus"]),h=m.next();!h.done;h=m.next())f.addEventListener(h.value,a)}});
}

/** show reviews */
function showReviews() {
    const btn = document.querySelector('.reviews_page .show_more');

    if (btn) {
        const reviews = document.querySelectorAll('.reviews_page .review_item.hidden');

        btn.addEventListener('click', () => {
            reviews.forEach(elem => elem.classList.remove('hidden'));

            btn.classList.add('hidden');
        })
    }
}

/** about slider */
function aboutSlider() {
    const slide = document.querySelector('.about_slider .splide');

    if (slide && window.outerWidth > 640) {
        new Splide( slide , {
            type   : 'loop',
            padding: '18%',
            gap: '24px',
            fixedWidth: '606px',
            height: '300px',
            start: 1,
            pagination: false,
            arrows: false
        } ).mount();
    }
    if (slide && window.outerWidth < 641) {
        new Splide( slide , {
            perPage: 1,
            gap: '24px',
            pagination: false,
            arrows: false
        } ).mount();
    }
}

/** open-close mobile menu */
const showMobileMenu = () => {
    const btn = document.querySelector('.burger');
    const menu = document.querySelector('.top_menu_mobile');
    const clickableArea = document.querySelector('main');

    btn.addEventListener('click', () => {
        menu.classList.toggle('active');
    })

    clickableArea.addEventListener('click', (e) => {
        menu.classList.remove('active');
    })
}

/** open-close filter on mobile */
const showFilter = () => {
    const btn = document.querySelector('.open_filter_js');
    const filter = document.querySelector('.filter');
    const clickableArea = document.querySelector('.catalog_inner');

    if (btn) {
        btn.addEventListener('click', () => {
            filter.classList.toggle('active');
        })
    }

    if (clickableArea) {
        clickableArea.addEventListener('click', (e) => {
            console.log(window.outerWidth);

            if (e.target.classList != 'open_filter_js') {
                filter.classList.remove('active');
            }
        })
    } 
}

homeSlidesInit();
productPicSlider();
tabs();
productPopularSlider();
filterShowMore();
reviewsSlider();
showProductBlocks();
accordion();
scroll();
maskPhone();
playVideo();
showReviews();
aboutSlider();
showMobileMenu();
showFilter();