var result = document.getElementById("result");
result.onclick = function() {

	let rad1=document.getElementsByName('r1');
	let rad2=document.getElementsByName('r2');
	let rad3=document.getElementsByName('r3');
	
	let correctAnswer1 = 0;
	let correctAnswer2 = 1;
	let correctAnswer3 = 2;

	let summ = 0;

	for (var i=0; i<rad1.length; i++) {
		if (rad1[i].checked && i == correctAnswer1)
			summ += 1;
	};
for (var i=0; i<rad2.length; i++) {
		if (rad2[i].checked && i == correctAnswer2)
			summ += 1;
	};
for (var i=0; i<rad3.length; i++) {
		if (rad3[i].checked && i == correctAnswer3)
			summ += 1;
	};	

	if (summ ==3)
		alert ("Викторина завершена! Ты ответил на все вопросы правильно! Поздравляем! Вы гениус");
	else if (summ ==2)
alert ("Викторина завершена! Ты Корейская бебезьяна! Правильных ответов: " + summ);
else if (summ ==1)
alert ("Викторина завершена! Ты игрок в бравл старс! Правильных ответов всего: " + summ);
else if (summ ==0)
alert ("Викторина завершена! Ты Крыска ириска! Правильных ответов всего: " + summ);
}