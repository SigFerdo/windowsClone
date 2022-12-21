import { writable } from "svelte/store"
export const openedApps = writable([])

//subscribe serve per leggere il valore
//update serve per aggiornare il valore ma ti da anche il valore attuale dello store
//set serve per aggiornare lo store ma non ho accesso al valore attuale

export const addApp = (app) => {
    const appObject = {
        id: app.id,
        component: app.component,
        isMaximized: false,
        isMinimized: false
    };

    openedApps.update($openedApps => {
        if ($openedApps.some((openedApp) => openedApp.id === appObject.id)) {
            return;
        }
        return [...$openedApps, appObject]
    })
};

export const closeApp = (app) => {
    openedApps.update(($openedApps) => {
        return $openedApps.filter(_app => {
            if (_app.id === app.id) {
                return false
            }
            return true
        })
    })
};

export const maximizeApp = (app) => {
    openedApps.update(($openedApps) => {
        const newOpenedApps = $openedApps.map(openedApp => {
            const match = openedApp.id === app.id

            if (!match) return openedApp

            return {
                ...openedApp,
                isMaximized: !openedApp.isMaximized
            }

        })

        return newOpenedApps

    })
}