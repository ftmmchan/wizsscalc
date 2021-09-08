$('#sscalc').click(function(){
var ss = Number($('#ss_type').val()); //SSの種類
var atk = Number($('#atk').val()); //攻撃力
var mp = Number($('#mp').val()); //SSの効果値
var cs = Number($('#cs').val()); //結晶の効果値
var eh1 = Number($('#eh1').val()); //ダメージ強化効果値
var eh2 = Number($('#eh2').val()); //ブースト効果値
var eh3 = Number($('#eh3').val()); //精霊強化効果値
var eh4 = Number($('#eh4').val()); //蓄積解放強化効果値
var eh5 = Number($('#eh5').val()); //夢現の射手効果値
var eh6 = Number($('#eh6').val()); //SPスキル強化効果値
var ch = Number($('#ch').val()); //チェイン数
var ehtotal = eh1 + eh2 + eh3 + eh4 + eh5 + eh6; //ダメージ強化合計
var cheh = 1+(ch/100); //チェイン補正
var ehd1 = document.getElementById("ehd1");

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

var taisei = Number($('#taisei').val()); //SS耐性変化
var csmpsel = Number($('#csmpsel').val()); //ダメージ倍率結晶
var awmpsel = Number($('#awmpsel').val()); //ダメージ倍率潜在
var drmpsel = Number($('#drmpsel').val()); //ダメージ倍率潜在
var myzokusei = Number($('#myzokusei').val()); //属性補正
var myzokusei2 = Number($('#myzokusei2').val()); //属性補正
var emzokusei = Number($('#emzokusei').val()); //属性補正
var chch = Number($('#chch').val()); //
var chky = 1+((chch*ch)/100); //連鎖狂化効果
var jou = Number($('#jou').val()); //効果値上限値
var jou2 = Number($('#jou2').val()); //効果値上限値
var tiku = Number($('#tiku').val()); //蓄積％
var kau = Number($('#kau').val()); //カウント数
var kauj = Number($('#kauj').val()); //カウント上限値
var chj = Number($('#chj').val()); //チェイン上限値
var pane = Number($('#pane').val()); //パネル色数
var sei = Number($('#sei').val()); //精霊数
var tansei = Number($('#tansei').val()); //精霊数
var yuusei = Number($('#yuusei').val()); //精霊数
var tousei = Number($('#tousei').val()); //精霊数
var hansei = Number($('#hansei').val()); //精霊数
var jikan = Number($('#jikan').val()); //時間ゲージ段階数
var dan = Number($('#dan').val()); //段階あたりの効果値
var bai = Number($('#bai').val()); //段階あたりの倍率
var ski = Number($('#ski').val()); //スキル発動回数
var panehi = Number($('#panehi').val()); //パネル色数
var panemizu = Number($('#panemizu').val()); //パネル色数
var panekami = Number($('#panekami').val()); //パネル色数
var panehika = Number($('#panehika').val()); //パネル色数
var paneyami = Number($('#paneyami').val()); //パネル色数
var panetotal = panehi + panemizu + panekami + panehika + paneyami; //パネル色数
var dame = Number($('#dame').val()); //ゲージ数
var chjou = Number($('#chjou').val()); //チェイン数
var chsyou = Number($('#chsyou').val()); //チェイン消費数
var seikai =Number($('#seikai').val()); //必要正解数
var jous =Number($('#jous').val()); //初期効果値
var skim =Number($('#skim').val()); //味方の攻撃スキル発動回数
var baim =Number($('#baim').val()); //段階あたりの倍率
var kaisuu =Number($('#kaisuu').val()); //攻撃回数
var mp2 = Number($('#mp2').val()); //統一大魔術の複属性効果値
var cs2 = Number($('#cs2').val()); //統一大魔術の複属性効果値(結晶)

var damage = 0;
var damagemax = 0;
var damagemin = 0;
var damage2 = 0;
var damagemax2 = 0;
var damagemin2 = 0;
var damagetotal = damage + damage2;

if(chch>=1) var cheh = chky; //連鎖狂化補正

var awmpsel = $("input[name='awmpselbtn']:checked").val();
switch (awmpsel) {
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
	case 4:
		var csmp = 1.3;
	break;
	default:
		var csmp = 1;
}

if(drmp1.checked == true){
var drmp = 1;
}else{
var drmp = 1.1;
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
if(tai1.checked == true){
var ssjoutai = 1-(taisei/100);
}else{
var ssjoutai = 1+(taisei/100);
}
if(ss == 3) ssjoutai = 1;
//属性ごとにダメージ補正を計算する
var sseh = (1-(egd/100))*(1+(mjk/100))*(1+(ehd/100))*ssjoutai;
var ssehhi = (1-(egdhi/100))*(1+(mjkhi/100))*(1+(ehdhi/100))*ssjoutai; 
var ssehmizu = (1-(egdmizu/100))*(1+(mjkmizu/100))*(1+(ehdmizu/100))*ssjoutai;
var ssehkami = (1-(egdkami/100))*(1+(mjkkami/100))*(1+(ehdkami/100))*ssjoutai;
var ssehhika = (1-(egdhika/100))*(1+(mjkhika/100))*(1+(ehdhika/100))*ssjoutai;
var ssehyami = (1-(egdyami/100))*(1+(mjkyami/100))*(1+(ehdyami/100))*ssjoutai;
var ssehmu = (1+(mjk/100))*(1+(ehd/100))*ssjoutai;

		switch(myzokusei){
				case 1:
				var sseh = ssehhi;
				break;
				case 2:
				var sseh = ssehmizu;
				break;
				case 3:
				var sseh = ssehkami;
				break;
				case 4:
				var sseh = ssehhika;
				break;
				case 5:
				var sseh = ssehyami;
				break;
				default:
				var sseh = ssehmu;
			}
		switch(myzokusei2){
				case 1:
				var sseh2 = ssehhi;
				break;
				case 2:
				var sseh2 = ssehmizu;
				break;
				case 3:
				var sseh2 = ssehkami;
				break;
				case 4:
				var sseh2 = ssehhika;
				break;
				case 5:
				var sseh2 = ssehyami;
				break;
			}
var dmmp = csmp+awmp+drmp-2;
if(myzokusei == 6 || myzokusei == myzokusei2) myzokusei2 = 0; //複属性があるか判定する、主属性と複属性が同じなら単色とみなす


switch (Number(ss)) {
	case 1: //大魔術
		var mptotal = mp+cs+ehtotal;
		if(myzokusei == myzokusei2 ||myzokusei2 == 0){
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
		}else{
			var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
			var damage = Math.floor(damage);
			var damagemin = Math.floor(damage*0.9);
			var damagemax = Math.floor(damage*1.1);
			var damage2 = atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2;
			var damage2 = Math.floor(damage2);
			var damagemin2 = Math.floor(damage2*0.9);
			var damagemax2 = Math.floor(damage2*1.1);
			}
		var damagetotal = damage + damage2;
	break;
	case 2: //特効・残滅大魔術
		var mptotal = mp+cs+ehtotal+100; 
		if(myzokusei == myzokusei2 ||myzokusei2 == 0){
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
		}else{
			var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
			var damage = Math.floor(damage);
			var damagemin = Math.floor(damage*0.9);
			var damagemax = Math.floor(damage*1.1);
			var damage2 = atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2;
			var damage2 = Math.floor(damage2);
			var damagemin2 = Math.floor(damage2*0.9);
			var damagemax2 = Math.floor(damage2*1.1);
			}
		var damagetotal = damage + damage2;
	break;
	case 3: //カウンター・行動感知
		var mptotal = mp+cs+ehtotal+100; 
		if(myzokusei == myzokusei2 ||myzokusei2 == 0){
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
		}else{
			var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
			var damage = Math.floor(damage);
			var damagemin = Math.floor(damage*0.9);
			var damagemax = Math.floor(damage*1.1);
			var damage2 = atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2;
			var damage2 = Math.floor(damage2);
			var damagemin2 = Math.floor(damage2*0.9);
			var damagemax2 = Math.floor(damage2*1.1);
			}
		var damagetotal = damage + damage2;
	break;
	case 4: //多弾魔術
		var mptotal = mp+cs+ehtotal;
		if(myzokusei == myzokusei2 ||myzokusei2 == 0){
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
		}else{
			var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
			var damage = Math.floor(damage);
			var damagemin = Math.floor(damage*0.9);
			var damagemax = Math.floor(damage*1.1);
			var damage2 = atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2;
			var damage2 = Math.floor(damage2);
			var damagemin2 = Math.floor(damage2*0.9);
			var damagemax2 = Math.floor(damage2*1.1);
			}
		var damageavg = Math.floor(damage/kaisuu);
		var damageavg2 = Math.floor(damage2/kaisuu);
		var damagetotal = damage + damage2;
	break;
	case 5: //斬撃大魔術
		var mptotal = mp+cs+ehtotal;
		if(myzokusei == myzokusei2 ||myzokusei2 == 0){
			var damage = (atk*(mptotal/100)*cheh*sseh*dmmp*zkeh)/kaisuu;
			for (var i=0;i<kaisuu-1;i++){
				var damage = damage+(atk*(mptotal/100)*cheh*sseh*dmmp*zkeh)/kaisuu;
				var ch = ch+1;
				var cheh = 1+(ch/100); //チェイン補正
			}
		}else{
			var damage = (atk*(mptotal/100)*cheh*sseh*dmmp*zkeh);
			var ch = ch+1;
			var cheh = 1+(ch/100); //チェイン補正
			var damage2 = (atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2);
			var ch = ch+1;
			var cheh = 1+(ch/100); //チェイン補正
			for (var i=0;i<kaisuu-1;i++){
				var damage = (atk*(mptotal/100)*cheh*sseh*dmmp*zkeh);
				var ch = ch+1;
				var cheh = 1+(ch/100); //チェイン補正
				var damage2 = (atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2);
				var ch = ch+1;
				var cheh = 1+(ch/100); //チェイン補正
			}
}
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damageavg = Math.floor(damage/kaisuu);
		var damage2 = Math.floor(damage2);
		var damagemin2 = Math.floor(damage2*0.9);
		var damagemax2 = Math.floor(damage2*1.1);
		var damageavg2 = Math.floor(damage2/kaisuu);
		var damagetotal = damage + damage2;

	break;
	case 6: //蓄積%
		var mptotal = ehtotal+jous+((tiku/100)*jou);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
	break;
	case 7: //カウント
		var mptotal = ehtotal+100+((kau/kauj)*jou);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
	break;
	case 8: //時限 計算式が特殊かつ乱数の影響を受けない
		var mptotal = mp+ehtotal;
		//var damage = Math.floor(Math.floor(atk*(Math.floor((mptotal/100)+cheh))*zkeh)*sseh*dmmp);
		var mptotal = mptotal + 100;
		var damage = Math.floor(Math.floor(Math.floor(atk*(Math.floor(Math.floor((mptotal/100)))*zkeh*cheh))*sseh*dmmp));
		var damagemin = damage;
		var damagemax = damage;
		var damagetotal = damage + damage2;
	break;
	case 9: //反転解除
		var mptotal = mp+ehtotal + (hansei*dan);
		if(myzokusei == myzokusei2 ||myzokusei2 == 0){
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		}else{
			var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
			var damage = Math.floor(damage);
			var damagemin = Math.floor(damage*0.9);
			var damagemax = Math.floor(damage*1.1);
			var damage2 = atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2;
			var damage2 = Math.floor(damage2);
			var damagemin2 = Math.floor(damage2*0.9);
			var damagemax2 = Math.floor(damage2*1.1);
			}
		var damagetotal = damage + damage2;
	break;
	case 10: //詠唱
		var mptotal = mp+ehtotal + (jikan*dan);
		if(myzokusei == myzokusei2 ||myzokusei2 == 0){
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		}else{
			var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
			var damage = Math.floor(damage);
			var damagemin = Math.floor(damage*0.9);
			var damagemax = Math.floor(damage*1.1);
			var damage2 = atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2;
			var damage2 = Math.floor(damage2);
			var damagemin2 = Math.floor(damage2*0.9);
			var damagemax2 = Math.floor(damage2*1.1);
			}
		var damagetotal = damage + damage2;
	break;
	case 11: //反動蝕・犠牲
		var mptotal = ((mp+cs) * sei) + ehtotal;
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
	break;
	case 12: //純属性
		switch (tansei) {
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

		var mptotal = ehtotal + cs + (jou*jyt);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage;
	break;
	case 13: //融合
		switch (yuusei) {
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

		var mptotal = ehtotal + (jou*jyt);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage;
	break;
	case 14: //統一
			switch (tousei) {
			case 1:
				var jyt = 0.1;
			break;
			case 2:
				var jyt = 0.15
			break;
			case 3:
				var jyt = 0.20;
			break;
			case 4:
				var jyt = 0.25;
			break;
			default:
				var jyt = 1;
		}
		var mptotal = ehtotal + (jou*jyt) + cs;
		var mptotal2 = ehtotal + (jou2*jyt) + cs2;
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
		var damage2 = atk*(mptotal2/100)*cheh*sseh*dmmp*zkeh2;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damage2 = Math.floor(damage2);
		var damagemin2 = Math.floor(damage2*0.9);
		var damagemax2 = Math.floor(damage2*1.1);
		var damagetotal = damage + damage2;
	break;
	case 15: //連鎖解放
		if(ch>=chj) var ch = chj;
		var mptotal = ehtotal+jous+((ch/chj)*(jou+cs));
		var damage = atk*(mptotal/100)*sseh*dmmp*zkeh;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
	break;
	case 16: //激化 エンハの乗り方が特殊っぽい
			var mptotal = ((cs+mp)*(Math.pow(bai,ski))+ehtotal);
		if(myzokusei == myzokusei2 ||myzokusei2 == 0){
			var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
			var damage = Math.floor(damage);
			var damagemin = Math.floor(damage*0.9);
			var damagemax = Math.floor(damage*1.1);
			var damagetotal = damage + damage2;
		}else{
			var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
			var damage = Math.floor(damage);
			var damagemin = Math.floor(damage*0.9);
			var damagemax = Math.floor(damage*1.1);
			var damage2 = atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2;
			var damage2 = Math.floor(damage2);
			var damagemin2 = Math.floor(damage2*0.9);
			var damagemax2 = Math.floor(damage2*1.1);
		}
		var damageavg = Math.floor(damage/kaisuu);
		var damageavg2 = Math.floor(damage2/kaisuu);
		var damagetotal = damage + damage2;

	break;
	case 17: //急襲
		if(skim==0){
		 mptotal = cs+mp+ehtotal;
		 } else{
		var mptotal = Math.floor(((cs+mp)/(Math.pow(baim,skim))+ehtotal));
		}
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
	break;
	case 18: //パネル爆破

			var dmmp = eval(csmp)+eval(awmp)-1;
			switch (emzokusei) {
				case 1:
					var zkehhi = 1;
					var zkehmizu = 1.5;
					var zkehkami = 0.5;
					var zkehhika = 1;
					var zkehyami = 1;
				break;
				case 2:
					var zkehhi = 0.5;
					var zkehmizu = 1;
					var zkehkami = 1.5;
					var zkehhika = 1;
					var zkehyami = 1;
				break;
				case 3:
					var zkehhi = 1.5;
					var zkehmizu = 0.5;
					var zkehkami = 1;
					var zkehhika = 1;
					var zkehyami = 1;
				break;
				case 4:
					var zkehhi = 1;
					var zkehmizu = 1;
					var zkehkami = 1;
					var zkehhika = 1;
					var zkehyami = 1.5;
				break;
				case 5:
					var zkehhi = 1;
					var zkehmizu = 1;
					var zkehkami = 1;
					var zkehhika = 1.5;
					var zkehyami = 1;
				break;
				default:
					var zkehhi = 1;
					var zkehmizu = 1;
					var zkehkami = 1;
					var zkehhika = 1;
					var zkehyami = 1;
			}


			var temp = ehtotal / panetotal ;
			var mptotal = cs+mp+temp;

			if(panehi>=1){
			var damagehi = atk*(((cs+mp+temp))/100)*cheh*ssehhi*dmmp*zkehhi;
			}else{
			var damagehi = 0
			}
			var damagehi = Math.floor(damagehi);
			var damagehitotal = damagehi * panehi ;
			var damagehimin = Math.floor(damagehi*0.9);
			var damagehimax = Math.floor(damagehi*1.1);

			if(panemizu >= 1){
			var damagemizu = atk*(((cs+mp+temp))/100)*cheh*ssehmizu*dmmp*zkehmizu;
			}else{
			var damagemizu = 0
			}

			var damagemizu = Math.floor(damagemizu);
			var damagemizutotal = damagemizu * panemizu ;
			var damagemizumin = Math.floor(damagemizu*0.9);
			var damagemizumax = Math.floor(damagemizu*1.1);

			if(panekami>=1){
			var damagekami = atk*((cs+mp+temp)/100)*cheh*ssehkami*dmmp*zkehkami;
			}else{
			var damagekami = 0
			}
			var damagekami = Math.floor(damagekami);
			var damagekamitotal = damagekami * panekami ;
			var damagekamimin = Math.floor(damagekami*0.9);
			var damagekamimax = Math.floor(damagekami*1.1);

			if(panehika>=1){
			var damagehika = atk*(((cs+mp+temp))/100)*cheh*ssehhika*dmmp*zkehhika;
			}else{
			var damagehika = 0
			}
			var damagehika = Math.floor(damagehika);
			var damagehikatotal = damagehika * panehika ;
			var damagehikamin = Math.floor(damagehika*0.9);
			var damagehikamax = Math.floor(damagehika*1.1);

			if(paneyami>=1){
			var damageyami = atk*(((cs+mp+temp))/100)*cheh*ssehyami*dmmp*zkehyami;
			}else{
			var damageyami = 0
			}
			var damageyami = Math.floor(damageyami);
			var damageyamitotal = damageyami * paneyami ;
			var damageyamimin = Math.floor(damageyami*0.9);
			var damageyamimax = Math.floor(damageyami*1.1);
			var damage = damagehitotal + damagemizutotal + damagekamitotal + damagehikatotal + damageyamitotal;
			var damagemin = Math.floor(damage*0.9);
			var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
		break;

	case 19: //撃滅連弾
	var damjou = (jou-mp)/chjou;
	var ehjou = ehtotal/chjou;
	var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh;
		var temp = Math.floor(ch/chsyou);
		if(temp>=chjou){
			var temp = chjou;
			}
			var chmptotal = mp+ehjou;
		for (var i=0;i<temp;i++){
			var damage = damage+atk*(chmptotal/100)*cheh*sseh*dmmp*zkeh;
			var ch = ch-chsyou;
			var cheh = 1+(ch/100); //チェイン補正
			var chmptotal = chmptotal+damjou;
			var mptotal = chmptotal;
	}
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
		
	break;
	case 20: //天穹大魔術
			switch (emzokusei) {
				case 1:
					var zkehhi = 1;
					var zkehmizu = 1.5;
					var zkehkami = 0.5;
					var zkehhika = 1;
					var zkehyami = 1;
				break;
				case 2:
					var zkehhi = 0.5;
					var zkehmizu = 1;
					var zkehkami = 1.5;
					var zkehhika = 1;
					var zkehyami = 1;
				break;
				case 3:
					var zkehhi = 1.5;
					var zkehmizu = 0.5;
					var zkehkami = 1;
					var zkehhika = 1;
					var zkehyami = 1;
				break;
				case 4:
					var zkehhi = 1;
					var zkehmizu = 1;
					var zkehkami = 1;
					var zkehhika = 1;
					var zkehyami = 1.5;
				break;
				case 5:
					var zkehhi = 1;
					var zkehmizu = 1;
					var zkehkami = 1;
					var zkehhika = 1.5;
					var zkehyami = 1;
				break;
				default:
					var zkehhi = 1;
					var zkehmizu = 1;
					var zkehkami = 1;
					var zkehhika = 1;
					var zkehyami = 1;
			}
		var mptotal = (mp*seikai)+(ehtotal/6);
		var damagehi = atk*(mptotal/100)*cheh*ssehhi*dmmp*zkehhi;
		var damagemizu = atk*(mptotal/100)*cheh*ssehmizu*dmmp*zkehmizu;
		var damagekami = atk*(mptotal/100)*cheh*ssehkami*dmmp*zkehkami;
		var damagehika = atk*(mptotal/100)*cheh*ssehhika*dmmp*zkehhika;
		var damageyami = atk*(mptotal/100)*cheh*ssehyami*dmmp*zkehyami;
		var damagemu = atk*(mptotal/100)*cheh*ssehmu*dmmp;
		var damagehi = Math.floor(damagehi);
		var damagemizu = Math.floor(damagemizu);
		var damagekami = Math.floor(damagekami);
		var damagehika = Math.floor(damagehika);
		var damageyami = Math.floor(damageyami);
		var damagemu = Math.floor(damagemu);
		var damage = damagehi + damagemizu + damagekami + damagehika + damageyami + damagemu;
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
	break;
	case 21: //詠唱多弾大魔術 単色は実装されてないので暫定処理
	var mptotal = (ehtotal/kaisuu)+mp;
		if(myzokusei2 != 0){
		if(kaisuu<=1) var kaisuu = 1;
		var damage = (atk*(mptotal/100)*cheh*sseh*dmmp*zkeh)*Math.ceil(kaisuu/2);
		var damage2 = (atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2)*Math.floor(kaisuu/2);
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damageavg = Math.floor(atk*(mptotal/100)*cheh*sseh*dmmp*zkeh);
		var damage2 = Math.floor(damage2);
		var damagemin2 = Math.floor(damage2*0.9);
		var damagemax2 = Math.floor(damage2*1.1);
		var damageavg2 = Math.floor(atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2);
		var damagetotal = damage + damage2;
		}else{
		var damage = (atk*(mptotal/100)*cheh*sseh*dmmp*zkeh)*kaisuu;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damageavg = Math.floor(atk*(mptotal/100)*cheh*sseh*dmmp*zkeh);
		}
	break;
	default: 
	alert('スキルを選択してください');
}

$('#damage').val(damage);
$('#damagemax').val(damagemax);
$('#damagemin').val(damagemin);
$('#damageavg').val(damageavg);
$('#damageavg2').val(damageavg2);
$('#damagehi').val(damagehi);
$('#damagemizu').val(damagemizu);
$('#damagekami').val(damagekami);
$('#damagehika').val(damagehika);
$('#damageyami').val(damageyami);
$('#damagemu').val(damagemu);
$('#damage2').val(damage2);
$('#damagemax2').val(damagemax2);
$('#damagemin2').val(damagemin2);
$('#damagetotal').val(damagetotal);
 });
