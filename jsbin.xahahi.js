var output1 = document.querySelector('.output1');
var output2 = document.querySelector('.output2');

function printTime(){
  
  var now= new Date();
    
  var day = now.getDay();
  var dayName;
  var monthDay=now.getDate();
  var month=now.getMonth();
  var monthName;
  var fullYear=now.getFullYear();
  
  var hr= now.getHours();
  var mn = now.getMinutes();
  var s= now.getSeconds();
  
  if (mn<10){      
      mn='0' + mn;
      }
  if (s<10){      
      s='0' + s;
      }
    
  switch(day){
  case 0: {dayName = 'Воскресенье'; break;}
  case 1: {dayName = 'Понедельник';break;}
  case 2: {dayName = 'Вторник';break;}
  case 3: {dayName = 'Среда';break;}
  case 4: {dayName = 'Четверг';break;}
  case 5: {dayName = 'Пятница';break;}
  case 6: {dayName = 'Суббота';break;}
}
  
  switch(month){
  case 0: {monthName = 'Январь'; break;}
  case 1: {monthName = 'Февраль';break;}
  case 2: {monthName = 'Март';break;}
  case 3: {monthName = 'Апрель';break;}
  case 4: {monthName = 'Май';break;}
  case 5: {monthName = 'Июнь';break;}
  case 6: {monthName = 'Июль';break;}
  case 7: {monthName = 'Август'; break;}
  case 8: {monthName = 'Сентябрь';break;}
  case 9: {monthName = 'Октябрь';break;}
  case 10: {monthName = 'Ноябрь';break;}
  case 11: {monthName = 'Декабрь';break;}
  
}
  
  var str1 = dayName + ', ' + monthDay +' ' + monthName +' ' + fullYear;
  var str2 = hr + ' : '+mn + ' : '+ s;
 
  output1.setAttribute("align", "center");
  output1.innerText=str1;
  output2.setAttribute("align", "center");
  output2.style.fontSize = '1.7em';
  output2.innerText=str2;
  
  window.requestAnimationFrame(printTime);
  
}
printTime();