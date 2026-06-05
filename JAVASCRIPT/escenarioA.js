function calcularReserva() {

    let reservaInicial =
        Number(document.getElementById("reservaInicial").value);

    let reabastecimiento =
        Number(document.getElementById("reabastecimiento").value);

    let consumo =
        Number(document.getElementById("consumo").value);

    let resultado =
        document.getElementById("resultado");

    if (
        reservaInicial <= 0 ||
        reabastecimiento < 0 ||
        consumo <= 0
    ) {

        resultado.innerHTML = `
        <div class="resultado critico">
            Ingrese valores válidos.
        </div>
        `;

        return;
    }

    let reservaFinal =
        reservaInicial +
        reabastecimiento -
        consumo;

    let estado = "";
    let clase = "";

    if (reservaFinal > 2000) {

        estado = "Nivel Normal";
        clase = "normal";

    } else if (reservaFinal > 500) {

        estado = "Nivel de Alerta";
        clase = "alerta";

    } else {

        estado = "Nivel Crítico";
        clase = "critico";

    }

    resultado.innerHTML = `

    <div class="resultado ${clase}">

        <h3>Resultado</h3>

        <p>
            Reserva Final:
            <strong>${reservaFinal} litros</strong>
        </p>

        <p>
            Estado:
            <strong>${estado}</strong>
        </p>

    </div>

    `;
}