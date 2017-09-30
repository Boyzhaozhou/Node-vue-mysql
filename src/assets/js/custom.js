$(document).ready(function() {
	//获取年份
	var myDate=new Date();
	var yearDate =myDate.getFullYear();
	$(".yeartime").html(yearDate);
});
