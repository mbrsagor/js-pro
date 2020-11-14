"use strict";

const example1 = () => {
    var promise = new Promise((resolve, reject) =>{
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
    new Promise((reslove, reject) =>{
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


const activity = () => {
    var promise = new Promise((resolve, reject) => {
        const first_name = 'mbr';
        const last_name = 'sagor';

        if (first_name === last_name) {
            resolve();
        } else {
            reject();
        }

    });

    promise.then(function () {
        console.log("The are same");
    }).catch(function () {
        console.log("The are not same")
    })
};
activity();


const something = () => {
    new Promise((resolve, reject) => {
        is_honest = true;
        if (is_honest === true) {
            resolve();
        } else {
            reject();
        }
    }).then(function () {
        console.log('He/She is a good guy.');
    }).catch(function () {
        console.log('He/She is a bad guy.');
    })
}
something();


console.log('I love Programming...');
