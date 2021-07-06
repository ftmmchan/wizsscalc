$('#tikutxt').addClass('invisible');
$('#joutxt').addClass('invisible');
$('#jou2txt').addClass('invisible');
$('#kautxt').addClass('invisible');
$('#dantxt').addClass('invisible');
$('#kaujtxt').addClass('invisible');
$('#seitxt').addClass('invisible');
$('#skitxt').addClass('invisible');
$('#jikantxt').addClass('invisible');
$('#baitxt').addClass('invisible');
$('#chjtxt').addClass('invisible');
$('#panehitxt').addClass('invisible');
$('#panemizutxt').addClass('invisible');
$('#panekamitxt').addClass('invisible');
$('#panehikatxt').addClass('invisible');
$('#paneyamitxt').addClass('invisible');
$('#dametxt').addClass('invisible');
$('#panedame').addClass('invisible');
$('#chjoutxt').addClass('invisible');
$('#chsyoutxt').addClass('invisible');
$('#seikaitxt').addClass('invisible');
$('#mudame').addClass('invisible');
$('#joustxt').addClass('invisible');
$('#skimtxt').addClass('invisible');
$('#baimtxt').addClass('invisible');
$('#kaisuutxt').addClass('invisible');
$('#damaavgtxt').addClass('invisible');
$('#damaavgtxt2').addClass('invisible');
$('#cs2txt').addClass('invisible');

$("#ss_type").change(function() {
var ss = Number($('#ss_type').val());
switch (Number(ss)) {
	case 1: //大魔術
		$('#mzokusei').show();
		$('#mptxt').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
	break;
	case 2: //特効・残滅大魔術・カウンター
		$('#mptxt').show();
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
	break;
	case 3: //多弾魔術
		$('#mptxt').show();
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#kaisuutxt').show();
		$('#damaavgtxt').show();
		$('#damaavgtxt2').show();
		$('#cs2txt').hide();
	break;
	case 4: //斬撃大魔術
		$('#mptxt').show();
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#kaisuutxt').show();
		$('#damaavgtxt').show();
		$('#damaavgtxt2').show();
		$('#cs2txt').hide();
	break;
	case 5: //蓄積%
		$('#mptxt').hide();
		$('#mzokusei').show();
		$('#tikutxt').show();
		$('#joutxt').show();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').show();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
	break;
	case 6: //カウント
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').show();
		$('#jou2txt').hide();
		$('#kautxt').show();
		$('#dantxt').hide();
		$('#kaujtxt').show();
		$('#seitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
	break;
	case 7: //時限大魔術
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').show();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
	break;
	case 8: //反転解除
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').show();
		$('#kaujtxt').hide();
		$('#seitxt').show();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').show();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
	break;
	case 9: //詠唱
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').show();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').show();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').show();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
	break;
	case 10: //反動蝕・犠牲
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').show();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').show();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
	break;
	case 11: //純属性・融合
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').show();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').show();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
	break;
	case 12: //統一
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').show();
		$('#jou2txt').show();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').show();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').show();
	break;
	case 13: //連鎖解放
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').show();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').show();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
	break;
	case 14: //激化 エンハの乗り方が特殊っぽい
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#skitxt').show();
		$('#jikantxt').hide();
		$('#baitxt').show();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').show();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
	break;
	case 15: //急襲 多分激化の逆
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').show();
		$('#baimtxt').show();
		$('#mptxt').show();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
	break;
	case 16: //パネル爆破 
		$('#mzokusei').hide();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').show();
		$('#panemizutxt').show();
		$('#panekamitxt').show();
		$('#panehikatxt').show();
		$('#paneyamitxt').show();
		$('#dametxt').hide();
		$('#panedame').show();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#mptxt').show();
		$('#baimtxt').hide();
		$('#skimtxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
	break;
	case 17:  //撃滅連弾
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').show();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').show();
		$('#chsyoutxt').show();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#mptxt').show();
		$('#baimtxt').hide();
		$('#skimtxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
	break;
	case 18: //天穹大魔術
		$('#mzokusei').hide();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').show();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').show();
		$('#mudame').show();
		$('#joustxt').hide();
		$('#mptxt').show();
		$('#baimtxt').hide();
		$('#skimtxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
	break;
	case 19: //多弾魔術
		$('#mptxt').show();
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#kaisuutxt').show();
		$('#damaavgtxt').show();
		$('#damaavgtxt2').show();
		$('#cs2txt').hide();
	break;
	default: //大魔術 基本的なやつ
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#baimtxt').hide();
		$('#skimtxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#mptxt').show();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
}
});
$('#sscalc').click(function(){
var ss = Number($('#ss_type').val());
var atk = Number($('#atk').val());
var mp = Number($('#mp').val());
var cs = Number($('#cs').val()); //結晶の効果値
var eh1 = Number($('#eh1').val()); //ダメージ強化効果値
var eh2 = Number($('#eh2').val()); //ブースト効果値
var eh3 = Number($('#eh3').val()); //精霊強化効果値
var eh4 = Number($('#eh4').val()); //蓄積解放強化効果値
var eh5 = Number($('#eh5').val()); //夢現の射手効果値
var eh6 = Number($('#eh6').val()); //SPスキル強化効果値
var ch = Number($('#ch').val()); //チェイン数
var ehtotal = eh1 + eh2 + eh3 + eh4 + eh5 + eh6; //ダメージ強化合計
var mptotal = (mp+cs+ehtotal); //計算上の効果値
var cheh = 1+(ch/100); //チェイン補正
var egd = Number($('#egd').val()); 
var egdhi = Number($('#egdhi').val()); 
var egdmizu = Number($('#egdmizu').val()); 
var egdkami = Number($('#egdkami').val()); 
var egdhika = Number($('#egdhika').val()); 
var egdyami = Number($('#egdyami').val()); 
var mjk = Number($('#mjk').val()); 
var mjkhi = Number($('#mjkhi').val()); 
var mjkmizu = Number($('#mjkmizu').val()); 
var mjkkami = Number($('#mjkkami').val()); 
var mjkhika = Number($('#mjkhika').val()); 
var mjkyami = Number($('#mjkyami').val()); 
var ehd = Number($('#ehd').val()); 
var ehdhi = Number($('#ehdhi').val()); 
var ehdmizu = Number($('#ehdmizu').val()); 
var ehdkami = Number($('#ehdkami').val()); 
var ehdhika = Number($('#ehdhika').val()); 
var ehdyami = Number($('#ehdyami').val()); 
var taisei = Number($('#taisei').val()); //SS耐性
var jakutai = Number($('#jakutai').val()); //SS弱体化
var sseh = (1-(egd/100))*(1+(mjk/100))*(1+(ehd/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
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
var jikan = Number($('#jikan').val()); //時間ゲージ段階数
var dan = Number($('#dan').val()); //段階あたりの効果値
var bai = Number($('#bai').val()); //段階あたりの倍率
var ski = Number($('#ski').val()); //スキル発動回数
var panehi = Number($('#panehi').val()); //パネル色数
var panemizu = Number($('#panemizu').val()); //パネル色数
var panekami = Number($('#panekami').val()); //パネル色数
var panehika = Number($('#panehika').val()); //パネル色数
var paneyami = Number($('#paneyami').val()); //パネル色数
var panetotal = panehi + panemizu + panekami + panehika + paneyami;
var dame = Number($('#dame').val()); //ゲージ数
var chjou = Number($('#chjou').val()); //チェイン数
var chsyou = Number($('#chsyou').val()); //チェイン消費数
var seikai =Number($('#seikai').val()); //必要正解数
var jous =Number($('#jous').val()); //初期効果値
var skim =Number($('#skim').val()); //味方の攻撃スキル発動回数
var baim =Number($('#baim').val()); //段階あたりの倍率
var kaisuu =Number($('#kaisuu').val()); //攻撃回数
var mp2 = Number($('#mp2').val());
var cs2 = Number($('#cs2').val());
var damage = 0;
var damagemax = 0;
var damagemin = 0;
var damage2 = 0;
var damagemax2 = 0;
var damagemin2 = 0;
var damagetotal = damage + damage2;


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
switch (drmpsel) {
	case 1:
		var drmp = 1.1;
	break;
	default:
		var drmp = 1;
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
var ssehhi = (1-(egdhi/100))*(1+(mjkhi/100))*(1+(ehdhi/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
var ssehmizu = (1-(egdmizu/100))*(1+(mjkmizu/100))*(1+(ehdmizu/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
var ssehkami = (1-(egdkami/100))*(1+(mjkkami/100))*(1+(ehdkami/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
var ssehhika = (1-(egdhika/100))*(1+(mjkhika/100))*(1+(ehdhika/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
var ssehyami = (1-(egdyami/100))*(1+(mjkyami/100))*(1+(ehdyami/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
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
				if(mjk >= 1 ||ehd >= 1 ){
					var sseh = (1+(mjkhi/100))*(1+(ehdhi/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
				}else{
					var sseh=1*(1-(taisei/100))*(1+(jakutai/100));
				}
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
				default:
				if(mjk >= 1 ||ehd >= 1 ){
					var sseh2 = (1+(mjkhi/100))*(1+(ehdhi/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
				}else{
					var sseh2 = 1*(1-(taisei/100))*(1+(jakutai/100));
				}
			}
var dmmp = csmp+awmp+drmp-2;
		if(myzokusei == 6)myzokusei2 = 0;


switch (Number(ss)) {
	case 1: //大魔術
		if(myzokusei == myzokusei2 ||myzokusei2 == 0){
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
		}else{
			var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
			var damage = Math.floor(damage);
			var damagemin = Math.floor(damage*0.9);
			var damagemax = Math.floor(damage*1.1);
			var damage2 = atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2*chky;
			var damage2 = Math.floor(damage2);
			var damagemin2 = Math.floor(damage2*0.9);
			var damagemax2 = Math.floor(damage2*1.1);
			}
		var damagetotal = damage + damage2;
	break;
	case 2: //特効・残滅大魔術・カウンター
		var mptotal = mptotal + 100;
		if(myzokusei == myzokusei2 ||myzokusei2 == 0){
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
		}else{
			var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
			var damage = Math.floor(damage);
			var damagemin = Math.floor(damage*0.9);
			var damagemax = Math.floor(damage*1.1);
			var damage2 = atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2*chky;
			var damage2 = Math.floor(damage2);
			var damagemin2 = Math.floor(damage2*0.9);
			var damagemax2 = Math.floor(damage2*1.1);
			}
		var damagetotal = damage + damage2;
	break;
	case 3: //多弾魔術
		if(myzokusei == myzokusei2 ||myzokusei2 == 0){
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
		}else{
			var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
			var damage = Math.floor(damage);
			var damagemin = Math.floor(damage*0.9);
			var damagemax = Math.floor(damage*1.1);
			var damage2 = atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2*chky;
			var damage2 = Math.floor(damage2);
			var damagemin2 = Math.floor(damage2*0.9);
			var damagemax2 = Math.floor(damage2*1.1);
			}
		var damageavg = Math.floor(damage/kaisuu);
		var damageavg2 = Math.floor(damage2/kaisuu);
		var damagetotal = damage + damage2;
	break;
	case 4: //斬撃大魔術
		if(myzokusei == myzokusei2 ||myzokusei2 == 0){
			var damage = (atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky)/kaisuu;
			for (var i=0;i<kaisuu-1;i++){
				var damage = damage+(atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky)/kaisuu;
				var ch = ch+1;
				var cheh = 1+(ch/100); //チェイン補正
			}
		}else{
			var damage = (atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky);
			var ch = ch+1;
			var cheh = 1+(ch/100); //チェイン補正
			var damage2 = (atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2*chky);
			var ch = ch+1;
			var cheh = 1+(ch/100); //チェイン補正
			for (var i=0;i<kaisuu-1;i++){
				var damage = (atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky);
				var ch = ch+1;
				var cheh = 1+(ch/100); //チェイン補正
				var damage2 = (atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2*chky);
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
	case 5: //蓄積%
		var mptotal = ehtotal+jous+((tiku/100)*jou);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
	break;
	case 6: //カウント
		var mptotal = ehtotal+100+((kau/kauj)*jou);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
	break;
	case 7: //時限 計算式が特殊かつ乱数の影響を受けない
		//var damage = Math.floor(Math.floor(atk*(Math.floor((mptotal/100)+cheh))*zkeh)*sseh*dmmp*chky);
		var mptotal = mptotal + 100;
		var damage = Math.floor(Math.floor(Math.floor(atk*(Math.floor(Math.floor((mptotal/100)))*zkeh*cheh))*sseh*dmmp)*chky);
		var damagemin = damage;
		var damagemax = damage;
		var damagetotal = damage + damage2;
	break;
	case 8: //反転解除
		var mptotal = mptotal + (sei*dan);
		if(myzokusei == myzokusei2 ||myzokusei2 == 0){
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		}else{
			var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
			var damage = Math.floor(damage);
			var damagemin = Math.floor(damage*0.9);
			var damagemax = Math.floor(damage*1.1);
			var damage2 = atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2*chky;
			var damage2 = Math.floor(damage2);
			var damagemin2 = Math.floor(damage2*0.9);
			var damagemax2 = Math.floor(damage2*1.1);
			}
		var damagetotal = damage + damage2;
	break;
	case 9: //詠唱
		var mptotal = mptotal + (jikan*dan);
		if(myzokusei == myzokusei2 ||myzokusei2 == 0){
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		}else{
			var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
			var damage = Math.floor(damage);
			var damagemin = Math.floor(damage*0.9);
			var damagemax = Math.floor(damage*1.1);
			var damage2 = atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2*chky;
			var damage2 = Math.floor(damage2);
			var damagemin2 = Math.floor(damage2*0.9);
			var damagemax2 = Math.floor(damage2*1.1);
			}
		var damagetotal = damage + damage2;
	break;
	case 10: //反動蝕・犠牲
		var mptotal = mptotal * sei;
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
	break;
	case 11: //純属性・融合
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

		var mptotal = mptotal + (jou*jyt) + cs;
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
	break;
	case 12: //統一
			switch (sei) {
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
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage2 = atk*(mptotal2/100)*cheh*sseh*dmmp*zkeh2*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damage2 = Math.floor(damage2);
		var damagemin2 = Math.floor(damage2*0.9);
		var damagemax2 = Math.floor(damage2*1.1);
		var damagetotal = damage + damage2;
	break;
	case 13: //連鎖解放
	if(ch>=chj){
			var ch = chj;
		}
		var mptotal = ehtotal+100+((ch/chj)*(jou+cs));
		var damage = atk*(mptotal/100)*sseh*dmmp*zkeh;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
	break;
	case 14: //激化 エンハの乗り方が特殊っぽい
		var mptotal = ((cs+mp)*(Math.pow(bai,ski - 1))+ehtotal);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
	break;
	case 15: //急襲 多分激化の逆
		if(skim==0){
		 mptotal = cs+mp+ehtotal;
		 } else{
		var mptotal = Math.floor(((cs+mp)/(Math.pow(baim,skim))+ehtotal));
		}
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
		var damagetotal = damage + damage2;
	break;
	case 16: //パネル爆破

			var dmmp = eval(csmp)+eval(awmp)-1;
			switch (emzokusei) {
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
				case 5:
					var zkehhi = 1;
					var zkehmizu = 1.5;
					var zkehkami = 0.5;
					var zkehhika = 1;
					var zkehyami = 1;
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
			var damagehi = atk*(((cs+mp+temp))/100)*cheh*ssehhi*dmmp*zkehhi*chky;
			}else{
			var damagehi = 0
			}
			var damagehi = Math.floor(damagehi);
			var damagehitotal = damagehi * panehi ;
			var damagehimin = Math.floor(damagehi*0.9);
			var damagehimax = Math.floor(damagehi*1.1);

			if(panemizu >= 1){
			var damagemizu = atk*(((cs+mp+temp))/100)*cheh*ssehmizu*dmmp*zkehmizu*chky;
			}else{
			var damagemizu = 0
			}

			var damagemizu = Math.floor(damagemizu);
			var damagemizutotal = damagemizu * panemizu ;
			var damagemizumin = Math.floor(damagemizu*0.9);
			var damagemizumax = Math.floor(damagemizu*1.1);

			if(panekami>=1){
			var damagekami = atk*((cs+mp+temp)/100)*cheh*ssehkami*dmmp*zkehkami*chky;
			}else{
			var damagekami = 0
			}
			var damagekami = Math.floor(damagekami);
			var damagekamitotal = damagekami * panekami ;
			var damagekamimin = Math.floor(damagekami*0.9);
			var damagekamimax = Math.floor(damagekami*1.1);

			if(panehika>=1){
			var damagehika = atk*(((cs+mp+temp))/100)*cheh*ssehhika*dmmp*zkehhika*chky;
			}else{
			var damagehika = 0
			}
			var damagehika = Math.floor(damagehika);
			var damagehikatotal = damagehika * panehika ;
			var damagehikamin = Math.floor(damagehika*0.9);
			var damagehikamax = Math.floor(damagehika*1.1);

			if(paneyami>=1){
			var damageyami = atk*(((cs+mp+temp))/100)*cheh*ssehyami*dmmp*zkehyami*chky;
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

	case 17: //撃滅連弾
	var damjou = (jou-mp)/chjou;
	var ehjou = ehtotal/chjou;
	var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var temp = Math.floor(ch/chsyou);
		if(temp>=chjou){
			var temp = chjou;
			}
			var chmptotal = mp+ehjou;
		for (var i=0;i<temp;i++){
			var damage = damage+atk*(chmptotal/100)*cheh*sseh*dmmp*zkeh*chky;
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
	case 18: //天穹大魔術
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
					var damagehi = atk*(mptotal/100)*cheh*ssehhi*dmmp*zkehhi*chky;
					var damagemizu = atk*(mptotal/100)*cheh*ssehmizu*dmmp*zkehmizu*chky;
					var damagekami = atk*(mptotal/100)*cheh*ssehkami*dmmp*zkehkami*chky;
					var damagehika = atk*(mptotal/100)*cheh*ssehhika*dmmp*zkehhika*chky;
					var damageyami = atk*(mptotal/100)*cheh*ssehyami*dmmp*zkehyami*chky;
					var damagemu = atk*(mptotal/100)*cheh*dmmp*chky;
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
	case 19: //詠唱多弾大魔術
	var mptotal = (ehtotal/kaisuu)+mp;
	if(kaisuu<=1) var kaisuu = 1;
	var damage = (atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky)*Math.ceil(kaisuu/2);
	var damage2 = (atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2*chky)*Math.floor(kaisuu/2);
	var damage = Math.floor(damage);
	var damagemin = Math.floor(damage*0.9);
	var damagemax = Math.floor(damage*1.1);
	var damageavg = Math.floor(atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky);
	var damage2 = Math.floor(damage2);
	var damagemin2 = Math.floor(damage2*0.9);
	var damagemax2 = Math.floor(damage2*1.1);
	var damageavg2 = Math.floor(atk*(mptotal/100)*cheh*sseh2*dmmp*zkeh2*chky);
	var damagetotal = damage + damage2;
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
