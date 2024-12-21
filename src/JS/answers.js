const questions = document.querySelectorAll('.question');

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