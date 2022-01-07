import { MenuItemConstructorOptions } from 'electron';

export const verifyDevEnv = ( template: MenuItemConstructorOptions[] ): MenuItemConstructorOptions[] => {
    if ( process.env.NODE_ENV !== 'production' ) {
       template.push({
           label: 'Dev',
            submenu: [
                {role: 'toggleDevTools'}
            ]
       });
    }

    return template;
}