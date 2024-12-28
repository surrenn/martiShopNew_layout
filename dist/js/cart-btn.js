"use strict";

const allCartCounters = document.querySelectorAll('.cart-btn');

function isMoreThanZero(counter, elem) {
    if (counter < 1) {
        if (elem.classList.contains('cart-btn_active')) {
            elem.classList.remove('cart-btn_active');
        }
    } else {
        if (!elem.classList.contains('cart-btn_active')) {
            elem.classList.add('cart-btn_active');
        }
    }
}

allCartCounters.forEach(item => {
    if (!item.classList.contains('cart-btn_disable')) {
        const cartInput = item.querySelector(".cart-btn__input");
        const cartBtns = item.querySelectorAll(".cart-btn__btn");
        let counter = 0;
    
    
        cartBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                if (btn.classList.contains('cart-btn__prev')) {
                    if (counter != 0) {
                        counter--;
                        cartInput.value = counter;
                        isMoreThanZero(counter, item);
                    } 
                } if (btn.classList.contains('cart-btn__next')) {
                    counter++;
                    cartInput.value = counter;
                    isMoreThanZero(counter, item);
                }
            });
        });
    
        cartInput.value = counter;
    
        cartInput.addEventListener("input", () => {
            cartInput.value = cartInput.value.replace("/\D/g", '');
    
            if (cartInput.value.length > 1 && cartInput.value.startsWith('0')) {
                cartInput.value = cartInput.value.substring(1);
            }
    
            counter = Number(cartInput.value);
            isMoreThanZero(counter, item);
        });
    
        cartInput.addEventListener("blur", () => {
            if (cartInput.value === '') {
                cartInput.value = '0';
            }
        });
    } else {
        const cartInput = item.querySelector(".cart-btn__input");

        cartInput.disabled = true;
    }
});