// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by  K-Factory@migiwa

// *****************************************************************************
str_CenterT = '引き分け';
str_CenterB = 'どっちも知らない';

str_ImgPath = 'https://i-cf.quiz.colopl.jp/img/card/middle/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 10;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 0;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
"聖サタニック女学院",
"エターナルクロノス",
"Blader",
"超魔道列伝",
"幻魔特区",
"覇眼戦線",
"Abyss Code",
"天上岬",
"双翼のロストエデン",
"八百万神秘譚",
"黄昏メアレス",
"クロム・マグナ魔道学園",
"空戦のドルキマス",
"古の森の千年桜",
"訣別のクロニクル",
"追憶のレディアント",
"神竜降臨",
"聖なる空のエステレラ",
"その光は淡く碧く",
"魔轟三鉄傑",
"桃娘伝",
"ショコラフォレスト",
"響命クロスディライブ",
"喰牙RIZE",
"夏に咲く君へ",
"シュガーレスバンビーナ",
"眠れる遺跡のアウトランダー",
"Birth Of New Order",
"夢現のMARELESS",
"FairyChord",
"ぽっ！かみさま",
"神都ピカレスク",
"アンダーナイトテイル",
"エニグマフラワーズ",
"アレス・ザ・ヴァンガード"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
[1,"ヴァッカリオ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],["ヴァッカリオ"],["#"],"LzFWUm_card_14558_1.png"],
[1,"アポロニオ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],["アポロニオ"],["#"],"X4Rgsx_card_15052_1.png"],
[1,"ネーレイス",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],["ネーレイス"],["#"],"X4Rgsx_card_15058_1.png"],
[1,"エウブレナ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],["エウブレナ"],["#"],"LzFWUm_card_14555_1.png"],
[1,"リベルティーナ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],["リベルティーナ"],["#"],"X4Rgsx_card_15055_1.png"],
[1,"アレイシア",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],["アレイシア"],["#"],"LzFWUm_card_14552_1.png"],
[1,"エニグマチューリップ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],["エニグマチューリップ"],["#"],"NeD7WC_card_14671_1.png"],
[1,"エニグマサンフラワー",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],["エニグマサンフラワー"],["#"],"NeD7WC_card_14662_1.png"],
[1,"エニグマモーニンググローリー",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],["エニグマモーニンググローリー"],["#"],"NeD7WC_card_14665_1.png"],
[1,"エニグマクローバー",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],["エニグマクローバー"],["#"],"NeD7WC_card_14668_1.png"],
[1,"エニグマブラックリリー",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],["エニグマブラックリリー"],["#"],"NeD7WC_card_14674_1.png"],
[1,"エニグマチェリー",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],["エニグマチェリー"],["#"],"NeD7WC_card_14659_1.png"],
[1,"メメリー",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],["メメリー"],["#"],"7Ck6x9_card_14501_1.png"],
[1,"ピノキオ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],["ピノキオ"],["#"],"7Ck6x9_card_14497_1.png"],
[1,"リコラ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],["リコラ"],["#"],"7Ck6x9_card_14499_1.png"],
[1,"アーシュ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],["アーシュ"],["#"],"7Ck6x9_card_14493_1.png"],
[1,"トルテ",[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],["トルテ"],["#"],"card_11295_1.png"],
[1,"スノウ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],["スノウ"],["#"],"7Ck6x9_card_14495_1.png"],
[1,"ストル",[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],["ストル"],["#"],"card_11298_1.png"],
[1,"ちゆう",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],["ちゆう"],["#"],"yU3Mg4_card_14340_1.png"],
[1,"ケネス",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],["ケネス"],["#"],"card_13059_1.png"],
[1,"リーリャ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],["リーリャ"],["#"],"yU3Mg4_card_14337_1.png"],
[1,"ギャスパー",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],["ギャスパー"],["#"],"card_13062_1.png"],
[1,"桃花",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],["桃花"],["#"],"card_13065_1.png"],
[1,"今久留主好介",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],["今久留主好介"],["#"],"yU3Mg4_card_14334_1.png"],
[1,"コロッココ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],["コロッココ"],["#"],"FKew2i_card_14037_1.png"],
[1,"グレイス",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],["グレイス"],["#"],"Rb46Ag_card_13532_1.png"],
[1,"リュディ",[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],["リュディ"],["#"],"card_11635_1.png"],
[1,"リザ",[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],["リザ"],["#"],"card_11638_1.png"],
[1,"シーヴル",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],["シーヴル"],["#"],"FKew2i_card_14034_1.png"],
[1,"カヌエ",[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],["カヌエ"],["#"],"card_10826_1.png"],
[1,"アーツェ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],["アーツェ"],["#"],"RzP4H3_card_15224_1.png"],
[1,"ルミスフィレス",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],["ルミスフィレス"],["#"],"Ay9E5t_card_13503_1.png"],
[1,"織機ミホロ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],["織機ミホロ"],["#"],"z5Qu9j_card_13809_1.png"],
[1,"鶴音リレイ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],["鶴音リレイ"],["#"],"Ay9E5t_card_13506_1.png"],
[1,"早苗タツマ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],["早苗タツマ"],["#"],"z5Qu9j_card_13812_1.png"],
[1,"ディギィ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],["ディギィ"],["#"],"z5Qu9j_card_13815_1.png"],
[1,"紅鬼ソウヤ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],["紅鬼ソウヤ"],["#"],"Ay9E5t_card_13509_1.png"],
[1,"ロザリア",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],["ロザリア"],["#"],"card_12471_1.png"],
[1,"ラティオ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],["ラティオ"],["#"],"card_12932_1.png"],
[1,"エリン",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],["エリン"],["#"],"card_12474_1.png"],
[1,"アフリト",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],["アフリト"],["#"],"card_12929_1.png"],
[1,"ルシーニア",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],["ルシーニア"],["#"],"card_12935_1.png"],
[1,"ノクス",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],["ノクス"],["#"],"card_12477_1.png"],
[1,"ラーシャ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],["ラーシャ"],["#"],"card_12331_1.png"],
[1,"クロッシュ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],["クロッシュ"],["#"],"card_12340_1.png"],
[1,"リュオン",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],["リュオン"],["#"],"card_12325_1.png"],
[1,"メルテール",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],["メルテール"],["#"],"card_12337_1.png"],
[1,"シリス",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],["シリス"],["#"],"card_12328_1.png"],
[1,"イスカ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],["イスカ"],["#"],"card_12334_1.png"],
[1,"メーベル",[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],["メーベル"],["#"],"card_12176_1.png"],
[1,"ヴィクトリア",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],["ヴィクトリア"],["#"],"card_12164_1.png"],
[1,"シトラ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],["シトラ"],["#"],"card_12173_1.png"],
[1,"エリアナ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],["エリアナ"],["#"],"card_12167_1.png"],
[1,"ルフ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],["ルフ"],["#"],"card_06586_1.png"],
[1,"アルル",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],["アルル"],["#"],"card_12161_1.png"],
[1,"ラト",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],["ラト"],["#"],"card_04357_1.png"],
[1,"ラガッツ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],["ラガッツ"],["#"],"card_11941_1.png"],
[1,"ヴィタ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],["ヴィタ"],["#"],"card_11926_1.png"],
[1,"パスパル",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],["パスパル"],["#"],"card_11938_1.png"],
[1,"キルラ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],["キルラ"],["#"],"card_11929_1.png"],
[1,"マチア",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],["マチア"],["#"],"card_11935_1.png"],
[1,"チェチェ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],["チェチェ"],["#"],"card_11932_1.png"],
[1,"早瀬りん",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],["早瀬りん"],["#"],"card_10986_1.png"],
[1,"あのカラス",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],["あのカラス"],["#"],"card_10990_1.png"],
[1,"プグナ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],["プグナ"],["#"],"card_10485_1.png"],
[1,"ファルク",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],["ファルク"],["#"],"card_10482_1.png"],
[1,"イルーシャ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],["イルーシャ"],["#"],"card_10479_1.png"],
[1,"シューラ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],["シューラ"],["#"],"card_10476_1.png"],
[1,"ミハネ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],["ミハネ"],["#"],"card_10473_1.png"],
[1,"ラディウス",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],["ラディウス"],["#"],"card_10470_1.png"],
[1,"アスピナ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],["アスピナ"],["#"],"card_10470_1.png"],
[1,"ユウェル",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],["ユウェル"],["#"],"card_11203_1.png"],
[1,"レリッシュ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],["レリッシュ"],["#"],"card_10187_1.png"],
[1,"ウィジェッタ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],["ウィジェッタ"],["#"],"card_10190_1.png"],
[1,"アライナ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],["アライナ"],["#"],"card_10181_1.png"],
[1,"ミスティハイド",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],["ミスティハイド"],["#"],"card_10184_1.png"],
[1,"グリット",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],["グリット"],["#"],"card_10178_1.png"],
[1,"エニィ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],["エニィ"],["#"],"card_10175_1.png"],
[1,"ルカ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],["ルカ"],["#"],"card_07559_1.png"],
[1,"パニーラ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],["パニーラ"],["#"],"card_07558_1.png"],
[1,"Y.U.N.A",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["Y.U.N.A"],["#"],"card_09919_1.png"],
[1,"ヤエ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ヤエ"],["#"],"card_09916_1.png"],
[1,"ハツセ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ハツセ"],["#"],"card_09913_1.png"],
[1,"フウカ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["フウカ"],["#"],"card_09910_1.png"],
[1,"ミライ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ミライ"],["#"],"card_09907_1.png"],
[1,"スモモ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["スモモ"],["#"],"card_09904_1.png"],
[1,"ハルヒコ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ハルヒコ"],["#"],"card_12079_1.png"],
[1,"ヒサメ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ヒサメ"],["#"],"card_12073_1.png"],
[1,"トゥーラ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["トゥーラ"],["#"],"card_09826_1.png"],
[1,"ルディオ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ルディオ"],["#"],"card_09832_1.png"],
[1,"メイフウ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["メイフウ"],["#"],"card_09829_1.png"],
[1,"ガトリン",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ガトリン"],["#"],"card_09817_1.png"],
[1,"ダムザ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ダムザ"],["#"],"card_09823_1.png"],
[1,"リエン",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["リエン"],["#"],"card_09820_1.png"],
[1,"テオドール",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["テオドール"],["#"],"card_09704_1.png"],
[1,"シャロン",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["シャロン"],["#"],"card_09701_1.png"],
[1,"ノイン",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ノイン"],["#"],"card_09541_1.png"],
[1,"ヒカリ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ヒカリ"],["#"],"card_09544_1.png"],
[1,"リアラ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["リアラ"],["#"],"card_09553_1.png"],
[1,"クレティア",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["クレティア"],["#"],"card_09556_1.png"],
[1,"マーガレット",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["マーガレット"],["#"],"card_09550_1.png"],
[1,"ソラナ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ソラナ"],["#"],"card_09547_1.png"],
[1,"リタ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["リタ"],["#"],"card_12803_1.png"],
[1,"プリフィカ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["プリフィカ"],["#"],"card_11769_1.png"],
[1,"イヴ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["イヴ"],["#"],"card_12812_1.png"],
[1,"リンゼ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["リンゼ"],["#"],"yoI2aq_card_14547_1.png"],
[1,"レガート",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["レガート"],["#"],"card_07695_1.png"],
[1,"ザッハ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ザッハ"],["#"],"card_07694_1.png"],
[1,"ミネバ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ミネバ"],["#"],"card_07693_1.png"],
[1,"バス",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["バス"],["#"],"card_09426_1.png"],
[1,"シャンユン",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["シャンユン"],["#"],"card_09423_1.png"],
[1,"ゼリィ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ゼリィ"],["#"],"card_09422_1.png"],
[1,"スーチャ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["スーチャ"],["#"],"card_09428_1.png"],
[1,"クロエ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["クロエ"],["#"],"card_09427_1.png"],
[1,"ウォルバ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ウォルバ"],["#"],"card_09424_1.png"],
[1,"ザノガラッゾ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ザノガラッゾ"],["#"],"card_09425_1.png"],
[1,"ヴシュトナーザ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ヴシュトナーザ"],["#"],"card_09430_1.png"],
[1,"イケル",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["イケル"],["#"],"card_09454_1.png"],
[1,"アデレード",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アデレード"],["#"],"card_09441_1.png"],
[1,"リティカ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["リティカ"],["#"],"card_09451_1.png"],
[1,"アマイヤ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アマイヤ"],["#"],"card_09457_1.png"],
[1,"パメラ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["パメラ"],["#"],"card_09429_1.png"],
[1,"メモリア",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["メモリア"],["#"],"card_09249_1.png"],
[1,"アイ(金)",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アイ(金)"],["#"],"card_09258_1.png"],
[1,"アイ(銀)",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アイ(銀)"],["#"],"card_09261_1.png"],
[1,"ティシカ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ティシカ"],["#"],"card_09252_1.png"],
[1,"アーデ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アーデ"],["#"],"card_09246_1.png"],
[1,"ゼドー",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ゼドー"],["#"],"card_09255_1.png"],
[1,"イストワーレ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["イストワーレ"],["#"],"card_09326_1.png"],
[1,"クロノワ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["クロノワ"],["#"],"card_09327_1.png"],
[1,"プリュム",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["プリュム"],["#"],"card_09324_1.png"],
[1,"メティース",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["メティース"],["#"],"card_09325_1.png"],
[1,"トート",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["トート"],["#"],"card_08139_1.png"],
[1,"ツツジ",[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ツツジ"],["#"],"card_09192_1.png"],
[1,"ヤヤコ",[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ヤヤコ"],["#"],"card_09194_1.png"],
[1,"マツリ",[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["マツリ"],["#"],"card_09193_1.png"],
[1,"フィオナ",[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["フィオナ"],["#"],"card_09191_1.png"],
[1,"キャナル",[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["キャナル"],["#"],"card_06478_1.png"],
[1,"クラリア",[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["クラリア"],["#"],"card_06487_1.png"],
[1,"ケーニギン",[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ケーニギン"],["#"],"card_12595_1.png"],
[1,"ジーク",[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ジーク"],["#"],"card_11317_1.png"],
[1,"ディートリヒ",[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ディートリヒ"],["#"],"card_06469_1.png"],
[1,"フェリクス",[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["フェリクス"],["#"],"card_09039_1.png"],
[1,"プルミエ",[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["プルミエ"],["#"],"card_06484_1.png"],
[1,"ライサ",[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ライサ"],["#"],"card_06475_1.png"],
[1,"リクシス",[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["リクシス"],["#"],"card_09093_1.png"],
[1,"ルヴァル",[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ルヴァル"],["#"],"card_06481_1.png"],
[1,"レベッカ",[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["レベッカ"],["#"],"card_09042_1.png"],
[1,"ロレッティ",[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ロレッティ"],["#"],"card_12592_1.png"],
[1,"ローヴィ",[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ローヴィ"],["#"],"card_06472_1.png"],
[1,"ヴィラム",[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ヴィラム"],["#"],"card_06490_1.png"],
[1,"MIUMIU",[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["MIUMIU"],["#"],"card_06144_1.png"],
[1,"アーシア",[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アーシア"],["#"],"card_06145_1.png"],
[1,"エマ",[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["エマ"],["#"],"card_06206_1.png"],
[1,"エミリア",[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["エミリア"],["#"],"card_06147_1.png"],
[1,"カエデ",[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["カエデ"],["#"],"card_06146_1.png"],
[1,"シャーリー",[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["シャーリー"],["#"],"card_06142_1.png"],
[1,"ニコラ",[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ニコラ"],["#"],"card_06140_1.png"],
[1,"リンカ",[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["リンカ"],["#"],"card_06138_1.png"],
[1,"ヴォルフ",[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ヴォルフ"],["#"],"card_06141_1.png"],
[1,"イツキ",[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["イツキ"],["#"],"card_06139_1.png"],
[1,"アメリー",[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アメリー"],["#"],"card_08887_1.png"],
[1,"ヒビキ",[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ヒビキ"],["#"],"card_08881_1.png"],
[1,"サユリ",[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["サユリ"],["#"],"card_08884_1.png"],
[1,"ダンケル",[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ダンケル"],["#"],"card_08875_1.png"],
[1,"アムベル",[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アムベル"],["#"],"card_08878_1.png"],
[1,"ラギト",[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ラギト"],["#"],"card_09352_1.png"],
[1,"ミリィ",[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ミリィ"],["#"],"card_09361_1.png"],
[1,"コピシュ",[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["コピシュ"],["#"],"card_09358_1.png"],
[1,"ゼラード",[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ゼラード"],["#"],"card_09355_1.png"],
[1,"レッジ",[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["レッジ"],["#"],"card_09364_1.png"],
[1,"リフィル",[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["リフィル"],["#"],"card_09346_1.png"],
[1,"ルリアゲハ",[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ルリアゲハ"],["#"],"card_09349_1.png"],
[1,"アルティミシア",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アルティミシア"],["#"],"card_10636_1.png"],
[1,"エトワール",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["エトワール"],["#"],"card_04391_1.png"],
[1,"キュウマ",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["キュウマ"],["#"],"card_10645_1.png"],
[1,"コノハ",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["コノハ"],["#"],"card_06813_1.png"],
[1,"ジェスロ",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ジェスロ"],["#"],"card_08820_1.png"],
[1,"スオウ",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["スオウ"],["#"],"card_08811_1.png"],
[1,"セイ",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["セイ"],["#"],"card_08814_1.png"],
[1,"ツクヨ",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ツクヨ"],["#"],"card_06810_1.png"],
[1,"ツバキ",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ツバキ"],["#"],"card_10639_1.png"],
[1,"トウマ",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["トウマ"],["#"],"card_08136_1.png"],
[1,"トミ",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["トミ"],["#"],"card_05807_1.png"],
[1,"ハヅキ",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ハヅキ"],["#"],"card_10642_1.png"],
[1,"マトイ",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["マトイ"],["#"],"card_05804_1.png"],
[1,"マリナ",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["マリナ"],["#"],"card_08817_1.png"],
[1,"ミコト",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ミコト"],["#"],"card_10633_1.png"],
[1,"メリエル",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["メリエル"],["#"],"card_05878_1.png"],
[1,"キリエ",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["キリエ"],["#"],"card_04213_1.png"],
[1,"ユウギリ",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ユウギリ"],["#"],"W4ripe_card_13174_1.png"],
[1,"サクト",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["サクト"],["#"],"W4ripe_card_13177_1.png"],
[1,"アヤツグ",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アヤツグ"],["#"],"W4ripe_card_13162_1.png"],
[1,"アカリ",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アカリ"],["#"],"6jkA1x_card_14843_1.png"],
[1,"ヨミチ",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ヨミチ"],["#"],"6jkA1x_card_14849_1.png"],
[1,"ミオ",[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ミオ"],["#"],"W4ripe_card_13165_1.png"],
[1,"アルドベリク",[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アルドベリク"],["#"],"card_06868_1.png"],
[1,"イザーク",[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["イザーク"],["#"],"card_06879_1.png"],
[1,"クィントゥス",[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["クィントゥス"],["#"],"card_11644_1.png"],
[1,"クリネア",[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["クリネア"],["#"],"card_06882_1.png"],
[1,"シミラル",[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["シミラル"],["#"],"card_09129_1.png"],
[1,"ミカエラ",[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ミカエラ"],["#"],"card_06875_1.png"],
[1,"ルシエラ",[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ルシエラ"],["#"],"card_06871_1.png"],
[1,"ヴェレフキナ",[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ヴェレフキナ"],["#"],"card_09126_1.png"],
[1,"ベアード",[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ベアード"],["#"],"card_07331_1.png"],
[1,"アネーロ",[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アネーロ"],["#"],"card_07330_1.png"],
[1,"ブレド",[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ブレド"],["#"],"card_07332_1.png"],
[1,"カルテロ",[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["カルテロ"],["#"],"card_07333_1.png"],
[1,"リグス",[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["リグス"],["#"],"card_07274_1.png"],
[1,"ナルナ",[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ナルナ"],["#"],"card_07277_1.png"],
[1,"ロニール",[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ロニール"],["#"],"card_07280_1.png"],
[1,"ヤネット",[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ヤネット"],["#"],"card_07271_1.png"],
[1,"フェルチ",[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["フェルチ"],["#"],"card_07268_1.png"],
[1,"ファム",[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ファム"],["#"],"card_07265_1.png"],
[1,"リィル",[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["リィル"],["#"],"card_13640_1.png"],
[1,"エテルネ",[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["エテルネ"],["#"],"card_13637_1.png"],
[1,"アステラ",[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アステラ"],["#"],"gMIjw4_card_14135_1.png"],
[1,"カイン",[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["カイン"],["#"],"card_06773_1.png"],
[1,"カルム",[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["カルム"],["#"],"card_06767_1.png"],
[1,"テルミド",[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["テルミド"],["#"],"card_06770_1.png"],
[1,"ニティア",[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ニティア"],["#"],"card_06776_1.png"],
[1,"ニレイヌ",[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ニレイヌ"],["#"],"card_06779_1.png"],
[1,"ミルドレッド",[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ミルドレッド"],["#"],"card_10298_1.png"],
[1,"アマカド",[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アマカド"],["#"],"card_07869_1.png"],
[1,"ガンドゥ",[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ガンドゥ"],["#"],"card_07867_1.png"],
[1,"ゲルデハイラ",[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ゲルデハイラ"],["#"],"card_07868_1.png"],
[1,"ジミー",[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ジミー"],["#"],"card_07866_1.png"],
[1,"アシュタル",[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アシュタル"],["#"],"card_07887_1.png"],
[1,"ルミア",[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ルミア"],["#"],"card_07891_1.png"],
[1,"アリオテス",[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アリオテス"],["#"],"card_12869_1.png"],
[1,"アーサー",[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アーサー"],["#"],"card_12878_1.png"],
[1,"オリアンヌ",[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["オリアンヌ"],["#"],"card_12881_1.png"],
[1,"カノン",[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["カノン"],["#"],"card_07881_1.png"],
[1,"セリアル",[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["セリアル"],["#"],"card_07884_1.png"],
[1,"ハクア",[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ハクア"],["#"],"card_07878_1.png"],
[1,"マイア",[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["マイア"],["#"],"card_10324_1.png"],
[1,"リヴェータ",[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["リヴェータ"],["#"],"card_07872_1.png"],
[1,"ルドヴィカ",[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ルドヴィカ"],["#"],"card_07875_1.png"],
[1,"アサギ",[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アサギ"],["#"],"card_05955_1.png"],
[1,"アッカ",[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アッカ"],["#"],"card_05293_1.png"],
[1,"アトヤ",[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アトヤ"],["#"],"card_05952_1.png"],
[1,"コベニ",[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["コベニ"],["#"],"card_05969_1.png"],
[1,"キワム",[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["キワム"],["#"],"card_05943_1.png"],
[1,"スミオ",[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["スミオ"],["#"],"card_05287_1.png"],
[1,"トキオ",[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["トキオ"],["#"],"card_05290_1.png"],
[1,"ミュール",[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ミュール"],["#"],"card_05958_1.png"],
[1,"ヤチヨ",[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ヤチヨ"],["#"],"card_05296_1.png"],
[1,"タイシ",[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["タイシ"],["#"],"card_12662_1.png"],
[1,"テーラ",[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["テーラ"],["#"],"card_12653_1.png"],
[1,"ピリア",[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ピリア"],["#"],"card_12659_1.png"],
[1,"ファルサ",[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ファルサ"],["#"],"card_12665_1.png"],
[1,"レグル",[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["レグル"],["#"],"card_12650_1.png"],
[1,"ヴァレウス",[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ヴァレウス"],["#"],"card_12656_1.png"],
[1,"イーニア",[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["イーニア"],["#"],"card_08435_1.png"],
[1,"アリエッタ",[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アリエッタ"],["#"],"card_06361_1.png"],
[1,"エリス",[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["エリス"],["#"],"card_06373_1.png"],
[1,"ソフィ",[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ソフィ"],["#"],"card_06367_1.png"],
[1,"レナ",[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["レナ"],["#"],"card_06370_1.png"],
[1,"リルム",[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["リルム"],["#"],"card_06364_1.png"],
[1,"アウラ",[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アウラ"],["#"],"card_06109_1.png"],
[1,"アヴィン",[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アヴィン"],["#"],"card_06403_1.png"],
[1,"クオン",[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["クオン"],["#"],"card_06137_1.png"],
[1,"ルルベル(大)",[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ルルベル(大)"],["#"],"card_06110_1.png"],
[1,"ステイシー",[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ステイシー"],["#"],"card_10883_1.png"],
[1,"セリーヌ",[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["セリーヌ"],["#"],"card_10878_1.png"],
[1,"アリス",[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["アリス"],["#"],"card_10875_1.png"],
[1,"ダム",[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ダム"],["#"],"card_04268_1.png"],
[1,"ディー",[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ディー"],["#"],"card_04267_1.png"],
[1,"イレーナ",[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["イレーナ"],["#"],"card_10884_1.png"],
[1,"ユッカ",[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ユッカ"],["#"],"card_05400_1.png"],
[1,"セティエ",[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["セティエ"],["#"],"card_10838_1.png"],
[1,"イーディス",[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["イーディス"],["#"],"card_08023_1.png"],
[1,"ウリシラ",[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ウリシラ"],["#"],"card_08017_1.png"],
[1,"エレイン",[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["エレイン"],["#"],"card_11026_1.png"],
[1,"カナメ",[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["カナメ"],["#"],"card_08029_1.png"],
[1,"クルス",[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["クルス"],["#"],"card_08026_1.png"],
[1,"ミィア",[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ミィア"],["#"],"card_08020_1.png"],
[1,"ルルベル(小)",[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ルルベル(小)"],["#"],"card_08013_1.png"],
[1,"ユスティー",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ユスティー"],["#"],"card_09625_1.png"],
[1,"リアーネ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["リアーネ"],["#"],"card_09627_1.png"],
[1,"エレニ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["エレニ"],["#"],"card_09628_1.png"],
[1,"ペトラ",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["ペトラ"],["#"],"card_09626_1.png"]
];

