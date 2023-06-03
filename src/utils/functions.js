let navigation = document.querySelector('.navigation');
let closebackground = document.querySelector('.nav-close-out');
let cartSlideBar = document.querySelector('.nav-slide-cart');
function showSlideBar(){
  
  if(cartSlideBar.classList.contains('show')){
    
  cartSlideBar.classList.toggle('show');
  }else{
  closebackground.classList.toggle('show');
  }
  navigation.classList.toggle('show');
}

function showCart(){
  if(navigation.classList.contains('show')){

    navigation.classList.toggle('show');
  }else{

  closebackground.classList.toggle('show');
  }
  cartSlideBar.classList.toggle('show');
}

function hiddenSlideBars(){
  navigation.classList.remove('show');
  cartSlideBar.classList.remove('show');
  closebackground.classList.remove('show');
}