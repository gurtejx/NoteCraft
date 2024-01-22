class Writer {

    init() {
        this.addEventListenersToButtons();
        this.getLastUpdatedTime();
        this.loadExistingNotes();
    }

    addEventListenersToButtons() {
        const writerBackBtn = document.getElementById("writerBackBtn");
        const addBtn = document.getElementById("addBtn");
        if (writerBackBtn) {
            writerBackBtn.addEventListener("click", () => { window.location.href = 'index.html'; });
        }
        if (addBtn) {
            addBtn.addEventListener("click", () => { this.addNote(null, null); });
        }
    }

    loadExistingNotes() {
        const notesContainer = document.getElementById("notesContainer");
        if (notesContainer) { 
            notesContainer.innerHTML = "";
    
            // load from Local Storage
            let existingNotes = JSON.parse(localStorage.getItem("notes"));
            if (existingNotes) {
                existingNotes.forEach(note => {
                    this.addNote(note.id, note.content)
                });
            }
        }
    }

    /**
    * ChatGPT was used to complete this function.
    */
    addNote(noteID, content) {
        // create elements 
        const notesContainer = document.getElementById("notesContainer");
        const note = document.createElement("div");
        const textarea = document.createElement("textarea");
        const removeBtn = document.createElement("button");

        // append elements to DOM
        notesContainer.appendChild(note);
        note.appendChild(textarea);
        note.appendChild(removeBtn);

        // add class and text names to elements
        note.classList.add("note");
        removeBtn.classList.add("removeBtn");
        removeBtn.innerHTML = "Remove";

        if (content === null && noteID === null) {
            // save note to local storage and retrieve ID
            const uniqueID = this.saveNote("");

            // add 'id' attribute to elements
            note.setAttribute("id", `note_${uniqueID}`);
            removeBtn.setAttribute("id", uniqueID);
        } 
        else {
            // add 'id' attribute to elements
            note.setAttribute("id", `note_${noteID}`);
            removeBtn.setAttribute("id", noteID);
            textarea.value = content;
        }

        // add event listeners to elements
        removeBtn.addEventListener("click", () => {
            this.removeNote(removeBtn.getAttribute("id"));
        });
        let updateTimer;
        textarea.addEventListener("input", () => {
            clearTimeout(updateTimer);
            updateTimer = setTimeout(() => {
                this.updateNotes(textarea.value, removeBtn.getAttribute("id"));
            }, 1000);
        });

        // update clock
        this.updateClock();
    }

    /**
    * ChatGPT was used to complete this function.
    */
    saveNote(content) {
        // save to Local Storage
        let existingNotes = JSON.parse(localStorage.getItem("notes"));
        const noteID = Date.now();
        const newNote = {
            id: noteID,
            content: content
        }
        existingNotes.push(newNote);
        localStorage.setItem("notes", JSON.stringify(existingNotes));

        // update clock
        this.updateClock();
        return noteID;
    }
    
    removeNote(noteID) {
        // remove from Local Storage
        const reqID = parseInt(noteID);
        let existingNotes = JSON.parse(localStorage.getItem("notes"));
        const updatedNotes = existingNotes.filter(note => note.id!== reqID);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    
        // remove from DOM
        document.getElementById(`note_${noteID}`).remove();
    
        // update clock
        this.updateClock();
    }
    
    updateNotes(newContent, noteID) {
        // save changes to Local Storage
        const reqID = parseInt(noteID);
        let existingNotes = JSON.parse(localStorage.getItem("notes"));
        existingNotes.forEach(element => {
            if (element.id === reqID) {
                element.content = newContent;
                localStorage.setItem("notes", JSON.stringify(existingNotes));
    
                // update clock
                this.updateClock();
                return;
            }
        });
    }
    
    updateClock() {
        const clockElement = document.getElementById("writerClock");
        if (clockElement) {
            const timeStr = "Last updated: " + new Date().toLocaleTimeString();
            clockElement.innerHTML = timeStr;
            localStorage.setItem("time", timeStr);
        }
    }
    
    getLastUpdatedTime() {
        const clockElement = document.getElementById("writerClock");
        clockElement.innerHTML = localStorage.getItem("time");
    }
}

/**
 * Script code for supporting the project.
 */
document.addEventListener("DOMContentLoaded", () => {
    const writer = new Writer();
    writer.init();
});