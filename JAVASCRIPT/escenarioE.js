function calcularEscasez() {

    let demanda =
        Number(document.getElementById("demanda").value);

    let porcentaje =
        Number(document.getElementById("porcentaje").value);

    let stock =
        Number(document.getElementById("stock").value);

    let resultado =
        document.getElementById("resultado");

    if (
        demanda <= 0 ||
        porcentaje < 0 ||
        stock <= 0
    ) {

        resultado.innerHTML = `
        <div class="resultado critico">
            Ingrese valores válidos.
        </div>
        `;

        return;
    }

    let nuevaDemanda =
        demanda + (demanda * porcentaje / 100);

    let diferencia =
        stock - nuevaDemanda;

    let estado = "";
    let clase = "";

    if (stock >= nuevaDemanda) {

        estado = "Sin Riesgo de Escasez";
        clase = "normal";

    }
    else if (diferencia > -200) {

        estado = "Riesgo Moderado";
        clase = "alerta";

    }
    else {

        estado = "Alto Riesgo de Escasez";
        clase = "critico";

    }

    resultado.innerHTML = `

    <div class="resultado ${clase}">

        <h3>Resultado</h3>

        <p>
            Nueva Demanda:
            <strong>${nuevaDemanda.toFixed(0)} unidades</strong>
        </p>

        <p>
            Stock Disponible:
            <strong>${stock}</strong>
        </p>

        <p>
            Estado:
            <strong>${estado}</strong>
        </p>

    </div>

    `;
}