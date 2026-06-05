function calcularAumento() {

    let precioAnterior =
        Number(document.getElementById("precioAnterior").value);

    let precioActual =
        Number(document.getElementById("precioActual").value);

    let cantidad =
        Number(document.getElementById("cantidad").value);

    let resultado =
        document.getElementById("resultado");

    if (
        precioAnterior <= 0 ||
        precioActual <= 0 ||
        cantidad <= 0
    ) {

        resultado.innerHTML = `
        <div class="resultado critico">
            Ingrese valores válidos.
        </div>
        `;

        return;
    }

    let porcentaje =
        ((precioActual - precioAnterior) /
        precioAnterior) * 100;

    let gastoMensual =
        precioActual * cantidad * 4;

    let estado = "";
    let clase = "";

    if (porcentaje < 10) {

        estado = "Impacto Bajo";
        clase = "normal";

    }
    else if (porcentaje < 30) {

        estado = "Impacto Moderado";
        clase = "alerta";

    }
    else {

        estado = "Impacto Alto";
        clase = "critico";

    }

    resultado.innerHTML = `

    <div class="resultado ${clase}">

        <h3>Resultado</h3>

        <p>
            Porcentaje de Aumento:
            <strong>${porcentaje.toFixed(2)}%</strong>
        </p>

        <p>
            Gasto Mensual Estimado:
            <strong>Bs ${gastoMensual.toFixed(2)}</strong>
        </p>

        <p>
            Nivel de Impacto:
            <strong>${estado}</strong>
        </p>

    </div>

    `;
}