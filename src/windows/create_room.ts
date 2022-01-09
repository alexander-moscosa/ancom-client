import { BrowserWindow, Menu } from 'electron';
import { windowConf } from '../helpers/windowConf';
import { create_room_template } from '../templates/create_room.template';

import path from 'path';

let window: BrowserWindow;

export const create_window = () => {
    
    const conf = windowConf('AnCom - Creating the Room', false, 200, 300);

    window = new BrowserWindow(conf);

    const menu: Menu = Menu.buildFromTemplate(create_room_template);
    Menu.setApplicationMenu(menu);

    window.loadFile( path.resolve(__dirname, '../../src/views/create_room.html') );
}

export const sendData_create_window = ( event: string, data: any ) => {
    window.webContents.on('did-finish-load', () => {
        window.webContents.send(event, data);
    });
}

export const close_create_window = () => {
    window.closable = true;
    window.close();
}