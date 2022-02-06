//we can create element using javascript
const a = document.createElement("a");
    a.setAttribute("title", "this is custom div");
    a.setAttribute("href", "https://www.google.com");
    a.setAttribute("target", "_blank");
    a.textContent = 'Visit google.';

    
    //select list
    const list = document.getElementById("list");
    list.appendChild(a);
    console.log(a);
    
const b = document.createElement("b");
    b.setAttribute("title", "this is created by myself");
    b.setAttribute("href", "https://www.facebook.com");	
    b.setAttribute("target", "_blank");
    b.textContent = 'Visit facebook.';

    const list1 = document.getElementById("list");
    list1.appendChild(b);
    console.log(b);