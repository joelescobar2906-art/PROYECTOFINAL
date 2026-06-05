function calcularCompra() {

    let producto =
        document.getElementById("producto").value;

    let precio =
        Number(document.getElementById("precio").value);

    let cantidad =
        Number(document.getElementById("cantidad").value);

    let resultado =
        document.getElementById("resultado");

    if (
        producto === "" ||
        precio <= 0 ||
        cantidad <= 0
    ) {

        resultado.innerHTML = `
        <div class="resultado critico">
            Complete correctamente todos los campos.
        </div>
        `;

        return;
    }

    let gastoTotal =
        precio * cantidad;

    let nivel = "";
    let clase = "";

    if (gastoTotal < 100) {

        nivel = "Gasto Bajo";
        clase = "normal";

    }
    else if (gastoTotal < 500) {

        nivel = "Gasto Medio";
        clase = "alerta";

    }
    else {

        nivel = "Gasto Alto";
        clase = "critico";

    }

    resultado.innerHTML = `

    <div class="resultado ${clase}">

        <h3>Resultado</h3>

        <p>
            Producto:
            <strong>${producto}</strong>
        </p>

        <p>
            Gasto Total:
            <strong>Bs ${gastoTotal.toFixed(2)}</strong>
        </p>

        <p>
            Clasificación:
            <strong>${nivel}</strong>
        </p>

    </div>

    `;
}