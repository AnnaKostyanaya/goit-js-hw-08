import throttle from 'lodash.throttle'

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('form input'),
    textarea: document.querySelector('form textarea'),
}
const formData = {};
const STORAGE_KEY = "feedback-form-state";

refs.form.addEventListener('submit', onFormSubmit);

refs.textarea.addEventListener('input', throttle(evt => { 
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500));

refs.input.addEventListener('input', throttle(evt => { 
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500));

populateInput(); 

function onFormSubmit(evt) { 
    evt.preventDefault();
    formData.email = evt.currentTarget.elements.email.value;
    formData.message = evt.currentTarget.elements.message.value;
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function populateInput() { 
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);
    
    if (savedData) { 
        refs.input.value = parsedData.email;
        refs.textarea.value = parsedData.message;
    }
}


