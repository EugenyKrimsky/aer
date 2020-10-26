$(document).ready(function() {
	$('.accordeon').click(function(event) {
		if($('.left-column__items').hasClass('one')) {
			$('.accordeon').not($(this)).removeClass('active');
			$('.acitem').not($(this).next()).slideUp(300);
		}
		if (!$(this).next().hasClass('accordeon2')) {
			$(this).toggleClass('active').next('ul').slideToggle(300);
		}
		if ($('.accordeon2').hasClass('active')) {
			$('.accordeon2').removeClass('active');
			$('.acitem2').not($(this).next()).slideUp(300);
		}
		if ($('.all').hasClass('active')) {
			$('.all').removeClass('active');
		} 
	})
	$('.all').click(function() {
		$('.all').toggleClass('active');
		if ($('.accordeon2').hasClass('active')) {
			$('.accordeon2').removeClass('active');
			$('.acitem2').not($(this).next()).slideUp(300);
		} if ($('.accordeon').hasClass('active')) {
			$('.accordeon').removeClass('active');
			$('.acitem').not($(this).next()).slideUp(300);
		}
	})
	$('.accordeon2').click(function(event) {
		$(this).toggleClass('active').next('ul').slideToggle(300);
		if($('.acitem-items').hasClass('two')) {
			$('.accordeon2').not($(this)).removeClass('active');
			$('.acitem2').not($(this).next()).slideUp(300);
		}
	})
	function get_name_browser(){
    // получаем данные userAgent
    var ua = navigator.userAgent;    
    // с помощью регулярного выражения
    // ищем упоминание названия браузера
    if (ua.search(/Chrome/) > 0) return 'Chrome';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/MSIE/) > 0) return 'IE';
    return false;
}

if (get_name_browser() == "Safari") {
 document.write('<link rel="stylesheet" href="css/main_safari.css">');
}

})