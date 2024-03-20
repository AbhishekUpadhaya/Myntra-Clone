let images = document.querySelectorAll(".image-box");
let div = document.createElement("div");
let p = document.createElement("p");



images.forEach((image)=>{
    image.addEventListener("mouseover",()=>{
        p.innerHTML="Sizes M";
        div.innerHTML="Wishlist";
        div.append(p);
        p.style.fontSize="0.9rem"
        p.style.color="red";
        image.style.position="relative";
        div.style.position="absolute";
        image.append(div);
        div.style.backgroundColor="white";
        div.style.border=" 1px solid grey";
        div.style.color="balck";
        div.style.height="45px";
        div.style.width="200px";
        div.style.top="103%";
        div.style.textAlign="center";
        div.style.fontSize="1.2rem";

    
    })
    image.addEventListener("mouseout",()=>{
        div.remove();
    })
})





