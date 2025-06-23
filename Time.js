let hours=document.getElementById("hrs");
let minutes=document.getElementById("mins");
let seconds=document.getElementById("secs");
let AmorPm=document.getElementById("AmorPm");

let changeTime=()=>{
    let date=new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();

if(date.getHours()>12){
    hour=hour-12;
    hours.innerHTML=hour;
    
}
else{
   hours.innerHTML=hour; 
}
   minutes.innerHTML=minute;
   seconds.innerHTML=second;

   if(date.getHours()>=12){
    AmorPm.innerHTML="pm";
   }else{
    AmorPm.innerHTML="Am";
   }
    console.log(date)
}
setInterval(changeTime,500);