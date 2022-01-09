"use strict"

//const websocket_server = "http://localhost:8080";

const { ipcRenderer } = require('electron');

// SOckets
//const { io } = require('socket.io-client'); 
//const socket = io(websocket_server);

const form_enter_room = document.querySelector('#enter_room_form');
const form_create_room = document.querySelector('#create_room_form');
const error_span = document.querySelector('#error');

ipcRenderer.on('error:blank-fields', (e, data) => {
    error_span.style.display = 'block';
    error_span.innerHTML = data;
});

ipcRenderer.on('error:no-room-returned', (e, data) => {
    error_span.style.display = 'block';
    error_span.innerHTML = data;
});

ipcRenderer.on('error:large-name', ( e, data ) => {
    error_span.style.display = 'block';
    error_span.innerHTML = data;
});

form_enter_room.addEventListener('submit', (e) => {

    e.preventDefault();

    const username_input_enter = document.querySelector('#username_input_enter').value;
    const code_input_enter = document.querySelector('#code_input_enter').value;

    const data = {
        username: username_input_enter,
        code: code_input_enter
    }
    
    ipcRenderer.send('room:enter', data);
});

form_create_room.addEventListener('submit', (e) => {

    e.preventDefault();

    const username_input_create = document.querySelector('#username_input_create').value;

    ipcRenderer.send('room:create', username_input_create);

});
