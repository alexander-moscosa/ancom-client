import { BrowserWindow } from 'electron';

export const windowConf = (title: string) => {

    const conf = {
        height: 600,
        maxHeight: 600,
        minHeight: 600,
        width: 700,
        maxWidth: 700,
        minWidth: 700,
        center: true,
        title,
        backgroundColor: '#121212',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    }

    return conf;

}