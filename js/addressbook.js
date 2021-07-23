class AddressBook {

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set address(address) {
        this._address = address;

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
        this._phone = phone;
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