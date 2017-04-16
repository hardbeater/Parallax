# Parallax 
## Description
I have done this project while learning about parallax effects in web app.
In this Web app i have showed some parallax effects like texts or *images going up and down and images pops up while we scroll the page,periscope etc*.
## Important-Note
**z-index** *property* in css will only work on an element whose **position property** has been explicitly set to **absolute, fixed, or relative**.
## Technologies-Used

**HTML,CSS,Jquery**.
## Web-app-Preview

To see the Web app [**click here**](http://htmlpreview.github.com/?https://github.com/hardbeater/parallax/blob/master/parallax.html)</tab>  **(sometimes it take time to load properly so please wait for some time ) **
## Some Important functions for parallax in Jquery
1.For triggering a function when we scroll the window
```javascript
$(window).scroll(function(){

});
```
2.To get the value of how much we scrolled from top
```javascript
$(window).scrollTop();
```
3.To know that in web page how much a elemnt is down from top of window
```javascript
$("element or element's class or id").offset().top;
```
4.To get the value of height of the whole window of our web page
```javascript
$(window).height();
```
5.To add a class or change some css properties to each children of an element by some time delay to each child
```javascript
$('"element's class element's" "child class to where we want to add"').each(function(i){
				setTimeout(function(){
				$('"element's class element's" "child class to where we want to add"').eq(i).addClass('the class u want to add');
			},timeDelayInMiliseconds*(i+1));
			});
			
```
like u can see in [parallax.js](https://github.com/hardbeater/parallax/blob/master/js/parallax.js) file
```javascript
if(wscroll>(clothespictop-180)){
			clothespiccoloum.each(function(i){
				setTimeout(function(){
				clothespiccoloum.eq(i).addClass('show');
			},time*(i+1));
			});
		};

```
