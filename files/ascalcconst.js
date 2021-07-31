$('#damaavgtxt').addClass('invisible');
$('#damaavgtxt2').addClass('invisible');
$('#damagef').addClass('invisible');
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
$('#emstxt').addClass('invisible');
$('#kaisuutxt').addClass('invisible');
$('#pnzokuseif').addClass('invisible');
var egd1 = document.getElementById("egd1");
var egd2 = document.getElementById("egd2");
egd1.checked = true ;
var mjk1 = document.getElementById("mjk1");
var mjk2 = document.getElementById("mjk2");
mjk1.checked = true ;
var ehd1 = document.getElementById("ehd1");
var ehd2 = document.getElementById("ehd2");
ehd1.checked = true ;
var tai1 = document.getElementById("tai1");
var tai2 = document.getElementById("tai2");
tai1.checked = true ;
var awmpsel1 = document.getElementById("awmpsel1");
var awmpsel2 = document.getElementById("awmpsel2");
var awmpsel3 = document.getElementById("awmpsel3");
var awmpsel4 = document.getElementById("awmpsel4");
awmpsel1.checked = true ;
var drmp1 = document.getElementById("drmp1");
var drmp2 = document.getElementById("drmp2");
drmp1.checked = true ;
var shmp1 = document.getElementById("shmp1");
var shmp2 = document.getElementById("shmp2");
shmp1.checked = true ;
var bunsansel1 = document.getElementById("bunsansel1");
var bunsansel2 = document.getElementById("bunsansel2");
var bunsansel3 = document.getElementById("bunsansel3");
bunsansel1.checked = true ;
pnzokusei1.checked = true ;
pnzokuseif1.checked = true ;


function zokuseisel() {
		var myzokusei = Number($('#myzokusei').val()); //属性補正
		var myzokusei2 = Number($('#myzokusei2').val()); //属性補正
		if(myzokusei == 6 || myzokusei == myzokusei2) myzokusei2 = 0;
		if(myzokusei2 == 0) {
		$('#pnzokuseif').hide();
		$('#damagef').hide();
		$('#damaavgtxt2').hide();
		}else{
		$('#pnzokuseif').show();
		$('#damagef').show();
		if(bunsansel3.checked == true) $('#damaavgtxt2').show();
		}
};

$("#bunsan").change(function() {
var bunsan = $("input[name='bunsanselbtn']:checked").val();
switch (bunsan) {
	case "bunsan2":
		$('#emstxt').show();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
	break;
	case "bunsan3":
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


function egdsel() {
	if(egd1.checked == true){
		$('#egdtxt').show();
		$('#egdhitxt').hide();
		$('#egdmizutxt').hide();
		$('#egdkamitxt').hide();
		$('#egdhikatxt').hide();
		$('#egdyamitxt').hide();
	}else{
		$('#egdtxt').hide();
		$('#egdhitxt').show();
		$('#egdmizutxt').show();
		$('#egdkamitxt').show();
		$('#egdhikatxt').show();
		$('#egdyamitxt').show();
	}
}
	
function mjksel() {
	if(mjk1.checked == true){
		$('#mjktxt').show();
		$('#mjkhitxt').hide();
		$('#mjkmizutxt').hide();
		$('#mjkkamitxt').hide();
		$('#mjkhikatxt').hide();
		$('#mjkyamitxt').hide();
	}else{
		$('#mjktxt').hide();
		$('#mjkhitxt').show();
		$('#mjkmizutxt').show();
		$('#mjkkamitxt').show();
		$('#mjkhikatxt').show();
		$('#mjkyamitxt').show();
	}
}

function ehdsel() {
	if(ehd1.checked == true){
		$('#ehdtxt').show();
		$('#ehdhitxt').hide();
		$('#ehdmizutxt').hide();
		$('#ehdkamitxt').hide();
		$('#ehdhikatxt').hide();
		$('#ehdyamitxt').hide();
	}else{
		$('#ehdtxt').hide();
		$('#ehdhitxt').show();
		$('#ehdmizutxt').show();
		$('#ehdkamitxt').show();
		$('#ehdhikatxt').show();
		$('#ehdyamitxt').show();
	}
}


