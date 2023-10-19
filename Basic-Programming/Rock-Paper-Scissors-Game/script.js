document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const cards = document.querySelectorAll(".card");
    const resultadoDiv = document.getElementById("resultado");

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const jugadorChoice = card.getAttribute("data-choice");
            const pcChoice = aleatorio(1, 3); // Generar elección aleatoria para la PC

            let resultado = `PC elije: ${pcChoice === 1 ? '🥌' : pcChoice === 2 ? '🧻' : '✂'}`;
            resultado += `<br>Tú eliges: ${jugadorChoice === "piedra" ? '🥌' : jugadorChoice === "papel" ? '🧻' : '✂'}`;

            if (pcChoice === jugadorChoice) {
                resultado += "<br>EMPATE";
            } else if (
                (jugadorChoice === "piedra" && pcChoice === 3) ||
                (jugadorChoice === "papel" && pcChoice === 1) ||
                (jugadorChoice === "tijera" && pcChoice === 2)
            ) {
                resultado += "<br>¡GANASTE!";
            } else {
                resultado += "<br>PERDISTE";
            }

            resultadoDiv.innerHTML = resultado;
        });
    });
});
