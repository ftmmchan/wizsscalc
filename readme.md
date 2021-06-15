黒ウィズのダメージ計算機です(あまり検証していません。)  

ソースの改造とかは自由です  

公開場所
https://ftmmchan.github.io/wizsscalc/

情報提供は [@chandot_1923](https://twitter.com/chandot_1923)までお願いします。

***  

以下計算式まとめ(一部Wiztoolsより引用)  

>ダメージ計算式(AS)  
>わざわざASと銘打ってるのは、ASの場合とSSの場合で計算式が違うためです。  
>その計算式は、以下のようになります(AS)。  
>damage = 0.5 × 攻撃力 × 攻撃倍率 × (1 + チェイン×0.01) × パネル補正 × 属性相性 × 補正値 × 乱数  
>各項目について補足すると、  
>・攻撃力　　： 精霊の攻撃力です。デッキ画面や精霊ステータス画面で「攻撃」と書いてある数字です。  
>・攻撃倍率　： ASの威力です。エンハンスやブーストなどの値はここに足されます。  
>・チェイン　： 解答後のチェイン数を参照します。チェイン数が大きいと無視できなくなってきます。  
>・パネル補正： 攻撃色とパネルの色が一致しない場合×0.5します(副属性での攻撃時など)。  
>・属性相性　： 有利属性相手なら×1.5、不利属性相手なら×0.5をかけます。  
>・補正値　　： 潜在(結晶)による倍率補正をかけます。アドヴェリタスの×1.2などがここです。  
>・乱数　　　： 0.9～1.1までの値を連続にとります。ログ表記では小数点三桁以降を省略しています。  
>  
>具体例をあげて説明すると、キュウマ(水属性, 攻撃力6535, 1.1倍潜在発動中)がASを発動(倍率6.0)させて同属性の敵を攻撃した時、主属性の与えるダメージは  
>攻撃力(6535/2) * 倍率(6+0+0) * チェイン(1.01) * パネル(1) * 属性相性(1) * 補正値(1.1) * 乱数(0.97) = ダメージ(21044)  
  
>ダメージ計算式(SS)  
>SSの場合のダメージ計算式ですが、ASの場合と殆ど同じです（0.5倍がなくなっているだけ）。  
>damage = 攻撃力 × 攻撃倍率 × (1 + チェイン×0.01) × 属性相性 × 補正値 × 乱数  
>攻撃倍率と省略していますが、ここにエンハンスやブーストがかかります。以降の説明でも同様です。  
>ちなみにカウンターでのダメージ量はこの式で計算します。そのため、少ない効果値でも実際には大きなダメージが与えられるのです。  
>
>ダメージ計算式(時限)  
>時限大魔術のダメージ計算では、乱数の処理が行われていません。また、チェイン補正のかかり方も異なります。  
>damage = floor(攻撃力 × floor{効果値+1+(チェイン×0.01)} × 属性相性)  
>floorは切り捨てを意味します。また、チェイン数は発動時のものを参照します。  
>式を見ても分かるように、乱数が絡まないので同じ条件で同時に発動すると同じダメージになります。  
以下の計算式に変更された模様（時期不明）  
damage = floor(攻撃力 × floor{効果値×(チェイン×0.01)× 属性相性} )  

特効・残滅大魔術・カウンター  
効果値に＋１００で計算される。

蓄積解放などゲージが存在するもの  
効果値は初期効果値＋上限値×ゲージの割合で計算される。  

純属性・融合・統一大魔術  
4体以下の場合の効果値変動は以下の通り  

純属性・融合  
1体 上限値の10%  
2体 上限値の15%  
3体 上限値の25%  
4体 上限値の35%  

統一  
1体 上限値の10%  
2体 上限値の15%  
3体 上限値の20%  
4体 上限値の25%  

連鎖解放  
上方修正でチェインに比例するように変更された。  
以下変更前の計算式  
>rate = floor(最低保証値 + 最大効果値 * (現在ch/最大ch)^2.5)  

発動時にチェインがなくなるためチェイン補正は乗らない。  
  
激化大魔術  
エンハンスは倍になった後の効果値に乗る模様。  
  
パネル爆破大魔術  
エンハンスはパネル色数で割った数値が乗る模様。  
全属性のダメージを考慮するため入力項目が非常に多くなっています。  
  
撃滅連弾  
効果値の計算がかなり特殊なので要検証。  
チェインがなくなるか攻撃回数上限までチェインを消費し、攻撃した回数分効果値を増やす。  
エンハンスは攻撃回数で割った数値が乗るっぽい。
