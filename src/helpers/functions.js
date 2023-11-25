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

export const canObjectValues = (value) => {
    return (!!value) && (value.constructor === Object) && Object.keys(value).length > 0
}

export const canArrayValues = (value) => {
    return Array.isArray(value) && value.length > 0
}