import ChromeApp from "src/app/ChromeApp/ChromeApp.svelte"
import MailApp from "src/app/MailApp/MailApp.svelte"
import SettingsApp from "src/app/SettingsApp/SettingsApp.svelte"
import { writable } from "svelte/store"

export const openedApps = writable([])

export const pinnedApps = writable([
    { 
        icon: MailIcon,
        component: MailApp
    },
    { 
        icon: ChromeIcon,
        component: ChromeApp
    },
    { 
        icon: SettingsIcon,
        component: SettingsApp
    },
])