const questions = document.querySelectorAll('.question');

questions.forEach((question, index) => {
    
    const titleQuestion = question.querySelector('.title-question');
    const awnser = question.querySelector('.awnser');
    const imgIcon = question.querySelector('.img-icon');

    titleQuestion.addEventListener('click', () => {
        questions.forEach(q => q.classList.remove('active-awnser'));
        question.classList.add('active-awnser');
        
        document.querySelectorAll('.img-icon').forEach(icon => icon.classList.remove('active'));
        imgIcon.classList.add('active');
        awnser.classList.add('awnser-active');

        document.querySelectorAll('.awnser').forEach(a => {
            if (a !== awnser) {
                a.classList.remove('awnser-active');
            }
        });
    });
});