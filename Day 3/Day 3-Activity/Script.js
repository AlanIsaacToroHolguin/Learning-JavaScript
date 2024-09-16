let tiempoterminado;
let intervalotiempo;

function Cuentaregresiva() {
    tiempoterminado = setTimeout(tiempocumplido, 20000);
    intervalotiempo = setInterval(tiempoporpregunta, 1000);

    document.getElementById("Cuentaregresiva").textContent = 20;
}

function tiempoporpregunta() {
    let tiempo = document.getElementById("Cuentaregresiva").textContent;
    document.getElementById("Cuentaregresiva").textContent = tiempo - 1;
}

function tiempocumplido() {
    clearInterval(intervalotiempo);
    document.getElementById("Cuentaregresiva").textContent = 0;
    document.getElementById("gameoveraudio").play();
    alert("GAME OVER");
}

function finalizar() {
    clearTimeout(tiempoterminado);
    clearInterval(intervalotiempo);

    let fecha = new Date();
    let respuesta1 = document.getElementById("respuesta1").value;
    let respuesta2 = document.getElementById("respuesta2").value;
    let respuesta3 = document.getElementById("respuesta3").value;
    let respuesta4 = document.getElementById("respuesta4").value;
    let respuesta5 = document.getElementById("respuesta5").value;

    let mensaje = fecha.toLocaleDateString("es-ES") + "\n" +
        "1. " + respuesta1 + "\n" +
        "2. " + respuesta2 + "\n" +
        "3. " + respuesta3 + "\n" +
        "4. " + respuesta4 + "\n" +
        "5. " + respuesta5 + "\n";

    alert(mensaje);
}

function nuevoIntento() {
    location.reload();
}
