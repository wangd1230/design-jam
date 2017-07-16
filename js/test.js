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
	var a = [];
	var sum = 0;
	console.log(sum);
	document.getElementById('btn1').addEventListener('click',add1);
	document.getElementById('btn2').addEventListener('click',add2);
	document.getElementById('btn3').addEventListener('click',add3);
	document.getElementById('btn4').addEventListener('click',add4);
	document.getElementById('btn5').addEventListener('click',add5);
	// $('.btn2').click(add2());
	// $('.btn3').click(add3());
	// $('.btn4').click(add4());
	// $('.btn5').click(add5());
	function add1(){
		a[0] =Number($("input[name='optionRadios1']:checked").val());
	 	a[1] =Number($("input[name='optionRadios2']:checked").val());
	 	a[2] =Number($("input[name='optionRadios3']:checked").val());
	 	a[3] =Number($("input[name='optionRadios4']:checked").val());
		sum = sum+a[0]+a[1]+a[2]+a[3];
		console.log(sum);
	}
	function add2(){
	 	a[4] =Number($("input[name='optionRadios5']:checked").val());
	 	a[5] =Number($("input[name='optionRadios6']:checked").val());
	 	a[6] =Number($("input[name='optionRadios7']:checked").val());
	 	a[7] =Number($("input[name='optionRadios8']:checked").val());
		sum = sum + a[4] + a[5] + a[6] + a[7];
		console.log(sum);
	}
	function add3(){
	 	a[8] =Number($("input[name='optionRadios9']:checked").val());
	 	a[9] =Number($("input[name='optionRadios10']:checked").val());
	 	a[10] =Number($("input[name='optionRadios11']:checked").val());
	 	a[11] =Number($("input[name='optionRadios12']:checked").val());
		sum = sum + a[8] + a[9] + a[10] + a[11];
		console.log(sum);
	}
	function add4(){
	 	a[12] =Number($("input[name='optionRadios13']:checked").val());
	 	a[13] =Number($("input[name='optionRadios14']:checked").val());
	 	a[14] =Number($("input[name='optionRadios15']:checked").val());
	 	a[15] =Number($("input[name='optionRadios16']:checked").val());
		sum = sum + a[12] + a[13] + a[14] + a[15];
		console.log(sum);
	}
	function add5(){
	 	a[16] =Number($("input[name='optionRadios17']:checked").val());
	 	a[17] =Number($("input[name='optionRadios18']:checked").val());
	 	a[18] =Number($("input[name='optionRadios19']:checked").val());
	 	a[19] =Number($("input[name='optionRadios20']:checked").val());
		sum = sum + a[16] + a[17] + a[18] + a[19];
		console.log(sum);
	}
	

})
