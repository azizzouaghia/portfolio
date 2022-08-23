/* Load Page Start */
let Loader = document.getElementById("LoadPage");
window.addEventListener("load",()=>{
    Loader.style.display='none';
})
/* Load Page End */
Mode();
/* Mode Change Start */
function Mode() {
if(localStorage.getItem("Mode")==="Dark"){
// Style Sheet
document.getElementById("stylesheet").href = "./css/darkStyle.css";
// Hello Btn
document.querySelector(".hello-btn").classList.remove("btn-outline-primary");
document.querySelector(".hello-btn").classList.add("btn-outline-dark");

}else if (localStorage.getItem("Mode") === "Default") {
// Style Sheet
document.getElementById("stylesheet").href = "./css/defaultStyle.css";
// Hello Btn
document.querySelector(".hello-btn").classList.remove("btn-outline-dark");
document.querySelector(".hello-btn").classList.add("btn-outline-primary");

}else{
    localStorage.setItem("Mode", "Default");
}
}
document.querySelector(".change-mode").onclick = ()=>{
if(localStorage.getItem("Mode")==="Dark"){
localStorage.setItem("Mode","Default");
Mode();
}else if(localStorage.getItem("Mode")==="Default") {
localStorage.setItem("Mode", "Dark");
Mode();
}
}

/* Mode Change Ends */

/* Fixed The Navbar Start */
let navbar  = document.getElementById("navbar");
let navlink = document.querySelectorAll(".nav-l");
window.addEventListener('scroll',()=>{
    if(window.scrollY > 10) {
        navbar.classList.add("nav-fix");
    navlink.forEach((e)=>{
        e.classList.add("nav-link-fix");
    })
    }else {
        navbar.classList.remove("nav-fix");
    navlink.forEach((e) => {
        e.classList.remove("nav-link-fix");
    });
    }
})
/* Fixed The Navbar End */

/* Fix The UnderLine Start */
let text = document.querySelectorAll(".projects .card h5");
text.forEach((el)=>{
    let width = el.clientWidth;
    if(screen.width <= 580) {
        left = (150-width)/2;
    }else {
        left = (200-width)/2;
    }
    el.style['width']=`${width} px`;
    el.style['left']=`${left}px`;  
})
/* Fix The UnderLine Start */

/* Add The year Start */
let year = document.getElementById('rightsyear');
let date = new Date();
year.innerHTML=date.getFullYear();
/* Add The year End*/

/* Animation Start */
//Progress Bar 
let progressBar = document.querySelectorAll(".resume .univskill .progress-bar");
let univskills = document.querySelector(".resume .univskills");
let progressBarLang = document.querySelectorAll(".resume .langs .progress-bar");
let lang = document.querySelector(".resume .langs");
window.onscroll = ()=>{
    if (window.scrollY > univskills.offsetTop - 400) {
        progressBar.forEach((e) => {
        e.style.width = e.dataset.width;
    })}
    if (window.scrollY > lang.offsetTop - 500 ) {
        progressBarLang.forEach((e) => {
        e.style.width = e.dataset.width;
    })}
}
/* Animation Ends */

/* Writing Start :) */
function writingAnimation(title,Stime,ScNum=0){ // Function
let titleArray = title.textContent.split("");
let rez = [titleArray[0]];
title.innerHTML = titleArray[0];
let i = 1;
let WCheck = true;
window.addEventListener("scroll", ()=>{
    if (window.scrollY > title.offsetTop - ScNum && WCheck == true) {
        WCheck = false;
    let yo = setInterval(() => {
        rez[i] = titleArray[i];
        title.innerHTML = rez.join("");
        i++;
        i === titleArray.length ? clearInterval(yo) : false;
    }, Stime);
    }})};
// Add Animation
let title4 = document.querySelector(".hello .title");
writingAnimation(title4, 150 , 580);
let title1 = document.querySelector(".resume .title");
writingAnimation(title1, 150 ,580 );
let title2 = document.querySelector(".portfolio .title");
writingAnimation(title2, 150 , 580);
let title3 = document.querySelector(".contact .title"); 
let LastTitleArg =  -(document.body.clientHeight) - (screen.width<= 580?180:-130) ; //Param For The Last Title
writingAnimation(title3, 150,LastTitleArg);
/* Writing End :)  */