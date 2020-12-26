"use strict";
const button = document.querySelector('button');
function clickHandler(message) {
    console.log("clicked " + message);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "message"));
}
//# sourceMappingURL=app.js.map