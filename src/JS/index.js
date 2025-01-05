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
                item.addEventListener('click', () => {
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
            if (!input.classList.contains("no-has-text")) {
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

    //ANSWERS

    const questions = document.querySelectorAll('.question');

    if (questions.length != 0) {
        questions.forEach(question => {
            const questionHead = question.querySelector('.question__head');
            const questionBody = question.querySelector('.question__body');
            const questionContent = question.querySelector('.question__body > *');
    
            questionHead.addEventListener('click', () => {
                question.classList.toggle('question_active');
    
                if (question.classList.contains('question_active')) {
                    questionBody.style.maxHeight = `${questionContent.clientHeight}px`;
                } else {
                    questionBody.style.maxHeight = "0px";
                }
            });
        });
    }

    //PRODUCT SLIDER

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

    if (images.length != 0) {
    
        arrows.forEach((e) => {
            e.addEventListener('click', (ev) => {
    
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
        });
    
        miniImages.forEach((item, index) => {
            item.addEventListener("click", () => show(index));
        })
    
        show(imageIndex);
    }

    //PRODUCT DESCR

    //PRODUCT DESCR
    const titles = document.querySelectorAll('.product-descr__name');
    const texts = document.querySelectorAll('.product-descr__text');

    function chooseActive(id, title) {
        texts.forEach(text => {
            text.classList.remove('product-descr__text_active');
        });
    
        titles.forEach(item => {
            item.classList.remove('product-descr__name_active');
        });
    
        texts.forEach(text => {
            if (text.id === id) {
                text.classList.add('product-descr__text_active');
            }
        });
        
        title.classList.add('product-descr__name_active');
    
    }

    if (titles.length != 0) {
        
        titles.forEach(title => {
            title.addEventListener("click", () => {
                switch(title.innerHTML) {
                    case 'Описание':
                        chooseActive('product-descr', title);
                        break
                    case 'Характеристики':
                        chooseActive('product-charact', title);
                        break
                }
            });
        });
        
        chooseActive('product-descr', titles[0]);
    }

    //button "Все характеристики"

    const allInfoBtn = document.querySelector('.buy-block__all-info');

    if (allInfoBtn != null) {
        allInfoBtn.addEventListener("click", (e) => {
            chooseActive('product-charact', titles[1]);
        });
    }

    //SIMILAR-SLIDER
    const similarPages = document.querySelectorAll('.similar-slider__page');
    const similarArrows = document.querySelectorAll('.similar-slider__arr');
    let currentPage = 0;

    function showPage (index) {
        similarPages[currentPage].classList.remove('similar-slider__page_active');
        similarPages[index].classList.add('similar-slider__page_active');

        currentPage = index;
    }

    if (similarPages.length != 0) {

        similarArrows.forEach(btn => {
            btn.addEventListener('click', (e) => {
        
                if (e.target.classList.contains('similar__prev')) {
                    let index = currentPage - 1;
        
                    if (index < 0) {
                        index = similarPages.length - 1;
                    }
        
                    showPage(index);
                } else if (e.target.classList.contains('similar__next')) {
                    let index = currentPage  + 1;
        
                    if (index >= similarPages.length) {
                        index = 0;
                    }
                    showPage(index);
                }
            });
        });
        
        showPage(currentPage);
    }

    //CATALOG FILTER
    
    const catalogHide = document.querySelector('.catalog__hide');
    const catalogFormWrapper = document.querySelector('.catalog__form-wrapper');
    const catalogFormContent = document.querySelector('.catalog__form-wrapper > *');

    if (catalogHide != null) {
        catalogHide.addEventListener("click", () => {
            catalogHide.classList.toggle('catalog__hide_active');
    
            if (catalogHide.classList.contains("catalog__hide_active")) {
                catalogFormWrapper.style.maxHeight = `${catalogFormContent.clientHeight}px`;
                catalogFormWrapper.style.overflow = 'visible';
            } else {
                catalogFormWrapper.style.maxHeight = '0px';
                catalogFormWrapper.style.overflow = 'hidden';
            }
        });
    }

    //CATALOG SELECT

    $('.select').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450; // длительность анимации 
    
        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);
    
        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);
    
        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
        }
    
        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                $(this).addClass('on');
                $(this).addClass('new-select_open');
                selectList.slideDown(duration);
    
                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');
    
                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );
    
                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                    selectHead.addClass('selected');
                });
    
            } else {
                $(this).removeClass('on');
                $(this).removeClass('new-select_open');
                selectList.slideUp(duration);
            }
        });
    });

    //CART BTN

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

    if (allCartCounters.length != 0) {

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
    }

});
