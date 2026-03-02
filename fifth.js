//DOM manipulation
// properties
// 1. tagName
// 2. innerText
// 3. innerHTML
// 4. textContent
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);//property used is innerText property.
// h2.innerText = h2.innerText+"from apna college students";//concatenate

let divs = document.querySelectorAll(".box");

let idx = 1;
for (div of divs){
    div.innerText = `This is the ${idx} div`;
    idx++;
}

divs[0].innerText = "This is the first div";
divs[1].innerText = "This is the second div";
divs[2].innerText = "This is the third div";