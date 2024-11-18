// Actualizar promedio en cada cuatrimestre
document.querySelectorAll("input[type='number']").forEach(input => {
    input.addEventListener("input", updatePromedios);
});

function updatePromedios() {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
        // Primer Cuatrimestre
        const informe1_1C = parseFloat(row.querySelector("input[name$='1informe1']").value) || 0;
        const informe2_1C = parseFloat(row.querySelector("input[name$='1informe2']").value) || 0;
        const promedio1C = ((informe1_1C + informe2_1C) / 2).toFixed(2);
        row.querySelector("output[name$='1final']").textContent = promedio1C;

        // Segundo Cuatrimestre
        const informe1_2C = parseFloat(row.querySelector("input[name$='2informe1']").value) || 0;
        const informe2_2C = parseFloat(row.querySelector("input[name$='2informe2']").value) || 0;
        const promedio2C = ((informe1_2C + informe2_2C) / 2).toFixed(2);
        row.querySelector("output[name$='2final']").textContent = promedio2C;
    });
}
