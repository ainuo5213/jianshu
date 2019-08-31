import md5 from 'md5'
export function changeNumToKilo(num) {
    let kiloNum = (num/1000).toFixed(1);
    return kiloNum + 'k'
}

export function encrypt (pwd) {
    return md5(md5(pwd) + md5(pwd))
}