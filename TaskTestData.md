{
	"discount": [{
		"off": 1,
		"type": "%",
		"points": {"from": 0, "to": 100.999}
	}, {
		"off": 3,
		"type": "%",
		"points":  {"from": 101, "to": 200.999}
	}, {
		"off": 5,
		"type": "%",
		"points":  {"from": 201, "to": 500.999}
	}, {
		"off": 10,
		"type": "%",
		"points": {"from": 501,"to":null}

	}]
}


<!DOCTYPE html>
<html>
<body>

<h2>Задача №2</h2>
<p>Автомат принимает накопительные скидочные карты и при своем расчете учитывает количество баллов, по которому начисляет процент скидки: От 0 до 100 баллов - скидка 1% От 100 до 200 баллов - скидка 3 % От 200 до 500 баллов - скидка 5% От 500 баллов - скидка 10% Задание: Составить такой набор тестовых данных для автомата, при котором мы гарантированно будем знать, что в соответствии со своими накопленными баллами покупатель получит верную скидку.</p>

<p id="demo"></p>

<script>
var myObj, i, j, x = "", card_point = 900;
myObj = {
	"discount": [{
		"off": 1,
		"type": "%",
		"points": {"from": 0, "to": 100.999}
	}, {
		"off": 3,
		"type": "%",
		"points":  {"from": 101, "to": 200.999}
	}, {
		"off": 5,
		"type": "%",
		"points":  {"from": 201, "to": 500.999}
	}, {
		"off": 10,
		"type": "%",
		"points": {"from": 501,"to":null}

	}]
}
for (i in myObj.discount) {
  x += "<h2>" + myObj.discount[i].off + "" + myObj.discount[i].type + "</h2>";
  x += myObj.discount[i].points.from + " - " + myObj.discount[i].points.to;
 
if(myObj.discount[i].points.to && myObj.discount[i].points.to !== null){
if((card_point === myObj.discount[i].points.from || (card_point > myObj.discount[i].points.from) ) && card_point <=  myObj.discount[i].points.to ){
 var t = myObj.discount[i].off;
 x += " Your % = " + t + "<br>";
 }
  }
 
if( ( card_point > myObj.discount[i].points.from && myObj.discount[i].points.to === null) || ( card_point === myObj.discount[i].points.from && myObj.discount[i].points.to === null)){
 var t = myObj.discount[i].off;
 x += " Your % = " + t + "<br>";
 }
 

}
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
