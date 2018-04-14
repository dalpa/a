/* product */
var slideIndex = 0;
carousel();

function carousel(){
   var i ;
   var slides  = document.getElementsClassName('new_item');
   for( i = 0; i < slides.length; i++){
     slides[i].style.display = "none";
   }
   slideIndex++;
   if(slideIndex > slides.length){ slideIndex = 1;}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000);
}
