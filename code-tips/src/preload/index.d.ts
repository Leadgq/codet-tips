import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
        setIgnoreMouseEvents: (ignore: boolean, options?: IgnoreMouseEventsOptions) => void
        hiddenWindow: () => void
        registerWindowShortCut: (shotCur: string, type: 'search' | 'config') => Promise<boolean>
        openConfigWindow: () => void
    }
  }
}
