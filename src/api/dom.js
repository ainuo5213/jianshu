export function rotate(icon, cb) {
    //因为我们的style实际上是加给style component，所以这里我们要手动设置
    let originAngle = +icon.style.transform.replace(/[^0-9]/gi, '');
    if (originAngle) {
        originAngle = parseInt(originAngle, 10)
    } else {
        originAngle = 0;
    }
    icon.style.transform = `rotate(${originAngle + 360}deg)`;
    cb && cb()
}

export function toTop($, opts) {
    let defaultOpts = {
        speed: 800
    };
    let limitTime = opts.limitTime;

    $('body,html').animate({
        scrollTop: 0
    }, limitTime || defaultOpts.swing)
}