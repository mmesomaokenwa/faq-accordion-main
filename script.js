window.onload = function () {
    const question1 = document.querySelector('.question-1')
    const answer1 = document.querySelector('.answer-1')
    const question2 = document.querySelector('.question-2')
    const answer2 = document.querySelector('.answer-2')
    const question3 = document.querySelector('.question-3')
    const answer3 = document.querySelector('.answer-3')
    const question4 = document.querySelector('.question-4')
    const answer4 = document.querySelector('.answer-4')
    const icon = document.getElementById('icon')

    function toggleIcon(icon) {
            if (icon.src === 'assets/images/icon-plus.svg') {
                icon.src = 'assets/images/icon-minus.svg';
            } else {
                icon.src = 'assets/images/icon-plus.svg';
            }
        }

    question1.addEventListener('click', function() {
        answer1.classList.toggle('show');
        toggleIcon(icon);
    })
    
    question2.addEventListener('click', function() {
        answer2.classList.toggle('show');
        toggleIcon(icon);
    })

    question3.addEventListener('click', function() {
        answer3.classList.toggle('show');
        toggleIcon(icon);
    })

    question4.addEventListener('click', function() {
        answer4.classList.toggle('show');
        toggleIcon(icon);
    })

    icon.addEventListener('click', function() {
        toggleIcon(icon);
    })

    
}