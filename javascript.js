//----------------preguntas-------------------------
const rojo = [
    "Menciona una acción concreta que realizaras esta semana para promover la igualdad de género.",
    "Pregunta a otro jugador como ha contribuido al bienestar emocional de alguien más recientemente.",
    " Piensa en un pequeño gesto que puedas hacer diariamente para cuidar tu salud mental."];

const amarillo = [];

const verde = [];

const morado = [];
  //--------------------------------------------------
  

  // script.js
document.addEventListener('DOMContentLoaded', () => {

    const cardImages = document.querySelectorAll('.card-img');
    const textDisplay = document.getElementById('text-display');

    cardImages.forEach(image => {

        image.addEventListener('click', () => {

            const grupo = image.getAttribute('data-group');
            var index;
    

            if(grupo == "rojo"){
                
                index = Math.floor(Math.random() * rojo.length);
                textDisplay.textContent = rojo[index];

            }

            if(grupo == "amarillo"){

                index = Math.floor(Math.random() * amarillo.length);
                textDisplay.textContent = amarillo[index];

            }

            if(grupo == "verde"){

                index = Math.floor(Math.random() * verde.length);
                textDisplay.textContent = verde[index];

            }

            if(grupo == "morado"){

                index = Math.floor(Math.random() * morado.length);
                textDisplay.textContent = morado[index];

            }

        });
    });
});

