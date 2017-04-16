$(window).ready(function(){

var tag=$('.tag');
var post=$('.post');
var post1=$('.post1');
var post2=$('.post2');
var bird=$('.bird');
var clothespic=$('.clothespic');
var coloum=$('.coloum');
var periscope=$('.periscope');
var promoscope=$('.promoscope');
var bottom=$('.bottom');
var clothespiccoloum=$('.clothespic .coloum ');
var windowheight=$(window).height();
var periscopetop=$('.periscope').offset().top;
var clothespictop=$('.clothespic').offset().top;
var bottomtop=$('.bottom').offset().top;
var time=150;
$(window).scroll(function()
{

var wscroll = $(this).scrollTop();

            tag.css(
		          {
			'transform':'translate(0px,'+wscroll/3+'%)'

		          }
			);
			bird.css({
				'transform':'translate(0px,'+-wscroll/9+'%)'
			     }
		     );
		if(wscroll>(clothespictop-180)){
			clothespiccoloum.each(function(i){
				setTimeout(function(){
				clothespiccoloum.eq(i).addClass('show');
			},time*(i+1));
			});
		};

		if(wscroll>(periscopetop-windowheight)){

		  periscope.css({
				'background-position':'center '+(wscroll-periscopetop)+'px'
			});
			var c = (wscroll-periscopetop+300)/(wscroll/7);
			promoscope.css({
				'opacity':c
			});
		}
		if(wscroll>(bottomtop-windowheight)){
			var off= Math.min(0,wscroll-bottomtop+360);
			post.css({

				'transform':'translate('+off+'px,'+Math.abs(off)*0.5+'px)'

			});
			post2.css({

				'transform':'translate('+Math.abs(off)+'px,'+Math.abs(off)*0.5+'px)'

			});
			post1.css({
				'transform':'translate(0px,'+Math.abs(off)+'px)'

			});
		}

});
});
$(document).ready(function(){
	var fb=$('#fb');
  var twt=$('#twt');
  var ytube=$('#ytube');
  var insta=$('#insta');

fb.hover(function(){

$(this).attr('src','images/icon/fbb.png');

});
fb.mouseleave(function(){

	$(this).attr('src','images/icon/fbw.png');
});
twt.hover(function(){

	$(this).attr('src','images/icon/twtb.png');
});
twt.mouseleave(function(){

	$(this).attr('src','images/icon/twtw.png');

});
ytube.hover(function(){

$(this).attr('src','images/icon/ytubeb.png');

});
ytube.mouseleave(function(){

	$(this).attr('src','images/icon/ytubew.png');
});
insta.hover(function(){

$(this).attr('src','images/icon/instab.png');

});
insta.mouseleave(function(){

	$(this).attr('src','images/icon/instaw.png');
});

});
