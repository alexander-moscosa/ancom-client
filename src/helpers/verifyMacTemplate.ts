import { app, MenuItemConstructorOptions } from 'electron';

const isMac: boolean = process.platform === 'darwin';

export const verifyMacTemplate = ( template: MenuItemConstructorOptions[] ): MenuItemConstructorOptions[] => {

    if ( isMac ) {
        template.unshift({
            label: app.name,
            submenu: [
                {role: 'about'},
                {type: 'separator'},
                {role: 'quit'}
            ]
        });
    }

    return template;

}