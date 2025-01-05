// Window load event to show the popup on page load
window.onload = function () {
    const popup = document.getElementById("popup");
    popup.style.display = "block"; // Show popup when the page loads
};

// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none"; // Hide popup
}

// Function to show the ticket form when "Grab Tickets..!" is clicked
function showTicketForm() {
    document.getElementById("popup").style.display = "none"; // Hide the popup
    document.getElementById("ticket-form").style.display = "block"; // Show the ticket form
}

// Function to generate a unique ticket and display it with a barcode
function generateTicket(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const ticketId = 'ACMTKT-' + Date.now(); // Generate a unique ticket ID based on current timestamp

    if (name === "" || email === "") {
        alert("Please enter both name and email to generate the ticket.");
        return; // If name or email is empty, return without proceeding
    }

    // Set the ticket details dynamically
    document.getElementById("ticket-name").textContent = name;
    document.getElementById("ticket-email").textContent = email;
    document.getElementById("ticket-id").textContent = ticketId;

    // Generate a barcode using JsBarcode
    const barcode = document.getElementById("barcode");
    barcode.textContent = ''; // Clear any previous barcode
    JsBarcode(barcode, ticketId, {
        format: "CODE128", // Barcode format
        lineColor: "#0aa", // Barcode line color
        width: 2, // Width of the bars
        height: 40, // Height of the barcode
        displayValue: false // Hide the barcode value (ticket ID)
    });

    // Hide the ticket form and show the ticket
    document.getElementById("ticket-form").style.display = "none";
    document.getElementById("ticket").style.display = "block"; // Show the generated ticket
}

// Function to close the ticket and navigate to main.html
function closeTicket() {
    window.location.href = "main.html"; // Redirect to main page (main.html)
}


// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}


async function saveTicketAsPDF() {
    const { jsPDF } = window.jspdf; // Correct way to use jsPDF with the UMD build
    const ticketName = document.getElementById('ticket-name').textContent;
    const ticketEmail = document.getElementById('ticket-email').textContent;
    const ticketId = document.getElementById('ticket-id').textContent;

    // Create a jsPDF instance
    const pdf = new jsPDF();

    // Add text to the PDF
    pdf.setFontSize(16);
    pdf.text("Your Ticket", 10, 20);
    pdf.setFontSize(12);
    pdf.text(`Name: ${ticketName}`, 10, 30);
    pdf.text(`Email: ${ticketEmail}`, 10, 40);
    pdf.text(`Ticket ID: ${ticketId}`, 10, 50);

    // Add the barcode image
    const barcodeSVG = document.querySelector("#barcode");
    const barcodeDataURL = await svgToDataURL(barcodeSVG); // Convert SVG to Data URL
    pdf.addImage(barcodeDataURL, "PNG", 10, 60, 100, 20); // Adjust as needed

    // Save the PDF
    pdf.save(`Ticket_${ticketId}.pdf`);
}

// Helper function to convert SVG to Data URL
async function svgToDataURL(svg) {
    const svgBlob = new Blob([svg.outerHTML], { type: "image/svg+xml;charset=utf-8" });
    const svgURL = URL.createObjectURL(svgBlob);
    const img = new Image();
    return new Promise((resolve) => {
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            URL.revokeObjectURL(svgURL);
            resolve(canvas.toDataURL("image/png"));
        };
        img.src = svgURL;
    });
}



// Event listener for hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
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
