"use strict"

const websocket_server = 'https://ancom-server.herokuapp.com';

const { ipcRenderer } = require('electron');

const { io } = require('socket.io-client');
const socket = io(websocket_server);

ipcRenderer.on('new-room-created', ( e, data ) => {

    socket.emit('create-room', data);
    ipcRenderer.send('room:enter', data);
});