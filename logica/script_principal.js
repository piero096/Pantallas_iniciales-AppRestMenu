const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const btContinuar = document.getElementById("btContinuar");
const btClose = document.getElementById('btContinuar-close');
const modal = document.querySelector('.modal');
const container = document.querySelector('.modal-container');

btClose.addEventListener("click", function(){
    event.preventDefault();
    modal.classList.add("modal-close");
    setTimeout(function(){
        container.style.opacity = "0";
        container.style.visibility = "visible";
    },600)
})

let chose = 1

const changeOption = () => {
    chose == 1 ? (
        option1.classList.value = 'option option-active',
        content1.classList.value = 'content content-active'
    )
    : (
        option1.classList.value = 'option',
        content1.classList.value = 'content '
    )

    chose == 2 ? (
        option2.classList.value = 'option option-active',
        content2.classList.value = 'content content-active'
    )
    : (
        option2.classList.value = 'option',
        content2.classList.value = 'content '
    )
}

option1.addEventListener('click', ()=> {
    chose = 1
    changeOption()
    content1.classList.add("content-One")
})

option2.addEventListener('click', ()=> {
    chose = 2
    changeOption()
    content2.classList.add("content-Two");
})

btContinuar.addEventListener('click', ()=>{
    event.preventDefault();
    chose = 2
    changeOption()
    content2.classList.add("content-Two");
})