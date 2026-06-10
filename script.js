document.addEventListener("DOMContentLoaded", () => {
    // 1. Highlight Active Page in Navbar
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (currentPath === linkPath || (currentPath === "" && linkPath === "index.html")) {
            link.classList.add("active");
        }
    });

    // 2. Simple Form Handling (if present on page)
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you! Your request has been received safely. DriveEase will get back to you shortly.");
            form.reset();
        });
    });
});