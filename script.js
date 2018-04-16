/*
=========================================
       open student feature popup
=========================================
*/


//set event and function

$('.portrait').on('click', function() {
    var text = $(this).attr('id');
  
//adjust classes when user clicks portrait without closing popup  
    $('.student-text').removeClass('visible');
    $('.student-text').addClass('hidden');
  
//get id for clicked portrait, make visible appropriate text div
  
    if (text == 'first-story') {
      $('.student-text#story-one-text').removeClass('hidden');
      $('.student-text#story-one-text').addClass('visible');
    } else if (text == 'second-story'){
      $('.student-text#story-two-text').removeClass('hidden');
      $('.student-text#story-two-text').addClass('visible');    
    } else {
      $('.student-text#story-three-text').removeClass('hidden');
      $('.student-text#story-three-text').addClass('visible'); 
    }
    
  });

/*
=========================================
      close student feature popup
=========================================
*/

//set event to close icon and remove class visible, add class hidden

$('.close').on('click', function () {
  $('.student-text').removeClass('visible');
  $('.student-text').addClass('hidden');

});