document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("tableContainer");

    const table = document.createElement("table");

    for (let i = 0; i <= 10; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j <= 10; j++) {
            let cell;

            if (i === 0 && j === 0) {
                cell = document.createElement("th");
                cell.textContent = ""; // Пустий кутовий заголовок
            } else if (i === 0) {
                cell = document.createElement("th");
                cell.textContent = j; // Заголовки стовпців
            } else if (j === 0) {
                cell = document.createElement("th");
                cell.textContent = i; // Заголовки рядків
            } else {
                cell = document.createElement("td");
                cell.textContent = i * j; // Добуток чисел
            }

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    container.appendChild(table);
});