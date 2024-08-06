
let backg = document.querySelector(".backgrond");
let inpbox = document.querySelector(".inputbox");
let btnp = document.querySelector(".btnplus");
let bcancel = document.getElementById("btncancel");
let btnadd = document.getElementById("btnadd");

btnp.addEventListener("click", function () {
    backg.style.display = "block";
    inpbox.style.display = "block";
})

bcancel.addEventListener("click", function (event) {
    event.preventDefault();
    backg.style.display = "none";
    inpbox.style.display = "none";
})

let bookcontainer = document.querySelector(".bookcontainer");
let btnad = document.getElementById("btnadd");
let inbook = document.getElementById("inbook");
let inadd = document.getElementById("inadd");
let text = document.getElementById("text");



btnad.addEventListener("click", function (event) {
    event.preventDefault();
    let div = document.createElement("div");
    div.setAttribute("class", "bookconchild");
    let h1 = document.createElement("h1");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    let butn = document.createElement("button");
    butn.addEventListener("click", function(event){
        event.target.parentElement.remove();
    })
    

    h1.style.color = "orange";
    h4.style.color = "black";
    h4.style.margin = "0";
    p.style.flexGrow = "1";
    p.style.margin="0";


    butn.classList.add("btnn");

    h1.innerHTML = inbook.value;
    h4.innerHTML = inadd.value;
    p.innerHTML = text.value;
    butn.innerHTML = "remove";

    div.append(h1);
    div.append(h4);
    div.append(p);
    div.append(butn);
    bookcontainer.append(div);

    backg.style.display = "none";
    inpbox.style.display = "none";

});

function removeitem(event) {
    event.target.parentElement.remove();
}
