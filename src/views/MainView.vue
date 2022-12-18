<!-- <script lang="ts" setup>

const btn = document.getElementById('btn');
  
  
  btn.addEventListener('click', function() {
  
    prompt('名前を入力してください', '例：佐藤');
  
  });


</script> -->
<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>




<template>
<div id =skyblue>
<div id="facility">
    <h1>あいうえお保育園</h1>
<!-- {[facility_name]} -->
    </div>

    <div class="wrap2">
      <div class="item2">
        <h1>今月の予定</h1>
        <!-- 変数 -->
        <!-- {{day}}日　{{event_name}} -->
        <p>9日      身体測定<br>
           16日     消火避難訓練<br>
           25日     誕生会<br>
           26日     職員会議　園内研修</p>
      </div>

      <div class="item2">
        <h1>更新情報</h1>
        <!-- 変数 -->
        <!-- {{date_time}} {{title}} -->
        <p>2022.11.19  11月誕生会企画書<br>
           2022.11.15  11月消火避難訓練<br>
           2022.11.1  園長より<br>
           2022.10.30  つぼみ組より</p>
       </div>
    </div>

    <div class="balloon5">
  <div class="faceicon">
    <img alt="Character2" src="@/assets/Character2.png" />
    <!-- ここに画像を入れる <icon_image_path-->

    <!-- 変数 -->
    <!-- {{position_name}}
         {{name}} -->
    <h3>園長<br>
        田中太郎</h3>
  </div>
  <div class="chatting">
    <div class="says">
        <p>法人より行動規制の変更がありました。<br>
          ー－－－－－－－－－－－－－ー－－－－－－－－－－－－－－－－
         ー－－－－－－ー－－－－－－－－－－－－－－－－－－－－－－－－</p>
         <!-- {{message}} -->
      <!-- <p>文章を入れる</p> 横幅の指定もできるか、文字が多いとレイアウト崩れる-->
      <!-- 文字制限も？ -->
      <!-- ポップアップ＋変数 -->
    </div>

    <!-- これは役職あるひとだけ -->
    <div class="sub">
    <h6>更新日 2022.11.14 17:00</h6>   
    <!-- {{update_at}} -->
    <!-- <button id="btn"> -->
     <a href="" class="btn btn--red btn--cubic btn--shadow">編集する</a> 
    <!-- </button> -->
  </div>
  </div>
  </div>

  <el-button class="btn btn--red btn--cubic btn--shadow" text @click="dialogVisible = true">
   編集する
  </el-button>

  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
 

  <div class="balloon5">
  <div class="faceicon">
    <img alt="Character2" src="@/assets/Character2.png" />
    <h3>主任<br>
        佐藤花子</h3>
  </div>

  <div class="chatting">
    <div class="says">
        <p>23日の内科健診はつぼみ組から順に行います。13:30～です。</p>
    </div>

    <div class="sub">
    <h6>更新日 2022.11.14 17:00{{}}</h6>
   <a href="" class="btn btn--red btn--cubic btn--shadow">投稿する</a>
  </div>
  </div>
</div>

</div>
</template>

<style>

#skyblue {
    background-color: rgb(148, 223, 255);
    background-image: url(@/assets/trees.png);
    background-position: bottom; 
    background-size: contain;
    background-repeat: no-repeat;
  
}

 #facility {
    background-color: rgb(255, 55, 55);
    text-align: center;
    padding: 0.5px;
 }

 #facility h1 {
    color: #ffffff;
    margin:5px;
    font-size: 2.3em;
 }

 .wrap2 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 1% 10%;
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


.dialog-footer button:first-child {
  margin-right: 10px;
}

.balloon5 .faceicon h3 {
 background-color: #fff;
 border-radius: 30px;
 margin: 1em;
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
  max-width: 60%;
  min-width: 60%;
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

.sub {
 float: right;
 padding: 0 20%;
 display: inline;
}

a.btn--red {
  color: #fff;
  background-color: #e70000;
  border-bottom: 5px solid #b80000;
  border-radius: 50px;
  padding: 0.3em 1.3em;
  margin: 3em;
  font-size: 1.2em;
}

a.btn--red:hover {
  margin-top: 3px;
  color: #fff;
  background: #e70000;
  border-bottom: 2px solid #b80000;
}

a.btn--shadow {
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
}
</style>

