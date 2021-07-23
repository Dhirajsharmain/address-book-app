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
    
})