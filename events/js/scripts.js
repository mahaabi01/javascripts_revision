/*const btn = document.querySelector('#custom-btn');
const topHeadingText = document.querySelector('.top-heading-text');
//click event
// btn.addEventListener("click", function(event) {
//         console.log("123");
//         console.log("clicked!");
//         //position from the button itself when clicked onto it
//         console.log(event.offsetX);
//         console.log(event.offsetY);
// });
btn.addEventListener("click", function(event) {
    // console.log(event);
    //check the content of the text when user clicks the text
    //change the content of the text, when user clicks the button
    topHeadingText.textContent = 'Changed one';
    topHeadingText.style.color = 'red';
});

const form = document.querySelector('#contact-service');
form.addEventListener("submit", function(e){
    const firstName = document.querySelector("#first_name");
    const lastName = document.querySelector("#last_name");
    console.log(firstName.value);
    console.log(lastName.value);
    //this prevents the page from being re-load
    e.preventDefault();
});
*/
//first-name
const firstName = document.querySelector("#first_name");
// firstName.addEventListener("focus", function(){
//     console.log(123);
// });
firstName.addEventListener("focus", focusEvtFunct);
function focusEvtFunct() {
    firstName.style = 'border: 1px solid pink;';
    console.log("focused in first name..");
}
firstName.addEventListener("blur", function(){
    console.log("blured on first name !");
});
const lastName = document.querySelector("#last_name");
lastName.addEventListener("focus", addColor);
function addColor() {
    lastName.style = 'border: 1px solid pink;';
    console.log("focused in last name..")
}

lastName.addEventListener("blur", function(){
    console.log('Blured in last name !');
});

