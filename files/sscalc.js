$('#tikutxt').addClass('invisible');
$('#joutxt').addClass('invisible');
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
$('#egdhitxt').addClass('invisible');
$('#egdmizutxt').addClass('invisible');
$('#egdkamitxt').addClass('invisible');
$('#egdhikatxt').addClass('invisible');
$('#egdyamitxt').addClass('invisible');
$('#mjkhitxt').addClass('invisible');
$('#mjkmizutxt').addClass('invisible');
$('#mjkkamitxt').addClass('invisible');
$('#mjkhikatxt').addClass('invisible');
$('#mjkyamitxt').addClass('invisible');
$('#ehdhitxt').addClass('invisible');
$('#ehdmizutxt').addClass('invisible');
$('#ehdkamitxt').addClass('invisible');
$('#ehdhikatxt').addClass('invisible');
$('#ehdyamitxt').addClass('invisible');
$('#dametxt').addClass('invisible');
$('#panedame').addClass('invisible');
$('#chjoutxt').addClass('invisible');
$('#chsyoutxt').addClass('invisible');
$('#seikaitxt').addClass('invisible');
$('#mudame').addClass('invisible');
$('#joustxt').addClass('invisible');
$('#skimtxt').addClass('invisible');
$('#baimtxt').addClass('invisible');

$("#ss_type").change(function() {
var ss = Number($('#ss_type').val());
switch (Number(ss)) {
	case 1:
		$('#mzokusei').show();
		$('#mptxt').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
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
		$('#egdhitxt').hide();
		$('#egdmizutxt').hide();
		$('#egdkamitxt').hide();
		$('#egdhikatxt').hide();
		$('#egdyamitxt').hide();
		$('#mjkhitxt').hide();
		$('#mjkmizutxt').hide();
		$('#mjkkamitxt').hide();
		$('#mjkhikatxt').hide();
		$('#mjkyamitxt').hide();
		$('#ehdhitxt').hide();
		$('#ehdmizutxt').hide();
		$('#ehdkamitxt').hide();
		$('#ehdhikatxt').hide();
		$('#ehdyamitxt').hide();
		$('#ehdtxt').show();
		$('#egdtxt').show();
		$('#mjktxt').show();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
	break;
	case 2:
		$('#mptxt').show();
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
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
		$('#egdhitxt').hide();
		$('#egdmizutxt').hide();
		$('#egdkamitxt').hide();
		$('#egdhikatxt').hide();
		$('#egdyamitxt').hide();
		$('#mjkhitxt').hide();
		$('#mjkmizutxt').hide();
		$('#mjkkamitxt').hide();
		$('#mjkhikatxt').hide();
		$('#mjkyamitxt').hide();
		$('#ehdhitxt').hide();
		$('#ehdmizutxt').hide();
		$('#ehdkamitxt').hide();
		$('#ehdhikatxt').hide();
		$('#ehdyamitxt').hide();
		$('#ehdtxt').show();
		$('#egdtxt').show();
		$('#mjktxt').show();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
	break;
	case 3: //蓄積%
		$('#mptxt').hide();
		$('#mzokusei').show();
		$('#tikutxt').show();
		$('#joutxt').show();
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
		$('#egdhitxt').hide();
		$('#egdmizutxt').hide();
		$('#egdkamitxt').hide();
		$('#egdhikatxt').hide();
		$('#egdyamitxt').hide();
		$('#mjkhitxt').hide();
		$('#mjkmizutxt').hide();
		$('#mjkkamitxt').hide();
		$('#mjkhikatxt').hide();
		$('#mjkyamitxt').hide();
		$('#ehdhitxt').hide();
		$('#ehdmizutxt').hide();
		$('#ehdkamitxt').hide();
		$('#ehdhikatxt').hide();
		$('#ehdyamitxt').hide();
		$('#ehdtxt').show();
		$('#egdtxt').show();
		$('#mjktxt').show();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').show();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
	break;
	case 4: //カウント
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').show();
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
		$('#egdhitxt').hide();
		$('#egdmizutxt').hide();
		$('#egdkamitxt').hide();
		$('#egdhikatxt').hide();
		$('#egdyamitxt').hide();
		$('#mjkhitxt').hide();
		$('#mjkmizutxt').hide();
		$('#mjkkamitxt').hide();
		$('#mjkhikatxt').hide();
		$('#mjkyamitxt').hide();
		$('#ehdhitxt').hide();
		$('#ehdmizutxt').hide();
		$('#ehdkamitxt').hide();
		$('#ehdhikatxt').hide();
		$('#ehdyamitxt').hide();
		$('#ehdtxt').show();
		$('#egdtxt').show();
		$('#mjktxt').show();
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
	break;
	case 5:
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
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
		$('#egdhitxt').hide();
		$('#egdmizutxt').hide();
		$('#egdkamitxt').hide();
		$('#egdhikatxt').hide();
		$('#egdyamitxt').hide();
		$('#mjkhitxt').hide();
		$('#mjkmizutxt').hide();
		$('#mjkkamitxt').hide();
		$('#mjkhikatxt').hide();
		$('#mjkyamitxt').hide();
		$('#ehdhitxt').hide();
		$('#ehdmizutxt').hide();
		$('#ehdkamitxt').hide();
		$('#ehdhikatxt').hide();
		$('#ehdyamitxt').hide();
		$('#ehdtxt').show();
		$('#egdtxt').show();
		$('#mjktxt').show();
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
	break;
	case 6: //反転解除
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
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
		$('#egdhitxt').hide();
		$('#egdmizutxt').hide();
		$('#egdkamitxt').hide();
		$('#egdhikatxt').hide();
		$('#egdyamitxt').hide();
		$('#mjkhitxt').hide();
		$('#mjkmizutxt').hide();
		$('#mjkkamitxt').hide();
		$('#mjkhikatxt').hide();
		$('#mjkyamitxt').hide();
		$('#ehdhitxt').hide();
		$('#ehdmizutxt').hide();
		$('#ehdkamitxt').hide();
		$('#ehdhikatxt').hide();
		$('#ehdyamitxt').hide();
		$('#ehdtxt').show();
		$('#egdtxt').show();
		$('#mjktxt').show();
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
	break;
	case 7: //詠唱
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
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
		$('#egdhitxt').hide();
		$('#egdmizutxt').hide();
		$('#egdkamitxt').hide();
		$('#egdhikatxt').hide();
		$('#egdyamitxt').hide();
		$('#mjkhitxt').hide();
		$('#mjkmizutxt').hide();
		$('#mjkkamitxt').hide();
		$('#mjkhikatxt').hide();
		$('#mjkyamitxt').hide();
		$('#ehdhitxt').hide();
		$('#ehdmizutxt').hide();
		$('#ehdkamitxt').hide();
		$('#ehdhikatxt').hide();
		$('#ehdyamitxt').hide();
		$('#ehdtxt').show();
		$('#egdtxt').show();
		$('#mjktxt').show();
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
	break;
	case 8: //反動蝕・犠牲
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
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
		$('#egdhitxt').hide();
		$('#egdmizutxt').hide();
		$('#egdkamitxt').hide();
		$('#egdhikatxt').hide();
		$('#egdyamitxt').hide();
		$('#mjkhitxt').hide();
		$('#mjkmizutxt').hide();
		$('#mjkkamitxt').hide();
		$('#mjkhikatxt').hide();
		$('#mjkyamitxt').hide();
		$('#ehdhitxt').hide();
		$('#ehdmizutxt').hide();
		$('#ehdkamitxt').hide();
		$('#ehdhikatxt').hide();
		$('#ehdyamitxt').hide();
		$('#ehdtxt').show();
		$('#egdtxt').show();
		$('#mjktxt').show();
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
	break;
	case 9: //純属性・融合・統一
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').show();
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
		$('#egdhitxt').hide();
		$('#egdmizutxt').hide();
		$('#egdkamitxt').hide();
		$('#egdhikatxt').hide();
		$('#egdyamitxt').hide();
		$('#mjkhitxt').hide();
		$('#mjkmizutxt').hide();
		$('#mjkkamitxt').hide();
		$('#mjkhikatxt').hide();
		$('#mjkyamitxt').hide();
		$('#ehdhitxt').hide();
		$('#ehdmizutxt').hide();
		$('#ehdkamitxt').hide();
		$('#ehdhikatxt').hide();
		$('#ehdyamitxt').hide();
		$('#ehdtxt').show();
		$('#egdtxt').show();
		$('#mjktxt').show();
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
	break;
	case 10: //純属性・融合・統一
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').show();
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
		$('#egdhitxt').hide();
		$('#egdmizutxt').hide();
		$('#egdkamitxt').hide();
		$('#egdhikatxt').hide();
		$('#egdyamitxt').hide();
		$('#mjkhitxt').hide();
		$('#mjkmizutxt').hide();
		$('#mjkkamitxt').hide();
		$('#mjkhikatxt').hide();
		$('#mjkyamitxt').hide();
		$('#ehdhitxt').hide();
		$('#ehdmizutxt').hide();
		$('#ehdkamitxt').hide();
		$('#ehdhikatxt').hide();
		$('#ehdyamitxt').hide();
		$('#ehdtxt').show();
		$('#egdtxt').show();
		$('#mjktxt').show();
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
	break;
	case 11: //連鎖解放
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').show();
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
		$('#egdhitxt').hide();
		$('#egdmizutxt').hide();
		$('#egdkamitxt').hide();
		$('#egdhikatxt').hide();
		$('#egdyamitxt').hide();
		$('#mjkhitxt').hide();
		$('#mjkmizutxt').hide();
		$('#mjkkamitxt').hide();
		$('#mjkhikatxt').hide();
		$('#mjkyamitxt').hide();
		$('#ehdhitxt').hide();
		$('#ehdmizutxt').hide();
		$('#ehdkamitxt').hide();
		$('#ehdhikatxt').hide();
		$('#ehdyamitxt').hide();
		$('#ehdtxt').show();
		$('#egdtxt').show();
		$('#mjktxt').show();
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
	break;
	case 12: //激化 エンハの乗り方が特殊っぽい
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
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
		$('#egdhitxt').hide();
		$('#egdmizutxt').hide();
		$('#egdkamitxt').hide();
		$('#egdhikatxt').hide();
		$('#egdyamitxt').hide();
		$('#mjkhitxt').hide();
		$('#mjkmizutxt').hide();
		$('#mjkkamitxt').hide();
		$('#mjkhikatxt').hide();
		$('#mjkyamitxt').hide();
		$('#ehdhitxt').hide();
		$('#ehdmizutxt').hide();
		$('#ehdkamitxt').hide();
		$('#ehdhikatxt').hide();
		$('#ehdyamitxt').hide();
		$('#ehdtxt').show();
		$('#egdtxt').show();
		$('#mjktxt').show();
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
	break;
	case 13: //急襲 多分激化の逆
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
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
		$('#egdhitxt').hide();
		$('#egdmizutxt').hide();
		$('#egdkamitxt').hide();
		$('#egdhikatxt').hide();
		$('#egdyamitxt').hide();
		$('#mjkhitxt').hide();
		$('#mjkmizutxt').hide();
		$('#mjkkamitxt').hide();
		$('#mjkhikatxt').hide();
		$('#mjkyamitxt').hide();
		$('#ehdhitxt').hide();
		$('#ehdmizutxt').hide();
		$('#ehdkamitxt').hide();
		$('#ehdhikatxt').hide();
		$('#ehdyamitxt').hide();
		$('#ehdtxt').show();
		$('#egdtxt').show();
		$('#mjktxt').show();
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
	break;
	case 14: //パネル爆破 
		$('#mzokusei').hide();
		$('#tikutxt').hide();
		$('#joutxt').hide();
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
		$('#egdhitxt').show();
		$('#egdmizutxt').show();
		$('#egdkamitxt').show();
		$('#egdhikatxt').show();
		$('#egdyamitxt').show();
		$('#mjkhitxt').show();
		$('#mjkmizutxt').show();
		$('#mjkkamitxt').show();
		$('#mjkhikatxt').show();
		$('#mjkyamitxt').show();
		$('#ehdhitxt').show();
		$('#ehdmizutxt').show();
		$('#ehdkamitxt').show();
		$('#ehdhikatxt').show();
		$('#ehdyamitxt').show();
		$('#ehdtxt').hide();
		$('#egdtxt').hide();
		$('#mjktxt').hide();
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
	break;
	case 15:  //撃滅連弾
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').show();
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
		$('#egdhitxt').hide();
		$('#egdmizutxt').hide();
		$('#egdkamitxt').hide();
		$('#egdhikatxt').hide();
		$('#egdyamitxt').hide();
		$('#mjkhitxt').hide();
		$('#mjkmizutxt').hide();
		$('#mjkkamitxt').hide();
		$('#mjkhikatxt').hide();
		$('#mjkyamitxt').hide();
		$('#ehdhitxt').hide();
		$('#ehdmizutxt').hide();
		$('#ehdkamitxt').hide();
		$('#ehdhikatxt').hide();
		$('#ehdyamitxt').hide();
		$('#ehdtxt').show();
		$('#egdtxt').show();
		$('#mjktxt').show();
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
	break;
	case 16: //天穹大魔術
		$('#mzokusei').hide();
		$('#tikutxt').hide();
		$('#joutxt').hide();
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
		$('#egdhitxt').show();
		$('#egdmizutxt').show();
		$('#egdkamitxt').show();
		$('#egdhikatxt').show();
		$('#egdyamitxt').show();
		$('#mjkhitxt').show();
		$('#mjkmizutxt').show();
		$('#mjkkamitxt').show();
		$('#mjkhikatxt').show();
		$('#mjkyamitxt').show();
		$('#ehdhitxt').show();
		$('#ehdmizutxt').show();
		$('#ehdkamitxt').show();
		$('#ehdhikatxt').show();
		$('#ehdyamitxt').show();
		$('#ehdtxt').hide();
		$('#egdtxt').hide();
		$('#mjktxt').hide();
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
	break;
	default: //大魔術 基本的なやつ
		$('#mzokusei').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
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
		$('#egdhitxt').hide();
		$('#egdmizutxt').hide();
		$('#egdkamitxt').hide();
		$('#egdhikatxt').hide();
		$('#egdyamitxt').hide();
		$('#mjkhitxt').hide();
		$('#mjkmizutxt').hide();
		$('#mjkkamitxt').hide();
		$('#mjkhikatxt').hide();
		$('#mjkyamitxt').hide();
		$('#ehdhitxt').hide();
		$('#ehdmizutxt').hide();
		$('#ehdkamitxt').hide();
		$('#ehdhikatxt').hide();
		$('#ehdyamitxt').hide();
		$('#ehdtxt').show();
		$('#egdtxt').show();
		$('#mjktxt').show();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#mptxt').show();
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
var emzokusei = Number($('#emzokusei').val()); //属性補正
var chch = Number($('#chch').val()); //
var chky = 1+((chch*ch)/100); //連鎖狂化効果
var jou = Number($('#jou').val()); //効果値上限値
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

var dmmp = csmp+awmp+drmp-2;
switch (Number(ss)) {
	case 1: //大魔術
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 2: //特効・残滅大魔術・カウンター
		var mptotal = mptotal + 100;
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);

	break;
	case 3: //蓄積%
		var mptotal = ehtotal+jous+((tiku/100)*jou);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 4: //カウント
		var mptotal = ehtotal+100+((kau/kauj)*jou);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 5: //時限 計算式が特殊かつ乱数の影響を受けない
		//var damage = Math.floor(Math.floor(atk*(Math.floor((mptotal/100)+cheh))*zkeh)*sseh*dmmp*chky);
		var mptotal = mptotal + 100;
		var damage = Math.floor(Math.floor(Math.floor(atk*(Math.floor(Math.floor((mptotal/100)))*zkeh*cheh))*sseh*dmmp)*chky);
		var damagemin = damage;
		var damagemax = damage;
	break;
	case 6: //反転解除
		var mptotal = mptotal + (sei*dan);
		var damage = atk*((mptotal/100))*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 7: //詠唱
		var mptotal = mptotal + (jikan*dan);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 8: //反動蝕・犠牲
		var mptotal = mptotal * sei;
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 9: //純属性・融合
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
	break;
	case 10: //統一
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
		var mptotal = mptotal + (jou*jyt) + cs;
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 11: //連鎖解放
	if(ch>=chj){
			var ch = chj;
		}
		var mptotal = ehtotal+100+((ch/chj)*(jou+cs));
		var damage = atk*(mptotal/100)*sseh*dmmp*zkeh;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 12: //激化 エンハの乗り方が特殊っぽい
		var mptotal = ((cs+mp)*(Math.pow(bai,ski - 1))+ehtotal);
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 13: //急襲 多分激化の逆
		if(skim==0){
		 mptotal = cs+mp+ehtotal;
		 } else{
		var mptotal = Math.floor(((cs+mp)/(Math.pow(baim,skim))+ehtotal));
		}
		var damage = atk*(mptotal/100)*cheh*sseh*dmmp*zkeh*chky;
		var damage = Math.floor(damage);
		var damagemin = Math.floor(damage*0.9);
		var damagemax = Math.floor(damage*1.1);
	break;
	case 14: //パネル爆破
			var ssehhi = (1-(egdhi/100))*(1+(mjkhi/100))*(1+(ehdhi/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
			var ssehmizu = (1-(egdmizu/100))*(1+(mjkmizu/100))*(1+(ehdmizu/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
			var ssehkami = (1-(egdkami/100))*(1+(mjkkami/100))*(1+(ehdkami/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
			var ssehhika = (1-(egdhika/100))*(1+(mjkhika/100))*(1+(ehdhika/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
			var ssehyami = (1-(egdyami/100))*(1+(mjkyami/100))*(1+(ehdyami/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正

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
		break;

	case 15: //撃滅連弾
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
		
	break;
	case 16: //天穹大魔術
			var ssehhi = (1-(egdhi/100))*(1+(mjkhi/100))*(1+(ehdhi/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
			var ssehmizu = (1-(egdmizu/100))*(1+(mjkmizu/100))*(1+(ehdmizu/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
			var ssehkami = (1-(egdkami/100))*(1+(mjkkami/100))*(1+(ehdkami/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
			var ssehhika = (1-(egdhika/100))*(1+(mjkhika/100))*(1+(ehdhika/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
			var ssehyami = (1-(egdyami/100))*(1+(mjkyami/100))*(1+(ehdyami/100))*(1-(taisei/100))*(1+(jakutai/100)); //敵被ダメージ補正
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
	break;
	default: 
	alert('スキルを選択してください');
}
$('#damage').val(damage);
$('#damagemax').val(damagemax);
$('#damagemin').val(damagemin);
$('#damagehi').val(damagehi);
$('#damagemizu').val(damagemizu);
$('#damagekami').val(damagekami);
$('#damagehika').val(damagehika);
$('#damageyami').val(damageyami);
$('#damagemu').val(damagemu);
 });
