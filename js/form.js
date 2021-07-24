let isUpdate = false;
let addressBookObj = {};

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            setTextValues('.text-error', e);
            return;
        }
        try {
            checkName(name.value);
            setTextValues('.text-error', "");
        } catch (e) {
            setTextValues('.text-error', e);
        }
    });

    const phone = document.querySelector('#phone');
    phone.addEventListener('input', function () {
        if (phone.value.length == 0) {
            setTextValues('.phone-error', e);
            return;
        }
        try {
            checkPhone(phone.value);
            setTextValues('.phone-error', "");
        } catch (e) {
            setTextValues('.phone-error', e);
        }
    });

    const address = document.querySelector('#address');
    address.addEventListener('input', function () {
        if (address.value.length == 0) {
            setTextValues('.address-error', e);
            return;
        }
        try {
            checkAddress(address.value);
            setTextValues('.address-error', "");
        } catch (e) {
            setTextValues('.address-error', e);
        }
    });

    setStatesInnerHtml();
    checkForUpdate();
})


function save(event) {
    event.preventDefault;
    event.stopPropagation;
    try {
        setAddressBookObject();
        createAndUpdateStorage();
        resetForm();
        // location.href = site_properties.home_page;
    } catch (e) {
        console.log(e);
        return;
    }
}


function createAndUpdateStorage(addressBook) {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList) {
        let addressBookData = addressBookList.
        find(personData => personData._id == addressBookObj._id);

        if (!addressBookData) {
            addressBookList.push(createAddressBookData());
        } else {
            const index = addressBookList
                .map(personData => personData._id)
                .indexOf(addressBookData._id);

            addressBookList.splice(index, 1, createAddressBookData(addressBookData._id));
        }

    } else {
        addressBookList = [createAddressBookData()]
    }

    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
    window.location.replace('/pages/home.html');
}

const createAddressBookData = (id) => {
    let addressBook = new AddressBook();
    if (!id) addressBook.id = createNewContactId();
    else addressBook.id = id;
    setAddressBookData(addressBook);
    return addressBook;
}

const setAddressBookData = (addressBook) => {
    try {
        addressBook.name = addressBookObj._name;
    } catch (e) {
        setTextValues('.text-error', e)
        throw e;
    }

    addressBook.address = addressBookObj._address;
    addressBook.city = addressBookObj._city;
    addressBook.state = addressBookObj._state;
    addressBook.zip = addressBookObj._zip;
    addressBook.phone = addressBookObj._phone;
}

const createAddressBook = () => {
    let addressBook = new AddressBook();
    try {
        addressBook._name = getInputValueById('#name');
        addressBook._phone = getInputValueById('#phone');
        addressBook._address = getInputValueById('#address');
    } catch (e) {
        setTextalue('.text-error', e);
        throw e;
    }
    addressBook._city = getInputValueById('#city');
    addressBook._state = getInputValueById('#state');
    addressBook._zip = getInputValueById('#zipCode');
    addressBook._id = new Date().getTime()
    alert(addressBook.toString());
    return addressBook;
}


const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const resetForm = () => {
    setValues('#name', '');
    setValues('#phone', '');
    setValues('#address', '');
    setValues('#city', '');
    setValues('#state', '');
    setValues('#zipCode', '');
}

const setValues = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}


const setStatesInnerHtml = () => {
    if (stateList.length == 0) return;
    var select = document.getElementById("state");
    for (const stateValue of stateList) {
        innerHtml = `<option value="${stateValue}">${stateValue}</option>`;
        select.innerHTML = select.innerHTML + `<option value="${stateValue}">${stateValue}</option>`;
    }
}

let stateList = [ "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir",
                "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra","Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
                "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal",
                "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"]


const checkForUpdate = () => {
    const contactId = new URLSearchParams(window.location.search).get('id');
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    const addressBookJson = addressBookList.find(personData => personData._id == contactId);
    isUpdate = addressBookJson ? true : false;
    if (!isUpdate) return;
    addressBookObj = addressBookJson;
    setForm();
}

const setForm = () => {
    setValues('#name',  addressBookObj._name);
    setValues('#phone', addressBookObj._phone);
    setValues('#address', addressBookObj._address);
    setValues('#city', addressBookObj._city);
    setValues('#state', addressBookObj._state);
    setValues('#zipCode', addressBookObj._zip);
}

const setAddressBookObject = () => {
    addressBookObj._name = getInputValueById('#name');
    addressBookObj._address = getInputValueById('#address');
    addressBookObj._city = getInputValueById('#city');
    addressBookObj._state = getInputValueById('#state');
    addressBookObj._zip = getInputValueById('#zipCode');
    addressBookObj._phone = getInputValueById('#phone');
}
