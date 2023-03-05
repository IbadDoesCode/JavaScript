
// Fetch Data from JSON File
fetch("students.json")
.then(response => response.json())
.then(data => showInfo(data))

function showInfo(data) {
    console.table(data.students)
}