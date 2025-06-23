let nextbutton=document.getElementById("next");
let prevbutton=document.getElementById("prev");
let container=document.getElementById("box");

let img=document.getElementById("image");
console.log(nextbutton);
console.log(prevbutton);
console.log(container);
console.log(img);
nextbutton.addEventListener('click',()=>{
    img.src="/image/img1.jpg"
})
prevbutton.addEventListener('click',()=>{
    img.src="/image/img4.jpg"
})

