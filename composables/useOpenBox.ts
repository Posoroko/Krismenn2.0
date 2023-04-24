export const useOpenBox = () => {
    return useState<string>('openBox', () => "none")
}