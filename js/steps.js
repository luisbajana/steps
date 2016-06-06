$(document).ready(function(){

  init_step();
  auto_width();

  $(window).resize(function(){
    auto_width();
  });

  $(document).on('click','.steps-next',function(){
      next_step();
  });

  $(document).on('click','.steps-back',function(){
      previous_step();
  });

});


function init_step(){
  $.each( $('.step') , function( index , value ){

    if( $(this).hasClass('step-active') ){
      $(this).prev().addClass('active-bar');
    }

  } );

}


function next_step(){

  if( $('.step-active').length > 0 ){

    $('.step-active').last().next().addClass('active-bar');
    $('.step-active').last().next().next().addClass('step-active');


    if( $('.step-active').last().next().next().length === 0 ){
      $('.step-active').last().next().addClass('active-bar');
    }

  }else{

    $('.step').first().addClass('step-active');
    $('.step').first().prev().addClass('active-bar');

  }


}

function previous_step(){

  var step = $('.step-active').last();

  var left_bar = step.prev();
  var right_bar = step.next();

  left_bar.removeClass('active-bar');
  right_bar.removeClass('active-bar');
  step.removeClass('step-active');

}


function auto_width(){

  var container_width = parseFloat($('.steps-container').css('width'));
  var number_of_bars = parseFloat($('.step-bar').length);
  var step_width = parseFloat($('.step').first().css('width'));
  var total_bar_width = (container_width / number_of_bars) - step_width;

  $('.steps-container .step-bar').css( "width" , total_bar_width + "px"  );

}
