/*
=========================================
       open student feature popup
=========================================
*/

//set event and function

$('.portrait').on('click', function() {
    var text = $(this).attr('id');
    $('.student-text').removeClass('reveal');
   
//get id for clicked portrait, make visible appropriate text div
  
    if (text == 'first-story') {
      $('.student-text#story-one-text').addClass('reveal');
    } else if (text == 'second-story'){
      $('.student-text#story-two-text').addClass('reveal');   
    } else {
      $('.student-text#story-three-text').addClass('reveal');
    }
  });

/*
=========================================
      close student feature popup
=========================================
*/

//set event to close icon and remove class visible, add class hidden

$('.close').on('click', function () {
  $('.student-text').removeClass('reveal');
});

/*
=========================================
      smooth scroll to section divs
=========================================
*/

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // clicked hash link should have value
    if (this.hash !== "") {
      // Prevent default link click behavior
      event.preventDefault();

      // get hash value
      var hash = this.hash;

      // animate for smooth scroll to clicked link
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        
      });
    } // End if
  });
});

/*
=========================================
        menu link hover expansion
=========================================
*/

//On mouseover, change a text to section title
$('nav ul li a').on('mouseover', function() {
  var newMenu = $(this).attr('title');
  $(this).text(newMenu);
});

//remove section title on mouseout
$('nav ul li a').on('mouseout', function() {
  var newMenu = $(this).attr('number');
  $(this).text(newMenu);
});

/*
=========================================
    menu color fix at backgound change
=========================================
*/

$(document).ready(function(){          
  var scroll_pos = 0;
  $(document).scroll(function() { 
    scroll_pos = $(this).scrollTop();
      
    if(scroll_pos < 3700) {
      $("nav ul li a").css('color', '#FFF');
    } else {
      $("nav ul li a").css('color', '#000');
    }
  });
});

/*
=========================================
      interaction experience: clicks
=========================================
*/

//start to first module
$('#start p').on('click', function () {
  $('#first-anx').toggleClass('hidden');
  $('#start').toggleClass('hidden');
});

//module 1 to module 2
$('#first-anx div.next').on('click', function () {
  $('#first-anx').toggleClass('hidden');
  $('#second-anx').toggleClass('hidden');
});

//2 to 3
$('#second-anx div.next').on('click', function () {
  $('#second-anx').toggleClass('hidden');
  $('#third-anx').toggleClass('hidden');
});

//3 to 4
$('#third-anx div.next').on('click', function () {
  $('#third-anx').toggleClass('hidden');
  $('#fourth-anx').toggleClass('hidden');
});

//4 to 5
$('#fourth-anx div.next').on('click', function () {
  $('#fourth-anx').toggleClass('hidden');
  $('#fifth-anx').toggleClass('hidden');
  $('#internal-monologue').addClass('down');
});

//5 to 6
$('#fifth-anx div.next').on('click', function () {
  $('#fifth-anx').toggleClass('hidden');
  $('#sixth-anx').toggleClass('hidden');
});

//6 to 7
$('#sixth-anx div.next').on('click', function () {
  $('#sixth-anx').toggleClass('hidden');
  $('#seventh-anx').toggleClass('hidden');
});

//7 to 8
$('#seventh-anx div.next').on('click', function () {
  $('#seventh-anx').toggleClass('hidden');
  $('#eighth-anx').toggleClass('hidden');
});

//8 to 1
$('#eighth-anx div.restart').on('click', function () {
  $('#eighth-anx').toggleClass('hidden');
  $('#first-anx').toggleClass('hidden');
  $('#internal-monologue').removeClass('down');
});



//clears monologue when arrow is clicked (otherwise, it remains till mouse is moved from spot where arrow was when hovered)
$('div.next').on('click', function () {
  $('div#internal-monologue p').text('');
});


/*
=========================================
      interaction experience: hovers
=========================================
*/

//set event for arrow hover
$('div.next-arrow').on('mouseover', function () { 
  //get id from the hovered arrow
  var monologue = $(this).attr('id');
  
  
  //set the script used in internal-monologue to match the hovered arrow
  
  
  
  if (monologue == 1) {
    
  //change internal-monologue text to 1
    $('div#internal-monologue').text("Remember that time senior year of high school when you got two hours of sleep on the spring trip and couldn't stop throwing up on the bus?");
    
  } else if (monologue == 2) {
    
  //change internal-monologue text to 2
    $('div#internal-monologue p').text('hey boi2');
    
  } else if (monologue == 3) {
    
  //change internal-monologue text to 3
    $('div#internal-monologue p').text('hey boi3');
    
  } else if (monologue == 4) {
    
  //change internal-monologue text to 4
    $('div#internal-monologue p').text('hey boi4');
    
  } else if (monologue == 5) {
    
  //change internal-monologue text to 5
    $('div#internal-monologue p').text('hey boi5');
    
  } else if (monologue == 6) {
    
  //change internal-monologue text to 6
    $('div#internal-monologue p').text('hey boi6');
    
  } else {
    
  //change internal-monologue text to 7
    $('div#internal-monologue p').text('hey boi7');
    
  };



});

$('div.restart').on('mouseover', function () { 
  //set internal-monologue to script that matches restart hover 
  $('div#internal-monologue p').text('hey boi8');


});


/*
==========================================================
      interaction experience: remove text on mouseout
==========================================================
*/

$('div.next-arrow').on('mouseout', function () { 

  $('div#internal-monologue p').text('');


});

$('div.restart').on('mouseout', function () { 
  
  $('div#internal-monologue p').text('');

});