import { MenuItemConstructorOptions } from 'electron';
import { verifyMacTemplate } from '../helpers/verifyMacTemplate';
import { verifyDevEnv } from '../helpers/verifyDevEnv';

export const ec_room_template: MenuItemConstructorOptions[] = [
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
    }
];

verifyMacTemplate( ec_room_template );
verifyDevEnv( ec_room_template );