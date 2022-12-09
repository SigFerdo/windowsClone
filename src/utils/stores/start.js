import ChromeApp from "src/app/ChromeApp/ChromeApp.svelte"
import MailApp from "src/app/MailApp/MailApp.svelte"
import SettingsApp from "src/app/SettingsApp/SettingsApp.svelte"
import AudioIcon from "src/Img/AudioIcon.svelte"
import ChromeIcon from "src/Img/ChromeIcon.svelte"
import EmailIcon from "src/Img/EmailIcon.svelte"
import SettingsIcon from "src/Img/SettingsIcon.svelte"
import WifiIcon from "src/Img/WifiIcon.svelte"
import AudioComponent from "src/shared/layout/Taskbar/WindowsInfo/IconsInfo/AudioComponent.svelte"
import WifiComponent from "src/shared/layout/Taskbar/WindowsInfo/IconsInfo/WifiComponent.svelte"
import { readable, writable } from "svelte/store"
import { openedApps } from "./openedApps"


export const pinnedApps = writable([{
        id: crypto.randomUUID(),
        icon: EmailIcon,
        component: MailApp,
        name: "Email"
    },
    {
        id: crypto.randomUUID(),
        icon: ChromeIcon,
        component: ChromeApp,
        name: "Chrome"
    },
    {
        id: crypto.randomUUID(),
        icon: SettingsIcon,
        component: SettingsApp,
        name: "Settings"
    },
])

export const isStartOpen = writable(false)


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

    openedApps.subscribe(($openedApps) => {
        if ($openedApps.some((_appObject) => _appObject.id === app.id)) {
            return;
        }

        openedApps.update((old) => {
            return [...old, appObject]
        })
    })
};




export const infoApps = readable([{
        id: crypto.randomUUID(),
        icon: WifiIcon,
        component: WifiComponent,
        name: "wifi"
    },
    {
        id: crypto.randomUUID(),
        icon: AudioIcon,
        component: AudioComponent,
        name: "audio"
    },
])