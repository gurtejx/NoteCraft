# NoteCraft - Simple Note-taking App

## Overview
NoteCraft is a straightforward note-taking application built for simplicity and efficiency. The app allows users to write and read notes with ease. The project is developed using HTML, CSS, and JavaScript, providing a user-friendly interface for managing notes.

## Development
Here's the hosted link: https://notecraft-kappa.vercel.app/

## Project Structure

css/style.css: Contains the styles for the user interface. <br>
js/script.js: Implements the main logic for the application using JavaScript. <br>
js/writer.js: Manages the functionality for note writing. <br>
js/reader.js: Handles the functionality for note reading. <br>

## How to Use
Open index.html in a web browser to access the main page. <br>
Click on "Writer" to go to the note writing page (writer.html). <br>
Click on "Reader" to go to the note reading page (reader.html). <br>
In the writer page, use the "Add Note" button to add new notes and the "Remove" button to delete notes. <br>
Notes are automatically saved, and the last update time is displayed. <br>
In the reader page, notes are periodically retrieved and displayed along with the last retrieval time. <br>
Use the "Back" button to return to the main page. <br>

## Functionality
### Writer Class
Manages note writing functionality. <br>
Allows adding, removing, and updating notes with a timestamp. <br>
Displays a clock showing the last update time. <br>

### Reader Class
Manages note reading functionality. <br>
Periodically retrieves and displays notes with a timestamp. <br>
Displays a clock showing the last retrieval time. <br>

### Storage
The application utilizes Local Storage to store notes and timestamps. <br>
Each note has a unique ID based on the timestamp. <br>

Enjoy using NoteCraft! <br>
Feel free to explore and enhance NoteCraft based on your preferences and requirements. Happy note-taking!
