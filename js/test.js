$(document).ready(function(){
	//
	$('.form-two,.form-three,.form-four,.form-five').css('display','none');
	$('.btn1').click(function(){
		$('.form-one').css('display','none');
		$('.form-two').css('display','block');
	})
	$('.btn2').click(function(){
		$('.form-two').css('display','none');
		$('.form-three').css('display','block');
	})
	$('.btn3').click(function(){
		$('.form-three').css('display','none');
		$('.form-four').css('display','block');
	})
	$('.btn4').click(function(){
		$('.form-four').css('display','none');
		$('.form-five').css('display','block');
	})
	
})
