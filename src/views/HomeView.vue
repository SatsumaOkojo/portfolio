<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <h1 id="top">園のことをもっと知ろう！<br>
               みんなで簡単に情報共有</h1>

    <h3 id="top2">
          保育・教育施設向け
    </h3>

    <img alt="wood" class="wood" src="@/assets/wood3.png" />


        <div class="box">
           <p>こんなことありませんか？</p>
        </div>

             <div class="wrap">
                 <div class="item">
                     <h3>情報共有がうまくいかない</h3>
                     <img alt="problem1" src="@/assets/problem1.png" width=300px height=200px />
                     <p>伝達ミスや認識の違いによって<br>トラブルが起きてしまう</p>
                  </div>

                 <div class="item">
                     <h3>会議等が入り仕事が終わらない</h3>
                     <img alt="problem2" src="@/assets/problem2.png" width=300px height=200px />
                     <p>時間に余裕がなくなり<br>保育の質が下がってしまう</p>
                  </div>

                 <div class="item">
                     <h3>欲しい資料をいつでも確認できない</h3>
                     <img alt="problem3" src="@/assets/problem3.png" width=300px height=200px />
                    <p>ファイルが1つしかない為<br>他の人が持って行ってしまうと<br>見ることができない</p>
                 </div>
             </div>


               <div class="center">
                  <p>そこで<br>
                     HoikuDiaryでは<br><br>
                     これら問題を”手軽に”解決できるように<br>
                     最低限必要な機能をまとめてみました！
                  </p>
                    <img alt="cracker" class="cracker" src="@/assets/cracker.png"  />
  

                  <div class="box2">
                     <h1>メインページ</h1>
                  </div>
                      <div class="box3">
                         <h2>月の行事　更新のお知らせ　職員からのお知らせ　<br>
                             園長先生や各クラスからのお知らせ等まとめて見ることができます！</h2>
                      </div>
                         <img alt="mainpage" class="sample_page"  src="@/assets/mainpage.png"  />
         
        
                   <div class="box2">
                      <h1>行事企画書</h1>
                   </div>
                      <div class="box3">
                          <h2>行事の企画書を確認できます！<br>
                          作成した企画書は随時まとめられるのでいつでも見られますよ</h2>
                      </div>
                         <img alt="proposal" class="sample_page"  src="@/assets/proposal.png" width="87%" />
         
                      <div class="box3">
                          <h4>他にも園での決まり事をまとめたページや献立表等も載せられます！<br>
                              これだけでも、園の情報がよくわかるのではないでしょうか<br>
                              これらを活用して園のことをもっと知り、簡単に情報が共有できるようにしませんか？<br><br>
                              お気軽にお問い合わせください</h4>
                       </div>   
    
                            <RouterLink to="/signup"><el-button class="red-btn">新規登録</el-button></RouterLink>
                            <el-button class="red-btn">お問い合わせ</el-button>

             </div>

</template>




<style>

main {
  background-color:  #fffde9;
  margin: 0 10px;
  height: 100%;
  background-image: url(@/assets/trees.png);
  background-position: bottom; 
  background-size: contain;
  background-repeat: no-repeat;
}
/* 木の画像 */
 .wood {
  min-width: 80%;
  height: 400px;
  margin: 0 10%;
 }

 #top {
  position: absolute;
  font-size: 1.8em;
  font-weight: bold;
  color: #ffffff;
  margin-left: 30px;
}

#top2 {
  position: absolute;
  margin: 12em;
  font-size: 1.3em;
  color: #fff;
}

/* 下のテキストボックス */
 .box{
    margin : 2.5em auto ;
    padding : 1em ;
    line-height : 1.8 ;
    border : dotted 10px #333;
    border-radius: 50px; 
    background-color: #fff;
}

/* 下のテキストボックスの文字 */
.box p {
    margin: auto; 
    padding: 0;
    text-align: center;
    font-weight: bold;
    font-size: 1.3em;
}

/* 問題かこみ */
.wrap {
  display: block;
  flex-wrap: wrap;
  margin: 0 30px;
}

/* 問題中身 */
.item {
  padding: 20px;
  width: 100%;
  text-align: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 6px 6px 0px rgba(57, 210, 146, 0.258);
  border-radius: 50px; 
}

/* クラッカー枠 */
.center {
  text-align: center;
}

/* クラッカー中身 */
.center p {
    position: absolute; 
    text-align: center;
    font-weight: bold;
    font-size: 1.3em;
    margin: 5em 31%;
}

/* クラッカーimg */
.cracker {
  min-width:80%;
  height:300px;  
  padding: 0 30px;
}






@media (min-width: 1024px) {

main {
  background-color:  #fffde9;
  margin: 0 10px;
}

  #top {
  position: absolute;
  font-size: 2.6em;
  font-weight: bold;
  color: #ffffff;
  margin-left: 30px;
}

/* 木の画像 */
  .wood {
  width: 50%;
 } 

/* 下のテキストボックス */
 .box {
    margin : 3em 20em 4em 20em ;
    padding : 1em 1.5em ;
    line-height : 1.8 ;
    border : dotted 10px #333;
    border-radius: 50px; 
    background-color: #fff;
}

/* 下のテキストボックスの文字 */
.box p {
    margin: 0; 
    padding: 0;
    text-align: center;
    font-weight: bold;
    font-size: 1.3em;
}

/* 問題かこみ */
.wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 30px;
}

/* 問題中身 */
.item {
  padding: 20px;
  width: 29%;
  text-align: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 6px 6px 0px rgba(57, 210, 146, 0.258);
  border-radius: 50px; 
}

/* クラッカー枠 */
.center {
  text-align: center;
}

/* クラッカー中身 */
.center p {
    position: absolute; 
    text-align: center;
    font-weight: bold;
    font-size: 1.3em;
    margin: 5em 30%;
    padding: auto;
}

/* クラッカーimg */
.cracker {
  min-width:75%;
  height:300px;  
  padding: 0 30px;
}

/* 見出し枠 */
.box2 {
    padding: 0.6em 1.9em;
    margin: 2em 30%;
    text-align: center;
    background-color: #ffc6c6;/*背景色*/
    box-shadow: 0 0 0 8px #ffc6c6;/*背景色外側*/
    border: 2px dashed #ffffff;/*線*/
}

/* 見出し中身 */
.box2 h1 {
    font-size: 1.8em;
    color: #fff;
    margin: 0 ; 
    padding: 0 ;
}

/* ページ紹介枠 */
.box3 {
  border: 3px solid #c46a03d8;
  padding: 0.8em;
  margin: 0 15% 2em 15%;
  border-radius: 50px; 
  background-color: #fff;
}

/* ページ紹介 */
.box3 h2 {
  font-size: 0.9em;
}


/* メインページと企画書のページ */
.sample_page {
  margin: 0 0 60px 0;
  border: 1px solid #919191d8;
}

.red-btn {
  background-color: #ff3700;
  color: #fff;
  border: 2px solid #ad3100;
  border-radius: 50px;
  padding: 0.3em 1.3em;
  margin: 2em;
  font-size: 1.2em;
  box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
}

@media not all and (min-width: 768px) {
  .item {
    width: 100%;
  }

  .item:not(:last-child) {
    margin-bottom: 30px;
  }
}


}
</style>
