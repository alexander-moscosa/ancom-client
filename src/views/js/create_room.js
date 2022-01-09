"use strict"

const websocket_server = 'http://localhost:8080';

const { ipcRenderer } = require('electron');

const { io } = require('socket.io-client');
const socket = io(websocket_server);

ipcRenderer.on('new-room-created', ( e, data ) => {

    socket.emit('create-room', data);
    ipcRenderer.send('room:enter', data);
});