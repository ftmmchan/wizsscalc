$('#ascalc').click(function(){
var ss = Number($('#ss_type').val());
var atk = Number($('#atk').val())/2;
var mp = Number($('#mp').val());
var cs = Number($('#cs').val()); //結晶の効果値
var eh1 = Number($('#eh1').val()); //ダメージ強化効果値
var eh2 = Number($('#eh2').val()); //ブースト効果値
var eh3 = Number($('#eh3').val()); //精霊強化効果値
var eh4 = Number($('#eh4').val()); //蓄積解放強化効果値
var eh5 = Number($('#eh5').val()); //夢現の射手効果値
var eh6 = Number($('#eh6').val()); //ASダメージ強化効果値
var exmp = Number($('#exmp').val()); //EXAS効果値
var ch = Number($('#ch').val()); //チェイン数
var ehtotal = eh1 + eh2 + eh3 + eh4 + eh5 +eh6; //ダメージ強化合計
var mptotal = (mp+cs+ehtotal); //計算上の効果値
var cheh = 1+(ch/100); //チェイン補正
var egd = Number($('#egd').val()); 
var mjk = Number($('#mjk').val()); 
var ehd = Number($('#ehd').val()); 
var taisei = Number($('#taisei').val()); //SS耐性
var jakutai = Number($('#jakutai').val()); //SS弱体化
var aseh = (1-(egd/100))*(1+(mjk/100))*(1+(ehd/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
var csmpsel = Number($('#csmpsel').val()); //ダメージ倍率結晶
var awmpsel = Number($('#awmpsel').val()); //ダメージ倍率潜在
var drmpsel = Number($('#drmpsel').val()); //ダメージ倍率潜在
var shmpsel = Number($('#shmpsel').val()); //ダメージ倍率潜在
var myzokusei = Number($('#myzokusei').val()); //属性補正
var emzokusei = Number($('#emzokusei').val()); //属性補正
var pnzokuseisel = Number($('#pnzokuseisel').val()); //属性補正
var chch = Number($('#chch').val()); //
var chky = 1+((chch*ch)/100); //連鎖狂化効果

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
if(pnzokuseisel==1){
		 var pneh = 1;
		 } else{
		 var pneh = 0.5;
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

var dmmp = csmp+awmp+drmp+shmp-3;

var damage = atk*((mptotal+100+exmp)/100)*pneh*cheh*aseh*dmmp*zkeh*chky;
var damage = Math.floor(damage);
var damagemin = Math.floor(damage*0.9);
var damagemax = Math.floor(damage*1.1);

$('#damage').val(damage);
$('#damagemax').val(damagemax);
$('#damagemin').val(damagemin);
 });