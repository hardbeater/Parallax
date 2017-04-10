$(window).scroll(function()
{

var wscroll = $(this).scrollTop();
            $('.tag').css(
		          {
			'transform':'translate(0px,'+wscroll/3+'%)'
	
		          }
			);
			$('.bird').css({
				'transform':'translate(0px,'+-wscroll/9+'%)'
			     }
		     );
		if(wscroll>$('.clothespic').offset().top-180){
			$('.clothespic .coloum ').each(function(i){
				setTimeout(function(){
				$('.clothespic .coloum').eq(i).addClass('show');
			},150*(i+1));
			});
		};	

		if(wscroll>$('.periscope').offset().top-$(window).height()){
			
			$('.periscope').css({
				'background-position':'center '+(wscroll-$('.periscope').offset().top)+'px'
			});
			var c = (wscroll-$('.periscope').offset().top+300)/(wscroll/7);
			$('.promoscope').css({
				'opacity':c
			});
		}
		if(wscroll>$('.bottom').offset().top-$(window).height()){
			var off= Math.min(0,wscroll-$('.bottom').offset().top+360);
			console.log(off);
			$('.post').css({
				
				'transform':'translate('+off+'px,'+Math.abs(off)*0.5+'px)'
				
			});
			$('.post2').css({
				
				'transform':'translate('+Math.abs(off)+'px,'+Math.abs(off)*0.5+'px)'
				
			});
			$('.post1').css({
				'transform':'translate(0px,'+Math.abs(off)+'px)'
				
			});
		}
		
			 

});
$(document).ready(function(){
	var counter =1;
	var l =$('.slide').length;
	console.log(l);
	setInterval(function(){
		counter++;
		if(counter===$('.slide').length)
	{
		counter=1;
		$('.slides').css('margin-left','0px');
		
	}
	
		$('.slides').animate({'margin-left':'-=1516px'},1000);
	},4000);
	
$('#fb').hover(function(){
	
$(this).attr('src','images/icon/fbb.png');
	
});
$('#fb').mouseleave(function(){
	
	$(this).attr('src','images/icon/fbw.png');
});
$('#twt').hover(function(){
	
	$(this).attr('src','images/icon/twtb.png');
});
$('#twt').mouseleave(function(){
	
	$(this).attr('src','images/icon/twtw.png');
	
});
$('#ytube').hover(function(){
	
$(this).attr('src','images/icon/ytubeb.png');
	
});
$('#ytube').mouseleave(function(){
	
	$(this).attr('src','images/icon/ytubew.png');
});
$('#insta').hover(function(){
	
$(this).attr('src','images/icon/instab.png');
	
});
$('#insta').mouseleave(function(){
	
	$(this).attr('src','images/icon/instaw.png');
});
	
	
	
	
});
