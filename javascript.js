//----------------preguntas-------------------------
const rojo = [
    "Menciona una acción concreta que realizaras esta semana para promover la igualdad de género.",
    "Pregunta a otro jugador como ha contribuido al bienestar emocional de alguien más recientemente.",
    " Piensa en un pequeño gesto que puedas hacer diariamente para cuidar tu salud mental.",
    "¿Crees que los estereotipos de género son más dañinos en la infancia o en la adultez?",
    "¿Deberían los medios de comunicación tener más responsabilidad en cómo representan el género?",
    "¿Es la salud mental un tema que se discute lo suficiente en los colegios?",
    "¿Cómo podemos enseñar empatía desde una edad temprana?",
    "Representa a alguien que enfrenta una situación de discriminación y cómo reacciona.",
    "Haz una mímica de cómo se siente alguien que está estresado.",
    "Imita una situación en la que das apoyo emocional a un amigo.",
    "Actúa como alguien que intenta mantener la calma en una situación difícil.",];

const amarillo = [
    "¿Qué hábitos crees que podrían mejorar tu salud mental?",
    "¿Cuándo fue la última vez que pediste ayuda? ¿Cómo te sentiste?",
    "¿Cómo te afecta el tener expectativas muy altas de ti mismo?",
    "¿Qué te hace sentir más relajado o en paz?",
    "¿Qué significa para ti la resiliencia? ¿Te consideras una persona resiliente?",
    "¿Cómo diferencias tus necesidades emocionales de tus deseos?",
    "¿Qué le dirías a alguien que está pasando por un momento emocional difícil?",
    "¿Cómo manejas situaciones de estrés?",];

const verde = [
    "¿Qué entiendes por igualdad de género?",
    "¿Has sido testigo de una situación donde alguien fue tratado injustamente por su género?",
    "Qué rol juega la educación en la lucha por la igualdad de género?",
    "¿De qué maneras crees que los estereotipos de género afectan a las personas?",
    "¿Cómo crees que los medios de comunicación impactan la percepción de género?",
    "¿Cómo crees que podemos educar a las futuras generaciones sobre la igualdad de género?",
    "¿Qué cambios has visto en los últimos años sobre la percepción del género?",
    "¿Cómo puedes apoyar a alguien que esté luchando contra la discriminación de género?",];

const morado = [
    "Dibuja una emoción que sientas a menudo sin usar palabras.",
    "Dibuja un lugar imaginario donde te sientes completamente seguro.",
    "Dibuja cómo te imaginas a alguien feliz.",
    "Dibuja algo que te ayude a lidiar con el estrés.",
    "Dibuja una situación donde alguien está siendo amable con otro.",
    "Dibuja algo que simbolice el autocuidado.",
    "Dibuja una actividad que te haga sentir libre.",
    "Dibuja algo que te cause miedo o ansiedad.",
    "Dibuja cómo te has sentido estos ultimos dias sin usar palabras.",];
  //--------------------------------------------------

  function PlayAudio() {
    document.getElementById("BackgroundMusic").play();|
  }
  

  // script.js
document.addEventListener('DOMContentLoaded', () => {

    const cardImages = document.querySelectorAll('.card-img');
    const textDisplay = document.getElementById('text-display');
    PlayAudio();


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

