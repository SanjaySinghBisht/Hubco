 
$(document).ready(function(){
	$('.common-height').each(function(){  
    var highestBox = 0;
    $('.fixed-height', this).each(function(){
        if($(this).height() > highestBox) 
           highestBox = $(this).height(); 
    });  
    $('.fixed-height',this).css("height",highestBox + 10);
  });
});