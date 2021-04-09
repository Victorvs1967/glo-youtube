const swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: false,
    // Navigation arrows
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    breakpoints: {
        // when window width is >= 320px
        640: {
            loop: true,
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween: 20,
        },        
    },
});

const searchBtn = document.querySelector('.mobile-search'),
        mobileSearch = document.querySelector('.search-group'),
        body = document.querySelector('body');

searchBtn.addEventListener('click', () => {
    mobileSearch.classList.toggle('is-open');
});


