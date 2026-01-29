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


    positionElement.textContent = `Position X: ${x}, Position Y: ${y}`;

    const zoneRect = zone.getBoundingClientRect();
    const elementWidth = 10;
    const elementHeight = 10;

    
    const newX = Math.max(zoneRect.left + window.scrollX, Math.min(x - elementWidth / 2, zoneRect.right + window.scrollX - elementWidth));
    const newY = Math.max(zoneRect.top + window.scrollY, Math.min(y - elementHeight / 2, zoneRect.bottom + window.scrollY - elementHeight));

    elementSuivi.style.left = `${newX}px`;
    elementSuivi.style.top = `${newY}px`;
});