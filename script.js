const waffle =document.getElementById("waffle");
const title=document.getElementById("title");
const class1=document.getElementsByClassName("animation");
const left= document.getElementById("left");
const right= document.getElementById("right");
const desc= document.getElementById("desc");
const img= document.getElementById("img");

const imgs = ["images/waffle1.png","images/waffle2.png","images/waffle3.png","images/waffle4.png"];
const descs = ["A tasty buttered up waffle" , "A tastier sugar waffle" , "A triangular waffle", "A Rectangular waffle"]
let image=0;
left.addEventListener("click",() => {
    if (image==0){
        image=3;
    }
    else{
        image--;
    }
    imgChanger();
}
)

right.addEventListener("click",() => {
    if (image==3){
        image=0;
    }
    else{
        image++;
    }
    imgChanger();
}
)

function imgChanger(){
    img.src = imgs[image];
    desc.textContent = descs[image];
    desc.style.color = "bisque";
}

let num=0;
setInterval(()=>{
    for (let title2 of class1){
        title2.style.borderColor = "black";
        if (num>3){
            num=0;
        }
        if (num==0){
            title2.style.borderBottom = "1px solid bisque";
        }
        else if (num==1){
            title2.style.borderRight = "1px solid bisque";
        }
        else if (num==2){
            title2.style.borderTop = "1px solid bisque";
        }
        else if (num==3){
            title2.style.borderLeft = "1px solid bisque";
        }
    num++;
}
},100)
const colors = ["red", "blue" ,"green", "white","burlywood"];
let color=-1;
waffle.style.transition= 'transform 0.2s ease-in-out'
let rot=10;
waffle.addEventListener("mousemove",()=>{
    waffle.style.transform = `rotate(${rot}deg)`;
    if (rot<43945935903094){
        rot+=10;
    }
})
waffle.addEventListener("click",()=>{
    if (color<4){
        color++;
    }
    else{
        color=0;
    }
    waffle.style.borderColor = colors[color];
})
document.addEventListener("mousemove", (event)=>{
    const titleWidth= title.getBoundingClientRect().width /2;
    const titleHeight= title.getBoundingClientRect().height /2;
    const x= event.clientX;
    const y= event.clientY;
    const angleX = Math.min(1, ((x-titleWidth) / titleWidth)) *-45;
    const angleY = ((y-titleHeight) / titleHeight) *2;
    title.style.transform = `rotateX(${angleY}deg)`
    title.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg)`
})
title.addEventListener("click", () =>{
    if (color<4){
        color++;
    }
    else{
        color=0;
    }
    title.style.color = colors[color];
})