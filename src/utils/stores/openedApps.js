import { writable } from "svelte/store"
export const openedApps = writable([])
export const isWindowMinimize = writable(false)
    //subscribe serve per leggere il valore
    //update serve per aggiornare il valore ma ti da anche il valore attuale dello store
    //set serve per aggiornare lo store ma non ho accesso al valore attuale




//verificare che l app che clicco è già presente nelel aperte, se lo è controllo se è minimizzata, se è minimizzata cambio a massimizzata, altrimenti apri app

export const addApp = (app) => {
    const appObject = {
        id: app.id,
        component: app.component,
        isMaximized: false,
        isMinimized: false
    };

    openedApps.update($openedApps => {
        const [match] = $openedApps.filter(openedApp =>
            openedApp.id === appObject.id
        )
        if (match) {
            const newOpenedApps = $openedApps.map(openedApp => {
                if (openedApp === match) {
                    return {...match, isMinimized: !match.isMinimized }
                }
                return openedApp
            })
            return newOpenedApps
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


export const minimizeApp = (app) => {
    openedApps.update(($openedApps) => {
        const newOpenedApps = $openedApps.map(openedApp => {
            const match = openedApp.id === app.id

            if (!match) return openedApp

            return {
                ...openedApp,
                isMinimized: !openedApp.isMinimized
            }

        })

        return newOpenedApps

    })
}