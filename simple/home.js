let txtar = document.querySelector('#txtar');
let btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    let amount = document.querySelector('.amt').value; 
    let rate = document.querySelector('.rate').value;
    let time = document.querySelector('.time').value;
    let result = (amount*rate*time)/100;
    console.log(result);
    txtar.innerHTML = result;

})

