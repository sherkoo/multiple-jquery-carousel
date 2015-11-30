$(document).ready(function(){


  $('ul li ul').each(function(index){
    // Detect length of each slideshow
    var count = $(this).children().length;
    console.log('length = ' + count);

    // Detect ID of each UL
    var id = index;
    console.log('id = ' + index);

    // Set Width for each
    $(this).width(count * 200);

    // Detect current slide
    var current = 1;

    // Activate buttons
    $(this, index).prevAll('button').click(function(){
      var direction = $(this).data('dir');

      console.log(current);

      if (direction === 'next') {

        // Only let button work if it's not at the end
        if (current >= count) {
          // Reached the end
          alert('At the end');
          $(this).attr('disabled', 'disabled');
        } else {
          current++;
          $(this).nextAll('ul').animate({ 'margin-left': '-=200px' });
        }

      } else if(direction === 'prev'){

        if (current <= 1) {
          // At the beginning
          alert('cant go back anymore');
        } else {
          current--;
          $(this).nextAll('ul').animate({ 'margin-left': '+=200px' });
        }
      }
    });

  });


});
