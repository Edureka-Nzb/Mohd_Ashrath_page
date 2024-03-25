
        document.addEventListener('DOMContentLoaded', function () {
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
            const cartItemsList = document.querySelector('#cart-items');

            addToCartButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const itemId = button.getAttribute('data-id');
                    const itemName = button.parentNode.querySelector('div').textContent;
                    const itemPrice = button.parentNode.querySelector('p').textContent;

                    const newItem = document.createElement('li');
                    newItem.innerHTML = `<span>${itemName}</span> - <span>${itemPrice+"<br>"+"<br>"}</span>`;
                 
                    cartItemsList.appendChild(newItem);
                    document.getElementById("cart-items").style.marginTop="950px";
                    document.getElementById("cart-items").style.marginLeft="10px";
                    document.getElementById("cart-items").style.border="1px solid black";
                });
            });
        });