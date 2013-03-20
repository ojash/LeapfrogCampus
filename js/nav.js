// JavaScript Document

    <!--
    $(function () {
        
        $('marquee').marquee('pointer').mouseover(function () {
            $(this).trigger('stop');
        }).mouseout(function () {
            $(this).trigger('start');
        }).mousemove(function (event) {
            if ($(this).data('drag') == true) {
                this.scrollLeft = $(this).data('scrollX') + ($(this).data('x') - event.clientX);
            }
        }).mousedown(function (event) {
            $(this).data('drag', true).data('x', event.clientX).data('scrollX', this.scrollLeft);
        }).mouseup(function () {
            $(this).data('drag', false);
        });
    });
    //-->

$(document).ready(function()
{
	
//$('#login input').click(function() {						  	 
	//							 $(this).animate({width: "150px", opacity:"1"}, 500);
		//							 });
$('.subnav li a').mouseover(function() {
									 $(this).stop().animate({textIndent: "30px"}, 500);
									 });
$('.subnav li a').mouseout(function() {
									 $(this).stop().animate({textIndent: "20px"}, 500);
									 });

	$('#images').innerfade({ 
		speed: 'slow', 
		timeout: 9000, 
		type: 'sequence', 
		containerheight: '230px'
	});
	
	$('#nav li.first').mouseover(function(){
									   $(this).find('.subnav').css('width','200px');
									   
									   $(this).find('.subnav').stop().animate({height: '170px'
},'slow');
							   });
	$('#nav li.first').mouseout(function() {
									   
									   $(this).find('.subnav').stop().animate({ height: '0px'
},'slow');
									 
									   
  });
	
	$('#nav li.second').mouseover(function(){
									   $(this).find('.subnav').css('width','200px');
									   
									   $(this).find('.subnav').stop().animate({height: '190px'
},'slow');
							   });
	$('#nav li.second').mouseout(function() {
									   
									   $(this).find('.subnav').stop().animate({ height: '0px'
},'slow');
									 
									   
  });
			$('#nav li.last').mouseover(function(){
									   $(this).find('.subnav').css('width','200px');
									   
									   $(this).find('.subnav').stop().animate({height: '200px'
},'slow');
							   });
	$('#nav li.last').mouseout(function() {
									   
									   $(this).find('.subnav').stop().animate({ height: '0px'
},'slow');
									 
									   
  });					
			$('#nav li.last2').mouseover(function(){
									   $(this).find('.subnav').css('width','200px');
									   
									   $(this).find('.subnav').stop().animate({height: '170px'
},'slow');
							   });
	$('#nav li.last2').mouseout(function() {
									   
									   $(this).find('.subnav').stop().animate({ height: '0px'
},'slow');
									 
									   
  });	
	
	$('input.username').focus(function(){
	    
	    var value = this.value;
		var title = this.title;
		
		if (value == title) {
			$(this).val("");
		};
	});
	$('input.username').blur(function(){
		if(!$(this).val().length){
		    $(this).val(this.title);
		};
	});

$('#header_links a').click(function(){
				 $(this).parrent().find('.hidden').slideDown('slow', function() {
  				 $('ul.hidden').show();

});
});
});
