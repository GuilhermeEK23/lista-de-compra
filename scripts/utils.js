function showAlert(message){
    alert(message);
}

function createElement(type, attributes = {}, ...children){
    const element = document.createElement(type);

    for (const key in attributes) {
        /*if (key.startsWith("data-")){
            element.setAttribute(key, attributes[key]);
        }*/
        element[key] = attributes[key];
    }

    for (let child of children) {
        if (typeof child === "string") {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    }

    return element;
}