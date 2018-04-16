 $('.portrait').on('click', function() {
    console.log( $(this).attr('data-food') );
  });
  
  We can then use that element's attributes to do other things:
  
   $('.list-group-item').on('mouseover', function() {
    var food = $(this).attr('data-food');
    
    if (food == 'cauliflower') {
      $('p.first').text('CAULIFLOWER!');
    } else {
      $('p.first').text('Four score and seven years ago, our forefathers ...');    
    }
    
  });