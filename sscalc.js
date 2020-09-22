function sscalc(){
var atk = eval(document.form1.atk.value);
var mp = eval(document.form1.mp.value);
var cs = eval(document.form1.cs.value);
var eh1 = eval(document.form1.eh1.value);
var eh2 = eval(document.form1.eh2.value);
var eh3 = eval(document.form1.eh3.value);
var eh4 = eval(document.form1.eh4.value);
var eh5 = eval(document.form1.eh5.value);
var eh6 = eval(document.form1.eh6.value);
var ch = eval(document.form1.ch.value);
var ehtotal = eh1 + eh2 + eh3 + eh4 + eh5 + eh6;
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
var bai = eval(document.form1.bai.value);
var ski = eval(document.form1.ski.value);

switch (sei) {
	case 1:
		var jyt = 0.1;
	break;
	case 2:
		var jyt = 0.15
	break;
	case 3:
		var jyt = 0.25;
	break;
	case 4:
		var jyt = 0.35;
	break;
	default:
		var jyt = 1;
}


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
		var awmp = 1.2;
	break;
	case 3:
		var awmp = 1.3;
	break;
	default:
		var awmp = 1;
}

var dmmp = eval(csmp)+eval(awmp)-1;

switch (ss) {
	case 1: //特効・残滅大魔術・カウンター
		var mptotal = mptotal + 100;
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chch;
	break;
	case 2: //蓄積%
		var mptotal = mptotal+100+(tiku/100)*jou;
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chch;
	break;
	case 3: //カウント
		var mptotal = ehtotal+100+(kau/kauj)*jou;
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chch;
	break;
	case 4: //時限
		var damage = Math.floor(Math.floor(atk*(Math.floor((mptotal/100)+cheh))*zkeh)*sseh*dmmp*chch);
	break;
	case 5: //パネル爆破
		var damage = atk*((mptotal/100)*pane)*cheh*sseh*dmmp*zkeh*chch;
	break;
	case 6: //反転解除
		var mptotal = mptotal * sei * 2;
		var damage = atk*((mptotal/100))*cheh*sseh*dmmp*zkeh*chch;
	break;
	case 7: //詠唱
		var mptotal = mptotal + (jikan*dan);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chch;
	break;
	case 8: //反動蝕・犠牲
		var mptotal = mptotal * sei;
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chch;
	break;
	case 9: //純属性・融合・統一
		var mptotal = mptotal + (jou*jyt);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chch;
	break;
	case 10: //連鎖解放
		var mptotal = ehtotal+100+((ch/(kauj+cs))*jou);
		var damage = atk*(mptotal/100)*sseh*dmmp*zkeh;
	break;
	case 11: //激化
		var mptotal = mptotal*Math.pow(bai,ski - 1);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chch;
	break;
	case 12: //急襲
		var mptotal = mptotal/Math.pow(bai,ski - 1);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chch;
	break;

	default: //大魔術
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chch;
}


document.form1.damage.value = Math.floor(damage); 
document.form1.ssmp.value = mptotal.toFixed(2) ;

if(ss = 4) {
	document.form1.damagemin.value = damage; 
	document.form1.damagemax.value = damage; 


}else{
	document.form1.damagemin.value = Math.floor(damage*0.9); 
	document.form1.damagemax.value = Math.floor(damage*1.1); 
}
}
