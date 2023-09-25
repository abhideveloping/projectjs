var istatus = document.querySelector("h5");

var addFriend = document.querySelector('#add');

let a = 0;

addFriend.addEventListener('click', function(){
    if (a == 0){
    istatus.innerHTML = "Friends";
    addFriend.innerHTML = "Remove";
    a = 1;
    }
    else{
        istatus.innerHTML = "Stranger";
        addFriend.innerHTML = "Add Friend";
    a = 0;
    }
})