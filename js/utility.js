const checkName = (name) => {
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-z\\s]{2,}$');
    if (!nameRegex.test(name)) throw 'Name is Incorrect'
}

const checkPhone = (phone) => {
    const phoneRegex = RegExp('');  //\b\d{3}[-.]?\d{3}[-.]?\d{4}\b
    if (!phoneRegex.test(phone)) throw 'Phone number is Incorrect'
}

const checkAddress = (address) => {
    const addressRegex = RegExp('^[A-Za-z0-9\\,\\s]{3,}?$');
    if (!addressRegex.test(address)) throw 'Address is Incorrect'
}

const setTextValues = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const update = (node) => {
    window.location.replace(site_properties.add_address_book_page + "?id=" + node.id);
}


function makeServiceCall(methodType, url, async = true, data = null) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            console.log("State Changed Called. Ready State: " + xhr.readyState + " Status: " + xhr.status);
            if (xhr.status.toString().match('^[2][0-9]{2}$')) {
                resolve(xhr.responseText);
            }else if(xhr.status.toString().match('^[4,5][0-9]{2}$')){
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
                console.log("XHR Failed");
            }
        }

        xhr.open(methodType, url, async);
        if (data) {
            console.log(JSON.stringify(data));
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(data));
        } else xhr.send();
        console.log(methodType + " request sent to the server");
    });
} 