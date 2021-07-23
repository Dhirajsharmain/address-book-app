class AddressBook {

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-z\\s]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect'
    }

    get name() {
        return this._name;
    }

    set address(address) {
        let addressRegex = RegExp('');  //([A-Za-z]{2,})\w+
        if (addressRegex.test(address))
            this._address = address;
        else throw 'Address is Incorrect'

    }

    get address() {
        return this._address;
    }

    set city(city) {
        this._city = city;
    }

    get city() {
        return this._city;
    }

    set state(state) {
        this._state = state;
    }

    get state() {
        return this._state;
    }

    set zip(zip) {
        this._zip = zip;

    }

    get zip() {
        return this._zip;
    }

    set phone(phone) {
        let phoneRegex = RegExp(''); //^(\+91)?[0]?(91)?[0-9]\d{10,13}$
        if (phoneRegex.test(phone))
            this._phone = phone;
        else throw 'Phone number is Incorrect'
    }

    get phone() {
        return this._phone;
    }


    toString() {
        return "id=" + this._id + 
        ", name=" + this._name + 
        ", address=" + this._address + 
        ", city=" + this._city + 
        ", state=" + this._state + 
        ", phoneNumber=" + this._phone + 
        ", zip=" + this._zip;
    }

}