import { MenuItemConstructorOptions } from 'electron';
import { verifyMacTemplate } from '../helpers/verifyMacTemplate';
import { verifyDevEnv } from '../helpers/verifyDevEnv';

export const create_room_template: MenuItemConstructorOptions[] = [
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

verifyMacTemplate( create_room_template );
verifyDevEnv( create_room_template );