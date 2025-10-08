const waffle =document.getElementById("waffle");
const title=document.getElementById("title");
const colors = ["red", "blue" ,"green", "white"];
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
    if (color<3){
        color++;
    }
    else{
        color=0;
    }
    waffle.style.borderColor = colors[color];
})
document.addEventListener("mousemove", (event)=>{
    const titleBox= title.clientLeft;
    const x= event.clientX;
    const y= event.clientY;

})