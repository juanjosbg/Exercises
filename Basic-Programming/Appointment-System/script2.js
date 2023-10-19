function comenzarCita() {
    let diaElegido = "", jugador = 0, suerte = 0, hora = 0, dia = 0;

    const Name = document.getElementById("nombre").value;
    const confirmacionSuerte = confirm("Hola " + Name + ", ¿quieres probar tu suerte?");

    if (confirmacionSuerte) {
        suerte = prompt("Para saber tu suerte, selecciona 1 para CONTINUAR o 2 para Salir");
        alert("Seleccionaste la opción " + suerte);

        if (suerte === "1") {
            jugador = prompt("¡Wow, " + Name + "! Me sorprendiste. Ahora bien, ¿Te gustaría tener una cita conmigo? 🤭💐");
            
            if (jugador.toLowerCase() === "sí" || jugador.toLowerCase() === "si" || jugador.toLowerCase() === "ok") {
                alert("¡Genial! Tendré una cita con alguien especial. " + " ¡Qué emoción, qué emoción! ahhh... 😃🫣");
                suerte = prompt("¡Ya está la cita!, ahora solo falta saber a dónde ir"
                    + " para ello " + Name + " Marca 1 para una cita en el exterior 🌕 o 2 para cita en el interior 🌺");

                if (suerte === "1") {
                    const lugaresExterior = ["Jardín Botánico de Cali", "Zoológico de Cali", "Picnic Restaurante", "Racamandapa Dapa", "Paseo de las Mariposas", "Destino Dapa", "Mariposario Andoke", "Museo Aereo Fenix"];
                    const lugarElegido = lugaresExterior[Math.floor(Math.random() * lugaresExterior.length)];

                    const lugarCitaResult = document.getElementById("lugarCitaResult");
                    lugarCitaResult.textContent = "Lugar de la cita: " + lugarElegido;

                    alert("Nuestra cita en el exterior será en: " + lugarElegido);

                    const confirmacionEx = confirm("¡Ay noo!, que emoción, " + "Me siento emocionado por esta cita, " + Name + ". Ahora solo falta concretar el día y posteriormente la hora. 🥹");
                    if (confirmacionEx) {
                        dia = prompt("Para seleccionar el día para tu cita en " + lugarElegido + ", para ello elige un número del 1 al 7, donde 1 es lunes y 7 es domingo: ");

                        if (!isNaN(dia) && dia >= 1 && dia <= 7) {
                            const diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
                            diaElegido = diasSemana[dia - 1];
                            const diaCitaResult = document.getElementById("diaCitaResult");
                            diaCitaResult.textContent = "Día de la cita: " + diaElegido;
                            
                            alert("Tu cita en " + lugarElegido + " está programada para el " + diaElegido + ".");
                        } else {
                            alert("Opción no válida. Debes elegir un número del 1 al 7 para representar un día de la semana.");
                        }

                        hora = prompt("Ahora selecciona la hora para tu cita en formato de 24 horas (por ejemplo, 14 para las 2 PM):");

                        if (!isNaN(hora) && hora >= 0 && hora <= 23) {
                            const horaCitaResult = document.getElementById("horaCitaResult");
                            horaCitaResult.textContent = "Hora de la cita: " + hora + ":00 horas";

                            alert("Tu cita en " + lugarElegido + " está programada para el " + diaElegido + " a las " + hora + ":00 horas.");
                            
                        } else {
                            alert("Hora no válida. Debes ingresar un número entre 0 y 23 para representar la hora en formato de 24 horas.");
                        }
                    }

                } else if (suerte === "2") {
                    const lugaresInterior = ["1700 Restaurante Dapa", "Xixaola Restaurante-Bar", "Tierra dentro cafe", "La Bohème", "Gastroteca Oeste", "Piso 30 Bar & Restaurante"];
                    const lugarElegido2 = lugaresInterior[Math.floor(Math.random() * lugaresInterior.length)];

                    const lugarCitaResult = document.getElementById("lugarCitaResult");
                    lugarCitaResult.textContent = "Lugar de la cita: " + lugarElegido2;

                    const confirmacionIN = confirm("¡Ay noo!, que emoción, " + "Me siento emocionado por esta cita, " + Name + ". Ahora solo falta concretar el día y posteriormente la hora.");
                    if (confirmacionIN) {
                        dia = prompt("Para seleccionar el día para tu cita en " + lugarElegido2 + ", para ello elige un número del 1 al 7, donde 1 es lunes y 7 es domingo:");

                        if (!isNaN(dia) && dia >= 1 && dia <= 7) {
                            const diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
                            diaElegido2 = diasSemana[dia - 1];
                            const diaCitaResult = document.getElementById("diaCitaResult");
                            diaCitaResult.textContent = "Día de la cita: " + diaElegido2;
                        } else {
                            alert("Opción no válida. Debes elegir un número del 1 al 7 para representar un día de la semana.");
                        }

                        hora2 = prompt("Ahora selecciona la hora para tu cita en formato de 24 horas (por ejemplo, 14 para las 2 PM):");

                        if (!isNaN(hora2) && hora2 >= 0 && hora2 <= 23) {
                            const horaCitaResult = document.getElementById("horaCitaResult");
                            horaCitaResult.textContent = "Hora de la cita: " + hora2 + ":00 horas";

                            alert(Name + ", Nuestra cita en " + lugarElegido2 + " está programada para el " + diaElegido2 + " a las " + hora2 + ":00 horas.");
                            
                        } else {
                            alert("Hora no válida. Debes ingresar un número entre 0 y 23 para representar la hora en formato de 24 horas.");
                        }

                        // Mostrar el resultado
                        const resultadoDiv = document.getElementById("resultado");
                        resultadoDiv.style.display = "block";
                    }
                } else {
                    alert("Opción no válida.");
                }
            } else {
                alert("Gracias por probar tu suerte, quizás la próxima vez.");
            }
        } else {
            alert("¡Muchas gracias por intentarlo!");
        }
    } else {
        alert("¡Gracias por visitarnos! Si cambias de opinión, siempre puedes volver.");
    }

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.style.display = "block";
}