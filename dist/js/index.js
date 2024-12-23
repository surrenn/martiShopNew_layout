"use strict";

document.addEventListener("DOMContentLoaded", () => {

    //HAMBURGER AND MOBILE MENU
    const mobileMenu = document.querySelector('.header-top__nav');
    const hamburger = document.querySelector('.hamburger');

    function isMobileMenuActive () {

        if (hamburger.classList.contains('hamburger_active')) {
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            document.querySelector('body').style.overflow = 'scroll';
        }
    }

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        mobileMenu.classList.toggle('header-top__nav_active');
        isMobileMenuActive();

        if (hamburger.classList.contains('hamburger_active')) {
            mobileMenu.querySelectorAll('.header-menu__item').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();

                    hamburger.classList.remove('hamburger_active');
                    mobileMenu.classList.remove('header-top__nav_active');

                    isMobileMenuActive();
                });
            });
        }
    })



    //HEADER BOTTOM SEARCH
    const searchBtn = document.querySelector('.header-bottom__search-mob');
    const searchCloser = document.querySelector('.header-form__closer');
    const search = document.querySelector('.header-bottom__search');
    const actions = document.querySelector('.actions');

    searchBtn.addEventListener('click', () => {
        search.classList.add('header-bottom__search_active');
        actions.style.display = 'none';

        searchCloser.addEventListener('click', () => {
            search.classList.remove('header-bottom__search_active');
            actions.style.display = 'flex';
        });
    });

    //CATALOG-HEADER
    const catalogBtnWrapper = document.querySelector('.header-bottom__catalog-btn-wrapper');
    const catalogSelect = document.querySelector('.catalog-select');

    catalogBtnWrapper.addEventListener('click', () => {
        catalogBtnWrapper.classList.toggle('header-bottom__catalog-btn-wrapper_active');
        catalogSelect.classList.toggle('catalog-select_active');

        if (catalogBtnWrapper.classList.contains('header-bottom__catalog-btn-wrapper_active') && catalogSelect.classList.contains('catalog-select_active')) {
            document.querySelector('body').style.overflow = 'hidden';

            catalogSelect.querySelectorAll('.catalog-select__item').forEach(item => {
                item.addEventListener('click', () => {
                    const catalogInner = item.querySelector('.catalog-select__inner');
                    const catalogCloser = catalogInner.querySelector('.catalog-select__back');

                    catalogInner.classList.add('catalog-select__inner_active');

                    catalogInner.querySelectorAll('.catalog-select__inner-item').forEach(innerItem => {
                        innerItem.addEventListener('click', (e) => {
                            e.preventDefault();
                            catalogInner.classList.remove('catalog-select__inner_active');
                            catalogSelect.classList.remove('catalog-select_active');
                            catalogBtnWrapper.classList.remove('header-bottom__catalog-btn-wrapper_active');
                            e.stopPropagation();
                        });
                    });

                    catalogCloser.addEventListener('click', (e) => {
                        catalogInner.classList.remove('catalog-select__inner_active');
                        e.stopPropagation();
                    });
                    
                });
            });
        } else {
            document.querySelector('body').style.overflow = 'scroll';
        }

    });



    //INPUTS
    const inputs = document.querySelectorAll('input');

    if (inputs.length != 0) {
        inputs.forEach(input => {
            if (!input.classList.contains("cart-btn__input")) {
                input.addEventListener('input', function() {
                    if (input.value.trim() !== "") {
                        input.classList.add('has-text');
                    } else {
                        input.classList.remove('has-text');
                    }
                });
            }
        })
    }
});
