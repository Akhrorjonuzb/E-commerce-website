
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");



      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

          // js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

      // js code to toggle search box
      searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      //   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


// Selecting elements

const iconMinus=document.getElementById('icon-minus');
const iconPlus=document.getElementById('icon-plus');
const number=document.getElementById('number');
const button=document.querySelector('.cart-button');
const price=document.querySelector('#price');
const productImages=document.querySelectorAll('.product-images');
const mainImg=document.querySelector('#main-img');
const iconCart=document.querySelector('.cart-box');
const imageCart=document.querySelector('.cart-div')
const amount=document.querySelector('#amount');
const totalValue=document.querySelector('#totalValue');

function imageDisplay(){

  productImages.forEach(function(event){
    event.addEventListener('click', function(){
      let imageTarget=event.getAttribute('src')
      if(event.classList.contains('opacity')){
event.classList.remove('opacity')
      }
      else{
        event.classList.add('opacity')
      }
      // imageTarget.classList.add('opacity')
      mainImg.setAttribute('src', imageTarget)
      
    })
    
        })

      }
      imageDisplay()


imageCart.addEventListener('click', function(){
  // iconCart.classList.toggle('cart-box')
  if(iconCart.classList.contains('cart-box')){
    iconCart.classList.remove('cart-box');
    iconCart.style.display='none';
  }
  else{
    iconCart.classList.add('cart-box')
    iconCart.style.display='block';
  }
  
})
// Creating element by Javascript
const cartHtml=document.createElement('h3');
    cartHtml.textContent='Cart';
    cartHtml.style.textAlign='center';
    cartHtml.classList.add('h3-style')
    cartHtml.style.color='black'
    // console.log(cartHtml)
    const data=iconCart.append(cartHtml)
    console.log(data)
    const lineDiv=document.createElement('div');
    lineDiv.style.height='1px';
    
    lineDiv.style.backgroundColor='#FF5F00';
    iconCart.style.backgroundColor='white';
// Three div
    iconCart.appendChild(lineDiv)
    
 
let zero=1;
 
// Increment Function
function increment() {

iconPlus.addEventListener('click', (e)=>{
  
  zero++;
  number.innerHTML=zero;
  
  amount.innerHTML=zero;
  
  let multiply=125.00 * zero;
  

totalValue.innerHTML= multiply + "." + "00" + "$";
  

})

}
increment()

// Decrement Function
function decrement(){
iconMinus.addEventListener('click', (e)=>{
  // let result2=e.target;
  
  zero--;
  if(zero <= 0){
    zero=1;
  }
  else{
    number.innerHTML=zero;
  }
  // number.innerHTML=zero;
  
amount.innerHTML=zero;

let decrease=125.00 * zero;

totalValue.innerHTML=decrease + "." + "00" + "$";

  
  

})
}
decrement();

const roundNumber=document.querySelector('.round-number');


button.addEventListener('click', function(event){
  alert("You have added to " + zero  + " new item to the cart " )
  // imageCart.classList.add('addedCart');
  let count = zero;
// let result= imageCart.classList.add('addedCart')
  let data= roundNumber.innerHTML=zero;
  roundNumber.style.border='0px solid #FF5F00'
  roundNumber.style.backgroundColor='#FF5F00'
  data.style.color='red'
})


/* Creating added cart item */

const checkOut=document.querySelector('.checkout');
checkOut.addEventListener('click', (e)=>{
  alert('Thank you for your purchase')
  const reload= window.location.reload();
  // roundNumber.style.visibility='hidden'
})

