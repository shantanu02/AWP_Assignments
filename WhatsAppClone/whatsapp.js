function sendMessage1() {
    let msg = document.querySelector("#input1").value;
    const newEle = document.querySelector("#refmsg1").cloneNode(true);
    newEle.removeAttribute("id");
    newEle.style.visibility = "visible";
    newEle.children[1].innerHTML = msg;
    newEle.style.marginBottom = "10px";
    // newEle.style.border = "1px solid black";


    const msgbox = document.getElementById("msgbody1");
    msgbox.appendChild(newEle);
    document.getElementById("input1").value = "";

    const newEle1 = document.querySelector("#refmsg2").cloneNode(true);
    newEle1.removeAttribute("id");
    newEle1.style.visibility = "visible";
    newEle1.children[0].innerHTML = msg;
    newEle1.style.marginBottom = "10px";
    //newEle1.style.border = "1px solid black";

    const msgbox1 = document.getElementById("msgbody2");
    msgbox1.appendChild(newEle1);
    // document.getElementById("input1").value = "";

}


function sendMessage2() {
    let msg1 = document.querySelector("#input2").value;
    const newEle = document.querySelector("#refmsg2").cloneNode(true);
    newEle.removeAttribute("id");
    newEle.style.visibility = "visible";
    newEle.children[1].innerHTML = msg1;
    newEle.style.marginBottom = "10px";
    // newEle.style.border = "1px solid black";

    const msgbox = document.querySelector("#msgbody2");
    msgbox.appendChild(newEle);
    document.querySelector("#input2").value = "";

    const newEle1 = document.querySelector("#refmsg1").cloneNode(true);
    newEle1.removeAttribute("id");
    newEle1.style.visibility = "visible";
    newEle1.children[0].innerHTML = msg1;
    newEle1.style.marginBottom = "10px";
    //newEle1.style.border = "1px solid black";

    const msgbox1 = document.getElementById("msgbody1");
    msgbox1.appendChild(newEle1);

}