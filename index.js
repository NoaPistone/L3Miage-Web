document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("result").textContent = "JavaScript côté client 🚀";
});

const div = document.querySelector('.maDiv');
const couleurs = ['red', 'green', 'blue', 'yellow', 'orange'];
let index = 0;

div.addEventListener('click', () => {
    div.style.backgroundColor = couleurs[index];
    index = (index + 1) % couleurs.length;
});