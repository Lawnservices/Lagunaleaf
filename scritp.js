const casa = document.getElementById('navbar');
const casas = document.getElementById('verde');

document.addEventListener('scroll',() => {
  var  scroll_position = window.scrollY;
  if(scroll_position > 100){
    navbar.style.backgroundColor= '#333';
    verde.style.color = 'green';
    verde.style.marginTop = '100px';
  } else{
    navbar.style.backgroundColor= '#003349';
    verde.style.color = '#000';
     verde.style.marginTop = '24px';
  }
   
});