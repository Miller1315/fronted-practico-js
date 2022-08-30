const menuEmail = document.querySelector(".navbar-email");
const desktopmenu =document.querySelector(".desktop-menu");
const menuHamicon =document.querySelector(".menu");
const mobileMenu =document.querySelector(".mobile-menu");
const menuCarritoIcon =document.querySelector(".navbar-shopping-cart");
const aside =document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamicon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu(){

    const isAsideClosed =aside.classList.contains("inactive");

   if(!isAsideClosed){
    aside.classList.add("inactive");   
   }

    desktopmenu.classList.toggle("inactive");
    
}

function toggleMobileMenu(){
   const isAsideClosed =aside.classList.contains("inactive");

   if(!isAsideClosed){
    aside.classList.add("inactive");   
   }

   mobileMenu.classList.toggle("inactive");

}

function toggleCarritoAside(){

    const isMobileMenuclosed=mobileMenu.classList.contains ("inactive");


    if (!isMobileMenuclosed){
        mobileMenu.classList.add("inactive")
    }
    
    aside.classList.toggle("inactive")

}
