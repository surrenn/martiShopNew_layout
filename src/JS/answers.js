const questionHeads = document.querySelectorAll('.question__head');

questionHeads.forEach(head => {
    head.addEventListener('click', () => {
        head.parentElement.classList.toggle('question_active');
    });
});