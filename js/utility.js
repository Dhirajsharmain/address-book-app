const checkName = (name) => {
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-z\\s]{2,}$');
    if (!nameRegex.test(name)) throw 'Name is Incorrect'
}

const checkPhone = (phone) => {
    const phoneRegex = RegExp('');  //\b\d{3}[-.]?\d{3}[-.]?\d{4}\b
    if (!phoneRegex.test(phone)) throw 'Phone number is Incorrect'
}

const checkAddress = (address) => {
    const addressRegex = RegExp('^[A-Za-z0-9\\,\\s]{3,}?$'); //^[A-Za-z0-9\\,\\s]{3,}?$
    if (!addressRegex.test(address)) throw 'Address is Incorrect'
}

const setTextValues = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}