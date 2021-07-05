$('#emstxt').addClass('invisible');
$('#kaisuutxt').addClass('invisible');
$('#damaavgtxt').addClass('invisible');
$('#damaavgtxt2').addClass('invisible');
$("#bunsan").change(function() {
var bunsan = Number($('#bunsansel').val());
switch (Number(bunsan)) {
	case 1:
		$('#emstxt').show();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
	break;
	case 2:
		$('#emstxt').hide();
		$('#kaisuutxt').show();
		$('#damaavgtxt').show();
		$('#damaavgtxt2').show();
	break;
	default:
		$('#emstxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
}
});
$('#ascalc').click(function(){
var atk = Number($('#atk').val())/2; //攻撃力
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
var exmp = Number($('#exmp').val()); //EXAS効果値
var ch = Number($('#ch').val()); //チェイン数
var ehtotal = eh1 + eh2 + eh3 + eh4 + eh5 + eh6 + eh7 + eh8 + eh9; //ダメージ強化合計
var mptotal = (mp+cs+ehtotal); //計算上の効果値
var cheh = 1+(ch/100); //チェイン補正
var egd = Number($('#egd').val()); //敵ガード
var egdhi = Number($('#egdhi').val()); 
var egdmizu = Number($('#egdmizu').val()); 
var egdkami = Number($('#egdkami').val()); 
var egdhika = Number($('#egdhika').val()); 
var egdyami = Number($('#egdyami').val()); 
var mjk = Number($('#mjk').val()); //敵弱体化（味方の弱体化大魔術）
var mjkhi = Number($('#mjkhi').val()); 
var mjkmizu = Number($('#mjkmizu').val()); 
var mjkkami = Number($('#mjkkami').val()); 
var mjkhika = Number($('#mjkhika').val()); 
var mjkyami = Number($('#mjkyami').val()); 
var ehd = Number($('#ehd').val()); //敵弱体化（敵の反動攻撃）
var ehdhi = Number($('#ehdhi').val()); 
var ehdmizu = Number($('#ehdmizu').val()); 
var ehdkami = Number($('#ehdkami').val()); 
var ehdhika = Number($('#ehdhika').val()); 
var ehdyami = Number($('#ehdyami').val()); 
var taisei = Number($('#taisei').val()); //SS耐性
var jakutai = Number($('#jakutai').val()); //SS弱体化
var asmpss = Number($('#asmpss').val()); //ＡＳ倍率強化（スキル）
var asmppn = Number($('#asmppn').val()); //ＡＳ倍率強化（パネル）
var aseh = (1-(egd/100))*(1+(mjk/100))*(1+(ehd/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
var csmpsel = Number($('#csmpsel').val()); //ダメージ倍率結晶
var awmpsel = Number($('#awmpsel').val()); //ダメージ倍率潜在
var drmpsel = Number($('#drmpsel').val()); //ダメージ倍率潜在
var shmpsel = Number($('#shmpsel').val()); //ダメージ倍率潜在
var myzokusei = Number($('#myzokusei').val()); //属性補正
var myzokusei2 = Number($('#myzokusei2').val()); //属性補正
var emzokusei = Number($('#emzokusei').val()); //属性補正
var pnzokuseisel = Number($('#pnzokuseisel').val()); //属性補正
var pnzokuseisel2 = Number($('#pnzokuseisel2').val()); //属性補正
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

switch (myzokusei) {
	case 1:
		if(emzokusei == 2){
		zkeh = 0.5;
		}else if(emzokusei == 3) {
		zkeh = 1.5;
		}
		else {
		zkeh = 1.0;
		}
	break;
	case 2:
		if(emzokusei==3){
		zkeh = 0.5;
		}else if(emzokusei==1){
		zkeh = 1.5;
		}else {
		zkeh = 1.0;
		}
	break;
	case 3:
		if(emzokusei==1){
		zkeh = 0.5;
		}else if(emzokusei==2){
		zkeh = 1.5;
		}else {
		zkeh = 1.0;
		}
	break;
	case 4:
		if(emzokusei==5){
		zkeh = 1.5;
		}else {
		zkeh = 1.0;
		}
	break;
	case 5:
		if(emzokusei==4){
		zkeh = 1.5;
		}else {
		zkeh = 1.0;
		}
	break;
	default:
		zkeh = 1.0;
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
switch (pnzokuseisel) {
	case 1:
		 var pneh = 0.5;
	break;
	default:		
		 var pneh = 1;
}
switch (pnzokuseisel2) {
	case 1:
		 var pneh2 = 0.5;
	break;
	default:		
		 var pneh2 = 1;
}
switch (drmpsel) {
	case 1:
		var drmp = 1.1;
	break;
	default:
		var drmp = 1;
}
switch (shmpsel) {
	case 1:
		var shmp = 1.3;
	break;
	default:
		var shmp = 1;
}
if(egd >= 1){
	var egdhi = egd;
	var egdmizu = egd;
	var egdkami = egd;
	var egdhika = egd;
	var egdyami = egd;
}
if(mjk >= 1){
	var mjkhi = mjk;
	var mjkmizu = mjk;
	var mjkkami = mjk;
	var mjkhika = mjk;
	var mjkyami = mjk;
}
if(ehd >= 1){
	var ehdhi = ehd;
	var ehdmizu = ehd;
	var ehdkami = ehd;
	var ehdhika = ehd;
	var ehdyami = ehd;
}
var asehhi = (1-(egdhi/100))*(1+(mjkhi/100))*(1+(ehdhi/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
var asehmizu = (1-(egdmizu/100))*(1+(mjkmizu/100))*(1+(ehdmizu/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
var asehkami = (1-(egdkami/100))*(1+(mjkkami/100))*(1+(ehdkami/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
var asehhika = (1-(egdhika/100))*(1+(mjkhika/100))*(1+(ehdhika/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
var asehyami = (1-(egdyami/100))*(1+(mjkyami/100))*(1+(ehdyami/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
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
				if(mjk >= 1 ||ehd >= 1 ){
					var aseh = (1+(mjkhi/100))*(1+(ehdhi/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
				}else{
					var aseh=1*(1-(taisei/100))*(1+(jakutai/100));
				}
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
				if(mjk >= 1 ||ehd >= 1 ){
					var aseh2 = (1+(mjkhi/100))*(1+(ehdhi/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
				}else{
					var aseh2 = 1*(1-(taisei/100))*(1+(jakutai/100));
				}
			}

switch(bunsansel){
	case 1:
	break;
	case 2:
	var ems = 1;
	break;
	default:
	var ems = 1
}
var dmmp = csmp+awmp+drmp+shmp-3;
if(myzokusei == 6)myzokusei2 = 0;

if(myzokusei == myzokusei2 ||myzokusei2 == 0){
	var damage = atk*((((mptotal+100+exmp)/ems))/100)*(asmpss+asmppn-1)*pneh*cheh*aseh*dmmp*zkeh*chky;
	var damage = Math.floor(damage);
	var damageavg = Math.floor(damage/kaisuu);
	var damagemin = Math.floor(damage*0.9);
	var damagemax = Math.floor(damage*1.1);
}else{
	var damage = atk*((((mptotal+100+exmp)/ems))/100)*(asmpss+asmppn-1)*pneh*cheh*aseh*dmmp*zkeh*chky;
	var damage = Math.floor(damage);
	var damageavg = Math.floor(damage/kaisuu);
	var damagemin = Math.floor(damage*0.9);
	var damagemax = Math.floor(damage*1.1);
	var damage2 = atk*((((mptotal+100+exmp)/ems))/100)*(asmpss+asmppn-1)*pneh2*cheh*aseh2*dmmp*zkeh2*chky;
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
