// setupListeners();
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Playstation 2 Brand new High Quality | Wired Controller',
        image: 'Console1.png',
        currency: '₱',
        price: 449
    },
    {
        id: 2,
        name: 'Sony Playstation 3 Dual Shock 3 | Wireless Controller',
        image: 'Console2.png',
        currency: '₱',
        price: 349
    },
    {
        id: 3,
        name: 'Game Selections Wireless Controller | Nintendo Switch  / PC / Android',
        image: 'Console3.png',
        currency: '₱',
        price: 950
    },
    {
        id: 4,
        name: '2.4GHz USB | Wireless Controller',
        image: 'Console4.png',
        currency: '₱',
        price: 1500
    },
    {
        id: 5,
        name: 'Xbox 360 Wired Controller | for PC',
        image: 'Console5.png',
        currency: '₱',
        price: 399
    },
    {
        id: 6,
        name: 'Sony Playstation 1 | Modified Package',
        image: 'Console6.webp',
        currency: '₱',
        price: 3999
    },
    {
        id: 7,
        name: 'Family Computer | 8-bit Retro Nintendo Family Computer Games',
        image: 'Accessory1.png',
        currency: '₱',
        price: 550
    },
    {
        id: 8,
        name: 'Monkey D Luffy One Piece Themed | Night Lamp',
        image: 'Accessory2.png',
        currency: '₱',
        price: 189
    },
    {
        id: 9,
        name: 'Super Mario Bros Hat | for Kids and Adults',
        image: 'Accessory3.png',
        currency: '₱',
        price: 100
    },
    {
        id: 10,
        name: 'Cartoon Super Mario Bros | Keychain (2pcs)',
        image: 'Accessory4.png',
        currency: '₱',
        price: 90
    },
    {
        id: 11,
        name: 'Random Pieces Super Mario | Stickers (25pcs)',
        image: 'Accessory5.png',
        currency: '₱',
        price: 340
    },
    {
        id: 12,
        name: '23cm Super Mario Bros | Action Figure (1pc)',
        image: 'Accessory6.png',
        currency: '₱',
        price: 520
    },
    {
        id: 13,
        name: 'Megaman / Rockman | T-Shirt (S/M/L/XL/XXL)',
        image: 'Shirt1.png',
        currency: '₱',
        price: 325
    },
    {
        id: 14,
        name: 'Tekken 8 Printed 3D | T-shirt (S/M/L/XL/XXL)',
        image: 'Shirt2.png',
        currency: '₱',
        price: 250
    },
    {
        id: 15,
        name: 'Undertale Inspired Sans | T- Shirt (S/M/L/XL/XXL)',
        image: 'Shirt3.png',
        currency: '₱',
        price: 400
    },
    {
        id: 16,
        name: 'Nintendo Switch | T-Shirt | Nude (S/M/L/XL/XXL)',
        image: 'Shirt4.png',
        currency: '₱',
        price: 250
    },
    {
        id: 17,
        name: 'Super Mario Bros 85 | Vintage (S/M/L/XL/XXL)',
        image: 'Shirt5.png',
        currency: '₱',
        price: 350
    },
    {
        id: 18,
        name: 'Cartoon Shirt Pokemon Powers | T-Shirt (S/M/L/XL/XXL)',
        image: 'Shirt6.png',
        currency: '₱',
        price: 280
    },
    {
        id: 19,
        name: 'Pokemon Metal Black, Gold, White Vmax GX | Cards (55pcs)',
        image: 'Toys1.png',
        currency: '₱',
        price: 80
    },
    {
        id: 20,
        name: 'Anbernic RG353V RG353VS [ARK OS] | Handheld Gaming Console',
        image: 'Toys2.png',
        currency: '₱',
        price: 7000
    },
    {
        id: 21,
        name: '12 Styles Pokemon Poke Ball | With Pokemon Toys (1pc)',
        image: 'Toys3.png',
        currency: '₱',
        price: 150
    },
    {
        id: 22,
        name: '25cm Charmander Plush | Toy',
        image: 'Toys4.png',
        currency: '₱',
        price: 400
    },
    {
        id: 23,
        name: 'Sonic The Hedgehog | with Earflaps',
        image: 'Toys5.png',
        currency: '₱',
        price: 340
    },
    {
        id: 24,
        name: 'Nintendo Gameboy | Tin Money Box',
        image: 'Toys6.png',
        currency: '₱',
        price: 2200
    },
];
let listCards = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.currency}${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCards[key] == null){
        // copy product formm list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCart();
}
function reloadCart(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.currency}${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * (products[key].price);
    }
    reloadCart();
}



