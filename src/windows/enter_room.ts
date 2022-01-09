import { BrowserWindow, Menu } from 'electron';
import { windowConf } from '../helpers/windowConf';

import path from 'path';
import { enter_room_template } from '../templates/enter_room.template';

let enter_window: BrowserWindow;

export const enter_room_window = (): void => {

    const conf = windowConf('AnCom - Room', true, 600, 700);

    enter_window = new BrowserWindow(conf);

    const menu: Menu = Menu.buildFromTemplate(enter_room_template);
    Menu.setApplicationMenu(menu);
    
    enter_window.loadFile( path.resolve( __dirname, '../../src/views/enter_room.html' ) );

    // When the user closes the window (chat room), the ec_window will be spawned
    // enter_window.on('closed', () => {
    //     ec_window();
    // });
}

export const sendData_enter_window = ( event: string, data: any ) => {
    enter_window.webContents.on('did-finish-load', () => {
        enter_window.webContents.send(event, data);
    });
}

export const close_enter_window = ():void => {
    enter_window.close();
}