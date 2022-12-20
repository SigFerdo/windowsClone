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