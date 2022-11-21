<template>
<div id =skyblue>
<div id="facility">
    <h1>あいうえお保育園</h1>
    </div>

    <div class="wrap2">
      <div class="item2">
        <h1>今月の予定</h1>
        <!-- 変数必要？ -->
        <p>9日  身体測定<br>
           16日  消火避難訓練<br>
           25日  誕生会<br>
           26日  職員会議　園内研修</p>
      </div>

      <div class="item2">
        <h1>更新情報</h1>
        <!-- 変数必要？ -->
        <p>2022.11.19  11月誕生会企画書<br>
           2022.11.15  11月消火避難訓練<br>
           2022.11.1  園長より<br>
           2022.10.30  つぼみ組より</p>
       </div>
    </div>

    <div class="balloon5">
  <div class="faceicon">
    <img alt="Character2" src="@/assets/Character2.png" />
    <!-- ここに画像を入れる <img -->
    <h3>園長<br>
        田中太郎</h3>
  </div>
  <div class="chatting">
    <div class="says">
        <p>法人より行動規制の変更がありました。</p>
      <!-- <p>文章を入れる</p> -->
      <!-- 文字制限も？ -->
    </div>
  </div>
  </div>

  <div class="balloon5">
  <div class="faceicon">
    <img alt="Character2" src="@/assets/Character2.png" />
    <!-- ここに画像を入れる <img -->
    <h3>主任<br>
        佐藤花子</h3>
  </div>
  <div class="chatting">
    <div class="says">
        <p>23日の内科健診はつぼみ組から順に行います。13:30～です。</p>
      <!-- <p>文章を入れる</p> -->
      <!-- 文字制限も？ -->
    </div>
  </div>
</div>

</div>
</template>

<style>

#skyblue {
    background-color: rgb(228, 244, 255);
}

 #facility {
    background-color: rgb(255, 55, 55);
    text-align: center;
    padding: 0.5px;
 }

 #facility h1 {
    color: #ffffff;
 }

 .wrap2 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 10%;
 }

 .item2 {
    padding: 1em;
    width: 40%;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0 6px 6px 0px rgba(33, 93, 222, 0.258);
    border-radius: 20px; 
 }
 
 .balloon5 {
  width: 100%;
  margin: 1.5em 0;
  overflow: hidden;
}

.balloon5 .faceicon {
  float: left;
  margin-right: -90px;
  padding: 20px;
  width: 20%;
  text-align: center;
}

.balloon5 .faceicon img{
  width: 70%;
  height: auto;
  border: solid 3px #ffffff;
  border-radius: 50%;
}

.balloon5 .chatting {
  width: 100%;
  margin-top: 2.3em;
}

.says {
  display: inline-block;
  position: relative; 
  margin: 5px 0 0 105px;
  padding: 17px 13px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow:9px 8px 0 0 rgba(109, 103, 103, 0.5);;
}

.says:after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 18px; 
  left: -24px;
  border: 12px solid transparent;
  border-right: 12px solid #ffffff;
}

.says p {
  margin: 0;
  padding: 0;
}
</style>

