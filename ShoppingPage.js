// let milkinc = document.getElementById('milkincrement');
// let milkdec = document.getElementById('milkdecrement');
// let milkquantity = document.getElementById('milkquantity');
// let milkTotalPrice = document.getElementById('milkTotalPrice');
let tableButton = document.getElementById('tableButton');
let tableId = document.getElementById('tableId');

tableButton.onclick = function () {
    if (tableId.style.display == 'none') {
        tableId.style.display = '';
        renderTableRows();
    }
    else {
        tableId.style.display = 'none';
    }
}

const arr = [
    [1, 'Milk', 'milk.jpg', 0, 20, 0],
    [2, 'Bread', 'bread.jpg', 0, 30, 0],
    [3, 'Egg', 'egg.jpg', 0, 40, 0]
];

const tableBody = document.getElementById('tableBody');
const renderTableRows = () => {
    tableBody.innerHTML = '';
    arr.forEach((row, i) => {
        const [id, name, image, quantity, price, totalPrice] = row;
        tableBody.innerHTML += `<tr>
                <td>${id}</td>
                <td>${name}</td>
                <td><img src="${image}" height="60px" alt="${name}"></td>
                <td><button class="paddingButton decrement">-</button>
                    <span class="quantity">${quantity}</span>
                    <button class="paddingButton increment">+</button></td>
                <td class="price">${price}</td>
                <td class="totalPrice">${totalPrice}rs</td>
            </tr>`;
    });
};

tableButton.addEventListener('click', () => {
    const rows = document.querySelectorAll('tr');
    rows.forEach((row, i) => {
        if (i == 0) return;
        const inc = row.querySelector('.increment');
        const dec = row.querySelector('.decrement');
        const quantity = row.querySelector('.quantity');
        const price = row.querySelector('.price');
        const totalPrice = row.querySelector('.totalPrice');
        let count = 0;
        inc.onclick = () => {
            count++;
            quantity.textContent = count;
            totalPrice.textContent = `${+price.textContent * count}rs`;
        };

        dec.onclick = () => {
            if (count > 0) {
                count--;
                quantity.textContent = count;
                totalPrice.textContent = `${+price.textContent * count}rs`;
            }
        };
    });

});


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