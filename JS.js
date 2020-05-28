let scoreText = document.querySelector('.score');
let score = 40;
let ochki = document.querySelector('.ochki');
let nachalo = document.querySelector('.nachalo');
// 1 вопрос
let answ1 = document.querySelector('.answ1');
let answ2 = document.querySelector('.answ2');
let answ3 = document.querySelector('.answ3');
let answ4 = document.querySelector('.answ4');
let box = document.querySelector('.box');
let alert = document.querySelector('.alert');
// 2 вопрос
let anssw1 = document.querySelector('.anssw1');
let anssw2 = document.querySelector('.anssw2');
let anssw3 = document.querySelector('.anssw3');
let anssw4 = document.querySelector('.anssw4');
let boxx = document.querySelector('.boxx');
let alert2 = document.querySelector('.alert2');
// 3 вопрос
let ansssw1 = document.querySelector('.ansssw1');
let ansssw2 = document.querySelector('.ansssw2');
let ansssw3 = document.querySelector('.ansssw3');
let ansssw4 = document.querySelector('.ansssw4');
let boxxx = document.querySelector('.boxxx');
let alert3 = document.querySelector('.alert3');
// 4 вопрос
let anssssw1 = document.querySelector('.anssssw1');
let anssssw2 = document.querySelector('.anssssw2');
let anssssw3 = document.querySelector('.anssssw3');
let anssssw4 = document.querySelector('.anssssw4');
let boxxxx = document.querySelector('.boxxxx');
let alert4 = document.querySelector('.alert4');
// 5 вопрос
let aanssssw1 = document.querySelector('.aanssssw1');
let aanssssw2 = document.querySelector('.aanssssw2');
let aanssssw3 = document.querySelector('.aanssssw3');
let aanssssw4 = document.querySelector('.aanssssw4');
let booxxxx = document.querySelector('.booxxxx');
let alert5 = document.querySelector('.alert5');
// 6 вопрос
let aaanssssw1 = document.querySelector('.aaanssssw1');
let aaanssssw2 = document.querySelector('.aaanssssw2');
let aaanssssw3 = document.querySelector('.aaanssssw3');
let aaanssssw4 = document.querySelector('.aaanssssw4');
let boooxxxx = document.querySelector('.boooxxxx');
let alert6 = document.querySelector('.alert6');
// 7 вопрос
let aaaanssssw1 = document.querySelector('.aaaanssssw1');
let aaaanssssw2 = document.querySelector('.aaaanssssw2');
let aaaanssssw3 = document.querySelector('.aaaanssssw3');
let aaaanssssw4 = document.querySelector('.aaaanssssw4');
let bboooxxxx = document.querySelector('.bboooxxxx');
let alert7 = document.querySelector('.alert7');
// 8 вопрос
let aaaannssssw1 = document.querySelector('.aaaannssssw1');
let aaaannssssw2 = document.querySelector('.aaaannssssw2');
let aaaannssssw3 = document.querySelector('.aaaannssssw3');
let aaaannssssw4 = document.querySelector('.aaaannssssw4');
let bbboooxxxx = document.querySelector('.bbboooxxxx');
let alert8 = document.querySelector('.alert8');
// 9 вопрос
let aaaannnssssw1 = document.querySelector('.aaaannnssssw1');
let aaaannnssssw2 = document.querySelector('.aaaannnssssw2');
let aaaannnssssw3 = document.querySelector('.aaaannnssssw3');
let aaaannnssssw4 = document.querySelector('.aaaannnssssw4');
let bbbboooxxxx = document.querySelector('.bbbboooxxxx');
let alert9 = document.querySelector('.alert9');
// 10 вопрос
let aaaannnnssssw1 = document.querySelector('.aaaannnnssssw1');
let aaaannnnssssw2 = document.querySelector('.aaaannnnssssw2');
let aaaannnnssssw3 = document.querySelector('.aaaannnnssssw3');
let aaaannnnssssw4 = document.querySelector('.aaaannnnssssw4');
let bbbbooooxxxx = document.querySelector('.bbbbooooxxxx');
let alert10 = document.querySelector('.alert10');
// Интересный факт
let aaaa_nnnnssssw1 = document.querySelector('.aaaa_nnnnssssw1');
let aaaa_nnnnssssw2 = document.querySelector('.aaaa_nnnnssssw2');
let aaaa_nnnnssssw3 = document.querySelector('.aaaa_nnnnssssw3');
let aaaa_nnnnssssw4 = document.querySelector('.aaaa_nnnnssssw4');
let bbbb_ooooxxxx = document.querySelector('.bbbb_ooooxxxx');



// 1 вопрос
answ1.onclick = function(){
	alert.style.display = 'block';
	alert.innerHTML= 'Неверно.';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
answ2.onclick = function(){
	alert.style.display = 'block';
	alert.innerHTML= 'Неверно..';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
answ3.onclick = function(){
	alert.style.display = 'block';
	alert.innerHTML= 'Неверно...';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
answ4.onclick = function(){
	alert.style.display = 'block';
	alert.innerHTML= 'Верно';
	alert.innerHTML = null;
	alert.style.display = 'block';
	box.style.display = 'none';
	boxx.style.display = 'block';
	
}


// 2 вопрос
anssw1.onclick = function(){
	alert2.style.display = 'block';
	alert2.innerHTML= 'Неверно.';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
anssw2.onclick = function(){
	alert2.style.display = 'block';
	alert2.innerHTML= 'Верно';
	alert2.innerHTML = null;
	alert2.style.display = 'none';
	boxx.style.display = 'none';
	boxxx.style.display = 'block';
	
}
anssw3.onclick = function(){
	alert2.style.display = 'block';
	alert2.innerHTML= 'Неверно...';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
anssw4.onclick = function(){
	alert2.style.display = 'block';      
	alert2.innerHTML= 'Неверно..';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}



// 3 вопрос
ansssw1.onclick = function(){
	alert3.style.display = 'block';
	alert3.innerHTML= 'Неверно.';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
ansssw2.onclick = function(){
	alert3.style.display = 'block';
	alert3.innerHTML= 'Неверно..';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
ansssw3.onclick = function(){
	alert3.style.display = 'block';
	alert3.innerHTML= 'Верно';
	alert3.innerHTML = null;
	alert3.style.display = 'none';
	boxxx.style.display = 'none';
	boxxxx.style.display = 'block';
	
}
ansssw4.onclick = function(){
	alert3.style.display = 'block';      
	alert3.innerHTML= 'Неверно...';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}


// 4 вопрос
anssssw1.onclick = function(){
	alert4.style.display = 'block';
	alert4.innerHTML= 'Верно';
	alert4.innerHTML = null;
	alert4.style.display = 'none';
	boxxxx.style.display = 'none';
	booxxxx.style.display = 'block';
	
}
anssssw2.onclick = function(){
	alert4.style.display = 'block';
	alert4.innerHTML= 'Неверно...';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
anssssw3.onclick = function(){
	alert4.style.display = 'block';
	alert4.innerHTML= 'Неверно.';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
anssssw4.onclick = function(){
	alert4.style.display = 'block';      
	alert4.innerHTML= 'Неверно..';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}

// 5 вопрос
aanssssw1.onclick = function(){
	alert5.style.display = 'block';      
	alert5.innerHTML= 'Неверно..';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
aanssssw2.onclick = function(){
	alert5.style.display = 'block';
	alert5.innerHTML= 'Неверно...';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
aanssssw3.onclick = function(){
	alert5.style.display = 'block';
	alert5.innerHTML= 'Неверно.';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
aanssssw4.onclick = function(){
	alert5.style.display = 'block';
	alert5.innerHTML= 'Верно';
	alert5.innerHTML = null;
	alert5.style.display = 'none';
	booxxxx.style.display = 'none';
	boooxxxx.style.display = 'block';
}

// 6 вопрос
aaanssssw1.onclick = function(){
	alert6.style.display = 'block';      
	alert6.innerHTML= 'Неверно..';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
aaanssssw2.onclick = function(){
	alert6.style.display = 'block';
	alert6.innerHTML= 'Неверно...';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
aaanssssw3.onclick = function(){
	alert6.style.display = 'block';
	alert6.innerHTML= 'Неверно.';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
aaanssssw4.onclick = function(){
	alert6.style.display = 'block';
	alert6.innerHTML= 'Верно';
	alert6.innerHTML = null;
	alert6.style.display = 'none';
	boooxxxx.style.display = 'none';
	bboooxxxx.style.display = 'block';
}

// 7 вопрос
aaaanssssw1.onclick = function(){
	alert7.style.display = 'block';      
	alert7.innerHTML= 'Неверно..';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
aaaanssssw2.onclick = function(){
	alert7.style.display = 'block';
	alert7.innerHTML= 'Верно';
	alert7.innerHTML = null;
	alert7.style.display = 'none';
	bboooxxxx.style.display = 'none';
	bbboooxxxx.style.display = 'block';

}
aaaanssssw3.onclick = function(){
	alert7.style.display = 'block';
	alert7.innerHTML= 'Неверно.';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
aaaanssssw4.onclick = function(){
	alert7.style.display = 'block';
	alert7.innerHTML= 'Неверно...';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}

// 8 вопрос
aaaannssssw1.onclick = function(){
	alert8.style.display = 'block';
	alert8.innerHTML= 'Верно';
	alert8.innerHTML = null;
	alert8.style.display = 'none';
	bbboooxxxx.style.display = 'none';
	bbbboooxxxx.style.display = 'block';
	
}
aaaannssssw2.onclick = function(){
	alert8.style.display = 'block';      
	alert8.innerHTML= 'Неверно..';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
aaaannssssw3.onclick = function(){
	alert8.style.display = 'block';
	alert8.innerHTML= 'Неверно.';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
aaaannssssw4.onclick = function(){
	alert8.style.display = 'block';
	alert8.innerHTML= 'Неверно...';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}

// 9 вопрос
aaaannnssssw1.onclick = function(){
	alert9.style.display = 'block';
	alert9.innerHTML= 'Неверно.';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
aaaannnssssw2.onclick = function(){
	alert9.style.display = 'block';      
	alert9.innerHTML= 'Неверно..';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
aaaannnssssw3.onclick = function(){
	alert9.style.display = 'block';
	alert9.innerHTML= 'Верно';
	alert9.innerHTML = null;
	alert9.style.display = 'none';
	bbbboooxxxx.style.display = 'none';
	bbbbooooxxxx.style.display = 'block';
}
aaaannnssssw4.onclick = function(){
	alert9.style.display = 'block';
	alert9.innerHTML= 'Неверно...';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}

// 10 вопрос
aaaannnnssssw1.onclick = function(){
	alert10.style.display = 'block';
	alert10.innerHTML= 'Верно';
	alert10.innerHTML = null;
	alert10.style.display = 'none';
	bbbbooooxxxx.style.display = 'none';
	bbbb_ooooxxxx.style.display = 'block';
	alert10.style.display = 'none';
}
aaaannnnssssw2.onclick = function(){
	alert10.style.display = 'block';      
	alert10.innerHTML= 'Неверно..';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
aaaannnnssssw3.onclick = function(){
	alert10.style.display = 'block';
	alert10.innerHTML= 'Неверно.';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
aaaannnnssssw4.onclick = function(){
	alert10.style.display = 'block';
	alert10.innerHTML= 'Неверно...';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}

// 11 вопрос
aaaa_nnnnssssw1.onclick = function(){
	alert.innerHTML = null;
	alert.style.display = 'none';
	bbbb_ooooxxxx.style.display = 'none';
	scoreText.innerHTML = score;
	console.log(score);
}
aaaa_nnnnssssw2.onclick = function(){
	alert.innerHTML = null;
	alert.style.display = 'none';
	bbbb_ooooxxxx.style.display = 'none';
	
	scoreText.innerHTML = score;
	console.log(score);
}
aaaa_nnnnssssw3.onclick = function(){
	alert.innerHTML = null;
	alert.style.display = 'none';
	bbbb_ooooxxxx.style.display = 'none';
	
	scoreText.innerHTML = score;
	console.log(score);
}
aaaa_nnnnssssw4.onclick = function(){
	alert.innerHTML = null;
	alert.style.display = 'none';
	bbbb_ooooxxxx.style.display = 'none';
	ochki.style.display = 'block';
	scoreText.innerHTML = score;
	console.log(score);
}
