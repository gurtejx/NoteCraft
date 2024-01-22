class Reader {

    init() {
        this.addEventListenersToButtons();
        setInterval(() => {
            this.loadExistingNotes();
            this.getLastRetrievalTime();
        }, 2000);
    }

    addEventListenersToButtons() {
        const readerBackBtn = document.getElementById("readerBackBtn");
        if (readerBackBtn) {
            readerBackBtn.addEventListener("click", () => { window.location.href = 'index.html'; });
        }
    }

    /**
    * ChatGPT was used to complete this function.
    */
    loadExistingNotes() {
        const notesContainer = document.getElementById("notesContainer");
        if (notesContainer) { 
            notesContainer.innerHTML = "";
    
            // load from Local Storage
            let existingNotes = JSON.parse(localStorage.getItem("notes"));
            if (existingNotes) {
                existingNotes.forEach(note => {
                    this.createNoteContainer(note.id, note.content)
                });
            }
        }
    }
    
    createNoteContainer(noteID, content) {
        // create elements 
        const notesContainer = document.getElementById("notesContainer");
        const note = document.createElement("div");
        const textarea = document.createElement("textarea");
    
        // append elements to DOM
        notesContainer.appendChild(note);
        note.appendChild(textarea);
    
        // add class and text names to elements
        note.classList.add("note");
        textarea.classList.add("readerTextarea");
    
        // add 'id' attribute to elements
        note.setAttribute("id", `note_${noteID}`);
        textarea.value = content;
        textarea.readOnly = true;
    }
    
    getLastRetrievalTime() {
        const clockElement = document.getElementById("readerClock");
        clockElement.innerHTML = "Last retrieved: " + new Date().toLocaleTimeString();
    }
}

/**
 * Script code for supporting the project.
 */
document.addEventListener("DOMContentLoaded", () => {
    const reader = new Reader();
    reader.init();
});