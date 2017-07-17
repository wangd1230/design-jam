$(document).ready(function(){
	$('#personal').click(function () {
		$('#content1').css('display','block');
		$('#content2,#content3,#content5').css('display','none');
		$('#title').text('个 人');
		$('#nav-1').css('display','none');
		$('#nav-2').css('display','none');
	})
	$('#shequ').click(function () {
		$('#content2').css('display','block');
		$('#content1,#content3,#content5').css('display','none');
		$('#title').text('社 区');
		$('#nav-1').css('display','flex');
		$('#nav-2').css('display','none');
	})
	$('#task').click(function () {
		$('#content3').css('display','block');
		$('#content2,#content1,#content5').css('display','none');
		$('#title').text('任 务');
		$('#nav-2').css('display','flex');
		$('#nav-1').css('display','none');
	})
	$('#jitang').click(function () {
		$('#content5').css('display','block');
		$('#content2,#content3,#content1').css('display','none');
		$('#title').text('鸡 汤');
		$('#nav-1').css('display','none');
		$('#nav-2').css('display','none');
	})
	$('#nav-12').click(function(){
		$('#content3').css('display','block');
		$('#content2').css('display','none');
	})
})