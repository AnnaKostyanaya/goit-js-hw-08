import throttle from 'lodash.throttle'

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('form input'),
    textarea: document.querySelector('form textarea'),
}
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);

refs.textarea.addEventListener('input', throttle(evt => { 
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}, 500));

refs.input.addEventListener('input', throttle(evt => { 
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}, 500));

populateInput(); 

function onFormSubmit(evt) { 
    evt.preventDefault();
    formData.email = evt.currentTarget.elements.email.value;
    formData.message = evt.currentTarget.elements.message.value;
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
};

function populateInput() { 
    const savedData = localStorage.getItem("feedback-form-state");
    const parsedData = JSON.parse(savedData);
    
    if (savedData) { 
        refs.input.value = parsedData.email;
        refs.textarea.value = parsedData.message;
    }
}


