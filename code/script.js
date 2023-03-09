const hamburgerToggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
    hamburgerToggler.classList.toggle("open")

    const ariaToggle = hamburgerToggler.getAttribute 
    ("aria-expanded") == "true" ? "false" : "true";
    hamburgerToggler.setAttribute("aria-expended", ariaToggle)
    navLinksContainer.classList.toggle("open")
}

hamburgerToggler.addEventListener("click" ,toggleNav)