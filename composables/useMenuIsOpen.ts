export const useMenuIsOpen = () => {
    return useState<boolean>('menuIsOpen', () => false)
}