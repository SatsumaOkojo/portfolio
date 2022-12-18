<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'

import { reactive, ref } from 'vue'

const labelPosition = ref('right')

const formLabelAlign = reactive({
  mail: '',
  password: '',
})
</script>


<template>
  <div class="yellow">
     <div class="login">

     
          <div style="margin: 20px" />
             <el-form
               :label-position="labelPosition"
                label-width="100px"
               :model="formLabelAlign"
                >

                  <el-form-item label="メールアドレス">
                      <el-input v-model="formLabelAlign.mail" />
                  </el-form-item>

                  <el-form-item label="パスワード">
                       <el-input v-model="formLabelAlign.password" />
                  </el-form-item>
             </el-form>
  

                <RouterLink to="/main"><a href="" class="btn btn--orange btn--cubic btn--shadow">ログイン</a></RouterLink>
                <p><RouterLink to="/main">パスワードをお忘れの方</RouterLink></p>

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

  .login {
    text-align: center;
    margin: auto;
    width: 45%;
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
  }

  .login {
    text-align: center;
    margin: auto;
    width: 50%;
    border: 2px solid #bc9244d8;
    background-color: #ffffff;
    box-shadow: 6px 7px 0 0 rgba(158, 113, 79, 0.5);
    padding: 3em;
    border-radius: 10px;
  }

  .el-form-item {
    margin: 2em;
  }

}
</style>
