<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { h } from 'vue'
import { ElMessage } from 'element-plus'

const open = () => {
  ElMessage('ユーザー登録完了しました')
}




const labelPosition = ref('right')

const formLabelAlign = reactive({
  name: '',
  mail: '',
})
</script>


<template v-if="author == 1">
    <div class="yellow">

        <div class="create_user">
           <h1>ユーザー作成</h1>

            <div style="margin: 20px" />
               <el-form
                  :label-position="labelPosition"
                   label-width="100px"
                   :model="formLabelAlign"
                   style="max-width: 460px"
                     >

                        <el-form-item label="ユーザー名">
                            <el-input v-model="formLabelAlign.name" />
                        </el-form-item>

                        <el-form-item label="メールアドレス">
                            <el-input v-model="formLabelAlign.mail" />
                        </el-form-item>
      
                        <el-form-item label="役職">
                            <!-- 役職に権限ついている -->
                            <!-- {{position_name}} {{author_id}} -->
                            <select id="position">
                             <option>主任</option>
                             <option>副主任</option>
                             <option>0歳児担任</option>
                             <option>1歳児担任</option>
                             <option>2歳児担任</option>
                             <option>3歳児担任</option>
                             <option>4歳児担任</option>
                             <option>5歳児担任</option>
                             <option>合同クラス担任</option>
                             <option>事務</option>
                             <option>栄養士</option>
                             <option>看護師</option>
                             <option>保育士</option>
                            </select>
                         </el-form-item>
                           
                </el-form>
    
                  <el-button class="red-btn">登録する</el-button>
   
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

  .create_user {
    text-align: center;
    margin: 2em auto;
    width: 35%;
    height: auto;
    border: 2px solid #bc9244d8;
    background-color: #ffffff;
    box-shadow: 6px 7px 0 0 rgba(108, 73, 47, 0.5);
    padding: 3em;
    border-radius: 10px;
  }

  .el-form-item {
    padding-bottom: 2em;
  }

  .block {
    display: block;
    margin: 1em;
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