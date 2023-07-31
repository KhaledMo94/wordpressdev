let getQoute = document.querySelector("#getQoute");
let socialIconsDiv = document.querySelector(".social-icons");
let socialIcons = document.querySelectorAll(".social-icons div");
let navItems = document.querySelectorAll("nav .navbar-collapse a");
let fxdBtn = document.querySelector(".fixedBtn");
let goTop = document.querySelector(".gotop");
let flex = false;
let msg = document.querySelector("textarea");
let sendMsg = document.querySelector("#send");
let nums = document.querySelectorAll(".myNumbers span");
let numBlock = document.querySelector(".myNumbers");
let menuBtn = document.querySelector("#menu");
let reveals = document.querySelectorAll(".reveal");
let creat = document.querySelector("h1 span");


getQoute.onclick=function(){
    socialIconsDiv.style.display = 'flex';
    let del=0.2;
    for(let i=0;i<socialIcons.length;i++){
        var x= socialIcons[i];
        gsap.fromTo(x,{
            y:-35,
            opacity:0,
        },{
            y:0,
            opacity:1,
            delay:del,
            ease:"bounce.out",
            duration:0.7,
        });
        del+=0.2;
    };
};

window.onload=function(){
    let del=0.2;
    for(let i=0;i<navItems.length;i++){
        var x= navItems[i];
        gsap.fromTo(x,{
            y:-35,
            opacity:0.5,
        },{
            y:0,
            opacity:1,
            delay:del,
        });
        del+=0.2;
    };
    gsap.from(".navbar-brand",{
        x:-50,
        opacity:0.1,
        duration:0.4
    });
    gsap.from(creat,{
        x:100,
        opacity:0.1,
        duration:1
    });
    setTimeout(function(){
        fxdBtn.style.display = "flex";
        gsap.from(fxdBtn,{
            duration: 2,
            scale: 0.5, 
            opacity: 0, 
            delay: 0.5, 
            stagger: 0.2,
            ease: "elastic", 
            force3D: true,
        })
    },2000);
    for(let i=0;i<nums.length;i++){
        let data = nums[i].dataset.goal;
        let val = nums[i].innerHTML;
        console.log(data);
        console.log(val)
        let id = setInterval(function(){
            nums[i].innerHTML++;
            if(data==nums[i].innerHTML){
                clearInterval(id);
            }
        },1500/(data - val));
    };
};

window.onscroll = function(){
    if(window.scrollY>=40){
        if(!flex){
            goTop.style.display="flex";
            gsap.fromTo(goTop,{opacity:0},{opacity:1,duration:0.3});
        }
        flex=true;
    }else{
        goTop.style.display="none";
        flex = false;
    }
};

goTop.addEventListener("click",function(){
    window.scrollTo(
        x=0,y=0,behavior="smooth"
    );
});

sendMsg.addEventListener("click",function(){
    let k=document.createElement("a");
    let enteredMsg = msg.value;
    codedMsg = encodeURI(enteredMsg);
    let aValue="https://wa.me/201159175049?text=hi%20khaled%20i%60am%20interested%20in%20your%20services%20in%20web%20development%20"+codedMsg;
    k.setAttribute("href",aValue);
    k.click();
});

menuBtn.addEventListener("click",function(){
    let d=0.3;
    for(let i=0;i<navItems.length;i++){
        gsap.fromTo(navItems[i],{
            x:-40,
            opacity:0,
        },{
            x:0,
            opacity:1,
            duration:0.5,
            delay:d,
        });
        d+=0.2;
    }
})
let animDone = [false,false,false];
function reveal() {
    for (let i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("reactive");
        } else {
            reveals[i].classList.remove("reactive");
        }
    }
    let animates = document.querySelectorAll(".reactive");
    for (let i=0;i<animates.length;i++){
        if (animDone[i]===false)
        gsap.fromTo(animates[i],{
            y:100,
            opacity:0,
        },{
            y:0,
            opacity:1,
            duration:1,
        })
        animDone[i]=true;
    }
    
}  
window.addEventListener("scroll", reveal);
