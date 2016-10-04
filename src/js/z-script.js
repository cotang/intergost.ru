// window.$ = window.jQuery =  require('jquery');
// window.slick =              require('./vendor/bower/slick');


jQuery(document).ready(function($){  

  /* Map - stop scrolling */
  var iFrameWrapper = $('.contacts-section__map');
  var iFrame = $('.contacts-section__map iframe');

  $(iFrame).addClass('scrolloff');                // set the mouse events to none when doc is ready  
  $(iFrameWrapper).on("mouseup",function(){          // lock it when mouse up
      $(iFrame).addClass('scrolloff'); 
      //somehow the mouseup event doesn't get call...
  });
  $(iFrameWrapper).on("mousedown",function(){        // when mouse down, set the mouse events free
      $(iFrame).removeClass('scrolloff');
  });
  $(iFrame).mouseleave(function () {              // becuase the mouse up doesn't work... 
      $(iFrame).addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
                                                  // or you can do it on some other event
  });


  // $('.how-we-work').onScreen({  
  //   $(this).find('.how-we-work__item:after').animate({right, 0}, 3000);
  // });


  /* Открывание всех логотипов клиентов */
  $('.clients__more').click(function(e){
    e.preventDefault();
    $(this).closest('.clients').find('.clients__item').css('display', 'block');
    $(this).hide();
  }); 

  /* Hamburger */
  $('.hamburger').click(function(e){
    e.preventDefault();
    $(this).closest('.nav--header').find('.nav__list').toggle();
  }); 

  /* Открывание меню поиска по клику на иконку */
  $('.nav__link--search').click(function(e){
    e.preventDefault();
    $('.search').toggle();
  });               

  /* галерея клиентов */
  $('.clients__gallery').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  /* галерея "рабочих будней" */
  $('.daily-working__gallery').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* галерея "отзывов" */
  $('.reviews-section__gallery').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0'
  });

  /* галерея "благодарственных писем" */
  $('.gratitude__gallery').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* плавный скролл наверх */
  $(window).scroll(function () {
      if ($(this).scrollTop() > 102) {
          $('.up').fadeIn();
      } else {
          $('.up').fadeOut();
      }
  });
  $('.up').click(function () {
      $("html, body").animate({
          scrollTop: 0
      }, 600);
      return false;
  });


  // Glossary letters
  $('.glossary__link').on('click', function(e){
    e.preventDefault();
    $(this).closest('.glossary__list').find('.glossary__link--active').removeClass('glossary__link--active');
    $(this).addClass('glossary__link--active');    
    var articlesList = $(this).closest('.glossary').find('.glossary-articles__list');
    articlesList.fadeOut();
    var letter = $(this).text();
    if (articlesList.data('letter') == letter) {
      articlesList.fadeIn();
    }
  });



  /* Gratitude in the modal window */
  $('.gratitude__slide').click( function(e){ 
    e.preventDefault(); 
    $('body').css({"overflow":"hidden"});   
    $('.overlay').show();
    $(this).find('.gratitude__modal').clone().appendTo($('.overlay'))
    .show()
    .animate({opacity: 1}, 200); 
  });
  /* Close the modal window */
  $('.overlay').click( function(){ 
    $('body').css({"overflow":"auto"});
    $(this).find('.gratitude__modal')
      .animate({opacity: 0}, 200,  
        function(){
          $(this).hide();
          $('.overlay').fadeOut(400);
        }
      );
  }); 

  /* Форма reviews по клику на "Оставить отзыв" */
  $('#btn-review-dropdown').click(function(e){
    e.preventDefault();
    $('.reviews__form').toggle();
  }); 

  // /* Form in the modal window */
  // $('.btn').click( function(e){
  //   e.preventDefault(); 
  //   var suffix = $(this).data("form"); 
  //   var overlay = $('.overlay');
  //   $('body').css({"overflow":"hidden"});   
  //   $(overlay).show();
  //   var formClass = '.form--' + suffix;
  //   $(overlay).find(formClass).fadeIn();    
  // });
  // /* Close the modal window */
  // $('.overlay').click( function(){ 
  //   $('body').css({"overflow":"auto"});
  //   $(this).find(".form").fadeOut();
  //   $('.overlay').fadeOut(400);
  // }); 

  // /* открывание ответа по ссылке "читать далее" */
  // $('.question__details').click(function(e) {
  //     e.preventDefault();
  //     $(this).closest('.question').find('.question__answer').toggle();      
  // });

});

