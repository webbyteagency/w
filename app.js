// --- LOGIQUE DU CURSEUR CRÉATIF ---
const cursor = document.querySelector("#cursor");
const follower = document.querySelector("#cursor-follower");

// Suivi de la souris
window.addEventListener("mousemove", (e) => {
    // Le point central est instantané
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0
    });
    // Le cercle suit avec un léger retard (effet smooth)
    gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out"
    });
});

// Effet au survol des éléments cliquables
const links = document.querySelectorAll('a, button, .project-card');

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 4, duration: 0.3 });
        gsap.to(follower, { scale: 1.5, borderColor: "#bef264", duration: 0.3 });
    });
    link.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, duration: 0.3 });
        gsap.to(follower, { scale: 1, borderColor: "rgba(190, 242, 100, 0.5)", duration: 0.3 });
    });
});

// Masquer le curseur quand il sort de la fenêtre
document.addEventListener("mouseleave", () => {
    gsap.to([cursor, follower], { opacity: 0 });
});
document.addEventListener("mouseenter", () => {
    gsap.to([cursor, follower], { opacity: 1 });
});