

  $(document).ready (function () {

    $(".work").hover (function(){
        $(".work").fadeOut();
      }, 
     function(){$(".work").fadeIn();
    })

    $(".contact").hover (function(){
      $(".contact").fadeOut();
    }, 
   function(){$(".contact").fadeIn();
  })
  $(".about-me").hover (function(){
      $(".about-me").fadeOut();
    }, 
   function(){$(".about-me").fadeIn();
  })
})
