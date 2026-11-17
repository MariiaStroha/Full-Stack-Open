# Exercise 0.5
sequenceDiagram
    participant browser
    participant server

    browser ->> server: GET: https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server -->> browser: HTML document
    deactivate server

    browser ->> server: GET: https: //studies.cs.helsinki.fi/exampleapp/spa/main.css
    activate server
    server -->> browser: CSS file
    deactivate server

    browser ->> server: GET: https: //studies.cs.helsinki.fi/exampleapp/spa/spa.js
    activate server
    server -->> browser: JavaScript file
    deactivate server

    browser ->> server: GET: https: //studies.cs.helsinki.fi/exampleapp/spa/data.json
    activate server
    server -->> browser: notes which the JavaScript callback function fetched from the server
    deactivate server

# Exercise 0.6
    Note over browser, server: User submits the form

    Note right of browser: The browser starts executing Javascript code from spa.js

    Note right of browser: The new note is pushed to the array and UI is updated

    Note right of browser: Since the local array got updated and no redirect happened, user sees the changes instantly

    browser ->> server: POST: //studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server -->> browser: 201 CREATED
    deactivate server

    Note left of server: main.js sent the post request to the server and server saves the note in the background