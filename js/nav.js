// JavaScript Document
$(document).ready(function()
{

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
									   $(this).find('.subnav').css('width','100px');
									   
									   $(this).find('.subnav').stop().animate({height: '170px'
},'slow');
							   });
	$('#nav li.first').mouseout(function() {
									   
									   $(this).find('.subnav').stop().animate({ height: '0px'
},'slow');
									 
									   
  });
	
	$('#nav li.second').mouseover(function(){
									   $(this).find('.subnav').css('width','100px');
									   
									   $(this).find('.subnav').stop().animate({height: '190px'
},'slow');
							   });
	$('#nav li.second').mouseout(function() {
									   
									   $(this).find('.subnav').stop().animate({ height: '0px'
},'slow');
									 
									   
  });
			$('#nav li.last').mouseover(function(){
									   $(this).find('.subnav').css('width','100px');
									   
									   $(this).find('.subnav').stop().animate({height: '200px'
},'slow');
							   });
	$('#nav li.last').mouseout(function() {
									   
									   $(this).find('.subnav').stop().animate({ height: '0px'
},'slow');
									 
									   
  });					
			$('#nav li.last2').mouseover(function(){
									   $(this).find('.subnav').css('width','100px');
									   
									   $(this).find('.subnav').stop().animate({height: '170px'
},'slow');
							   });
	$('#nav li.last2').mouseout(function() {
									   
									   $(this).find('.subnav').stop().animate({ height: '0px'
},'slow');
									 
									   
  });	
	
	
$('#header_links a').click(function(){
				 $(this).parrent().find('.hidden').slideDown('slow', function() {
  				 $('ul.hidden').show();

});
});
});
