

function likePost(btnElement) {


    let postLikeCount = btnElement.children[0].innerHTML;
    let postNumCount = parseInt(postLikeCount);

    postNumCount++;

    btnElement.children[0].innerHTML = postNumCount;
}

function commentPost(btnElement) {
    let userComment = btnElement.parentElement.parentElement.children[1].children[0].value;

    // console.log(btnElement.parentElement.parentElement.parentElement.children[2].children[0].cloneNode(true));

    let newEle = btnElement.parentElement.parentElement.parentElement.children[2].children[0].cloneNode(true);

    let parEle = btnElement.parentElement.parentElement.parentElement.children[2];
    newEle.style.background = "grey";


    newEle.style.display = "flex";
    //newEle.style.display = "block";
    newEle.children[0].innerHTML = userComment;


    parEle.insertBefore(newEle, parEle.firstChild);

    btnElement.parentElement.parentElement.children[1].children[0].value = "";

}

let deleteComment = (btnElement) => {
    let ele = btnElement.parentElement.parentElement;
    ele.remove();

}