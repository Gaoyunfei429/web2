/*
* @Author: 郜云飞
* @Date:   2018-12-16 12:19:24
* @Last Modified by:   郜云飞
* @Last Modified time: 2018-12-27 16:18:43
*/
window.onload = function(){
	var header = document.getElementsByClassName('header')[0];
	window.onscroll = function(){

		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st > 180){
			header.style.position = 'fixed';
		}else{
			header.style.position = 'static';
		}
	}
}
var mll = document.getElementById('mll');
var mlr = document.getElementById('mlr');
var chml = document.getElementById('chml');
mll.onclick = function(){
	mll.className='ml';
	mlr.className='';
	chml.innerHTML="\"150ml\"";
}
mlr.onclick = function(){
	mll.className='';
	mlr.className="ml";
	chml.innerHTML="\"200ml\"";
}
var jianl = document.getElementById('jianl');
var jianz = document.getElementById('jianz');
var jianr = document.getElementById('jianr');
jianl.onclick = function(){
	jianr.style.cursor="pointer";
	if(jianz.value>1){
		jianz.value--;
		if(jianz.value==1){
			jianl.style.cursor="not-allowed";
		}
		return;
	}	
}
jianr.onclick = function(){
	jianl.style.cursor="pointer";
	if(jianz.value<5){
		jianz.value++;
		if(jianz.value==5){
			jianr.style.cursor="not-allowed";
		}
		return;
	}
}
jianl.onmouseover = function(){
	if(jianz.value==1){
		jianl.style.cursor="not-allowed";
	}
	else{
		jianl.style.cursor="pointer";
	}
}
jianr.onmouseover = function(){
	if(jianz.value==5){
		jianr.style.cursor='not-allowed';
	}
	else{
		jianr.style.cursor="pointer";
	}
}
jianz.onmouseout = function(){
	if(jianz.value>5||jianz.value<1||isNaN(jianz.value))
		jianz.value=1;
}
jianz.onchange = function(){
	if(jianz.value>5||jianz.value<1||isNaN(jianz.value))
		jianz.value=1;
}

var ll = document.getElementById('ll');
var rr = document.getElementById('rr');
var lt = document.getElementById('lt');
var rt = document.getElementById('rt');
var img = document.getElementById('img');
var Bimg = document.getElementById('Bimg');
ll.onclick = function(){
	if(lt.className==""){
		lt.className="sp";
		rt.className="";
		img.src="../image/pp0.jpeg";
		Bimg.src="../image/pp0.jpeg";

	}else{
		lt.className="";
		rt.className="sp";
		img.src="../image/pp1.jpeg";
		Bimg.src="../image/pp1.jpeg";
	}
}
rr.onclick = function(){
	if(lt.className==""){
		lt.className="sp";
		rt.className="";
		img.src="../image/pp0.jpeg";
		Bimg.src="../image/pp0.jpeg";
	}else{
		lt.className="";
		rt.className="sp";
		img.src="../image/pp1.jpeg";
		Bimg.src="../image/pp1.jpeg";
	}
}
lt.onmouseover = function(){
	if(lt.className==""){
		lt.className="sp";
		rt.className="";
		img.src="../image/pp0.jpeg";
		Bimg.src="../image/pp0.jpeg";
	}
}
rt.onmouseover = function(){
	if(rt.className==""){
		lt.className="";
		rt.className="sp";
		img.src="../image/pp1.jpeg";
		Bimg.src="../image/pp1.jpeg";
	}
}


var tanc = document.getElementById('tanc');
var X = document.getElementById('X');
var jixu = document.getElementById('jixu');
tanc.onclick = function(){
	tan.style.display="";
}
X.onclick = function(){
	tan.style.display="none";
}
jixu.onclick = function(){
	tan.style.display="none";
}
var img1= document.getElementById('img1');
var img2 = document.getElementById("img2");
var slider = document.getElementById("slider");
var box = document.getElementById('box');
img1.onmouseover = function(){
	slider.style.display = 'block';
	img2.style.display = 'block';
}
img1.onmouseout = function(){
	slider.style.display = 'none';
	img2.style.display = 'none';
}
img1.onmousemove = function (ev) {
			var ev = ev || window.event;
			var scrTop=document.documentElement.scrollTop||document.body.scrollTop;
			console.log(scrTop);

			var oL = ev.clientX - box.offsetLeft - 22 - slider.offsetWidth / 2;
			var oT = ev.clientY - box.offsetTop - 22 + scrTop - slider.offsetHeight / 2;

			var oMaxw = img1.offsetWidth - slider.offsetWidth;
			var oMaxh = img1.offsetHeight - slider.offsetHeight;

			oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
			oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

			slider.style.left = oL + 'px';
			slider.style.top = oT + 'px';

			var scale = img2.offsetWidth / slider.offsetWidth;
			Bimg.style.left = -scale * oL + slider.offsetWidth + 'px'
			Bimg.style.top = -scale * oT + slider.offsetHeight + 'px'
		}