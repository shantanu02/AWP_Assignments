let count = 0;

function increment() {
    let x = document.querySelector('#counterid');
    count = count + 1;
    x.innerHTML = count;
    x.style.color = "green";
}
function decrement() {
    let x = document.querySelector('#counterid');
    count = count - 1;
    x.innerHTML = count;
    x.style.color = "red";
}