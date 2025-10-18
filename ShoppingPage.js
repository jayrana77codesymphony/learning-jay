// let milkinc = document.getElementById('milkincrement');
// let milkdec = document.getElementById('milkdecrement');
// let milkquantity = document.getElementById('milkquantity');
// let milkTotalPrice = document.getElementById('milkTotalPrice');
let tableButton = document.getElementById('tableButton');
let tableId = document.getElementById('tableId');
let bill = document.getElementById('bill');

tableButton.onclick = function () {
    if (tableId.style.display == 'none' && bill.style.display == 'none') {
        tableId.style.display = '';
        bill.style.display = '';
        // displayRows();
        display();
    }
    else {
        tableId.style.display = 'none';
        bill.style.display = 'none';
    }
}


let arr = [
    { id: 1, name: 'Milk', img: 'milk.jpg', quantity: 0, price: 20, totalPrice: 0 },
    { id: 2, name: 'Bread', img: 'bread.jpg', quantity: 0, price: 30, totalPrice: 0 },
    { id: 3, name: 'Egg', img: 'egg.jpg', quantity: 0, price: 40, totalPrice: 0 },
    { id: 4, name: 'Ice Cream', img: 'icecream.jpg', quantity: 0, price: 50, totalPrice: 0 },
    { id: 5, name: 'Thumbs Up', img: 'thumbsup.jpg', quantity: 0, price: 20, totalPrice: 0 },
    { id: 6, name: 'Light', img: 'light.jpg', quantity: 0, price: 150, totalPrice: 0 },
    { id: 7, name: 'RC Car', img: 'rccar.jpg', quantity: 0, price: 800, totalPrice: 0 },
];

function saveToSessionStorage() {
    localStorage.setItem('items', JSON.stringify(arr));
    // sessionStorage.setItem('items', JSON.stringify(arr));
}

function loadFromSessionStorage() {
    const storedItems = localStorage.getItem('items');
    // const storedItems = sessionStorage.getItem('items');
    // console.log(storedItems);
    // console.log(JSON.parse(storedItems));
    if(storedItems){
        // console.log(storedItems);
        arr = JSON.parse(storedItems);
    }
    // arr = JSON.parse(storedItems);
    // console.log(arr);
}

function display() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    let sum = 0;
    arr.forEach((row, index) => {
        const totalPrice = row.price * row.quantity;
        sum += totalPrice;
        tableBody.innerHTML += `<tr>
                 <td>${row.id}</td>
                 <td>${row.name}</td>
                 <td><img src="${row.img}" height="60px" alt="${row.name}"></td>
                 <td><button class="paddingButton" onclick="decrement(${index})">-</button>
                     <span class="quantity">${row.quantity}</span>
                     <button class="paddingButton" onclick="increment(${index})">+</button></td>
                 <td class="price">${row.price}</td>
                 <td class="totalPrice">${totalPrice}rs</td>
             </tr>`;
            })
    totalBill();
    saveToSessionStorage();
    // console.log(saveToSessionStorage());
}

const stock = {
    'Milk': 10,
    'Bread': 3,
    'Egg': 5
};
function increment(index) {
    const item = arr[index];
    // console.log(item);
    const limit = stock[item.name];
    // console.log(limit);
    if (arr[index].quantity >= limit) {
        alert(`Item out of stock (available stock quantity is ${item.quantity})`);
    } else {
        arr[index].quantity++;
        item.totalPrice = item.quantity * item.price;
    }
    // arr[index].quantity++;
    display();
}

function decrement(index) {
    let item = arr[index];
    if (arr[index].quantity > 0) {
        arr[index].quantity--;
        item.totalPrice = item.quantity * item.price;
        display();
    }
}

function totalBill() {
    let totalBill = arr.reduce((total, item) => total + (item.price * item.quantity), 0);
    // console.log(totalBill);
    const totalBillDisplay = document.getElementById('totalBillDisplay');
    totalBillDisplay.textContent = `Total Bill: ${totalBill.toFixed(2)}rs`;
}

loadFromSessionStorage();
// console.log(loadFromSessionStorage());
display();


// ************************ dynamic rows *************************

// const arr = [
//     [1, 'Milk', 'milk.jpg', 0, 20, 0],
//     [2, 'Bread', 'bread.jpg', 0, 30, 0],
//     [3, 'Egg', 'egg.jpg', 0, 40, 0]
// ];

// const tableBody = document.getElementById('tableBody');
// const displayRows = () => {
//     tableBody.innerHTML = '';
//     arr.forEach((row, i) => {
//         const [id, name, image, quantity, price, totalPrice] = row;
//         tableBody.innerHTML += `<tr>
//                 <td>${id}</td>
//                 <td>${name}</td>
//                 <td><img src="${image}" height="60px" alt="${name}"></td>
//                 <td><button class="paddingButton decrement">-</button>
//                     <span class="quantity">${quantity}</span>
//                     <button class="paddingButton increment">+</button></td>
//                 <td class="price">${price}</td>
//                 <td class="totalPrice">${totalPrice}rs</td>
//             </tr>`;
//     });
// };

// tableButton.addEventListener('click', () => {
//     const rows = document.querySelectorAll('tr');
//     rows.forEach((row, i) => {
//         if (i == 0) return;
//         const inc = row.querySelector('.increment');
//         const dec = row.querySelector('.decrement');
//         const quantity = row.querySelector('.quantity');
//         const price = row.querySelector('.price');
//         const totalPrice = row.querySelector('.totalPrice');
//         let count = 0;
//         inc.onclick = () => {
//             count++;
//             quantity.textContent = count;
//             totalPrice.textContent = `${+price.textContent * count}rs`;
//         };

//         dec.onclick = () => {
//             if (count > 0) {
//                 count--;
//                 quantity.textContent = count;
//                 totalPrice.textContent = `${+price.textContent * count}rs`;
//             }
//         };
//     });

// });









// ************************ static rows *************************8
// const rows = document.querySelectorAll('tr');
// rows.forEach((row, i) => {
//     if (i == 0) return;
//     else {
//         // console.log(row);
//         // console.log(i);
//         const inc = row.querySelector('.increment');
//         const dec = row.querySelector('.decrement');
//         const price = row.querySelector('.price');
//         const totalPrice = row.querySelector('.totalPrice');
//         const quantity = row.querySelector('.quantity');
//         let count = 0;
//         // console.log(quantity,quantity.textContent);
//         // console.log(totalPrice,totalPrice.textContent);

//         inc.onclick = function () {
//             count++;
//             quantity.textContent = count;
//             totalPrice.textContent = `${+price.innerHTML * count}rs`;
//         }
//         dec.onclick = function () {
//             if (quantity.textContent > 0) {
//                 count--;
//                 console.log(count);
//                 quantity.textContent = count;
//                 totalPrice.textContent = `${+price.innerHTML * count}rs`;
//             }
//         }
//     }
// })







// ******************* one by one button ************************
// milkinc.onclick = function () {
//     let milkquan = +milkquantity.innerHTML;
//     milkquan++;
//     const total = milkquan * unitPrice;
//     milkTotalPrice.innerHTML = `${total}rs`;
//     milkquantity.innerHTML = milkquan;
// }

// milkdec.onclick = function () {
//     let milkquan = +milkquantity.innerHTML;
//     if (milkquan > 0) {
//         milkquan--;
//         milkquantity.innerHTML = milkquan;
//         const total = milkquan * unitPrice;
//         milkTotalPrice.innerHTML = `${total}rs`;
//     }
// }