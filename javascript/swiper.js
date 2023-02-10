const swiper_text = new Swiper(".swiper_text", {
  loop: true, 
})
const swiper_main = new Swiper('.swiper_main', {
  loop: true,                         
  pagination: {
      el: '.swiper-pagination',
  },                  
  navigation: {                       
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  thumbs: {                           
      swiper: swiper_text,  
    
  },                                  
})