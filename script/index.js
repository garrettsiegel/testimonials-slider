const slides = document.getElementsByClassName('slider-item-left');
const slides2 = document.getElementsByClassName('slider-item-right');
let slidePosition = 0;
let slidePosition2 = 0;
const totalSlides = slides.length;
const totalSlides2 = slides2.length;


document.getElementById("slider-button-next").addEventListener("click", moveToNextSlide);
document.getElementById("slider-button-prev").addEventListener("click", moveToPrevSlide);


    function hideSlidesLeft() {
        for (let slide of slides) {
            slide.classList.remove("slider-item-left-visible");
            slide.classList.add("slider-item-left-hidden");
        }
    }

    function hideSlidesRight() {
        for (let slide of slides2) {
            slide.classList.remove("slider-item-right-visible");
            slide.classList.add("slider-item-right-hidden");
        }
    }


    function nextSlideLeft() {
        hideSlidesLeft()
        if (slidePosition === totalSlides -1) {
            slidePosition = 0;
        } else {
            slidePosition++;
        }
        slides[slidePosition].classList.add("slider-item-left-visible");
    }

    function nextSlideRight() {
        hideSlidesRight()
        if (slidePosition2 === totalSlides2 -1) {
            slidePosition2 = 0;
        } else {
            slidePosition2++;
        }
        slides2[slidePosition2].classList.add("slider-item-right-visible");
    }

    function prevSlideLeft() {
        hideSlidesLeft()
        if (slidePosition === 0) {
            slidePosition = totalSlides - 1;
        } else {
            slidePosition--;
        }
        slides[slidePosition].classList.add("slider-item-left-visible");
    }

    function prevSlideRight() {
        hideSlidesRight()
        if (slidePosition2 === 0) {
            slidePosition2 = totalSlides2 - 1;
        } else {
            slidePosition2--;
        }
        slides2[slidePosition2].classList.add("slider-item-right-visible");
    }


function moveToNextSlide() {
    nextSlideLeft();
    nextSlideRight();
}

function moveToPrevSlide() {
    prevSlideLeft();
    prevSlideRight();
}