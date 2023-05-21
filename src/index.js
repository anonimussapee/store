document.addEventListener('DOMContentLoaded', ()=>{
    carrito = JSON.parse((localStorage.getItem('carrito')) || []);
    if(carrito){
        cart_status =document.querySelector(".cart_status");
        cart_status.innerHTML=carrito.length;
    }
});
// en esta linea esta el estock de productos
const stock = [
    {title : "Zapatillas Nike revolution 6 NN para mujer", price : 93.80, description : "Los zapatos Nike son la base de la afición a coleccionar zapatillas tal y como la conocemos hoy en día.", img :"https://m.media-amazon.com/images/I/81Mozj1u5GL._AC_UL1500_.jpg" , id : 1},
    {title : "Zapatillas Nike revolution 6 NN para mujer", price : 93.80, description : "Los zapatos Nike son la base de la afición a coleccionar zapatillas tal y como la conocemos hoy en día.", img :"https://m.media-amazon.com/images/I/81Mozj1u5GL._AC_UL1500_.jpg" , id : 2},
    {title : "Zapatillas Nike revolution 6 NN para mujer", price : 93.80, description : "Los zapatos Nike son la base de la afición a coleccionar zapatillas tal y como la conocemos hoy en día.", img :"https://m.media-amazon.com/images/I/81Mozj1u5GL._AC_UL1500_.jpg" , id : 3},
    {title : "Zapatillas Nike revolution 6 NN para mujer", price : 93.80, description : "Los zapatos Nike son la base de la afición a coleccionar zapatillas tal y como la conocemos hoy en día.", img :"https://m.media-amazon.com/images/I/81Mozj1u5GL._AC_UL1500_.jpg" , id : 4},
    {title : "Zapatillas Nike revolution 6 NN para mujer", price : 93.80, description : "Los zapatos Nike son la base de la afición a coleccionar zapatillas tal y como la conocemos hoy en día.", img :"https://m.media-amazon.com/images/I/81Mozj1u5GL._AC_UL1500_.jpg" , id : 5},
    {title : "Zapatillas Nike revolution 6 NN para mujer", price : 93.80, description : "Los zapatos Nike son la base de la afición a coleccionar zapatillas tal y como la conocemos hoy en día.", img :"https://m.media-amazon.com/images/I/81Mozj1u5GL._AC_UL1500_.jpg" , id : 6},
    {title : "Zapatillas Nike revolution 6 NN para mujer", price : 93.80, description : "Los zapatos Nike son la base de la afición a coleccionar zapatillas tal y como la conocemos hoy en día.", img :"https://m.media-amazon.com/images/I/81Mozj1u5GL._AC_UL1500_.jpg" , id : 7},
    {title : "Zapatillas Nike revolution 6 NN para mujer", price : 93.80, description : "Los zapatos Nike son la base de la afición a coleccionar zapatillas tal y como la conocemos hoy en día.", img :"https://m.media-amazon.com/images/I/81Mozj1u5GL._AC_UL1500_.jpg" , id : 8},
    {title : "Zapatillas Nike revolution 6 NN para mujer", price : 93.80, description : "Los zapatos Nike son la base de la afición a coleccionar zapatillas tal y como la conocemos hoy en día.", img :"https://m.media-amazon.com/images/I/81Mozj1u5GL._AC_UL1500_.jpg" , id : 9},
    {title : "Zapatillas Nike revolution 6 NN para mujer", price : 93.80, description : "Los zapatos Nike son la base de la afición a coleccionar zapatillas tal y como la conocemos hoy en día.", img :"https://m.media-amazon.com/images/I/81Mozj1u5GL._AC_UL1500_.jpg" , id : 10},
    {title : "Zapatillas Nike revolution 6 NN para mujer", price : 93.80, description : "Los zapatos Nike son la base de la afición a coleccionar zapatillas tal y como la conocemos hoy en día.", img :"https://m.media-amazon.com/images/I/81Mozj1u5GL._AC_UL1500_.jpg" , id : 11},
    {title : "Zapatillas Nike revolution 6 NN para mujer", price : 93.80, description : "Los zapatos Nike son la base de la afición a coleccionar zapatillas tal y como la conocemos hoy en día.", img :"https://m.media-amazon.com/images/I/81Mozj1u5GL._AC_UL1500_.jpg" , id : 12},
    {title : "Zapatillas Nike revolution 6 NN para mujer", price : 93.80, description : "Los zapatos Nike son la base de la afición a coleccionar zapatillas tal y como la conocemos hoy en día.", img :"https://m.media-amazon.com/images/I/81Mozj1u5GL._AC_UL1500_.jpg" , id : 13},
    {title : "Zapatillas Nike revolution 6 NN para mujer", price : 93.80, description : "Los zapatos Nike son la base de la afición a coleccionar zapatillas tal y como la conocemos hoy en día.", img :"https://m.media-amazon.com/images/I/81Mozj1u5GL._AC_UL1500_.jpg" , id : 14},
    {title : "Zapatillas Nike revolution 6 NN para mujer", price : 93.80, description : "Los zapatos Nike son la base de la afición a coleccionar zapatillas tal y como la conocemos hoy en día.", img :"https://m.media-amazon.com/images/I/81Mozj1u5GL._AC_UL1500_.jpg" , id : 15},
];
// esta variable es para el stato del carrito
let cart_status =document.querySelector(".cart_status");
(()=>{
    const containerCards = document.querySelector('.products--cards-container');
    let view = stock.map(item => {return ` <article class="product--card">
    <img src="${item.img}" alt="imagen de ${item.title}" loading="lazy">
    <h3>${item.title}</h3>
    <p>${item.price}$ </p>
    <button onclick="addToCart(${item.id})">Añadir al carrito</button>
    <details>
      <summary>
        detalles del produto
      </summary>
      <p>${item.description}</p>
    </details>
   
  </article> `}).join(" ");
  containerCards.innerHTML = view;
})()

// funcion que nos servira para añadir productos al carrito y almacenar datos en localstorage
function addToCart(id){

    let data = stock.find(item=>{ return item.id===id});
    if(data){

        carrito.push(data);

    }

    saveData()
    cart_status.innerHTML=carrito.length;
    console.log(carrito);
}

// este carrito servira para guardar datos al local storage
let carrito = [];

// funcion para guardar el local storage
function saveData(){

localStorage.setItem("carrito", JSON.stringify(carrito));

}