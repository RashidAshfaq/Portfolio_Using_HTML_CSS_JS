var swiper = new Swiper(".team-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: 
    {
      0:
      {
        slidesPerView: 1,
      },
      600:
      {
        slidesPerView: 2,
      },
      950:
      {
        slidesPerView: 3,
      },
    },
  });

  const text = document.querySelector('.text-3 span');
  const textload = () => 
  {
    setTimeout(()=> {
       text.textContent = "Youtuber";
    },0);
    setTimeout(()=> {
      text.textContent = "Wordpress Designer";
   },4000);
   setTimeout(()=> {
    text.textContent = "Web Designer";
 },8000);
 
  }
  textload();
  setInterval(textload,12000);
// about section text 
  const aboutText = document.querySelector('.right .text span');
  const textLoad = () => 
  {
    setTimeout(()=> {
      aboutText.textContent = "Youtuber";
    },0);
    setTimeout(()=> {
      aboutText.textContent = "Wordpress Developer";
   },4000);
   setTimeout(()=> {
    aboutText.textContent = "Web Designer";
 },8000);
 
  }
  textLoad();
  setInterval(textLoad,12000);