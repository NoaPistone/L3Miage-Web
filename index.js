document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("result").textContent = "JavaScript côté client 🚀";
});

const div = document.querySelector('.divExo1');
const couleurs = ['red', 'green', 'blue', 'yellow', 'orange'];
let index = 0;

div.addEventListener('click', () => {
    div.style.backgroundColor = couleurs[index];
    index = (index + 1) % couleurs.length;
});

const positionElement = document.getElementById('position');
const elementSuivi = document.getElementById('elementSuivi');
const zone = document.getElementById('zone');

document.getElementById('zone').addEventListener('mousemove', (event) => {
    const x = event.clientX + window.scrollX; // Add scroll offset
    const y = event.clientY + window.scrollY; // Add scroll offset


    positionElement.textContent = `Position X: ${Math.floor(x)}, Position Y: ${Math.floor(y)}`;

    const zoneRect = zone.getBoundingClientRect();
    const elementWidth = 10;
    const elementHeight = 10;

    
    const newX = Math.max(zoneRect.left + window.scrollX, Math.min(x - elementWidth / 2, zoneRect.right + window.scrollX - elementWidth));
    const newY = Math.max(zoneRect.top + window.scrollY, Math.min(y - elementHeight / 2, zoneRect.bottom + window.scrollY - elementHeight));

    elementSuivi.style.left = `${newX}px`;
    elementSuivi.style.top = `${newY}px`;
});

// Exo3
const navbar = document.querySelector('.navbar');
const scrollLevelDisplay = document.getElementById('scrollLevel');

window.addEventListener('scroll', () => {
    const scrollY = Math.floor(window.scrollY);
    
    // Afficher le niveau de scroll
    scrollLevelDisplay.textContent = `Niveau de scroll: ${scrollY}px`;
    
    // Changer la couleur du header en fonction du scroll
    const scrollPercentage = (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    // Créer une transition de couleur basée sur le scroll
    const hue = (scrollPercentage * 3.6) % 360; // 0-360 pour HSL
    navbar.style.backgroundColor = `hsl(${hue}, 100%, 20%)`;
});