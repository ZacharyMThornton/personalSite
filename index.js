document.addEventListener("DOMContentLoaded", () => {
    const navMenu = document.querySelector("nav");
    const menuButton = document.getElementById("expand-button");
    const navToggleWidth = 600;

    if (!menuButton || !navMenu) return;

    // Toggle menu visibility on button click
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking any navigation link
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= navToggleWidth) {
                navMenu.classList.remove("active");
            }
        });
    });

    // Reset layout state on window resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > navToggleWidth) {
            navMenu.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Enable clicking the entire project card to toggle the details
    const projectCards = document.querySelectorAll(".project-card");
    
    projectCards.forEach(card => {
        const details = card.querySelector(".card-details");
        
        card.addEventListener("click", (e) => {
            // Prevent double-toggling if clicking directly on the summary element
            if (e.target.closest("summary")) return;
            
            details.open = !details.open;
        });
    });
});

// Function to open the research poster modal
function openPosterModal(event) {
    if (event) event.stopPropagation(); // Prevents details card from toggling shut
    const modal = document.getElementById("poster-modal");
    if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // Disable page scrolling behind modal
    }
}

// Function to close the research poster modal
function closePosterModal(event) {
    if (event) event.stopPropagation();
    const modal = document.getElementById("poster-modal");
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto"; // Re-enable page scrolling
    }
}

// Close modal when pressing the Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closePosterModal();
    }
});