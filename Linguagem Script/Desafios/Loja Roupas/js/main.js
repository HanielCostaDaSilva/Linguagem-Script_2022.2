import products from '../data/products.js';

const catalog = document.querySelector('.catalog');

function Insertclothes(clothes) {
  const view = 
  `<li class="product-item">
    <div class="product-box-image">
      <img src='${clothes.image}'class="product-image">
    </div>
    <p class="product-name"> ${clothes.name}</p>
    <div class="product-price">
      <p class="product-cost">
        <span class="actual-price">${clothes.actual_price}</span>
        <span class="installments">${clothes.installments}</span>
      </p>
    </div>
    <ul class="product-sizes">
      ${clothes.sizes.map((size) => AvailableSize(size))}
    </ul>
  </li>`;

  catalog.insertAdjacentHTML('beforebegin',view);
}

function AvailableSize(size){
  let classe=''
  
  if (size.available == false){
    classe='unavailable'
  }
  else{
    classe='available'
  }

  const view=` 
  <li>
  <a href="#" class="size ${classe}">${size.size}</a>
  </li>
  `
  return view
}

function loadclothes(products) {
  products.map((clothes) => Insertclothes(clothes));
}
loadclothes(products);