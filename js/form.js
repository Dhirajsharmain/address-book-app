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
})


function save(event) {
    createAddressBook();
    let addressBook = createAddressBook();
    createAndUpdateStorage(addressBook);
}


function createAndUpdateStorage(addressBook) {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList != undefined) {
        addressBookList.push(addressBook);
    } else {
        addressBookList = [addressBook]
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList))
    location.href = '../pages/home.html';
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