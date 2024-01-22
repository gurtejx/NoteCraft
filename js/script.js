/**
 * ProjectDriver class.
 */
class ProjectDriver {
    constructor() {
        if (!localStorage.getItem("notes")) {
            localStorage.setItem("notes", JSON.stringify([]));
        }
        if (!localStorage.getItem("time")) {
            localStorage.setItem("time", "");
        }
    }

    init() {
        this.addEventListenersToButtons();
    }

    addEventListenersToButtons() {
        const writerBtn = document.getElementById("writerBtn");
        const readerBtn = document.getElementById("readerBtn");

        // Check if elements are found before adding event listeners
        if (writerBtn) {
            writerBtn.addEventListener("click", () => {
                window.location.href = '/writer.html';
            });
        }
        if (readerBtn) {
            readerBtn.addEventListener("click", () => { window.location.href = '/reader.html'; });
        }
    }
}

/**
 * Script code for supporting the project.
 */
document.addEventListener("DOMContentLoaded", () => {
    const projectDriver = new ProjectDriver();
    projectDriver.init();
});