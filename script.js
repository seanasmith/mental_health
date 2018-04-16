 $('.portrait').on('click', function() {
    var text = $(this).attr('id');
    $('.student-text').removeClass('visible');
    
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

$(.close)