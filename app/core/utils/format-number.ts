export const formatNumber = (number: number) => {
    return number?.toString()?.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}