// Load notes from Local Storage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Display notes when the page loads
displayNotes();

// Add a new note
function addNote() {

    const noteInput = document.getElementById("noteInput");

    const noteText = noteInput.value.trim();

    if (noteText === "") {
        alert("Please enter a note!");
        return;
    }

    notes.push(noteText);

    localStorage.setItem("notes", JSON.stringify(notes));

    noteInput.value = "";

    displayNotes();
}

// Display all notes
function displayNotes() {

    const notesList = document.getElementById("notesList");

    notesList.innerHTML = "";

    notes.forEach((note, index) => {

        const noteDiv = document.createElement("div");

        noteDiv.className = "note";

        noteDiv.innerHTML = `
            <p>${note}</p>
            <button class="delete-btn" onclick="deleteNote(${index})">
                Delete
            </button>
        `;

        notesList.appendChild(noteDiv);
    });
}

// Delete a note
function deleteNote(index) {

    notes.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notes));

    displayNotes();
}
