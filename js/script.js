const $ = (el, one= true) => one ? document.querySelector(el) :document.querySelectorAll(el);


window.onload = (e) => {
    op("header .menuBtn");
    op("header .menu", 100);
    op("header .logo", 200);
    op("#slide .text_box", 300);

}

const op = (el, delay) => {
    setTimeout(() => {
        $(el).classList.add("op");
    }, delay);
};


window.onwheel = (e) => {
    
    console.log(e)
}

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".next1",
        prevEl: ".prev1"
    },

});

let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination2",
        clickable: true
    },
    navigation: {
        nextEl: ".next2",
        prevEl: ".prev2"
    },

});

