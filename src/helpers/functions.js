export const convertDateToString = (date) => {
    if(date instanceof Date) {
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        return `${day}.${month}.${year}`
    }else {
        return "Value not instance Date"
    }

}