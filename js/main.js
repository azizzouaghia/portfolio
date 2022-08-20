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
    ;
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