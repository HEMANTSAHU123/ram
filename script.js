

var isstatus=document.querySelector("h5")
var btn=document.querySelector("#add")
var check=0
btn.addEventListener("click",function(){
if(check==0){

    isstatus.innerHTML="friends"
    isstatus.style.color="green"
    btn.innerHTML="remove friend"
    check=1
}
else {
    isstatus.innerHTML="stranger"
    isstatus.style.color="red"
    btn.innerHTML="add friend"
   
    check=0
}



})
 