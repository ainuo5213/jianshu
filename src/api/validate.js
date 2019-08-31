function checkUsername(username) {//2-15个，中文字母下划线
    let reg = /\w{2,15}/;
    return reg.test(username)
}

export {checkUsername}