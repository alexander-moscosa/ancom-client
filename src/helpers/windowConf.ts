import { BrowserWindow } from 'electron';

export const windowConf = (title: string, closable: boolean, height: number, width: number) => {

    const conf = {
        height,
        maxHeight: height,
        minHeight: height,
        width,
        maxWidth: width,
        minWidth: width,
        center: true,
        title,
        closable,
        backgroundColor: '#121212',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    }

    return conf;

}