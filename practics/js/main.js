$(function(){$('a[href="#scroll"]').click(function(event){event.preventDefault()
var el=$('.block-scroll');$('body,html').animate({scrollTop:$(el).offset().top},1000);});});