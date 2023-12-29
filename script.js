window.onload = function () {
    const question = document.querySelectorAll('.question')
    

    question.forEach(qst => {
        qst.addEventListener('click', function () {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.icons')

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.src = 'assets/images/icon-plus.svg';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.src = 'assets/images/icon-minus.svg';
            }
        })
    })
    }