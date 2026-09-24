const formSwitches = document.querySelectorAll('.form-switch');
const authForms = document.querySelectorAll('.auth-form');

formSwitches.forEach(button => {
    button.addEventListener('click', () => {
        const targetForm = button.dataset.form;
        const form = document.getElementById(targetForm);

        if(!form){
            return
        }

        formSwitches.forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');

        authForms.forEach(form => {
            form.classList.add('hidden');
        });

        form.classList.remove('hidden');
    });
});