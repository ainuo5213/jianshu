import $ from "jquery";
export function request(url, page = 0) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'get',
            data: {
                page: page
            },
            datatype: 'jsonp',
            success: (res) => {
                resolve(res)
            },
            error: (err) => {
                reject(err)
            }
        })
    })
}

export const doReg = (url, userInfo) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'post',
            data: userInfo,
            datatype: 'jsonp',
            success: (res) => {
                resolve(res)
            },
            error: (err) => {
                reject(err)
            }
        })
    })
};