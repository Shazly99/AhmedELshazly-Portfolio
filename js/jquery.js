
// don't forget to register plugins
var tl = gsap.timeline({ default: 1, repeat: Infinity, repeatDelay: 2 });
tl.from(".table", {
  duration: 1,
  y: 600,
  ease: "power2.inOut"
})

  .from(".person", {
    duration: 1,
    x: 1000,
    ease: "power2.inOut"
  }, '-=.5')

  .from(".topics", {
    duration: 1,
    transform: "scale(0)",
    top: "60%",
    left: "50%",
    ease: "back.out(1.7)",
    stagger: 0.1
  })

$(function () {
  var $main = $("main");
  window.mySparticles = new Sparticles($main.get(0),
    {
      randomColorCount: 6,
      color: ['#8812FC', 'red', '#04fc43', '#fee800', '#DD0031'],
      speed: 8,
      minSize: 0,
      minSize: 0,
      parallax: 0,
      count: 50,
      rotate: false,
      direction: 0
    });
});

if (!$('#myCanvas').tagcanvas({
  textColour: '#08fdd8',
  outlineColour: 'transparent',
  outlineThickness: 1,
  maxSpeed: 0.05,
  depth: 0.75,
  reverse: true,
  wheelZoom: false, 
  activeCursor: "pointer",
 
  initial:[.3,.03],


})) {
  // TagCanvas failed to load
  $('#myCanvasContainer').hide();
}

// spinner
$('#loading').fadeOut(4000, function () {
  $('body').css('overflow', 'auto');
});


// slider project owl-carousel
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 3,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplaySpeed: 1000,
    loop: true,
    navSpeed: 1000,
    slideTransition: 'linear',
  });

 
// AOS animation on scroll 
AOS.init({
  duration: 3000,
  once: true,
});
document.addEventListener('aos:in', ({ detail }) => {
  console.log('animated in', detail);
});
}); 