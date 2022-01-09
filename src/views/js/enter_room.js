"use strict"

const websocket_server = "https://ancom-server.herokuapp.com";

const audio = new Audio('./audio/new_message2.mp3');


const { ipcRenderer } = require('electron');

const io = require('socket.io-client');
const socket = io(websocket_server);

const code = document.querySelector('#code');

const online = document.querySelector('#online_users_cards');

const form_chat_functions = document.querySelector('.chat_functions');
const messages_content = document.querySelector('.messages_content');
const leave_button = document.querySelector("#leave");

// Front

window.setInterval(() => {
    const messages_content = document.querySelector('.messages_content');
    messages_content.scrollTop = messages_content.scrollHeight;
}, 1000)

leave_button.addEventListener('click', (e) => {
    ipcRenderer.send('leave-room', true);
});

// Back

ipcRenderer.on('data:from-ec', (e, data) => {
    
    code.innerHTML = data.code;
    
    socket.emit('enter-room', data);

    socket.on('error', (data) => {
        ipcRenderer.send('error:no-room', data);
    });

    socket.on('online-users', (data) => {
        online.innerHTML = '';
        for( const key of data ){
            online.innerHTML += `
            <div class="online_user_card">
                <div class="username_online_box">
                    <span id="username_online">${ key.username }</span>
                </div>
                <div class="online_user_img">
                    <img src="./img/record.png">
                </div>
            </div>
            `;
        }
    });

    form_chat_functions.addEventListener('submit', (e) => {
        e.preventDefault();

        let input_message = document.querySelector('#input_message');

        if ( input_message.value.trim().length !== 0 ) {
            messages_content.innerHTML += `
                <div class="message_sent_body">
                    <div class="message_sent_content">
                        <div class="author_sent">
                            <span id="author_sent">${ data.username }</span>
                        </div>
                        <div class="message_sent">
                            <span id="message_sent">${ input_message.value }</span>
                        </div>
                    </div>
                </div>
            `;

            socket.emit('message', { username: data.username, message: input_message.value });
            input_message.value = '';
        }
    });

});

socket.on('new-message', ({id, username, message}) => {

    audio.play();

    if ( id !== socket.id && message.trim().length !== 0 ) {
        messages_content.innerHTML += `
        <div class="message_received_body">
            <div class="message_received_content">
                <div class="author_received">
                    <span id="author_received">${ username }</span>
                </div>
                <div class="message_received">
                    <span id="message_received">${ message }</span>
                </div>
            </div>
        </div>
        `;

    }
});

