"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.product-slider__img');
    const arrows = document.querySelectorAll('.product-slider__arr');
    const miniImages = document.querySelectorAll('.product-slider__mini-img');
    let imageIndex = 0;

    function show (index) {
        miniImages[imageIndex].classList.remove('product-slider__mini-img_active');
        images[imageIndex].classList.remove('product-slider__img_active');
        miniImages[index].classList.add('product-slider__mini-img_active');
        images[index].classList.add('product-slider__img_active');
        imageIndex = index;
    }

    arrows.forEach((e) => {
        e.addEventListener('click', (ev) => {
            console.log(ev.target);
            if (ev.target.classList.contains('prev')) {
                let index = imageIndex - 1;
    
                if (index < 0) {
                    index = images.length - 1;
                }
    
                show(index);
            } else if (ev.target.classList.contains('next')) {
                let index = imageIndex + 1;
                if (index >= images.length) {
                    index = 0;
                }
                show(index);
            }
        });
    })

    miniImages.forEach((item, index) => {
        item.addEventListener("click", () => show(index));
    })

show(imageIndex);

});
