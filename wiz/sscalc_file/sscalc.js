function sscalc(){
var atk = eval(document.form1.atk.value);
var mp = eval(document.form1.mp.value);
var cs = eval(document.form1.cs.value);
var eh1 = eval(document.form1.eh1.value);
var eh2 = eval(document.form1.eh2.value);
var eh3 = eval(document.form1.eh3.value);
var eh4 = eval(document.form1.eh4.value);
var eh5 = eval(document.form1.eh5.value);
var ch = eval(document.form1.ch.value);
var ehtotal = eh1 + eh2 + eh3 + eh4 + eh5;
var ss = document.form1.ss.selectedIndex;
var mptotal = (mp+cs+ehtotal);
var cheh = 1+(eval(document.form1.ch.value)/100);
var sseh = (1-(eval(document.form1.egd.value)/100))*(1+(eval(document.form1.mjk.value)/100))*(1+(eval(document.form1.ehd.value)/100));
var csmpsel = document.form1.csmpsel.selectedIndex;
var awmpsel = document.form1.awmpsel.selectedIndex;
var zokusei = document.form1.zokusei.selectedIndex;
var chch = 1+((eval(document.form1.chch.value)/100)*ch);
var jou = eval(document.form1.jou.value);
var tiku = eval(document.form1.tiku.value);
var kau = eval(document.form1.kau.value);
var kauj = eval(document.form1.kauj.value);
var pane = eval(document.form1.pane.value);
var sei = eval(document.form1.sei.value);
var jikan = eval(document.form1.jikan.value);
var dan = eval(document.form1.dan.value);
var jouf = eval(document.form1.jouf.value);
var bai = eval(document.form1.bai.value);
var ski = eval(document.form1.ski.value);



switch (zokusei) {
	case 1:
		var zkeh = 1.5;
	break;
	case 2:
		var zkeh = 0.5;
	break;
	default:
		var zkeh = 1;
}

switch (csmpsel) {
	case 1:
		var csmp = 1.2;
	break;
	case 2:
		var csmp = 0.9;
	break;
	case 3:
		var csmp = 1.1;
	break;
	default:
		var csmp = 1;
}

switch (awmpsel) {
	case 1:
		var awmp = 1.1;
	break;
	case 2:
		var awmp = 1.3;
	break;
	default:
		var awmp = 1;
}

var dmmp = eval(csmp)+eval(awmp)-1;

switch (ss) {
	case 1:
		var damage = Math.floor( atk*((mptotal+100)/100)*cheh*sseh*dmmp*zkeh*chch);
	break;
	case 2:
		var damage = Math.floor( atk*((ehtotal+100+((tiku/100)*jou))/100)*cheh*sseh*dmmp*zkeh*chch);
	break;
	case 3:
		var damage = Math.floor( atk*((ehtotal+100+((kau/kauj)*jou))/100)*cheh*sseh*dmmp*zkeh*chch);
	break;
	case 4:
		var damage = Math.floor(Math.floor(atk*(Math.floor((mptotal/100)+cheh))*zkeh)*sseh*dmmp*chch);
	break;
	case 5:
		var damage = Math.floor(atk*((mptotal/100)*pane)*cheh*sseh*dmmp*zkeh*chch);
	break;
	case 6:
		var damage = Math.floor(atk*((mptotal/100)*sei*2)*cheh*sseh*dmmp*zkeh*chch);
	break;
	case 7:
		var damage = Math.floor(atk*(((jikan*dan)+mptotal)/100)*cheh*sseh*dmmp*zkeh*chch);
	break;
	case 8:
		var damage = Math.floor(atk*((mptotal/100)*sei)*cheh*sseh*dmmp*zkeh*chch);
	break;
	case 9:
		var damage = Math.floor(atk*(Math.floor(Math.pow(jou*(sei/5),2.5)+ehtotal)/100)*cheh*sseh*dmmp*zkeh*chch);
	break;
	case 10:
		var damage = Math.floor(atk*(Math.floor(Math.pow(jou*(sei/5),2.5)+ehtotal)/100)*cheh*sseh*dmmp*zkeh*chch)+ Math.floor(atk*(Math.floor(Math.pow(jouf*(sei/5),2.5)+ehtotal+cs)/100)*cheh*sseh*dmmp*zkeh*chch);
	break;
	case 11:
		var damage = Math.floor( atk*((ehtotal+100+((ch/(kauj+cs))*jou))/100)*sseh*dmmp*zkeh);
	break;
	case 12:
		var damage = Math.floor( atk*((mptotal/100)*Math.pow(bai,ski - 1))*cheh*sseh*dmmp*zkeh*chch);
	break;
	case 13:
		var damage = Math.floor( atk*((mptotal/100)/Math.pow(bai,ski - 1))*cheh*sseh*dmmp*zkeh*chch);
	break;

	default:
		var damage = Math.floor(atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chch);
}


document.form1.damage.value = damage; 
document.form1.damagemin.value = Math.floor(damage*0.9); 
document.form1.damagemax.value = Math.floor(damage*1.1); 
document.form1.ssmp.value = mptotal;



}
