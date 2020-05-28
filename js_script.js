// Скрипт для обратного отсчета
function timer(){
 var obj=document.getElementById('timer_inp');
 obj.innerHTML--;
 
 if(obj.innerHTML==0){;setTimeout(function(){},1200);}
 else{setTimeout(timer,1200);}
}
setTimeout(timer,1000);
// Объеты для карточек с вопросами



