export function generateCode(max = 9999, min = 1000){
    return Math.floor(Math.random() * (max - min) + min);
}