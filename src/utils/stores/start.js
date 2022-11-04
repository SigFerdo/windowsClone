import ChromeApp from "src/app/ChromeApp/ChromeApp.svelte"
import MailApp from "src/app/MailApp/MailApp.svelte"
import SettingsApp from "src/app/SettingsApp/SettingsApp.svelte"
import ChromeIcon from "src/Img/ChromeIcon.svelte"
import EmailIcon from "src/Img/EmailIcon.svelte"
import SettingsIcon from "src/Img/SettingsIcon.svelte"
import { writable } from "svelte/store"


export const pinnedApps = writable([{
        id: crypto.randomUUID(),
        icon: EmailIcon,
        component: MailApp
    },
    {
        id: crypto.randomUUID(),
        icon: ChromeIcon,
        component: ChromeApp
    },
    {
        id: crypto.randomUUID(),
        icon: SettingsIcon,
        component: SettingsApp
    },
])

export const isStartOpen = writable(false)