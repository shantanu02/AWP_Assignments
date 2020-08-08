var likes = 0;
//var com = document.getElementsById("myInput").value;


function comment() {

    const newEle = document.createElement("div");
    newEle.textContent = document.getElementById("myInput").value;
    newEle.style.border = "Opx solid black";
    newEle.style.padding = "5px";
    //newEle.style.width = "30vw";
    //newEle.style.height = "15vh";
    newEle.style.margin = "10px";
    newEle.style.fontSize = "20px";
    newEle.style.fontFamily = "cursive";



    const cb = document.querySelector("#cbox");
    cb.appendChild(newEle);


}

function like() {
    likes++;
    let btnEl = document.querySelector("#like");
    btnEl.innerHTML = likes + "  Like(s)";
}