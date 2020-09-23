function panecalc(){
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
var cheh = 1+(eval(document.form1.ch.value)/100); //チェイン補正
var ssehhi = (1-(eval(document.form1.egdhi.value)/100))*(1+(eval(document.form1.mjkhi.value)/100))*(1+(eval(document.form1.ehdhi.value)/100)); //敵被ダメージ補正
var ssehmizu = (1-(eval(document.form1.egdmizu.value)/100))*(1+(eval(document.form1.mjkmizu.value)/100))*(1+(eval(document.form1.ehdmizu.value)/100)); //敵被ダメージ補正
var ssehkami = (1-(eval(document.form1.egdkami.value)/100))*(1+(eval(document.form1.mjkkami.value)/100))*(1+(eval(document.form1.ehdkami.value)/100)); //敵被ダメージ補正
var ssehhika = (1-(eval(document.form1.egdhika.value)/100))*(1+(eval(document.form1.mjkhika.value)/100))*(1+(eval(document.form1.ehdhika.value)/100)); //敵被ダメージ補正
var ssehyami = (1-(eval(document.form1.egdyami.value)/100))*(1+(eval(document.form1.mjkyami.value)/100))*(1+(eval(document.form1.ehdyami.value)/100)); //敵被ダメージ補正
var csmpsel = document.form1.csmpsel.selectedIndex; //ダメージ倍率結晶
var awmpsel = document.form1.awmpsel.selectedIndex; //ダメージ倍率潜在
var zokusei = document.form1.zokusei.selectedIndex; //属性補正
var chch = 1+((eval(document.form1.chch.value)/100)*ch); //連鎖狂化効果
var panehi = eval(document.form1.panehi.value); //パネル色数
var panemizu = eval(document.form1.panemizu.value); //パネル色数
var panekami = eval(document.form1.panekami.value); //パネル色数
var panehika = eval(document.form1.panehika.value); //パネル色数
var paneyami = eval(document.form1.paneyami.value); //パネル色数
var panetotal = panehi + panemizu + panekami + panehika + paneyami;

 

switch (zokusei) {
	case 1:
		var zkehhi = 0.5;
		var zkehmizu = 1;
		var zkehkami = 1.5;
		var zkehhika = 1;
		var zkehyami = 1;
	break;
	case 2:
		var zkehhi = 1.5;
		var zkehmizu = 0.5;
		var zkehkami = 1;
		var zkehhika = 1;
		var zkehyami = 1;
	break;
	case 3:
		var zkehhi = 1;
		var zkehmizu = 1;
		var zkehkami = 1;
		var zkehhika = 1;
		var zkehyami = 1.5;
	break;
	case 4:
		var zkehhi = 1;
		var zkehmizu = 1;
		var zkehkami = 1;
		var zkehhika = 1.5;
		var zkehyami = 1;
	break;
	default:
		var zkehhi = 1;
		var zkehmizu = 1.5;
		var zkehkami = 0.5;
		var zkehhika = 1;
		var zkehyami = 1;
}

switch (csmpsel) {
	case 1:
		var csmp = 1.1;
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
	default:
		var awmp = 1;
}

var dmmp = eval(csmp)+eval(awmp)-1;


var temp = ehtotal / panetotal ;
var mptotal = cs+mp+temp;

if(panehi>=1){
var damagehi = atk*(((cs+mp+temp))/100)*cheh*ssehhi*dmmp*zkehhi*chch;
}else{
var damagehi = 0
}
var damagehi = Math.floor(damagehi);
var damagehitotal = damagehi * panehi ;
var damagehimin = Math.floor(damagehi*0.9);
var damagehimax = Math.floor(damagehi*1.1);

if(panemizu >= 1){
var damagemizu = atk*(((cs+mp+temp))/100)*cheh*ssehmizu*dmmp*zkehmizu*chch;
}else{
var damagemizu = 0
}

var damagemizu = Math.floor(damagemizu);
var damagemizutotal = damagemizu * panemizu ;
var damagemizumin = Math.floor(damagemizu*0.9);
var damagemizumax = Math.floor(damagemizu*1.1);

if(panekami>=1){
var damagekami = atk*((cs+mp+temp)/100)*cheh*ssehkami*dmmp*zkehkami*chch;
}else{
var damagekami = 0
}
var damagekami = Math.floor(damagekami);
var damagekamitotal = damagekami * panekami ;
var damagekamimin = Math.floor(damagekami*0.9);
var damagekamimax = Math.floor(damagekami*1.1);

if(panehika>=1){
var damagehika = atk*(((cs+mp+temp))/100)*cheh*ssehhika*dmmp*zkehhika*chch;
}else{
var damagehika = 0
}
var damagehika = Math.floor(damagehika);
var damagehikatotal = damagehika * panehika ;
var damagehikamin = Math.floor(damagehika*0.9);
var damagehikamax = Math.floor(damagehika*1.1);

if(paneyami>=1){
var damageyami = atk*(((cs+mp+temp))/100)*cheh*ssehyami*dmmp*zkehyami*chch;
}else{
var damageyami = 0
}
var damageyami = Math.floor(damageyami);
var damageyamitotal = damageyami * paneyami ;
var damageyamimin = Math.floor(damageyami*0.9);
var damageyamimax = Math.floor(damageyami*1.1);

var damagetotal = damagehitotal + damagemizutotal + damagekamitotal + damagehikatotal + damageyamitotal;

document.form1.ssmp.value = mptotal.toFixed(2);
document.form1.damagehi.value = damagehi; 
document.form1.damagehimin.value = damagehimin; 
document.form1.damagehimax.value = damagehimax; 
document.form1.damagehitotal.value =damagehitotal; 
document.form1.damagemizu.value = damagemizu; 
document.form1.damagemizumin.value = damagemizumin; 
document.form1.damagemizumax.value = damagemizumax; 
document.form1.damagemizutotal.value =damagemizutotal; 
document.form1.damagekami.value = damagekami; 
document.form1.damagekamimin.value = damagekamimin; 
document.form1.damagekamimax.value = damagekamimax; 
document.form1.damagekamitotal.value =damagekamitotal; 
document.form1.damagehika.value = damagehika; 
document.form1.damagehikamin.value = damagehikamin; 
document.form1.damagehikamax.value = damagehikamax; 
document.form1.damagehikatotal.value =damagehikatotal; 
document.form1.damageyami.value = damageyami; 
document.form1.damageyamimin.value = damageyamimin; 
document.form1.damageyamimax.value = damageyamimax; 
document.form1.damageyamitotal.value =damageyamitotal; 
document.form1.damagetotal.value =damagetotal; 


}
