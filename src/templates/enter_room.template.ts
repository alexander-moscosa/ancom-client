import { MenuItemConstructorOptions } from 'electron';
import { verifyMacTemplate } from '../helpers/verifyMacTemplate';
import { verifyDevEnv } from '../helpers/verifyDevEnv';
import { close_enter_window } from '../windows/enter_room';
import { ec_window } from '../windows/ec_room';

const isMac: boolean = process.platform === 'darwin';

export const enter_room_template: MenuItemConstructorOptions[] = [
    {
        label: 'File',
        submenu: [
            {role: 'close'}
        ]
    },
    {
        label: 'Edit',
        submenu: [
            {role: 'undo'},
            {role: 'redo'},
            {type: 'separator'},
            {role: 'cut'},
            {role: 'copy'},
            {role: 'paste'},
            {type: 'separator'},
            {role: 'selectAll'}
        ]
    },
    {
        label: 'View',
        submenu: [
            {role: 'reload'},
            {role: 'forceReload'}
        ]
    },
    {
        label: 'Window',
        submenu: [
            {role: 'minimize'}
        ]
    },
    {
        label: 'Room',
        submenu: [
            {
                label: 'Leave Room',
                accelerator: ( isMac ? 'Command+L' : 'Ctrl+L' ),
                click() {
                    ec_window();
                    close_enter_window();
                }
            }
        ]
    }
];

verifyMacTemplate( enter_room_template );
verifyDevEnv( enter_room_template );