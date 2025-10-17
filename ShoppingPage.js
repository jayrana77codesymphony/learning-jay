// let milkinc = document.getElementById('milkincrement');
// let milkdec = document.getElementById('milkdecrement');
// let milkquantity = document.getElementById('milkquantity');
// let milkTotalPrice = document.getElementById('milkTotalPrice');
let tableButton = document.getElementById('tableButton');
let tableId = document.getElementById('tableId');

tableButton.onclick = function () {
    if (tableId.style.display == 'none') {
        tableId.style.display = '';
    }
    else {
        tableId.style.display = 'none';
    }
}

const rows = document.querySelectorAll('tr');
rows.forEach((row, i) => {
    if (i == 0) return;
    else {
        // console.log(row);
        // console.log(i);
        const inc = row.querySelector('.increment');
        const dec = row.querySelector('.decrement');
        const price = row.querySelector('.price');
        const totalPrice = row.querySelector('.totalPrice');
        const quantity = row.querySelector('.quantity');
        let count = 0;
        // console.log(quantity,quantity.textContent);
        // console.log(totalPrice,totalPrice.textContent);

        inc.onclick = function () {
            count++;
            quantity.textContent = count;
            totalPrice.textContent = `${+price.innerHTML * count}rs`;
        }
        dec.onclick = function () {
            if (quantity.textContent > 0) {
                count--;
                console.log(count);
                quantity.textContent = count;
                totalPrice.textContent = `${+price.innerHTML * count}rs`;
            }
        }
    }
})

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