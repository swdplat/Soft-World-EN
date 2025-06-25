// JavaScript Document

$(document).ready(function(){
	$(".menu_box li a").click(function(){
		$(".menu_box li a").removeClass("now");
		$(this).addClass("now");
	});

	//Products and Services
	$('section[data-content="mycard"]').css({'display': 'flex'});
	$(".sidebar li").eq(0).addClass('active');
	$(".sidebar li").click(function(){
		$(".sidebar li").removeClass('active');
		$(this).addClass('active');
		$('section').hide();
		var contentToShow = $(this).text().toLowerCase();
		$('section[data-content="' + contentToShow + '"]').css({'display': 'flex'});
	});

	//Subsidiaries
	$('section[data-content="chinese gamer"]').css({'display': 'flex'});
});