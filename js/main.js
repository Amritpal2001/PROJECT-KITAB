let carts = document.querySelectorAll('a.add-cart');
let products = [
    {
        name :'Rani Tatt@',
        tag : 'Rani Tatt@',
        price: 250,
        inCart : 0
    },
    {
        name :'Rani Tatt-2',
        tag : 'Rani Tatt-2',
        price: 2500,
        inCart : 0   
    }
]
for (let i=0;i<carts.length;i++){
   
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);


    })

}
function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');

    setItems(product);

    productNumbers = parseInt(productNumbers);
    if(productNumbers ){
    localStorage.setItem('cartNumbers',productNumbers+1);
    console.log("in pn");

    //document.querySelector('.nav_item span').textContent=productNumbers+1;
    }
     else{
        localStorage.setItem('cartNumbers',1);
      //  document.querySelector('.nav__item span').textContent=1; not working 

    }
 
      

}
 
function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log("in");

    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems ={
                ...cartItems,
                [product.tag]:product
            }}
            cartItems[product.tag].inCart +=1;
        }
    else{
            product.inCart =1;
            cartItems ={
                [product.tag]:product
            }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product){
    let cartCost = localStorage.getItem("totalCost");
    //console.log(cartCost);
    if(cartCost!=null){
        
        cartCost=parseInt(cartCost);

        localStorage.setItem("totalCost", cartCost+product.price);
    }
    else{
        localStorage.setItem("totalCost", product.price);
    }

    
}
