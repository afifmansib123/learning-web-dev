const pressbutton = document.querySelector(".button1");
pressbutton.addEventListener("click", Addnewdiv);

function Addnewdiv(){
    const newdiv = document.createElement("div");//creating element for a div
    const divcontainer = document.getElementById("div-container")//to keep data inside container

    console.log("hiiii")
    newdiv.classList.add('css-segment');//adding css to new element
    divcontainer.appendChild(newdiv);//adding css to div
    
}