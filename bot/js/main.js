$(function () {




});

const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');
if (typeof menuToggle !== 'undefined' && menuToggle !== null) {

    menuToggle.onclick = function () {
        menuToggle.classList.toggle('menu-icon-active');
    }
}
$(document).ready(function () {
    $('.menu-burger').click(function (event) {
        $('.sub-menu').toggleClass('d-none');
    });
});
$(document).ready(function () {
    $('.modal-btn').click(function (event) {
        $('.modal').toggleClass('d-none');
    });
});


// });
$(document).ready(function () {
    $('.modal-bg').click(function (event) {
        $('.modal').toggleClass('d-none');
    });
});
var close = document.getElementsByClassName('close')[0];
close.onclick = function () {
    modal.style.display = 'none';
}

$('.reviews-slider').slick({
    prevArrow: '<button class="slick-next prev-arrow border-warning rounded-circle btn" aria-label="Next" type="button" style=""><img src="img/reviews-left.png" alt=""></button>',
    nextArrow: '<button class="slick-next slick-arrow border-warning rounded-circle btn" aria-label="Next" type="button" style=""><img src="img/reviews-right.png" alt=""></button>',
    responsive: [{
        breakpoint: 800,
        settings: {
            dots: true,
            appendArrows: false,
        }
    },

    ]
});

$('.demonstration_slider').slick({
    nextArrow: false,
    prevArrow: false,
    dots: true,
});

$('.bot-operator').slick();
$('.bot-monitoring').slick();
$('.bot-photo').slick();
$('.bot-ad').slick();
$('.bot-cloud').slick();
$('.bot-multy').slick();
$('.bot-search').slick();
$('.bot-crm').slick();
$('.bot-capper').slick();
$('.bot-directory').slick();
$('.bot-downloader').slick();
$('.bot-coach').slick();
$('.bot-extra').slick();
$('.bot-reservation').slick();
$('.bot-audience').slick();
$('.bot-notification').slick();
$('.bot-post').slick();
$('.bot-capper').slick();



