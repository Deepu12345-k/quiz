let nextbutton=document.getElementById("next")
let prevbutton=document.getElementById("prev")
let img=document.getElementById("img")
let Vdown=document.getElementById("Vdown")
let Vup=document.getElementById("Vup")
let play=document.getElementById("play")
let pause=document.getElementById("pause")
let restart=document.getElementById("restart")

let images=["img1","img4","moon2","moon3"];
let audios=["audio1","audio2","audio3","audio4"];
let Audioplayer=new Audio("/Audios/audio1.mp3");


play.addEventListener('click',()=>{
    Audioplayer.play();
})
pause.addEventListener('click',()=>{
    Audioplayer.pause();
})
let i=0;
nextbutton.addEventListener('click',()=>{
    if(i<audios.length){
        i++;
        console.log("from next if"+i);
    }else{
        i=0;
        console.log("from next else"+i);
    }
    img.src="/image/"+images[i]+".jpg";
    Audioplayer.src="/Audios/"+audios[i]+".mp3";
    Audioplayer.play();

})
    
prevbutton.addEventListener('click',()=>{
    if(i<0){
        i=images.length-1;
        console.log("from prev if"+i);
    }else{
        i--;
        console.log("from prev else"+i)
    }
    img.src="/image/"+image[i]+".jpg";
    Audioplayer.src="/Audios/"+audios[i]+".mp3";
    Audioplayer.play();
})
    

Audioplayer.Volume=0.1;
Vup.addEventListener('click',()=>{
    if(Audioplayer.Volume<=1){
        Audioplayer.Volume=Audioplayer.Volume+0.1;
    }
})
Vdown.addEventListener('click',()=>{
    if(Audioplayer.Volume>0.1){
        Audioplayer.Volume=Audioplayer.Volume-0.1;
    }
})
restart.addEventListener('click',()=>{
    Audioplayer.currentTime=0;
    Audioplayer.play();
})