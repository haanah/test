$(function(){
   var slide = $('.mainImg>ul').children('li');
    var slideNum = slide.length;
    var maxIndex = slideNum-1;
    var currentNum =  0;
    var newNum = currentNum+1;
	var imgW = slide.width();
    function slideMove(){
       var move =  -imgW;
		$(slide).animate({left:move},500);
    }
	slideMove();
});