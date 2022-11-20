import throttle from 'lodash.throttle'

const refs = {
    form: document.querySelector('.feedback-form'),
    submit: document.querySelector('button'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}
const formData = {};
const STORAGE_KEY = "feedback-form-state";

refs.form.addEventListener('input', throttle(onFormInput), 500);
refs.form.addEventListener('submit', onFormSubmit);

populateInput();

function populateInput() { 
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);
    
    if (parsedData.email) { 
        refs.input.value = parsedData.email;
    }

    if (parsedData.message) { 
        refs.textarea.value = parsedData.message;
    }
};

function onFormInput(evt) { 
        formData[evt.target.name] = evt.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(evt) { 
    evt.preventDefault();
    formData.email = evt.currentTarget.elements.email.value;
    formData.message = evt.currentTarget.elements.message.value;
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    
};

