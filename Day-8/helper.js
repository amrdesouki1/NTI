export function createElement(tag, text) {
    let element = document.createElement(tag);
    element.innerText = text;
    return element;
}

export function showMessage(message) {
    console.log(message);
}