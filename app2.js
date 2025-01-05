document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("box");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");
    const totalLetterAnimationTime = 0.8 + 0.5;
    const additionalDelay = 0.7;

    setTimeout(() => {
        box.style.animation = "moveBox 2s ease-in-out forwards";
        navbar.classList.add("visible");
    }, (totalLetterAnimationTime + additionalDelay) * 1000);

    setTimeout(() => {
        navLinks.classList.add("visible");
    }, 3000);
});



window.onload = function () {
    setTimeout(function () {
        document.getElementById("pcu-acm").classList.add("visible");
    }, 3600);

    setTimeout(function () {
        const mainPage = document.getElementById("main-page");
        mainPage.classList.add("show");  


        const videoBox = document.getElementById("video-box");
        videoBox.classList.add("visible"); 

        const video = document.getElementById("background-video");
        video.play(); 
    }, 4100); 
};