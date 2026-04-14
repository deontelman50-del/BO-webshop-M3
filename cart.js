

 const cart = JSON.parse(localStorage.getItem('cart')) || [];
 const list = document.querySelector('#products');

 function fillCartList() {
     cart.forEach(element => {
         let row = document.createElement('tr');
         row.innerHTML = `
         <td>${element.name}</td>
         <td>${element.amount}</td>
         <td>${element.price}</td>
         `;
         list.appendChild(row);
     });
 }

 fillCartList();

function fillCartList() {
    list.innerHTML = `
        <tr>
            <th>Item</th>
            <th>Aantal</th>
            <th>Prijs</th>
            <th>Actie</th>
        </tr>
    `;

    cart.forEach((element, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${element.name}</td>
            <td>${element.amount}</td>
            <td>${element.price}</td>
            <td>
                <button class="btn1" onclick="removeFromCart(${index})">Verwijder</button>
            </td>
        `;
        list.appendChild(row);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1); 
    localStorage.setItem('cart', JSON.stringify(cart));

    fillCartList(); 
}