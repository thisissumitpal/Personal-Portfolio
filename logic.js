burger = document.querySelector('.burger');
navbar=document.querySelector('.navbar');
logo = document.querySelector('.name');
rightNav = document.querySelector('.rightNavbar');

burger.addEventListener('click',()=>
{
    rightNav.classList.toggle('v-class');
   logo.classList.toggle('v-class');
   navbar.classList.toggle('h-nav');
});
