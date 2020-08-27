var basketItems = [1, 2, 3];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const currency = "£";

function openNav() {
    var sideNav = document.getElementById("mySidenav");
    sideNav.style.width = "250px";

    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";


    var cartItems = document.getElementById("items");
    cartItems.innerHTML = null;
    if (basketItems.length > 0) {

        cartItems.style.textAlign = "start";

        basketItems.forEach(element => {

            // row div
            const row = document.createElement('div');
            row.className = 'rowC';

            // name column
            const nameCol = document.createElement('div');
            nameCol.className = 'columnC';


            const nameText = document.createElement('p');
            nameText.innerText = `${element}`;
            nameText.style = 'color: white; margin-left:14px';
            nameCol.appendChild(nameText);

            row.appendChild(nameCol);

            // price column
            // const priceCol = document.createElement('div');
            // priceCol.className = 'columnC';

            // const priceText = document.createElement('p');
            // priceText.innerText = `${currency + element.Price.toFixed(2)}`;
            // priceText.style = 'text-align: center;color: white';
            // priceCol.appendChild(priceText);

            // row.appendChild(priceCol);

            cartItems.appendChild(row);

        });

    } else {
        cartItems.innerText = "You have no items in your cart"
        cartItems.style.textAlign = "center";
    }
    document.getElementById('totalItems').innerText = `Total: ${currency}${basketItems.reduce(reducer, 0).toFixed(2)}`;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

    document.body.style.backgroundColor = "white";
}