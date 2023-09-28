const body = document.body;

function generation () {
    let myDots = document.querySelector("body > section.header-main > header > div.navigation-dots");
    let slides = document.querySelector("body > section.header-main > header > div.slides .s1");

    let count = 2;
    let countInput = -100
    const howManySlides = document.querySelectorAll('.slide').length;
    
    while (count <= howManySlides) {
        myDots.insertAdjacentHTML('beforeend', `<label for="r${count}" class="bar"></label>`);
        slides.insertAdjacentHTML('beforebegin', `<input type="radio" name="r" id="r${count}">`);
        count += 1;
        countInput -= 100;
    } 
}

generation();

const anchors = document.querySelectorAll( 'a[href*="#"]' );

for (let anchor of anchors) {
    const blockID = anchor.getAttribute('href')
    const target = document.querySelector('' + blockID);

    anchor.addEventListener ('click', (event) => {
        event.preventDefault();

        target.scrollIntoView ({
            behavior: 'smooth',
            block: 'nearest',
        })
    })
}

$(document).ready(function () {
    $('.header-burger__menu').click(function(event) {
        console.log('test')
        console.log($('.header-burger__menu.active'));
        if ($('.header-burger__menu.active, .header-nav.active').length === 0) {
            $('.header-burger__menu, .header-nav').addClass('active');    
            lockOn();
        } 
        else {
            $('.header-burger__menu.active, .header-nav.active').removeClass('active')
            lockOff();
        }
    });
});

function lockOn () {
    let PagePosition = window.scrollY;
    window.scroll(0,0)
    body.classList.add('lock');
    body.dataset.position = PagePosition;
    body.style.top = -PagePosition + 'px';
}

function lockOff () {
    let PagePosition = parseInt(body.dataset.position, 10);
    body.style.top = 'auto';
    body.classList.remove('lock');
    window.scroll({top: PagePosition});
    body.removeAttribute('data-position');
}