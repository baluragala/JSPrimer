// // const myPromise = new Promise((resolve,reject)=> {
// //     setTimeout(() => {
// //         reject('Ahh, something went wrong')
// //     },5000)
// // })

// // //console.log('this is before promise')

// // myPromise.then((data)=> {
// //     console.log(data)
// // }).catch(err => console.log(err))

// // //console.log('this is after promise')


// // let p1 = new Promise((resolve, reject) => {
// //     setTimeout(() => resolve(2), 1000)
// // })

// // p1
// //     .then(data => {
// //         console.log(data)
// //         return data * 2;
// //     })
// //     .then(data => {
// //         console.log(data)
// //         return data * 3;
// //     })
// //     .then(data => {
// //         console.log(data)
// //         return data * 4;
// //     })
// //     .then(data => console.log(data))


// let p1 = new Promise((resolve, reject) => {
//     console.log('p1')
//     setTimeout(() => resolve('p1 resolved'), 1000)
// })

// let p2 = new Promise((resolve, reject) => {
//     console.log('p2')
//     setTimeout(() => resolve('p2 resolved'), 500)
// })

// let p3 = new Promise((resolve, reject) => {
//     console.log('p3')
//     setTimeout(() => resolve('p3 resolved'), 1000)
// })

// p1
//     .then(data => {
//         console.log(data)
//         return p2;
//     })
//     .then(data => {
//         console.log(data)
//         return p3;
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => console.log(err))


let p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('p1 resolved '), 1000)
})

p1
    .then(data => {
        console.log(data)
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(data + '-> p2 resolved')
            }, 2000);
        })
    })

    .then(data => {
        console.log(data)
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(data + '-> p3 resolved ')
            }, 5000);
        })
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => console.error('ERROR : ' + err))


// let p1 = new Promise((resolve, reject) => {
//     console.log('p1')
//     setTimeout(() => resolve('p1 resolved'), 1000)
// })

// let p2 = new Promise((resolve, reject) => {
//     console.log('p2')
//     setTimeout(() => resolve('p2 resolved'), 500)
// })

// let p3 = new Promise((resolve, reject) => {
//     console.log('p3')
//     setTimeout(() => resolve('p3 resolved'), 1000)
// })

// Promise.all([p1,p2,p3])
// .then(values => console.log(values))

Promise.race([p1,p2,p3])