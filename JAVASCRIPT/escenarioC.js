function calcularTransporte() {

    let distanciaNormal =
        Number(document.getElementById("distanciaNormal").value);

    let distanciaDesvio =
        Number(document.getElementById("distanciaDesvio").value);

    let costoKm =
        Number(document.getElementById("costoKm").value);

    let resultado =
        document.getElementById("resultado");

    if (
        distanciaNormal <= 0 ||
        distanciaDesvio <= 0 ||
        costoKm <= 0
    ) {

        resultado.innerHTML = `
        <div class="resultado critico">
            Ingrese valores válidos.
        </div>
        `;

        return;
    }

    let costoNormal =
        distanciaNormal * costoKm;

    let costoDesvio =
        distanciaDesvio * costoKm;

    let costoAdicional =
        costoDesvio - costoNormal;

    let gastoSemanal =
        costoAdicional * 7;

    let estado = "";
    let clase = "";

    if (costoAdicional < 100) {

        estado = "Impacto Bajo";
        clase = "normal";

    }
    else if (costoAdicional < 300) {

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
            Costo Normal:
            <strong>Bs ${costoNormal.toFixed(2)}</strong>
        </p>

        <p>
            Costo con Desvío:
            <strong>Bs ${costoDesvio.toFixed(2)}</strong>
        </p>

        <p>
            Costo Adicional:
            <strong>Bs ${costoAdicional.toFixed(2)}</strong>
        </p>

        <p>
            Impacto Semanal:
            <strong>Bs ${gastoSemanal.toFixed(2)}</strong>
        </p>

        <p>
            Nivel:
            <strong>${estado}</strong>
        </p>

    </div>

    `;
}