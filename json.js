let saturate=document.getElementById("Saturate");
let contrast=document.getElementById("Contrast");
let brightness=document.getElementById("Brightness");
let sepia=document.getElementById("Sepia");
let grayscale=document.getElementById("GrayScale")
let blur=document.getElementById("Blur");
let huerotate=document.getElementById("HueRotate");
let Download=document.getElementById("potn2");
let Reset=document.getElementById("potn3");
let uPPPPP=document.getElementById("potn");
let upload2=document.getElementById("upload")
let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");
let img=document.getElementById("img")
let boximage=document.getElementsByClassName("images")[0];
window.onload=function hide(){
Download.style.display='none';
Reset.style.display='none';


}
upload2.onchange = function(){
    ResetData()
    
    Download.style.display='block';
Reset.style.display='block';
let file= new FileReader();
file.readAsDataURL(upload2.files[0]);
file.onload=function(){
   img.src=file.result;
}
img.onload=function(){

canvas.width=img.width;
canvas.height=img.height
ctx.drawImage(img,0,0,canvas.width,canvas.height)
img.style.display='none';


}


}

let filters=document.querySelectorAll("ul li input");
filters.forEach(filter=>{
filter.addEventListener('input',function(){
ctx.filter=`
saturate(${saturate.value}%)
contrast(${contrast.value}%)
brightness(${brightness.value}%)
sepia(${sepia.value}%)
blur(${blur.value}px)
grayscale(${grayscale.value})
hue-rotate(${huerotate.value}deg)
`
ctx.drawImage(img,0,0,canvas.width,canvas.height);


})
}
)
function ResetData(){
ctx.filter='none'
saturate.value='100';
contrast.value='100';
brightness.value='100'
sepia.value="0";
grayscale.value='100';
blur.value="0";
huerotate.value="0";


ctx.drawImage(img,0,0,canvas.width,canvas.height);

}

Download.onclick=function(){

    Download.href = canvas.toDataURL()


}
    
    



