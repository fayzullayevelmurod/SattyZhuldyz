let sign = document.querySelector('.sign');
let popup = document.querySelector('.popup');
let popup_form = document.querySelector('.popup_form');

sign.addEventListener('click', () => {
    popup.classList.add('active')
    popup_form.classList.add('active')
})

popup.addEventListener('click', () => {
    popup.classList.remove('active')
    popup_form.classList.remove('active')
})


let media_menu = document.querySelector('.media_menu');
let close_btn = document.querySelector('.close_btn');
let media_burger = document.querySelector('.media_burger');

media_burger.addEventListener('click', () => {
    media_menu.classList.add('active')
})

close_btn.addEventListener('click', () => {
  media_menu.classList.remove('active')
})



var home_under = new Swiper(".home_under_slider", {
    breakpoints: {
        320: {
          slidesPerView: 1.60,
          spaceBetween: 9,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 32,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 43,
        },
    },
});

var favorite_slider = new Swiper(".favorite_slider", {
    breakpoints: {
        320: {
          slidesPerView: 2.5,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1720: {
          slidesPerView: 6,
          spaceBetween: 16,
        },
    },
});


var lotto_game_slider = new Swiper(".lotto_game_slider", {
    breakpoints: {
        320: {
          slidesPerView: 2.50,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 24,
        },
        1100: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
    },
});

var lotteries_slider = new Swiper(".lotteries_slider", {
    breakpoints: {
        320: {
          slidesPerView: 2.50,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 24,
        },
        1100: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
    },
});

var winners_slider = new Swiper(".winners_slider", {
    breakpoints: {
        320: {
          slidesPerView: 1.25,
          spaceBetween: 9,
        },
        768: {
          slidesPerView: 1.20,
          spaceBetween: 27,
        },
        1100: {
          slidesPerView: 2,
          spaceBetween: 46,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 46,
        },
    },
});

var partner_logo_slider = new Swiper(".partner_logo_slider", {
    breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 27,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 27,
        },
        993: {
          slidesPerView: 3,
          spaceBetween: 27,
        },
        // 1100: {
        //   slidesPerView: 3,
        //   spaceBetween: 11,
        // },
    },
});