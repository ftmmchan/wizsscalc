$('#ascalc').click(function(){
var atk = Number($('#atk').val()); //攻撃力
var mp = Number($('#mp').val()); //ＡＳの効果値
var cs = Number($('#cs').val()); //結晶の効果値
var eh1 = Number($('#eh1').val()); //ダメージ強化効果値
var eh2 = Number($('#eh2').val()); //ダメージ強化効果値
var eh3 = Number($('#eh3').val()); //ブースト効果値
var eh4 = Number($('#eh4').val()); //精霊強化効果値
var eh5 = Number($('#eh5').val()); //蓄積解放強化効果値
var eh6 = Number($('#eh6').val()); //夢現の射手効果値
var eh7 = Number($('#eh7').val()); //ダブルＡＳ付与効果値
var eh8 = Number($('#eh8').val()); //ＡＳ特殊変化効果値
var eh9 = Number($('#eh9').val()); //ダメージ強化パネル効果値
var eh10 = Number($('#eh10').val()); //ＡＳ強化フィールド効果値
var eh11 = Number($('#eh11').val()); //ＡＳ強化フィールド効果値
var exmp = Number($('#exmp').val()); //EXAS効果値
var ch = Number($('#ch').val()); //チェイン数
var ehtotal = eh1 + eh2 + eh3 + eh4 + eh5 + eh6 + eh7 + eh8 + eh9 + eh10 + eh11; //ダメージ強化合計
var mptotal = (mp+cs+ehtotal); //計算上の効果値
var cheh = 1+(ch/100); //チェイン補正

//敵ガード
if(egd1.checked == true){
var egd = Number($('#egd').val()); 
var egdhi = 0; 
var egdmizu = 0; 
var egdkami = 0; 
var egdhika = 0; 
var egdyami = 0; 
}else{
var egd = 0; 
var egdhi = Number($('#egdhi').val()); 
var egdmizu = Number($('#egdmizu').val()); 
var egdkami = Number($('#egdkami').val()); 
var egdhika = Number($('#egdhika').val()); 
var egdyami = Number($('#egdyami').val()); 
}

//敵属性免疫
if(emm1.checked == true){
var emm = Number($('#emm').val()); 
var emmhi = 0; 
var emmmizu = 0; 
var emmkami = 0; 
var emmhika = 0; 
var emmyami = 0; 
}else{
var emm = 0; 
var emmhi = Number($('#emmhi').val()); 
var emmmizu = Number($('#emmmizu').val()); 
var emmkami = Number($('#emmkami').val()); 
var emmhika = Number($('#emmhika').val()); 
var emmyami = Number($('#emmyami').val()); 
}

//味方の弱体化大魔術
if(mjk1.checked == true){
var mjk = Number($('#mjk').val()); 
var mjkhi = 0; 
var mjkmizu = 0; 
var mjkkami = 0; 
var mjkhika = 0; 
var mjkyami = 0; 
}else{
var mjk = 0; 
var mjkhi = Number($('#mjkhi').val()); 
var mjkmizu = Number($('#mjkmizu').val()); 
var mjkkami = Number($('#mjkkami').val()); 
var mjkhika = Number($('#mjkhika').val()); 
var mjkyami = Number($('#mjkyami').val()); 
}

//敵の反動攻撃
if(ehd1.checked == true){
var ehd = Number($('#ehd').val()); 
var ehdhi = 0; 
var ehdmizu = 0; 
var ehdkami = 0; 
var ehdhika = 0; 
var ehdyami = 0; 
}else{
var ehd = 0; 
var ehdhi = Number($('#ehdhi').val()); 
var ehdmizu = Number($('#ehdmizu').val()); 
var ehdkami = Number($('#ehdkami').val()); 
var ehdhika = Number($('#ehdhika').val()); 
var ehdyami = Number($('#ehdyami').val()); 
}

var taisei = Number($('#taisei').val()); //AS耐性変化
var asmpss = Number($('#asmpss').val()); //ＡＳ倍率強化（スキル）
var asmppn = Number($('#asmppn').val()); //ＡＳ倍率強化（パネル）
var emzokusei = Number($('#emzokusei').val()); //属性補正
var myzokusei = Number($('#myzokusei').val()); //属性補正
var myzokusei2 = Number($('#myzokusei2').val()); //属性補正
var chch = Number($('#chch').val()); 
var chky = 1+((chch*ch)/100); //連鎖狂化効果
var ems = Number($('#ems').val());  //敵の数
var bunsansel = Number($('#bunsansel').val());  //敵の数
var kaisuu = Number($('#kaisuu').val());  //攻撃回数
var damage = 0;
var damagemax = 0;
var damagemin = 0;
var damage2 = 0;
var damagemax2 = 0;
var damagemin2 = 0;
var damageavg = 0;
var damageavg2 = 0;
var damagetotal = damage + damage2;
if(chch>=1) var cheh = chky;

switch (myzokusei) {
	case 1:
		if(emzokusei == 2){
		var zkeh = 0.5;
		}else if(emzokusei == 3) {
		var zkeh = 1.5;
		}
		else {
		var zkeh = 1.0;
		}
	break;
	case 2:
		if(emzokusei==3){
		var zkeh = 0.5;
		}else if(emzokusei==1){
		var zkeh = 1.5;
		}else {
		var zkeh = 1.0;
		}
	break;
	case 3:
		if(emzokusei==1){
		var zkeh = 0.5;
		}else if(emzokusei==2){
		var zkeh = 1.5;
		}else {
		var zkeh = 1.0;
		}
	break;
	case 4:
		if(emzokusei==5){
		var zkeh = 1.5;
		}else {
		var zkeh = 1.0;
		}
	break;
	case 5:
		if(emzokusei==4){
		var zkeh = 1.5;
		}else {
		var zkeh = 1.0;
		}
	break;
	default:
		var zkeh = 1.0;
	}
	switch (myzokusei2) {
	case 1:
		if(emzokusei == 2){
		var zkeh2 = 0.5;
		}else if(emzokusei == 3) {
		var zkeh2 = 1.5;
		}
		else {
		var zkeh2 = 1.0;
		}
	break;
	case 2:
		if(emzokusei==3){
		var zkeh2 = 0.5;
		}else if(emzokusei==1){
		var zkeh2 = 1.5;
		}else {
		var zkeh2 = 1.0;
		}
	break;
	case 3:
		if(emzokusei==1){
		var zkeh2 = 0.5;
		}else if(emzokusei==2){
		var zkeh2 = 1.5;
		}else {
		var zkeh2 = 1.0;
		}
	break;
	case 4:
		if(emzokusei==5){
		var zkeh2 = 1.5;
		}else {
		var zkeh2 = 1.0;
		}
	break;
	case 5:
		if(emzokusei==4){
		var zkeh2 = 1.5;
		}else {
		var zkeh2 = 1.0;
		}
	break;
	default:
		var zkeh2 = 1.0;
	}

var csmp = 1 ;
var ad = document.getElementById("ad");
var mu = document.getElementById("mu");
var go = document.getElementById("go");
var ri = document.getElementById("ri");
var dr = document.getElementById("dr");
if (ad.checked == true) {var csmp = csmp + 0.2}
if (mu.checked == true) {var csmp = csmp - 0.1}
if (go.checked == true) {var csmp = csmp + 0.1}
if (ri.checked == true) {var csmp = csmp + 0.3}
if (dr.checked == true) {var csmp = csmp + 0.1}

value = $("input[name='awmpselbtn']:checked").val();
switch (value) {
	case "awmp1":
		var awmp = 1;
		break;
	case "awmp2":
		var awmp = 1.1;
		break;
	case "awmp3":
		var awmp = 1.2;
		break;
	default:
		var awmp = 1.3;
		break;
	}


if(pnzokusei1.checked == true){
var pneh = 1;
}else{
var pneh = 0.5
}

if(pnzokuseif1.checked == true){
var pneh2 = 1;
}else{
var pneh2 = 0.5
}

if(egd1.checked == true){
	var egdhi = egd;
	var egdmizu = egd;
	var egdkami = egd;
	var egdhika = egd;
	var egdyami = egd;
}

if(mjk1.checked == true){
	var mjkhi = mjk;
	var mjkmizu = mjk;
	var mjkkami = mjk;
	var mjkhika = mjk;
	var mjkyami = mjk;
}

if(ehd1.checked == true){
	var ehdhi = ehd;
	var ehdmizu = ehd;
	var ehdkami = ehd;
	var ehdhika = ehd;
	var ehdyami = ehd;
}

if(emm1.checked == true){
	var emmhi = emm;
	var emmmizu = emm;
	var emmkami = emm;
	var emmhika = emm;
	var emmyami = emm;
}


if(tai1.checked == true){
var asjoutai = 1-(taisei/100);
}else{
var asjoutai = 1+(taisei/100);
}
var aseh = (1-(egd/100))*(1+(mjk/100))*(1+(ehd/100))*(1-(emm/100))*asjoutai; //敵被ダメージ補正
var asehhi = (1-(egdhi/100))*(1+(mjkhi/100))*(1+(ehdhi/100))*(1-(emmhi/100))*asjoutai; //敵被ダメージ補正
var asehmizu = (1-(egdmizu/100))*(1+(mjkmizu/100))*(1+(ehdmizu/100))*(1-(emmmizu/100))*asjoutai; //敵被ダメージ補正
var asehkami = (1-(egdkami/100))*(1+(mjkkami/100))*(1+(ehdkami/100))*(1-(emmkami/100))*asjoutai; //敵被ダメージ補正
var asehhika = (1-(egdhika/100))*(1+(mjkhika/100))*(1+(ehdhika/100))*(1-(emmhika/100))*asjoutai; //敵被ダメージ補正
var asehyami = (1-(egdyami/100))*(1+(mjkyami/100))*(1+(ehdyami/100))*(1-(emmyami/100))*asjoutai; //敵被ダメージ補正
var asehmu = (1+(mjk/100))*(1+(ehd/100))*asjoutai; //敵被ダメージ補正
			switch(myzokusei){
				case 1:
				var aseh = asehhi;
				break;
				case 2:
				var aseh = asehmizu;
				break;
				case 3:
				var aseh = asehkami;
				break;
				case 4:
				var aseh = asehhika;
				break;
				case 5:
				var aseh = asehyami;
				break;
				default:
				var aseh = asehmu;
			}
		switch(myzokusei2){
				case 1:
				var aseh2 = asehhi;
				break;
				case 2:
				var aseh2 = asehmizu;
				break;
				case 3:
				var aseh2 = asehkami;
				break;
				case 4:
				var aseh2 = asehhika;
				break;
				case 5:
				var aseh2 = asehyami;
				break;
				default:
			}

if(bunsansel2.checked == false) ems = 1;
var atk = atk/2;
var dmmp = csmp+awmp-1;

if(myzokusei == myzokusei2 || myzokusei2 == 0){
	var damage = atk*((((mptotal+100+exmp)/ems))/100)*(asmpss+asmppn-1)*pneh*cheh*aseh*dmmp*zkeh;
	var damage = Math.floor(damage);
	var damageavg = Math.floor(damage/kaisuu);
	var damagemin = Math.floor(damage*0.9);
	var damagemax = Math.floor(damage*1.1);
}else{
	var damage = atk*((((mptotal+100+exmp)/ems))/100)*(asmpss+asmppn-1)*pneh*cheh*aseh*dmmp*zkeh;
	var damage = Math.floor(damage);
	var damageavg = Math.floor(damage/kaisuu);
	var damagemin = Math.floor(damage*0.9);
	var damagemax = Math.floor(damage*1.1);
	var damage2 = atk*((((mptotal+100+exmp-eh11)/ems))/100)*(asmpss+asmppn-1)*pneh2*cheh*aseh2*dmmp*zkeh2;
	var damage2 = Math.floor(damage2);
	var damageavg2 = Math.floor(damage2/kaisuu);
	var damagemin2 = Math.floor(damage2*0.9);
	var damagemax2 = Math.floor(damage2*1.1);
}
var damagetotal = damage + damage2;
$('#damage').val(damage);
$('#damagemax').val(damagemax);
$('#damagemin').val(damagemin);
$('#damage2').val(damage2);
$('#damagemax2').val(damagemax2);
$('#damagemin2').val(damagemin2);
$('#damageavg').val(damageavg);
$('#damageavg2').val(damageavg2);
$('#damagetotal').val(damagetotal);
 });
