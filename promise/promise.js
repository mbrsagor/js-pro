"use strict";

const example1 = () => {
    var promise = new Promise(function (resolve, reject) {
        const full_name = "Md.Bozlur Rosid Sagor";
        const nick_name = "mbr-sagor";
        if (full_name === nick_name) {
            resolve();
        } else {
            reject();
        }
    });

    promise.then(function () {
        console.log('Hello, your name is correct');
    }).catch(function () {
        console.log('Your name is incorrect');
    })

};
example1();


const example2 = () => {
    let is_active = true;
    new Promise(function (reslove, reject) {
        if (is_active === true) {
            reslove();
        } else {
            reject();
        }
    }).then(function () {
        console.log('He/She is active');
    }).catch(function () {
        console.log('He/she is an inactive');
    })
}

example2();
