<script lang="ts" setup>
import { ElButton } from 'element-plus'
import { reactive, ref } from 'vue'
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

var author_id = 4;

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
                  <h3>園長{{ position_name }}<br>
                    田中太郎{{ name }}</h3>
              </div>
                  <div class="chatting">
                      <div class="says">
                         <p>法人より行動規制の変更がありました。{{ message }}<br>
                            ー－－－－－－－－－－－－－ー－－－－－－－－－－－－－－－－
                            ー－－－－－－ー－－－－－－－－－－－－－－－－－－－－－－－－</p>
                           <!-- {{message}} -->
                     
                           <!-- 文字制限も？ -->
                           <!-- ポップアップ＋変数 -->
                       </div>

                        <!-- これは役職あるひとだけ -->
                      <div class="sub">
                          <h6>更新日 2022.11.14 17:00{{ update_at }}</h6>   
                             <!-- {{update_at}} -->
                             <el-button id="edit" @click="dialogFormVisible = true"  v-if="author_id !== 4">
                                編集する
                              </el-button>
                                     
                                    <el-dialog v-model="dialogFormVisible" title="メッセージ">
                                        <el-form :model="form">
                                           <el-form-item label="Message" :label-width="formLabelWidth">
                                             <el-input v-model="form.name" autocomplete="off" />
                                            </el-form-item>
                                         </el-form>


                     <template #footer>
                       <span class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">戻る</el-button>
                                <el-button type="primary" @click="dialogFormVisible = false">
                                 更新する
                                </el-button>
                       </span>
                      </template>
                                       </el-dialog>
                             <!-- <el-button id ="edit-btn" class="red-btn">編集する</el-button> 
                              権限ID4以外の人だけ表示 v-if="author == !4" -->
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
</style>

