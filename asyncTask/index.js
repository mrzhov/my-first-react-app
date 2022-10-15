// const promise = new Promise(function (resolve, reject) {
//     const a = 5;
//
//     if (a === 5) {
//         resolve(a);
//     } else {
//         reject("a не 5");
//     }
// });
//
// promise
//     .then((value) => {
//         console.log(value);
//         return value + 3;
//     })
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error)
//     });

// function getUsers() {
//     let result = null;
//     const promise = fetch('https://jsonplaceholder.typicode.com/users');
//     promise
//         .then(value => value.json())
//         .then(value => {
//             result = value;
//         })
//     return result;
// }
//
// const users = getUsers();
// console.log(users);

function getUsers() {
    const promise = fetch('https://jsonplaceholder.typicode.com/users');
    return promise.then(value => value.json())
}

function getPosts() {
    const promise = fetch('https://jsonplaceholder.typicode.com/posts');
    return promise.then(value => value.json())
}

getUsers().then(users => {
    getPosts().then(posts => {
        console.log(posts)
        console.log(users)
    })
});

const users = getUsers();
const posts = getPosts();
console.log(users);
console.log(posts);