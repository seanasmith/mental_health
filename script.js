/*
=========================================
       open student feature popup
=========================================
*/


//set event and function

$('.portrait').on('click', function() {
    var text = $(this).attr('id');
    console.log(text);
  
//get id for clicked portrait, make visible appropriate text div
  
    if (text == 'first-story') {
      $('.student-text#story-one-text').fadeTo(400,1);
    } else if (text == 'second-story'){
      $('.student-text#story-two-text').fadeTo(400,1);   
    } else {
      $('.student-text#story-three-text').fadeTo(400,1);
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