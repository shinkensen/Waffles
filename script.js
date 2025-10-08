let left=true;
setInterval(() => {
    let image= Math.random()*2 +1 %2 ==0? "images/strawberry.png" : "images/whipcream.png";
    const img=document.createElement("img",{src:image});
}, 5000);   