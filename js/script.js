var vid = document.getElementById("myvideo");
vid.playbackRate = 2.0;
setTimeout(function(){
 document.getElementById('topper').classList.remove('hide');
}, 10000);
setTimeout(function(){
 document.getElementById('footer').classList.remove('hide');
}, 10000);


setTimeout(function(){
	document.getElementById('anim_rocket').classList.add('hide');
},1999)





function showdetails(){
	document.getElementById('jhg').classList.remove('hide');
	document.getElementById('bgf').classList.remove('hide');
	setTimeout(function(){
		document.getElementById('bge').classList.remove('hide');
	}, 1000);
	setTimeout(function(){
		document.getElementById('bgg').classList.remove('hide');
	}, 2000);
	setTimeout(function() {
	  window.location.href = "detail.html";
	  // vid.style.display="none";
	}, 5000);
}


function showskills(){
	document.getElementById('anim_skill_bg').classList.remove('hide');
	document.getElementById('anim_skill1').classList.remove('hide');
	setTimeout(function(){
		document.getElementById('anim_skill2').classList.remove('hide');
	}, 1000);
	setTimeout(function(){
		document.getElementById('anim_skill_img').classList.remove('hide');
	}, 2000);
	setTimeout(function() {
	  window.location.href = "skill.html";
	}, 5000);
}

function showconquest(){
	document.getElementById('anim_conquest_bg').classList.remove('hide');
	document.getElementById('anim_conquest1').classList.remove('hide');
	setTimeout(function(){
		document.getElementById('anim_conquest2').classList.remove('hide');
	}, 1000);
	setTimeout(function(){
		document.getElementById('anim_conquest_img').classList.remove('hide');
	}, 2000);
	setTimeout(function() {
	  window.location.href = "conquest.html";
	}, 5000);
}

function showproj(){
	document.getElementById('anim_proj_bg').classList.remove('hide');
	document.getElementById('anim_proj1').classList.remove('hide');
	setTimeout(function(){
		document.getElementById('anim_proj2').classList.remove('hide');
	}, 1000);
	setTimeout(function(){
		document.getElementById('anim_proj_img').classList.remove('hide');
	}, 2000);
	setTimeout(function() {
	  window.location.href = "project.html";
	}, 5000);
}

function showcont(){
	document.getElementById('anim_cont_bg').classList.remove('hide');
	document.getElementById('anim_cont1').classList.remove('hide');
	setTimeout(function(){
		document.getElementById('anim_cont2').classList.remove('hide');
	}, 1000);
	setTimeout(function(){
		document.getElementById('anim_cont_img').classList.remove('hide');
	}, 2000);
	setTimeout(function() {
	  window.location.href = "contact.html#reco";
	}, 5000);
}