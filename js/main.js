if(window.innerWidth <= 860){
    document.querySelector(".menu-bar").classList.replace("d-flex", "d-none");
    document.querySelector(".menu-icon").classList.replace("d-none", "d-block");
}else{
    document.querySelector(".menu-bar").classList.replace("d-none", "d-flex");
    document.querySelector(".menu-icon").classList.replace("d-block", "d-none");
}

window.onresize=()=>{
    if(window.innerWidth <= 970){
        document.querySelector(".menu-bar").classList.replace("d-flex", "d-none");
        document.querySelector(".menu-icon").classList.replace("d-none", "d-block");
    }else{
        document.querySelector(".menu-bar").classList.replace("d-none", "d-flex");
        document.querySelector(".menu-icon").classList.replace("d-block", "d-none");
        if(menuOn){
            menuOn= false;
            menuBar.classList.add("d-none");
            menuBar.classList.remove("w-75", "rounded","text-center", "d-inline-block", "position-absolute", "top-20", "end-0", "bg-white");
        }
    }
}

let menuOn= false;
let menuBar=document.querySelector(".menu-bar");

document.querySelector(".menu-container .menu-icon").onclick =()=>{
    if(!menuOn){
        menuOn= true;
        menuBar.classList.remove("d-none");
        menuBar.classList.add("w-75", "rounded","text-center", "d-inline-block", "position-absolute", "top-20", "end-0", "bg-white");
    }else{
        menuOn= false;
        menuBar.classList.add("d-none");
        menuBar.classList.remove("w-75", "rounded","text-center", "d-inline-block", "position-absolute", "top-20", "end-0", "bg-white");
    }
}

document.querySelector(".landing .L-landing").onmouseenter =()=>{
    document.querySelector(".landing .bg-img").style.right="-5%";
    document.querySelector(".landing .L-landing img").style.right="calc(-856px/2)";
    document.querySelector(".landing .R-landing img").style.left="calc(-496px/2)";
}
document.querySelector(".landing .R-landing").onmouseenter = ()=>{
    document.querySelector(".landing .bg-img").style.right="5%";
    document.querySelector(".landing .L-landing img").style.right="calc(-656px/2)";
    document.querySelector(".landing .R-landing img").style.left="calc(-696px/2)";
}