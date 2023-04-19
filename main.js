let b = document.querySelector(".block");
let h = document.querySelector('.block2');

b.addEventListener('click', (event) => {
    blocks();
})

function blocks() {
    b.style.background = 'yellow';
    h.style.background = 'red';
}
