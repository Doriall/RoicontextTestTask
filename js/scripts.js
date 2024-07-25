document.addEventListener("DOMContentLoaded", function (){
    const modalWrapper = document.querySelector('.modal-wrapper');
    const body = document.querySelector('body');
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        let badFieldFlag = false;
        const fields = this.querySelectorAll('.form__text, .form__textarea');
        fields.forEach(function(field) {
            field.addEventListener('click', function() {
               this.classList.remove('form__text_error');
            });
            if (field.value === '') {
                field.classList.add('form__text_error');
                badFieldFlag = true;
            } else {
                field.classList.remove('form__text_error');
            }
        });
        if (badFieldFlag === false){
            modalWrapper.classList.add('modal-wrapper_show');
            body.classList.add('stop');
        }
        console.log(badFieldFlag);
    });
    document.querySelectorAll('.modal-wrapper, .modal__close').forEach(function (el){
        el.addEventListener('click', function() {
            modalWrapper.classList.remove('modal-wrapper_show');
            body.classList.remove('stop');
        });
    })
    document.querySelector('.modal').addEventListener('click', function (e){
        e.stopPropagation();
    })
});