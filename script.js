'use strict'
// function arr() {
//    let arr = [];
//    let num;
//    for (let i = 0; arr.length < 16; i++) {
//       num = Math.floor(Math.random() * (16 - 1 + 1)) + 1;
//       if (arr.indexOf(num) == -1) {
//          arr.push(num);
//       }

//    }
//    return arr
// }

// let arr2 = arr();

// let allLi = document.querySelectorAll('li');

// for (let i = 0; i < allLi.length; i++) {
//    let a = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
//    let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
//    let c = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
//    allLi[i].style.order = arr2[i];
//    allLi[i].style.backgroundColor = `rgb(${a},${b}, ${c})`;
// }

//==================================================================================
// let url = 'https://jsonplaceholder.typicode.com/posts';


// const sendPost = () => {
//    return new Promise((resolve, reject) => {
//       const request = new XMLHttpRequest();
//       request.addEventListener('readystatechange', () => {
//          if (request.readyState !== 4) { return };
//          if (request.status === 200) {
//             let data = JSON.parse(request.responseText);
//             resolve(data);
//          } else {
//             reject('Беда печаль. Получилась ошибка');
//          }

//       });
//       request.open('GET', url);
//       request.setRequestHeader('Content-type', 'application/json');
//       request.send();
//    });
// }

// sendPost()
//    .then((data) => { createWrap(data) })
//    .catch((error) => { console.error(error) })
//    .finally(() => console.log('Все сделано'));






// const sendPost = () => {
//    const request = new XMLHttpRequest();
//    request.addEventListener('readystatechange', () => {
//       if (request.readyState !== 4) { return };
//       if (request.status === 200) {
//          let data = JSON.parse(request.responseText);
//          createWrap(data);
//       }
//    });
//    request.open('GET', url);
//    request.setRequestHeader('Content-type', 'application/json');
//    request.send();
// }

// const createWrap = (data) => {
//    data.forEach((item) => {
//       if (item.userId == 1) {
//          let str = `<div class="col-12 col-md-6">
//                         <div class="wrap">
//                            ${item}
//                          </div>
//                      </div>`;
//          document.querySelector('.row').insertAdjacentHTML('beforeend', str);
//       }
//    });
// }

// sendPost();

// =========================================================================
// function arr() {
//    let arr = [];
//    let num;
//    for (let i = 0; arr.length < 6; i++) {
//       num = Math.floor(Math.random() * (5000 - 1 + 1)) + 1;
//       if (arr.indexOf(num) == -1) {
//          arr.push(num);
//       }

//    }
//    return arr
// }

// console.log(arr());

// const createWrap = (data) => {
//    let str = `<div class="col-12 col-md-6">
//                         <div class="wrap">
//                         <img src="${data}" alt="">
//                          </div>
//                      </div>`;
//    document.querySelector('.row').insertAdjacentHTML('beforeend', str);
// }

// let url = 'https://jsonplaceholder.typicode.com/photos';

// const sendPhoto = () => {
//    return new Promise((resolve, reject) => {
//       const request = new XMLHttpRequest();
//       request.addEventListener('readystatechange', () => {
//          if (request.readyState !== 4) { return };
//          if (request.status === 200) {
//             let data = JSON.parse(request.responseText);
//             resolve(data);
//          } else {
//             reject('Беда печаль. Получилась ошибка');
//          }

//       });
//       request.open('GET', url);
//       request.setRequestHeader('Content-type', 'application/json');
//       request.send();
//    });
// }

// sendPhoto()
//    .then((data) => {
//       let arr = [];
//       // let num;
//       for (let i = 0; arr.length < 6; i++) {
//          let num = Math.floor(Math.random() * (5000 - 1 + 1)) + 1;
//          if (arr.indexOf(num) == -1) {
//             arr.push(data[num]);
//          }
//       }
//       return arr
//    })
//    .then(data => {
//       console.log(data);
//       data.forEach((item) => {
//          console.log(item.url);
//          createWrap(item.url)
//       })
//    })
//    .catch((error) => { console.error(error) })
//    .finally(() => console.log('Все сделано'));

//=====================================================================================

let url = 'https://jsonplaceholder.typicode.com/posts';

const sendPost = () => {
   fetch(url, {
      method: 'GET',
      mode: 'cors',
      // body:JSON.stringify(data) //если отправляем данные
   })
      .then((response) => {
         if (response.status !== 200) {
            throw new Error('Response status is not 200')
         }
         return response.text();
         console.dir(response.text());
      })
      .then((res) => {
         return JSON.parse(res);
         console.log(res);
      })
      .then((data) => {
         createWrap(data);
      })
      .catch((error) => console.error(error));
}

sendPost();

const createWrap = (data) => {
   data.forEach((item) => {
      if (item.userId == 1) {
         let str = `<div class="col-12 col-md-6">
                        <div class="wrap">
                          <h2>${item.title}</h2>
                          <p>${item.body}</p>
                         </div>
                     </div>`;
         document.querySelector('.row').insertAdjacentHTML('beforeend', str);
      }
   });
}
