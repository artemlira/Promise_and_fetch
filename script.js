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
let url = 'https://jsonplaceholder.typicode.com/posts';

const sendPost = () => {
   const request = new XMLHttpRequest();
   request.addEventListener('readystatechange', () => {
      if (request.readyState !== 4) { return };
      if (request.status === 200) {
         let data = JSON.parse(request.responseText);
         createWrap(data);
      }
   });
   request.open('GET', url);
   request.setRequestHeader('Content-type', 'application/json');
   request.send();
}

const createWrap = (data) => {
   data.forEach((item) => {
      if (item.userId == 1) {
         let str = `<div class="col-12 col-md-6">
                        <div class="wrap">
                           <h2 class ="title">${item.title}</h2>
                           <p>${item.body}</p>
                         </div>
                     </div>`;
         document.querySelector('.row').insertAdjacentHTML('beforeend', str);
      }
   });
}

sendPost();