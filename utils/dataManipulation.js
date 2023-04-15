export const ddmmyyyy = (date) => {
    const d = new Date(date);
    const day = ("0" + (d.getDate() + 1)).slice(-2);
    const month = ("0" + (d.getMonth() + 1)).slice(-2);
    const year = d.getFullYear();
    const string = `${day}.${month}.${year}`
    return string;
}
