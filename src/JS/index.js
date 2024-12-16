"use strict";

document.addEventListener("DOMContentLoaded", () => {

    //HAMBURGER AND MOBILE MENU
    const headerTop = document.querySelector('.header-top');
    const mobileMenu = document.querySelector('.mob-menu');

    function isMobileMenuActive (elem) {

        if (elem.classList.contains('hamburger_active')) {
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            document.querySelector('body').style.overflow = 'scroll';
        }
    }

    headerTop.addEventListener('click', (e) => {
        const elem = e.target.parentElement;

        if (elem.classList.contains('hamburger')) {
            elem.classList.toggle('hamburger_active');
            mobileMenu.classList.toggle('mob-menu_active');

            isMobileMenuActive(elem);

            mobileMenu.querySelectorAll('.mob-list__item').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();

                    elem.classList.remove('hamburger_active');
                    mobileMenu.classList.remove('mob-menu_active');

                    isMobileMenuActive(elem);
                });
            });
        };

    });

    //HEADER BOTTOM SEARCH
    const searchBtn = document.querySelector('.header-bottom__search-mob');
    const searchCloser = document.querySelector('.header-form__closer');
    const search = document.querySelector('.header-bottom__search');

    searchBtn.addEventListener('click', () => {
        search.classList.add('header-bottom__search_active');

        searchCloser.addEventListener('click', () => {
            search.classList.remove('header-bottom__search_active');
        });
    });

    //CATALOG-HEADER
    const catalogBtn = document.querySelector('.header-bottom__catalog');
    const catalogHeader = document.querySelector('.catalog-header');
    const mobileItems = document.querySelectorAll('.catalog-header__item');
    const mobileLists = document.querySelectorAll('.catalog-header__mob-wrapper');


    catalogBtn.addEventListener('click', () => {
        catalogBtn.classList.toggle("header-bottom__catalog_active");
        catalogHeader.classList.toggle("catalog-header_active");
        
        mobileItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                const mobItem = mobileLists[index - 1];
                const backBtn = mobItem.querySelector('.catalog-header__back');

                mobItem.classList.add('catalog-header__mob-wrapper_active');
                document.querySelector('body').style.overflow = 'hidden';

                backBtn.addEventListener('click', () => {
                    mobItem.classList.remove('catalog-header__mob-wrapper_active');
                });

                const innerItems = document.querySelectorAll('.catalog-header__inner-item');
                
                innerItems.forEach(innerItem => {
                    innerItem.addEventListener('click', (e) => {
                        e.preventDefault();

                        catalogBtn.classList.remove("header-bottom__catalog_active");
                        catalogHeader.classList.remove("catalog-header_active");
                    })
                })

            });
        });
    });   


    //INPUTS
    function checkInputText() {
        if (input.value.trim() !== "") {
          input.classList.add('has-text');
        } else {
          input.classList.remove('has-text');
        }
    }

    const inputs = document.querySelectorAll('input');

    if (inputs.length != 0) {
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                if (input.value.trim() !== "") {
                    input.classList.add('has-text');
                  } else {
                    input.classList.remove('has-text');
                  }
            });
        })
    }
});
