const checkName = (name) => {
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-z\\s]{2,}$');
    if (!nameRegex.test(name)) throw 'Name is Incorrect'
}

const checkPhone = (phone) => {
    const phoneRegex = RegExp('');  //^(\+91)?[0]?(91)?[0-9]\d{10,13}$
    if (!phoneRegex.test(phone)) throw 'Phone number is Incorrect'
}

const checkAddress = (address) => {
    const addressRegex = RegExp('');
    if (!addressRegex.test(address)) throw 'Address is Incorrect'
}

const setTextValues = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}