const casa = document.getElementById('navbar');

document.addEventListener('scroll',() => {
  var  scroll_position = window.scrollY;
  if(scroll_position > 100){
    navbar.style.backgroundColor= '#333';
  } else{
    navbar.style.backgroundColor= '#003349';
  }
   
});