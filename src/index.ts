import { app, ipcMain } from 'electron';
import { ec_window, sendData_ec_window, close_ec_window } from './windows/ec_room';
import { enter_room_window, sendData_enter_window, close_enter_window } from './windows/enter_room';
import { create_window, sendData_create_window, close_create_window } from './windows/create_room';

app.whenReady().then( () => {
    ec_window();
});

ipcMain.on('room:enter', (e, { username, code }) => {
    // If the username and the code comes empty, he wont pass to the next view and will get an error in the ec_window
    if ( username.trim().length === 0 || code.trim().length === 0 ) {
        sendData_ec_window('error:blank-fields', 'Fill The Fields Correctly');
    } else if ( username.trim().length > 16 ){
        sendData_ec_window('error:large-name', 'The username must Bb 16 character long or less');
    }else {
        // If he passes the data correctly, the ec_window will be closed and the enter_room_window (chat room) will be spawned 
        close_ec_window();
        enter_room_window();
        sendData_enter_window('data:from-ec', { username, code });
    }
});

ipcMain.on('room:create', ( e, username ) => {

    const code = Math.floor(Math.random() * 100000).toString();  

    if ( username.trim().length === 0 ) {
        sendData_ec_window('error:blank-fields', 'Fill The Fields Correctly');
    } else {
        create_window();
        sendData_create_window('new-room-created', { username, code });
        setTimeout(() => {close_create_window()}, 5000);
    }
});

ipcMain.on('error:no-room', ( e, data ) => {
    close_enter_window();
    ec_window();    
    sendData_ec_window('error:no-room-returned', data);
});

ipcMain.on('leave-room', (e, data) => {
    close_enter_window();
    ec_window();
});
