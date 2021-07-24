let addressBookList;

window.addEventListener('DOMContentLoaded', (event) => {

        getAddressBookDataFromStorage();
        createInnerHtml();

})

const getAddressBookDataFromStorage = () => {
    addressBookList = localStorage.getItem('AddressBookList') ?
        JSON.parse(localStorage.getItem('AddressBookList')) : [];

    processAddressBookDataResponse();
}

const processAddressBookDataResponse = () => {
    document.querySelector(".person-count").textContent = addressBookList.length;
    createInnerHtml();
}

const createInnerHtml = () => {

    const headerHtml = `
                        <th>Fullname</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                        <th>Phone Number</th>
                        <th>Action</th>`;

    if (addressBookList.length == 0) return;

    let innerHtml = `${headerHtml}`
    for (const addressBookData of addressBookList) {
        innerHtml = ` ${innerHtml}
            <tr>
                <td>${addressBookData._name}</td>
                <td>${addressBookData._address}</td>
                <td>${addressBookData._city}</td>
                <td>${addressBookData._state}</td>
                <td>${addressBookData._zip}</td>
                <td>${addressBookData._phone}</td>
                <td>
                    <img id="${addressBookData._id}" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
                    <img id="${addressBookData._id}" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
                </td>
            </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const remove = (node) => {
    addressBookList = addressBookList.filter(person => person._id != node.id);
    storeDataToLocalStorage();
    processAddressBookDataResponse();
}

const storeDataToLocalStorage = () => {
    localStorage.setItem('AddressBookList', JSON.stringify(addressBookList));
}