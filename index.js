function showSidebar() {

    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {

    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// Array to store image paths for the slider
const images = [
    'images/Group 105.png', 
    'images/img.png', 
    'images/Group 105.png' 
];


let currentIndex = 0;


function previmg() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
}


function forwardimg() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
}


function updateImage() {
    const img = document.querySelector('#myImage');
    img.src = images[currentIndex];
    img.style.height = '400px';
    img.style.width = '400px';

 
    const dots = document.querySelectorAll('.slide-dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}


updateImage();

function scrollDown() {
   
    window.scrollTo({
        top: 1300,
        behavior: 'smooth' 
    });
}
var tl = gsap.timeline();
/*tl.to("#btn .s",{
    x:200,
    duration:3,
    delay:1,
    
   
    scale:0.8,
    backgroundColor:"white"


})*/
tl.from("#content", {
    x: 10,
    duration: 1.5,
    delay: 0.5,
    opacity: 0,

    scale: 0.5,
    backgroundColor: "transparent"


})