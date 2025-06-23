let seconds=document.getElementById("secs");
let image=document.getElementById("img");

let i=30;
let updateTimer=()=>{
    i--;
    let j=i;
    if(j<10){
        j=0+""+j;
        seconds.innerHTML=j
    }else{
        seconds.innerHTML=j;

    }
    if(i==0){
        image.src="/images/flower2.jpg"
        clearInterval(id);
    }

    

}
let id=setInterval(updateTimer,1000);