import { BrowserWindow } from 'electron';
import { windowConf } from '../helpers/windowConf';

import path from 'path';
import { ec_window } from './ec_room';

let window: BrowserWindow;

export const enter_room_window = (): void => {

    const conf = windowConf('AnCom - Guest');

    window = new BrowserWindow(conf);

    window.loadFile( path.resolve( __dirname, '../../src/views/enter_room.html' ) );

    // When the user closes the window (chat room), the ec_window will be spawned
    window.on('closed', () => {
        ec_window();
    });
}