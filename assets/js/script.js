$advantagesSlider = $('.advantages__slider');
$advantagesSlider.slick({
    dots: true,
    infinite: false,
    mobileFirst: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    variableWidth: true,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 1020,
            settings: 'unslick'
        }
    ]
});


const marketSection = document.querySelector('.market');
const dotsContainerElement = document.createElement('div');
dotsContainerElement.classList.add('market__dots');
marketSection.prepend(dotsContainerElement);

$marketSlider = $('.market__slider');
$marketSlider.slick({
    infinite: false,
    mobileFirst: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    variableWidth: true,
    swipeToSlide: true,
    dots: true,
    appendDots: $('.market__dots'),
    responsive: [
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 1020,
            settings: 'unslick'
        }
    ]
});
