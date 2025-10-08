const waffle =document.getElementById("waffle");
const title=document.getElementById("title");
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