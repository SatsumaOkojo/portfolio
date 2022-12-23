<script lang="ts" setup>

import { reactive, ref } from 'vue'

import { ElMessage, ElMessageBox } from 'element-plus'

const open = () => {
  ElMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}

const labelPosition = ref('right')

const formLabelAlign = reactive({
  name: '',
  mail: '',
  password: '',
  corporation: '',
  facility: '',
})

var author_id = 3;
</script>


<template>
  <div class="yellow">
    <div id="mypage">
        <div class="float_box-wrap">
 
 
           <div class="float_box">
             <img alt="Character2" src="@/assets/Character2.png" />
             <a href=""><br>画像を変更する</a>
           </div>

                <div class="float_text">
                   
                    <el-form-item  v-if="author_id == 1" label="法人名"> 
                      <el-input v-model="formLabelAlign.corporation" /> 
                    </el-form-item>

                     <el-form-item v-if="author_id == 1" label="園名"> 
                       <el-input v-model="formLabelAlign.facility" /> 
                     </el-form-item>
                    <!-- 　ここまで園長だけ -->


                     <el-form-item label="ユーザー名"> 
                         <el-input v-model="formLabelAlign.name" /> 
                     </el-form-item>

                     <el-form-item label="メールアドレス">
                         <el-input v-model="formLabelAlign.mail" />
                     </el-form-item>

                     <el-form-item label="パスワード">
                          <el-input v-model="formLabelAlign.password" />
                     </el-form-item>

    
                        <RouterLink to="/"><el-button class="red-btn">更新する</el-button></RouterLink>

                   </div>
         </div>
      </div>
  </div>
</template>

<style>
 .yellow {
    min-height: 100vh;
    display: flex;
    background-color: rgb(252, 255, 212);
    background-image: url(@/assets/trees.png);
   background-position: bottom; 
   background-size: contain;
   background-repeat: no-repeat;
  }

  #mypage {
    text-align: center;
    margin: auto;
    width: 50%;
    height: 300px;
    border: 2px solid #bc9244d8;
    background-color: #ffffff;
    box-shadow: 6px 7px 0 0 rgba(108, 73, 47, 0.5);
    padding: 3em;
    border-radius: 10px;
  }


@media (min-width: 1024px) {
  .yellow {
    min-height: 100vh;
    display: flex;
    background-color: rgb(252, 255, 212);
    border-radius: 10px;
  }

  #mypage {
    text-align: center;
    margin: 4em auto;
    width: 45%;
    height: 70%;
    border: 2px solid #bc9244d8;
    background-color: #ffffff;
    box-shadow: 6px 7px 0 0 rgba(158, 113, 79, 0.5);
    padding: 2em;
  }


.float_box {
    padding: 0.5em;         /* 箱の大きさ調整 */
    width: 120px;               /* 箱の大きさ調整 */
    text-align: center;         /* テキストをセンタリング */
    /* 背景色設定 */
    float:  left;               /* 要素を右に回り込ませる */
}

.float_box img {
  width: 70%;
  height: auto;
  border: solid 3px #8f8080;
  border-radius: 50%;
}

.float_box a {
    margin: 1em;
    font-size: 0.8em;
}
 
.float_text {
    float: left;                /* 要素を右に回り込ませる */
    width: calc(100% - 140px);  /* 文字の箱の大きさ調整 */
}

.el-form-item {
    margin-bottom: 2em;
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

}
</style>
