var likes = 0;
function comment() {
    /* let userComment = document.getElementById("myInput").value;
     const newElement = document.createElement("div");
     //newElement.textContent = userComment;
     newElement.style.display = "flex";
     newElement.style.justifyContent = "space-between";
     newElement.style.marginBottom = "10px";
 
     const child1 = document.createElement("div");
     child1.textContent = userComment;
     newElement.appendChild(child1);
     const child2 = document.createElement("button");
     child2.textContent = "Delete";
     newElement.appendChild(child2);
 
     commentBox.insertBefore(newElement, commentBox.firstChild);
     document.querySelector("#myInput").value = "";
     */


    //using clonenode :-

    let com = document.querySelector("#myInput").value;
    const newElement = document.querySelector("#referenceCommentId").cloneNode(true);
    newElement.removeAttribute("id");
    newElement.style.visibility = "visible";
    newElement.children[0].innerHTML = com;

    const commentBox = document.querySelector("#commentBox");
    commentBox.insertBefore(newElement, commentBox.firstChild);
    document.querySelector("#myInput").value = "";


}


function like() {
    likes++;
    let btnEl = document.querySelector("#like");
    btnEl.innerHTML = likes + "  Like(s)";
}



function delCom(btnEle) {
    btnEle.parentElement.remove();

}