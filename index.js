// handle nav bar for small screens
const navMenu = document.querySelector("nav");
const menuButton = document.getElementById("expand-button");
const navToggleWidth = 600;
let expanded = false;

menuButton.addEventListener("click", () => {
    expanded ? closeMenu() : openMenu();
});

window.addEventListener("resize", function(){
    if (window.outerWidth > navToggleWidth){
        menuButton.style.display = "none";
        Array.from(navMenu.children).forEach(child => {
            if (child.tagName === "A"){
                child.style.display = "flex";
            }
        });
        expanded = false;
    }
    if (window.outerWidth <= navToggleWidth){
        menuButton.style.display = "block";
        Array.from(navMenu.children).forEach(child => {
            if (child.tagName === "A"){
                child.style.display = "none";
            }
        });
        expanded = false;
    }
})

function openMenu() {
    if (window.innerWidth < navToggleWidth){
        //navMenu.id = "expanded";
        Array.from(navMenu.children).forEach(child => {
            if (child.tagName === "A"){
                child.style.display = "flex";
            }
        });
        expanded = true;
    }
}

function closeMenu() {
    if (window.innerWidth < navToggleWidth){
       // navMenu.id = "expanded";
        Array.from(navMenu.children).forEach(child => {
            if (child.tagName === "A"){
                child.style.display = "none";
            }
        });
        expanded = false;
    }
}