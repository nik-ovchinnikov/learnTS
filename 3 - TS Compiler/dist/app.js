"use strict";
const button = document.querySelector('button');
function clickHandler(message) {
    console.log("clicked " + message);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "message"));
    console.log("dfdsf");
    console.log("dfdsf");
}
//# sourceMappingURL=app.js.map