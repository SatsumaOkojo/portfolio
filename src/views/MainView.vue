<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
import type { Ref } from 'vue';

import { RouterLink } from "vue-router";

import axios from "axios";
import { ElButton } from 'element-plus'
import { reactive } from 'vue'


const results = ref([]);
const id = ref("");
const name = ref("");
const facility_name = ref("");
const position_name = ref("");
const event_name = ref("");
const updated_at = ref<Date>();
const created_at = ref<Date>();
const message = ref("");




// const updated_at_str = getStringFromDate(updated_at);
// // console.log(updated_at_str);


 
//  var year_str = updated_at.getFullYear();
//  //月だけ+1すること
//  var month_str = 1 + updated_at.getMonth();
//  var day_str = updated_at.getDate();
//  var hour_str = updated_at.getHours();
//  var minute_str = updated_at.getMinutes();
//  var second_str = updated_at.getSeconds();
 
 
//  format_str = 'YYYY-MM-DD hh:mm:ss';
//  format_str = format_str.replace(/YYYY/g, year_str);
//  format_str = format_str.replace(/MM/g, month_str);
//  format_str = format_str.replace(/DD/g, day_str);
//  format_str = format_str.replace(/hh/g, hour_str);
//  format_str = format_str.replace(/mm/g, minute_str);
//  format_str = format_str.replace(/ss/g, second_str);
 
//  return format_str;
// };

// const updated_atText = 
// console.log(updated_at.toLocaleDateString());

// const updated_at_text = `${updated_at.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
// console.log(updated_at_text);

// const created_atText = `${created_at.getFullYear()}年${created_at.getMonth() + 1}月${created_at.getDate()}日`;
// console.log(created_atText);

onMounted(() => {
  axios
    .get("http://localhost/api/users")
    .then((response) => {
      results.value = response.data;
      id.value = response.data[0].id;
      name.value = response.data[0].name;
      console.log(id.value);
    })
    .catch((error) => console.log(error));
});

onMounted(() => {
  axios
    .get("http://localhost/api/facilities")
    .then((response) => {
      results.value = response.data;
      id.value = response.data[0].id;
      facility_name.value = response.data[0].facility_name;
      console.log(id.value);
    })
    .catch((error) => console.log(error));
});

onMounted(() => {
  axios
    .get("http://localhost/api/positions")
    .then((response) => {
      results.value = response.data;
      id.value = response.data[0].id;
      position_name.value = response.data[0].position_name;
      console.log(id.value);
    })
    .catch((error) => console.log(error));
});

onMounted(() => {
  axios
    .get("http://localhost/api/proposals")
    .then((response) => {
      results.value = response.data;
      id.value = response.data[0].id;
      event_name.value = response.data[0].event_name;
      created_at.value = response.data[0].updated_at;
      console.log(id.value);
    })
    .catch((error) => console.log(error));
});



onMounted(() => {
  axios
    .get("http://localhost/api/messages")
    .then((response) => {
      results.value = response.data;
      id.value = response.data[0].id;
      message.value = response.data[0].message;
      updated_at.value = response.data[0].updated_at;
      console.log(updated_at.value.toLocaleString());
      console.log(id.value);
    })
    .catch((error) => console.log(error));
});

const createMessage = (): void => {
  axios
    .post("http://localhost/api/messages", {
      id: id.value,
      message: "",
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error));
};


const formLabelWidth = '140px'
const dialogFormVisible = ref(false)

var author_id = 1;

</script>




<template>
       <div id="facility">
          <h1>{{ facility_name }}</h1>
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
                
                    <p>{{ created_at }}<br>
                     「{{ event_name }}」更新しました！<br></p>
                     
             </div>
         </div>

           <div class="balloon5">

              <div class="faceicon">
              <img alt="Character2" src="@/assets/Character2.png" />
             <!-- ここに画像を入れる <icon_image_path-->

              <!-- 変数 -->
              <!-- {{position_name}}
                   {{name}} -->
                  <h3>{{ position_name }}<br>
                    {{ name }}</h3>
              </div>
                  <div class="chatting">
                      <div class="says">
                         <p>{{ message }}</p>
                          
                       </div>

                       
                      <div class="sub">
                          <h6>更新日 {{ updated_at }}</h6>   
                             
                             <el-button id="edit" class="red-btn" @click="dialogFormVisible = true"  v-if="author_id !== 4">
                                編集する
                              </el-button>
                                     
                                    <el-dialog v-model="dialogFormVisible" title="メッセージ">
                                        <el-form>
                                           <el-form-item label="Message" :label-width="formLabelWidth">
                                             <el-input v-model="message" autocomplete="off" />
                                            </el-form-item>
                                         </el-form>


                     <template #footer>
                       <span class="dialog-footer">
                                <el-button type="primary" @click="dialogFormVisible = false" v-on:click="createMessage">
                                 更新する
                                </el-button>
                       </span>
                      </template>
                                       </el-dialog>
                           
                         </div>
             </div>
          </div>

</template>

<style>


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

