import { BrowserWindow, Menu } from 'electron';
import path from 'path';
import { ec_room_template } from '../templates/ec_room.template';
import { windowConf } from '../helpers/windowConf';

let window: BrowserWindow;

export const ec_window = (): void => {

    const conf = windowConf('AnCom - Enter/Create a room');

    window = new BrowserWindow(conf);

    const menu: Menu = Menu.buildFromTemplate(ec_room_template);
    Menu.setApplicationMenu(menu);

    window.loadFile( path.resolve( __dirname, '../../src/views/ec_room.html' ) );

    // window.on('closed', () => {
    //     app.quit();
    // });
}

export const sendData_ec_window = ( event: string, data: any ): void => {
    window.webContents.send(event, data);
}

export const close_ec_window = (): void => {
    window.close();
}