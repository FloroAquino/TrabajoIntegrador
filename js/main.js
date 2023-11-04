function validarDatos() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var mail = document.getElementById("mail").value;

    if (nombre === '' || apellido === '' || mail === '') {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    return true;
}

function calcularTotal() {
    if (validarDatos()) {
        var cantidadEntradas = parseInt(document.getElementById("cantidadEntradas").value);
        var categoria = document.getElementById("categoria").value;
        var costo = 200;
        var descuento = 0;

        if (categoria === "estudiante") {
            descuento = 0.8; // 80% de descuento para estudiantes
        } else if (categoria === "trainee") {
            descuento = 0.5; // 50% de descuento para trainees
        } else if (categoria === "junior") {
            descuento = 0.15; // 15% de descuento para juniors
        }

        var costoTotal = cantidadEntradas * costo * (1 - descuento);

        document.getElementById("total").innerHTML = `Total a Pagar: $${costoTotal.toFixed(2)}`;
    }
}

function borrarDatos() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("cantidadEntradas").value = "";
    document.getElementById("categoria").value = "general";
    document.getElementById("total").innerHTML = "";
}

function mostrarResumen() {
    if (validarDatos()) {
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var mail = document.getElementById("mail").value;
        var cantidadEntradas = document.getElementById("cantidadEntradas").value;
        var categoria = document.getElementById("categoria").value;
        var costo = 200;
        var descuento = 0;

        if (categoria === "estudiante") {
            descuento = 0.8;
        } else if (categoria === "trainee") {
            descuento = 0.5;
        } else if (categoria === "junior") {
            descuento = 0.15;
        }

        var costoTotal = cantidadEntradas * costo * (1 - descuento);

        alert(`Resumen de Compra:\nNombre: ${nombre} ${apellido}\nCorreo: ${mail}\nCantidad de Entradas: ${cantidadEntradas}\nCategoría: ${categoria}\nTotal a Pagar: $${costoTotal.toFixed(2)}`);
    }
}