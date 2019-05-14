var animation = bodymovin.loadAnimation({
  container: document.getElementById('pmbaAnim'),
  renderer : 'svg',
  loop     : false,
  autoplay : true,
  path     : '../anim/pmba.json'
});

$('#navbarBrandAnim').mouseenter(() => {
  animation.setDirection(-1);
  animation.play(); 
});

$('#navbarBrandAnim').mouseleave(() => {
  animation.setDirection(1);
  animation.play(); 
});

// document.getElementById('pmbaAnim').addEventListener('mouseout', function() { 
//   animation.setDirection(1);
//   animation.play(); 
// });

$(window).on('scroll', () => {
  var scrollTop = $(this).scrollTop();
  var elementTop = $("#aboutMe").position().top; 
  var elementBottom = elementTop + $("#aboutMe").outerHeight(true);
  var visible = false;
  
  if ((scrollTop >= elementTop && scrollTop <= elementBottom) && !visible) {
    $(".progress-count").each((i, elem) => {
      $(elem).animate({
        "width": $(elem).attr('progress')+"%"
      }, {
        duration: 1000
      });
    });

    $(".progress-indicator").each((i, elem) => {
      $(elem).animate({
        "opacity": "1"
      }, {
        duration: 1000
      });
    });

    visible = true;
  } 

});