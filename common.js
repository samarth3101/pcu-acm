document.addEventListener("DOMContentLoaded", () => {
    // Declare the navLinks variable once
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");  
    const navbarLogo = document.getElementById("navbar-logo");

    setTimeout(() => {
        navbar.classList.add("visible");
        navLinks.classList.add("visible");
    }, 100);
    const mainPage = document.getElementById("main-page");
    setTimeout(() => {
        mainPage.classList.add("show"); 
    }, 800); 
    const videoBox = document.getElementById("video-box");
    const video = document.getElementById("background-video");

    if (videoBox && video) {
        setTimeout(() => {
            videoBox.classList.add("visible"); 
            video.play(); 
        }, 2000); 
    }
    const teamSection = document.querySelector(".team-container");
    if (teamSection) {
        setTimeout(() => {
            teamSection.classList.add("show");
        }, 1200); 
    }
    const currentPage = window.location.pathname.split("/").pop(); 
    navLinks.querySelectorAll("a").forEach(link => {
        const linkPath = link.getAttribute("href").split("/").pop();
        if (linkPath === currentPage) {
            link.classList.add("active"); 
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

// Submit Form to External API (Optional)
async function submitForm(event) {
    event.preventDefault();

    document.getElementById("success-modal").style.display = "flex";
    const formData = new FormData(event.target); // Get form data

    try {
        const response = await fetch("https://formspree.io/f/xvggvzqy", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });
        if (response.ok) {
            console.log("Form submitted successfully!");
            event.target.reset(); // Reset form after submission
        } else {
            console.error("Form submission error.");
        }
    } catch (error) {
        console.error("Network error: ", error);
    }
}

function closeModal() {
    document.getElementById("success-modal").style.display = "none";
}


// Function to close the popup and navigate to the main page
function closePopup() {
    window.location.href = "main.html"; 
}




// Form submission
async function submitForm(event) {
    event.preventDefault(); 

    document.getElementById('success-modal').style.display = 'flex'; 
    const formData = new FormData(event.target); 
    try {
        const response = await fetch("https://formspree.io/f/xvggvzqy", {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
            }
        });
        if (response.ok) {
            console.log("Form submitted successfully!");
            event.target.reset(); 
        } else {
            console.error("Form submission error.");
        }
    } catch (error) {
        console.error("Network error: ", error);
    }
}


function closeModal() {
    document.getElementById('success-modal').style.display = 'none';
}
