
prod = [{
  name: 'Air Jordan 1 Mid Light Smoke Grey',
  price: '480',
  img: 'images/nike shoes 1 samples 4.png',
  img1: 'images/nike shoes 1 samples 1.jpg',
  img2: 'images/nike shoes 1 samples 2.jpg',
  img3: 'images/nike shoes 1 samples 3.jpg',
  inCart: 1
},
{
  name: 'Nike Jordan jumpdown T-shirt',
  price: '168.00',
  img : 'images/nike shirts samples 1.png',
  img1: 'images/nike shirts samples 2.png',
  img2: 'images/nike shirts samples 3.png',
  img3: 'images/nike shirts samples 4.png',
  inCart: 1
},
{
  name: 'Casio G-Shock Lunar Rainbow',
  price: '3283.57',
  img : 'images/gshock.png',
  inCart: 1
},
{
  name : 'Off white virgil Abloh Degrade',
  price: '345.69',
  img: '/images/off white shirt.png',
  inCart: 1
},
{
  name: 'Kenzo x H&M Embroidered Cap',
  price: '97.88',
  img: '/images/kenzo cap.png',
  inCart: 1
},
{
  name: "Adidas Ultraboost 'Solar Orange'",
  price: '400.80',
  img: '/images/adidas ultraboost shoes.png',
  inCart: 1
},
{
  name: 'Adidas Trefoil Tee',
  price: '72.00',
  img: 'images/Adidas Shirt 1.png',
  inCart: 1
},
{
  name: 'Supreme Bear With Gun Shirt',
  price: '61.37',
  img: '/images/supreme shirt.png',
  inCart: 1
},
{
  name: 'Justin Classic Ray Ban',
  price: '311.43',
  img: 'images/ray ban glasses.png',
  inCart: 1
},
{
  name: 'UA sportstyle Logo T-shirt',
  price: '97.00',
  img: 'images/Under Armour Shirt 1.png',
  inCart: 1
},
{
  name: 'UA changed Assert 9 shoes',
  price: '143.40',
  img: 'images/Under Armour Shoes 1.png',
  inCart: 1
},
{
  name: 'Puna Flyer Runner Mesh Shoes',
  price: '126.00',
  img: 'images/Puma Shoes 1.png',
  inCart: 1
}];
var $ = localStorage;
var j = JSON;
var d = document;
function toDetails(value) {
  value--;
  if(localStorage.getItem('Pro-detail') != null){
    localStorage.removeItem('Pro-detail')
    localStorage.setItem('Pro-detail', JSON.stringify(prod[value]));
    localStorage.removeItem('detail');
    localStorage.setItem('detail',value);
  }
  else{
   localStorage.setItem('Pro-detail', JSON.stringify(prod[value]))
     localStorage.setItem('detail',value);
  }
  window.location = "product-details.html"
}
/*if(document.getElementById('set')){
  display()
}
else{
  document.write('wait a bit')
}*/
//document.getElementById('set').innerHTML="77";
if(localStorage.getItem('detail') != null){
  display()
}
else{
  document.write('hello')
}
function display(){
let pos = $.getItem('detail');

if(localStorage.getItem('cart') == null){
  carts = []
}
else{
  carts = JSON.parse(localStorage.getItem('cart'))
}
carts.push({
  img: prod[pos].img,
  price: prod[pos].price,
  name: prod[pos].name
})
localStorage.setItem('cart', JSON.stringify(carts));
/*if(localStorage.getItem('pricelist') == null){
   pricelist = [];
}
else{
  pricelist = JSON.parse(localStorage.getItem('pricelist'));
}
pricelist.push(prod[pos].price);
localStorage.setItem('pricelist', JSON.stringify(pricelist));*/
    document.getElementById('body-div').innerHTML=`
<!--------------single-product1--------------->
<div class="small-container single-product">
    <div class="row">
        <div class="col-2">
            <img id="mainImage" src="${prod[pos].img}" width="100%" id="ProductImg" alt="">
            <div class="small-img-row">
               <div class="small-img-col">
                   <img id="image1" src="${prod[pos].img}" class="small-img" width="100%" onclick="window.open(this.src)" onmouseover="mouseOver1(this.src )" onmouseout="mouseOut1()" >
               </div>
               <div class="small-img-col">
                   <img id="image2" src="${prod[pos].img1}" class="small-img" width="100%" onclick="window.open(this.src)"  onmouseover="mouseOver1(this.src)" onmouseout="mouseOut1()" >
               </div>
               <div class="small-img-col">
                   <img id="image3" src="${prod[pos].img2}" class="small-img" width="100%" onclick="window.open(this.src)" onmouseover="mouseOver1(this.src)" onmouseout="mouseOut1()" >
               </div>
               <div class="small-img-col">
                   <img id="image4" src="${prod[pos].img3}" class="small-img" width="100%" onclick="window.open(this.src)" onmouseover="mouseOver1(this.src)" onmouseout="mouseOut1()" >
               </div>
    
            </div>
                    </div>
        <div class="col-2">
            <p>Home / Clothes</p>
            <h1>${prod[pos].name}</h1>
            <h4>RM480.00</h4>
             <select>
               <option>Select Size</option>
               <option>UK-14</option>
               <option>UK-13</option>
               <option>UK-12</option>
               <option>UK-11</option>
               <option>UK-10</option>
               <option>UK-9</option>
               <option>UK-8</option>
           </select>
            
            <input type="number" value="1">
            
            <a onclick="set(products[0]); listofall()" class="add-cart cart1" href="#">Add Cart</a>
            <input type="hidden" value="20" />
            
            <h3>PRODUCT DETAILS <i class="fa fa-indent"></i></h3>
            <br>
            <p>Give yourself a new iconic look. It has precision design that give wearer good grip and balance. It is stiched with new innovative cutting edge materials that will cushion every impact made adding comfort and boosting performance.</p>
        </div>
    </div>
</div>
            `
  
       
           
          }


function listofall(){
var span = document.querySelector('#span');
sum = JSON.parse(localStorage.getItem('productsInCart'));
span.innerHTML = sum.length;
}
 
listofall();
function mouseOver1(data) {
 document.getElementById("mainImage").src=data; 
 /* WeiShen Hong
 Uncomment the up line document.getelement ... .src = data and comment the below monkey image line.
 And change product different images
 */
//document.getElementById("mainImage").src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h6";
}

function mouseOut1() {
  var position = null;
  position = $.getItem('detail');
 document.getElementById("mainImage").src=prod[position].img;
}

