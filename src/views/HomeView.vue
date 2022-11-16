<template>
  <main>
    <h1 id="top">園のことをもっと知ろう！<br>
               みんなで簡単に情報共有</h1>

    <img alt="wood" class="wood" src="@/assets/wood.jpg" />

        <div class="box">
           <p>こんなことありませんか？</p>
        </div>

        <div id="problem">
          <!-- 困ること3つ -->
            <div class="box_shadow">
                <span>1つ目の困りごと</span>
              <img alt="problem1" class="img" src="@/assets/problem1.png" width=300px height=200px />
              <p>え、こうじゃなかったけ？</p>
            </div>

            <div class="box_shadow">
                <span>2つ目の困りごと</span>
              <img alt="problem2" class="img" src="@/assets/problem2.png" width=300px height=200px />
              <p>あーお昼までに終わらないな</p>
            </div>

            <div class="box_shadow">
                <span>3つ目の困りごと</span>
              <img alt="problem3" class="img" src="@/assets/problem3.png" width=300px height=200px />
              <p>資料どこだ！！</p>
            </div>
         

            <p id="cracker">そこで<br>
              HoikuDiaryでは<br><br>
              これら問題を”手軽に”解決できるように<br>
              最低限必要な機能をまとめてみました！
           </p>
              <img alt="cracker" class="cracker" src="@/assets/cracker.png" />
           
   




      </div>  
  </main>
</template>

<style>
/* 木の画像 */
 .wood {
  min-width:100%;
  height:400px;
 }

/* 下のテキストボックス */
 .box{
    margin : 2.5em 15em ;
    padding : 1em 1.5em ;
    line-height : 1.8 ;
    border : dotted 12px #333;
    border-radius: 50px; 
}

/* 下のテキストボックスの文字 */
.box p {
    margin: 0; 
    padding: 0;
    text-align: center;
    font-weight: bold;
    font-size: 1.3em;
}



@media (min-width: 1024px) {

#top {
  position: absolute;
  font-size: 2.6em;
  font-weight: bold;
  color: #ffffff;
  margin-left: 30px;
}

/* 木の画像 */
  .wood {
  min-width:100%;
  height:400px;
 } 

/* 下のテキストボックス */
 .box {
    margin : 2.5em 15em ;
    padding : 1em 1.5em ;
    line-height : 1.8 ;
    border : dotted 10px #333;
    border-radius: 50px; 
}

/* 下のテキストボックスの文字 */
.box p {
    margin: 0; 
    padding: 0;
    text-align: center;
    font-weight: bold;
    font-size: 1.3em;
}

/* 読み込まれていない？ */
#problem {
  margin: 0 15px;
}

/* 困りごと１．２．３ */
.box_shadow span {
    display: block;
    text-align: center;
    font-size: 1.4em;
    font-weight: 600;
    letter-spacing: .03em;
    line-height: 1.4;
    margin-bottom: 10px;
}
    
/* 3つの問題枠 */
.box_shadow {
    box-shadow: 0 6px 6px 0px rgba(57, 210, 146, 0.258);
    position: relative;
    float: left;
    list-style: none;
    margin: 15px;
    border-radius: 30px; 
}

/* 問題詳細 */
.box_shadow p {
    display: block;
    text-align: center;
    font-size: 1em;
    margin-bottom: 20px;
}

.cracker {
  min-width:100%;
  height:300px;  
}

#cracker {
    position: absolute;
    margin: 20px 200px; 
    padding: 100px;
    text-align: center;
    font-weight: bold;
    font-size: 1.3em;
}



}
</style>
