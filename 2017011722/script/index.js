/*
* @Author: 郜云飞
* @Date:   2018-12-16 12:19:09
* @Last Modified by:   郜云飞
* @Last Modified time: 2018-12-21 15:27:54
*/
// 顶部悬浮框
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

// 侧边框
function out(i){
	var rig = document.getElementById('rig').children;
	rig[i].style.right="0";
	if(i==2){
		var img = rig[2].children[1];
		img.src="image/erwei.png";
		img.style.marginTop="0";
	}
}
function int(i){
	var rig = document.getElementById('rig').children;
	rig[i].style.right="-79px";
	if(i==2){
		var img = rig[2].children[1];
		img.src="image/serwei.png";
		img.style.marginTop="50px";
	}
}
// money
function addmoney(){
	var money=document.getElementById('money');
	var mon=document.getElementById('mon');
	mon.innerHTML="¥"+money.value;
}

//mainmint中间轮播
var mainmint = document.getElementById('mainmint');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var isMoving = false;
//getStyle
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
//animate
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
function next(){
	if(!isMoving){
		isMoving = true;
		index++;
		navChange(index);
		animate(slider,{left:-808*index},function(){
			if(index===7){
				slider.style.left="-808px";
				index=1;
			}
			isMoving = false;
		});
	}
	
}
function prev(){
	if(!isMoving){
		isMoving = true;
		index--;
		navChange(index);
		animate(slider,{left:-808*index},function(){
			if(index===0){
				slider.style.left="-4848px";
				index=6;
			}
			isMoving = false;
		});	
	}
	
}
var timer = setInterval(next,3000);
mainmint.onmouseover = function(){
	animate(left,{opacity:25});
	animate(right,{opacity:25});
	clearInterval(timer);
}
mainmint.onmouseout = function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	timer = setInterval(next,3000);
}
right.onclick = next;
left.onclick = prev;

for(var i =0;i<oNavlist.length;i++){
	oNavlist[i].idx = i;
	oNavlist[i].onclick = function(){
		index = this.idx+1;
		navChange(index);
		animate(slider,{left:-808*index});
	}
}
function navChange(index){
	for(var i = 0;i<oNavlist.length;i++){
		oNavlist[i].className = '';
	}
	if(index === 7){
		oNavlist[0].className = "active";
	}else if(index === 0){
		oNavlist[5].className = "active";
	}else{
		oNavlist[index-1].className = "active";
	}
}
var mainrighttt = document.getElementById('mainrighttt');
var issMoving = true;
setInterval(function(){
	if(!issMoving){
		return;
	}
	var now = parseInt(getStyle(mainrighttt,'top'));
	if(now === -365){
		now = 0;
	}
	mainrighttt.style.top=now - 1 +"px";
},30);
mainrighttt.onmouseover = function(){
	issMoving = false;
}
mainrighttt.onmouseout = function(){
	issMoving = true;
}
