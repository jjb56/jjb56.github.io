// Dark/Light mode toggle
const toggleBtn = document.getElementById("modeToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
});

// Expand/collapse projects
document.querySelectorAll(".project-header").forEach(header => {
    header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const expanded = content.style.display === "block";
    content.style.display = expanded ? "none" : "block";
    header.querySelector("span").textContent = expanded ? "+" : "−";
    });
});

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

function closeMenu() {
    sidebar.classList.remove("open");
}