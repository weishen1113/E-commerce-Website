
//let carts = document.getElementsByClassName('add-cart')[0];
let cartInt = JSON.parse(localStorage.getItem('cart'));
cartInt.forEach((e)=>{
   products = [
    {
      name: e.name,
      tag: e.name,
      price: e.price,
      inCart: 1,
      img: e.img
      }
  ]
})
function listofall() {
  var span = document.querySelector('#span');
  sum = JSON.parse(localStorage.getItem('productsInCart'));
  span.innerHTML = sum.length;
}
function set(index){
  let input = document.querySelector('.col-2 input');
  let producttoadd = [];
  if(localStorage.getItem('productsInCart') == null){
    producttoadd = []
  }
  else{
    producttoadd = JSON.parse(localStorage.getItem('productsInCart'))
  }
  if(localStorage.getItem('pricelist') == null) price = [];
  else price = JSON.parse(localStorage.getItem('pricelist'));
  
  if(price.includes(index.price)){
        if (input.value == 1) {
          price.push(index.price);
          localStorage.setItem('pricelist', JSON.stringify(price))
        }
        else {
          for (let i = 1; i <= input.value; i++) {
            price.push(index.price)
          }
          localStorage.setItem('pricelist', JSON.stringify(price))
        }
  }
  else{
    if(input.value == 1){
  producttoadd.push({
     name: index.name,
      tag: index.name,
      price: index.price,
      inCart: 1,
      img: index.img
  })
  localStorage.setItem('productsInCart', JSON.stringify(producttoadd));
  price.push(index.price);
  localStorage.setItem('pricelist', JSON.stringify(price))
}
else{
  producttoadd.push({
    name: index.name,
    tag: index.name,
    price: index.price,
    inCart: 1,
    img: index.img
  })
  localStorage.setItem('productsInCart', JSON.stringify(producttoadd));
  for(let i =1; i<=input.value; i++){
    price.push(index.price)
  }
  localStorage.setItem('pricelist', JSON.stringify(price))
  }
 }
}
function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let cart = localStorage.getItem("totalCost");
    cart = JSON.parse(cart);

    let productContainer = document.querySelector('.products');
    
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        cartItems.forEach((item, index) => {
          if(localStorage.getItem('pricelist') != null){
          total = 0;
      JSON.parse(localStorage.getItem('pricelist')).forEach((v) => (v === item.price && total++));
          }
          else{
            total = 1
          }
    if(localStorage.getItem('pricelist') != null){
      cont = 0;
      allprodprice = JSON.parse(localStorage.getItem('pricelist'));
      allprodprice.forEach((e) => {
      cont += parseFloat(e)
      })
          }
          else{
            cont = 1
          }
        productContainer.innerHTML += 
            `<div class="product"><ion-icon id="${index}" name="close-circle" onclick="localStorage.removeItem(this.id); console.log('bobo');load('${item.price}','${index}')"></ion-icon><img src="${item.img}" />
                <span class="sm-hide">${item.name}</span>
            </div>
            <div class="price sm-hide">${item.price}</div>
            <div class="quantity">
                <ion-icon class="decrease " name="arrow-dropleft-circle" onclick="decrease('${item.price}','${item.inCart}','${total}')"></ion-icon>
                    <span>${total}</span>
                <ion-icon class="increase" name="arrow-dropright-circle" onclick="increase('${item.price}','${item.inCart}','${total}')"></ion-icon>   
            </div>
            <div class="total">RM${((total) * item.price).toFixed(2)}</div>`;
        });
        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">RM${cont.toFixed(2)}</h4>
            </div>`
    }
}

function increase(value,index,array){
  let allprice = JSON.parse(localStorage.getItem('pricelist'));
  allprice.push(value);
  localStorage.setItem('pricelist',JSON.stringify(allprice));
  displayCart();
  listofall();
}
function decrease(value,index,array){
  let allprice = JSON.parse(localStorage.getItem('pricelist'));
  allprice.splice(allprice.indexOf(value),1)
  localStorage.setItem('pricelist',JSON.stringify(allprice));
  displayCart();
  listofall()
}
function load(value,index){
  let allvalue = JSON.parse(localStorage.getItem('productsInCart'));
  console.log(allvalue);
  allvalue.splice(index,1);
  localStorage.setItem('productsInCart',JSON.stringify(allvalue));
  priceofall = JSON.parse(localStorage.getItem('pricelist'));
 priceofall = priceofall.filter((e) => {
    return e !== value
  })
  localStorage.setItem('pricelist',JSON.stringify(priceofall));
    listofall();
    displayCart();
}
listofall()
displayCart();
