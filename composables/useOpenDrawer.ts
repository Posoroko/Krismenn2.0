export const useOpenDrawer = () => {
    return useState<string>('openDrawer', () => "none")
}