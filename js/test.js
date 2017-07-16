$(document).ready(function(){
	var sum;
	var a = [20];
	function get(argument) {	
		var radionum = $("input[name='optionRadios1'][checked]").val(); 
		console.log(radionum);
	}
	// $('.btn').click(get());
	get();
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
