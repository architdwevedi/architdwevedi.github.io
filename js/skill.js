
setTimeout(function(){
	document.getElementById('gyh').classList.add('hide');
},3000);
setTimeout(function(){
	document.getElementById('okl').classList.add('hide');
},3000);
setTimeout(function(){
	document.getElementById('ikl').classList.add('hide');
},2000);
setTimeout(function(){
	document.getElementById('tyh').classList.add('hide');
},1000);



setTimeout(function(){
 document.getElementById('topper').classList.remove('hide');
}, 2000);
setTimeout(function(){
 document.getElementById('footer').classList.remove('hide');
}, 2000);


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


var a=1;
	var b5=document.getElementById('b5');
	var b4=document.getElementById('b4');
	var b3=document.getElementById('b3');
	var b2=document.getElementById('b2');
	var b1=document.getElementById('b1');
	function godown(){
		if (a==1){
			setTimeout(function(){
				document.getElementById('b5').style.display="none";
			},900);
			b5.classList.add("mjk");
			b4.classList.add("mjl");
			b3.classList.add("mjm");
			b2.classList.add("mjn");

			a=2;
		}
		else if (a==2){
			setTimeout(function(){
				document.getElementById('b4').style.display="none";
			},900);
			b4.classList.remove("mjl");
			b3.classList.remove("mjm");
			b2.classList.remove("mjn");
			void b4.offsetWidth;
			void b3.offsetWidth;
			void b2.offsetWidth;
			b4.classList.add("mjl");
			b3.classList.add("mjm");
			b2.classList.add("mjn");
			a=3;
		}
		else if (a==3){
			setTimeout(function(){
				document.getElementById('b3').style.display="none";
			},900);
			b4.classList.remove("mjl");
			b3.classList.remove("mjm");
			b2.classList.remove("mjn");
			void b4.offsetWidth;
			void b3.offsetWidth;
			void b2.offsetWidth;
			b4.classList.add("mjl");
			b3.classList.add("mjm");
			b2.classList.add("mjn");
			a=4;
		}
		else if (a==4){
			setTimeout(function(){
				document.getElementById('b2').style.display="none";
			},900);
			b4.classList.remove("mjl");
			b3.classList.remove("mjm");
			b2.classList.remove("mjn");
			void b4.offsetWidth;
			void b3.offsetWidth;
			void b2.offsetWidth;
			b4.classList.add("mjl");
			b3.classList.add("mjm");
			b2.classList.add("mjn");
			a=5;
		}
		else if (a==5){
			document.getElementById('b5').style.display="block";
			document.getElementById('b4').style.display="block";
			document.getElementById('b3').style.display="block";
			document.getElementById('b2').style.display="block";
			document.getElementById('b1').style.display="block";
			a=1;
		}
	}


	var b=1;
	var b10=document.getElementById('b10');
	var b9=document.getElementById('b9');
	var b8=document.getElementById('b8');
	var b7=document.getElementById('b7');
	var b6=document.getElementById('b6');
	function godown1(){
		if (b==1){
			setTimeout(function(){
				document.getElementById('b10').style.display="none";
			},900);
			b10.classList.add("mjk");
			b9.classList.add("mjl");
			b8.classList.add("mjm");
			b7.classList.add("mjn");

			b=2;
		}
		else if (b==2){
			setTimeout(function(){
				document.getElementById('b9').style.display="none";
			},900);
			b9.classList.remove("mjl");
			b8.classList.remove("mjm");
			b7.classList.remove("mjn");
			void b9.offsetWidth;
			void b8.offsetWidth;
			void b7.offsetWidth;
			b9.classList.add("mjl");
			b8.classList.add("mjm");
			b7.classList.add("mjn");
			b=3;
		}
		else if (b==3){
			setTimeout(function(){
				document.getElementById('b8').style.display="none";
			},900);
			b9.classList.remove("mjl");
			b8.classList.remove("mjm");
			b7.classList.remove("mjn");
			void b9.offsetWidth;
			void b8.offsetWidth;
			void b7.offsetWidth;
			b9.classList.add("mjl");
			b8.classList.add("mjm");
			b7.classList.add("mjn");
			b=4;
		}
		else if (b==4){
			setTimeout(function(){
				document.getElementById('b7').style.display="none";
			},900);
			b9.classList.remove("mjl");
			b8.classList.remove("mjm");
			b7.classList.remove("mjn");
			void b9.offsetWidth;
			void b8.offsetWidth;
			void b7.offsetWidth;
			b9.classList.add("mjl");
			b8.classList.add("mjm");
			b7.classList.add("mjn");
			b=5;
		}
		else if (b==5){
			document.getElementById('b10').style.display="block";
			document.getElementById('b9').style.display="block";
			document.getElementById('b8').style.display="block";
			document.getElementById('b7').style.display="block";
			document.getElementById('b6').style.display="block";
			b=1;
		}
	}
