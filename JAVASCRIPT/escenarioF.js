function calcularPoderAdquisitivo() {

    let ingreso =
        Number(document.getElementById("ingreso").value);

    let precioAnterior =
        Number(document.getElementById("precioAnterior").value);

    let precioActual =
        Number(document.getElementById("precioActual").value);

    let resultado =
        document.getElementById("resultado");

    if (
        ingreso <= 0 ||
        precioAnterior <= 0 ||
        precioActual <= 0
    ) {

        resultado.innerHTML = `
        <div class="resultado critico">
            Ingrese valores válidos.
        </div>
        `;

        return;
    }

    let variacion =
        ((precioActual - precioAnterior) /
        precioAnterior) * 100;

    let cantidadAntes =
        ingreso / precioAnterior;

    let cantidadAhora =
        ingreso / precioActual;

    let perdida =
        cantidadAntes - cantidadAhora;

    let estado = "";
    let clase = "";

    if (variacion < 10) {

        estado = "Afectación Baja";
        clase = "normal";

    }
    else if (variacion < 30) {

        estado = "Afectación Moderada";
        clase = "alerta";

    }
    else {

        estado = "Afectación Alta";
        clase = "critico";

    }

    resultado.innerHTML = `

    <div class="resultado ${clase}">

        <h3>Resultado</h3>

        <p>
            Variación de Precio:
            <strong>${variacion.toFixed(2)}%</strong>
        </p>

        <p>
            Cantidad que podía comprar antes:
            <strong>${cantidadAntes.toFixed(0)}</strong>
        </p>

        <p>
            Cantidad que puede comprar ahora:
            <strong>${cantidadAhora.toFixed(0)}</strong>
        </p>

        <p>
            Pérdida de Capacidad de Compra:
            <strong>${perdida.toFixed(0)}</strong>
        </p>

        <p>
            Nivel:
            <strong>${estado}</strong>
        </p>

    </div>

    `;
}