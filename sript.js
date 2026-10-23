const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
const emptyMessage = document.getElementById("emptyMessage");

let students = JSON.parse(localStorage.getItem("students")) || [];

function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
}

function renderStudents() {
    studentList.innerHTML = "";

    students.forEach(function(student, index) {
        const row = document.createElement("tr");

        [student.name, student.roll, student.course].forEach(function(value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.type = "button";
        deleteButton.style.backgroundColor = "#dc2626";

        deleteButton.addEventListener("click", function() {
            students.splice(index, 1);
            saveStudents();
            renderStudents();
        });

        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);
        studentList.appendChild(row);
    });

    updateEmptyMessage();
}

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const course = document.getElementById("course").value.trim();

    if (!name || !roll || !course) {
        alert("Please fill all fields.");
        return;
    }

    students.push({ name, roll, course });

    saveStudents();
    renderStudents();
    studentForm.reset();
});

function updateEmptyMessage() {
    emptyMessage.style.display =
        students.length === 0 ? "block" : "none";
}

renderStudents();
