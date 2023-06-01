let data = [
  {
    id : 1,
    title : "POLO ROJO",
    img : "https://www.pngmart.com/files/3/Polo-Shirt-PNG-Image.png",
    category : "shirt",
    price : 10.0,
    cant : 4,
    sizes : ["XS", "S", "M", "L", "XL", "XXL"],
    colors : ["blue", "red", "black", "white"],
  },
  {
    id : 2,
    title : "POLO VERDE",
    img : "https://www.pngmart.com/files/3/Polo-Shirt-PNG-File.png",
    category : "shirt",
    price : 10.0,
    cant : 4,
    sizes : ["XS", "S", "M", "L", "XL", "XXL"],
    colors : ["blue", "red", "black", "white", "green"],
  },
  {
    id : 3,
    title : "SACO GRIS",
    img : "https://pepeganga.vteximg.com.br/arquivos/ids/698004-500-625/2M063210-125307384-1.png?v=637808001580470000",
    category : "shirt",
    price : 20.0,
    cant : 4,
    sizes : ["XS", "S", "M", "L", "XL", "XXL"],
    colors : ["blue", "red", "black", "gray"],
  },
  {
    id : 4,
    title : "SACO MULTICOLOR",
    img : "https://pepeganga.vteximg.com.br/arquivos/ids/720247-500-625/3M708110-125529330-1.png?v=637847897391800000",
    category : "shirt",
    price : 15.0,
    cant : 4,
    sizes : ["XS", "S", "M", "L", "XL", "XXL"],
    colors : ["blue", "red", "black", "white"],
  },
  {
    id : 5,
    title : "SACO AZUL CON DINOSAURIOS",
    img : "https://pepeganga.vteximg.com.br/arquivos/ids/711413-500-625/2N059210-125532545-1.png?v=637838217494800000",
    category : "shirt",
    price : 20.0,
    cant : 4,
    sizes : ["XS", "S", "M", "L", "XL", "XXL"],
    colors : ["blue", "red", "black", "white"],
  },
  {
    id : 6,
    title : "CAMISETA AZUL AEROPOSTALE",
    img : "https://aeropostale.vteximg.com.br/arquivos/ids/160205-640-740/11170832_2977_1.png?v=638138920787200000",
    category : "shirt",
    price : 10.0,
    cant : 6,
    sizes : ["XS", "S", "M", "L", "XL", "XXL"],
    colors : ["blue", "red", "black", "white"],
  },
  {
    id : 7,
    title : "CAMISETA AZUL AEROUSA",
    img : "https://aeropostale.vteximg.com.br/arquivos/ids/160171-1000-1160/11136251_7978_1.png?v=638138180558470000",
    category : "shirt",
    price : 10.0,
    cant : 8,
    sizes : ["XS", "S", "M", "L", "XL", "XXL"],
    colors : ["blue", "red", "black", "white"],
  },
  {
    id : 8,
    title : "CAMISETA AEROPOSTALE AZUL ESTAMPADA",
    img : "https://aeropostale.vteximg.com.br/arquivos/ids/160271-1000-1160/11149493_2972_1.png?v=638140781259370000",
    category : "shirt",
    price : 13.0,
    cant : 2,
    sizes : ["XS", "S", "M", "L", "XL", "XXL"],
    colors : ["blue", "red", "black", "white"],
  },
  {
    id : 9,
    title : "BUZO NEGRO LOGO JAVA",
    img : "https://cdn.shopify.com/s/files/1/0537/9483/2552/products/Java_1024x1024.png?v=1614388452",
    category : "shirt",
    price : 20.0,
    cant : 10,
    sizes : ["XS", "S", "M", "L", "XL", "XXL"],
    colors : ["blue", "red", "black", "white"],
  },
  {
    id : 10,
    title : "BUZO ROJO BOREAL",
    img : "https://creatividadenmovimiento.com/wp-content/uploads/2021/05/foto-producto-chaqueta-2.png",
    category : "shirt",
    price : 20.0,
    cant : 3,
    sizes : ["XS", "S", "M", "L", "XL", "XXL"],
    colors : ["blue", "red", "black", "white"],
  },
];


(()=>{
// aqui voy obtengo la etiqueda donde voy a agregar la view de mis productos

let container = document.querySelector('.main--products-container');

//  aqui la logica para hacer el view del los products
let view = ``;
data.forEach(item=>{
  let card = `<article class="cards">
  <div class="image--container">
  <img src="${item.img}" alt="" class="img__prod" loading="easy">
  <div class="cards__buttons-container">
            <button>Agregar al carrito</button><button>detalles</button>
          </div>  
  </div>
  <div class="product-props">
    <h3>${item.title}</h3>
    <p class="price">$${item.price}</p>
    <p class="category light">${item.category}</p>
    <p class="stock light">disponibles: ${item.cant}</p>
    <p class="title">Medidas</p>
    <p class="sizes light">`;

    for (const size of item.sizes) {
       card +=`<span >${size}, </span>`;
      }

    card += `</p>
    <p class="title">Colores</p>
    <div class="colors-container">`;

    for (const color of item.colors) {
      card += `<span class="cube-color ${color}"></span>`
    }

    card += `</div> </div> </article>`;
  view += card
});
container.innerHTML = view;
})()
