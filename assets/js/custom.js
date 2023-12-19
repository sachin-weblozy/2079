/*-----------------------------------------------------------------------------------

    Template Name: viszion

    Note: This is Custom Js file

-----------------------------------------------------------------------------------

    [Table of contents]
    
      01. hero-one-slider
      02. clientstwo-slider
      03. clients-slider
      04. mobile-nav
      05. slider-for
      06. search-box-outer
      07. countTo
      08. accordion-item
      09. progress
      10. zoom-slider
      11. scrollTop
      12. overlay

-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($){

// automated-analysis

  $(window).resize(function() {
    viszion_slider();
  } );

  viszion_slider();

  function viszion_slider() {
    $windowWidth = $(window).width();
    // Recent Work slider
    if ($windowWidth >= 993) {
      $('.automated-analysis .check-some').removeClass('active');
       $("body").on('mouseover', '.automated-analysis .check-some', function(){
          $('.automated-analysis .check-some').removeClass('action');
          $(this).addClass('action');
       } );
    } else {
      $('.automated-analysis .check-some').addClass('active');
    }
  }

    if ( $.isFunction($.fn.owlCarousel) ) {
/* 01. hero-one-slider */
    $('.hero-one-slider').owlCarousel({
            loop:true,
            dot:true,
            nav:true,
            autoplay:true,
            items:1,
            autoplayTimeout:3000,
            navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
      })
/* 02. clientstwo-slider */
    $('.clientstwo-slider').owlCarousel({
            loop:true,
            dot:false,
            nav:true,
            animateOut: 'fadeOut',
            autoplay:true,
            items:1,
            autoplayTimeout:3000,
            navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
      })
/* 03. clients-slider */
    $('.clients-slider').owlCarousel({
            loop:true,
            dot:false,
            nav:false,
            autoplay:true,
            autoplayTimeout:3000,
            responsive:{
                0:{
                    items:1
                },
                450:{
                    items:2
                },
                768:{
                    items:3
                },
                1200:{
                    items:5
                },
              }
            })
        }
/* 04. mobile-nav */
jQuery('.mobile-nav .menu-item-has-children').on('click', function($) {

          jQuery(this).toggleClass('active');

        }); 

        jQuery('#nav-icon4').click(function($){

            jQuery('#mobile-nav').toggleClass('open');

        });

        jQuery('#res-cross').click(function($){

           jQuery('#mobile-nav').removeClass('open');

        });


        jQuery('.bar-menu').click(function($){

            jQuery('#mobile-nav').toggleClass('open');
            jQuery('#mobile-nav').toggleClass('hmburger-menu');
            jQuery('#mobile-nav').show();

        });

        jQuery('#res-cross').click(function($){

           jQuery('#mobile-nav').removeClass('open');

        });
/* 05. slider-for */
        if ( $.isFunction($.fn.slick) ) {
              $('.slider-for').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  fade: true,
                  asNavFor: '.slider-nav'
                });
                $('.slider-nav').slick({
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  asNavFor: '.slider-for',
                  dots: true,
                  centerMode: true,
                  arrows: false,
                  centerPadding: '0px',
                  focusOnSelect: true,
                  responsive: [
                            {
                              breakpoint: 1200,
                              settings: {
                                slidesToShow: 3,
                              }
                            },
                            {
                              breakpoint: 576,
                              settings: {
                                slidesToShow: 1,
                              }
                            },
                            {
                              breakpoint: 10,
                              settings: {
                                slidesToShow: 1,
                              }
                            }
                          ]
                });
        }
});

/* 06. search-box-outer */
    if($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }


/* 07. countTo */ 
  $.fn.countTo = function(options) {
    options = options || {};

    return $(this).each(function() {
      
      var settings = $.extend(
        {},
        $.fn.countTo.defaults,
        {
          from: $(this).data("from"),
          to: $(this).data("to"),
          speed: $(this).data("speed"),
          refreshInterval: $(this).data("refresh-interval"),
          decimals: $(this).data("decimals")
        },
        options
      );
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data("countTo") || {};

      $self.data("countTo", data);

      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof settings.onUpdate === "function") {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData("countTo");
          clearInterval(data.interval);
          value = settings.to;

          if (typeof settings.onComplete === "function") {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0, // the number the element should start at
    to: 0, // the number the element should end at
    speed: 1000, // how long it should take to count between the target numbers
    refreshInterval: 100, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    formatter: formatter, // handler for formatting the value before rendering
    onUpdate: null, // callback method for every time the element is updated
    onComplete: null // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }

jQuery(function($) {
  // custom formatting example
  $(".count-number").data("countToOptions", {
    formatter: function(value, options) {
      return value
        .toFixed(options.decimals)
        .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }
  });

  /* start all the timers */
  $(".timer").each(count);

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data("countToOptions") || {});
    $this.countTo(options);
  }
});

// count end


/* 08. accordion-item */

    $('.accordion-item .heading').on('click', function(e) {
        e.preventDefault();

        if($(this).closest('.accordion-item').hasClass('active')) {
            $('.accordion-item').removeClass('active');
        } else {
            $('.accordion-item').removeClass('active');

            $(this).closest('.accordion-item').addClass('active');
        }
        var $content = $(this).next();
        $content.slideToggle(100);
        $('.accordion-item .content').not($content).slideUp('fast');
    });

// end

/* 09. progress */
var bars = document.querySelectorAll('.meter > span');

setInterval(function(){
  bars.forEach(function(bar){
    var getWidth = parseFloat(bar.dataset.progress);
    
    for(var i = 0; i < getWidth; i++) {
      bar.style.width = i + '%';
    }
  });
}, 700);
// progress end


/* 10. zoom-slider */
var $owl = $('.zoom-slider');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); 
});
if ( $.isFunction($.fn.owlCarousel) ) {
$owl.owlCarousel({
  center: true,
  loop: true,
  margin:0,
  autoplay:true,
  autoplayTimeout:3000,
  dots:true,
  responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1200:{
            items:3
        }
    }
});
}

/* 11. scrollTop */

function inVisible(element) {
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate({
      countNum: maxval
    }, {
      duration: 5000,
      easing: 'linear',
      step: function() {
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function() {
        element.html(this.countNum + html);
      }
    });
  }

}

/* 12. overlay */
        var boxWidth = $("#lightbox").width();
                $(".white_content").animate({
                    opacity: 0,
                    width:0,
                    left : -10000
            });
            $("#close").on('click',function(){ 
            $(".white_content").animate({
                opacity: 0,
                width:0,
                left : -1000
            });
            });
            $("#show").on('click',function(){ 
            $(".white_content").animate({
                opacity: 1,
                width:500,
                left :0
            });
            $("#overlay").animate({
                opacity: 1,
                width:boxWidth,
                left :0
            });

        });


$(function() {
  $(window).scroll(function() {
    $("h2[data-max]").each(function() {
      inVisible($(this));
    });
  })
});
 let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#FF005C ${scrollValue}%, #fff ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// end

