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
firstName.addEventListener("focus", function(){
    console.log(123);
});
firstName.addEventListener("blur", function(){
    console.log('This is blur.');
});
const lastName = document.querySelector("#last_name");
lastName.addEventListener("focus", function(){
    console.log('paisa');
});
lastName.addEventListener("blur", function(){
    console.log('sapana');
});