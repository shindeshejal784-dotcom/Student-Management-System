const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
const emptyMessage = document.getElementById("emptyMessage");

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const course = document.getElementById("course").value.trim();

    if (!name || !roll || !course) {
        alert("Please fill all fields.");
        return;
    }

    const row = document.createElement("tr");

    [name, roll, course].forEach(function (value) {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";
    deleteButton.type = "button";
    deleteButton.style.backgroundColor = "#dc2626";

    deleteButton.addEventListener("click", function () {
        row.remove();
        updateEmptyMessage();
    });

    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);
    studentList.appendChild(row);

    studentForm.reset();
    updateEmptyMessage();
});

function updateEmptyMessage() {
    emptyMessage.style.display =
        studentList.children.length === 0 ? "block" : "none";
}

updateEmptyMessage();
