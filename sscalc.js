function sscalc(){
var atk = eval(document.form1.atk.value); //精霊の攻撃力
var mp = eval(document.form1.mp.value); //ＳＳの効果値
var cs = eval(document.form1.cs.value); //結晶の効果値
var eh1 = eval(document.form1.eh1.value); //ダメージ強化効果値
var eh2 = eval(document.form1.eh2.value); //ブースト効果値
var eh3 = eval(document.form1.eh3.value); //精霊強化効果値
var eh4 = eval(document.form1.eh4.value); //蓄積解放強化効果値
var eh5 = eval(document.form1.eh5.value); //夢現の射手効果値
var eh6 = eval(document.form1.eh6.value); //SPスキル強化効果値
var ch = eval(document.form1.ch.value); //チェイン数
var ehtotal = eh1 + eh2 + eh3 + eh4 + eh5 + eh6; //ダメージ強化合計
var ss = document.form1.ss.selectedIndex; //ＳＳの種類
var mptotal = (mp+cs+ehtotal); //計算上の効果値
var cheh = 1+(eval(document.form1.ch.value)/100); //チェイン補正
var sseh = (1-(eval(document.form1.egd.value)/100))*(1+(eval(document.form1.mjk.value)/100))*(1+(eval(document.form1.ehd.value)/100)); //敵被ダメージ補正
var csmpsel = document.form1.csmpsel.selectedIndex; //ダメージ倍率結晶
var awmpsel = document.form1.awmpsel.selectedIndex; //ダメージ倍率潜在
var zokusei = document.form1.zokusei.selectedIndex; //属性補正
var chch = 1+((eval(document.form1.chch.value)*ch)/100); //連鎖狂化効果
var jou = eval(document.form1.jou.value); //効果値上限値
var tiku = eval(document.form1.tiku.value); //蓄積％
var kau = eval(document.form1.kau.value); //カウント数
var kauj = eval(document.form1.kauj.value); //カウント上限値
var pane = eval(document.form1.pane.value); //パネル色数
var sei = eval(document.form1.sei.value); //精霊数
var jikan = eval(document.form1.jikan.value); //時間ゲージ段階数
var dan = eval(document.form1.dan.value); //段階あたりの効果値
var bai = eval(document.form1.bai.value); //段階あたりの倍率
var ski = eval(document.form1.ski.value); //スキル発動回数

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
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 2: //蓄積%
		var mptotal = ehtotal+100+(tiku/100)*jou;
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chch;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 3: //カウント
		var mptotal = ehtotal+100+(kau/kauj)*jou;
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chch;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 4: //時限 計算式が特殊かつ乱数の影響を受けない
		//var damage = Math.floor(Math.floor(atk*(Math.floor((mptotal/100)+cheh))*zkeh)*sseh*dmmp*chch);
		var mptotal = mptotal + 100;
		var damage = Math.floor(Math.floor(Math.floor(atk*(Math.floor(Math.floor((mptotal/100)))*zkeh*cheh))*sseh*dmmp)*chch);
		var damagemin = damage;
		var damagemax = damage;
	break;
	case 5: //反転解除
		var mptotal = mptotal + (sei*dan);
		var damage = atk*((mptotal/100))*cheh*sseh*dmmp*zkeh*chch;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 6: //詠唱
		var mptotal = mptotal + (jikan*dan);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chch;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 7: //反動蝕・犠牲
		var mptotal = mptotal * sei;
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chch;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 8: //純属性・融合・統一
		var mptotal = mptotal + (jou*jyt);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chch;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 9: //連鎖解放
		var mptotal = ehtotal+100+((ch/(kauj+cs))*jou);
		var damage = atk*(mptotal/100)*sseh*dmmp*zkeh;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 10: //激化 エンハの乗り方が特殊っぽい
		var mptotal = ((cs+mp)*(Math.pow(bai,ski - 1))+ehtotal);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chch;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 11: //急襲 多分激化の逆
		var mptotal = ((cs+mp)/(Math.pow(bai,ski - 1))+ehtotal);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chch;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;

	default: //大魔術 基本的なやつ
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chch;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);

}

document.form1.damage.value = damage; 
document.form1.ssmp.value = mptotal.toFixed(2) ;
document.form1.damagemin.value = damagemin; 
document.form1.damagemax.value = damagemax; 
}
