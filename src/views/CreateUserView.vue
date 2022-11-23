<script lang="ts" setup>

import { reactive, ref } from 'vue'

const labelPosition = ref('right')

const formLabelAlign = reactive({
  name: '',
  mail: '',
})
</script>


<template>
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
      <label class="block"><input type="radio" name="position" value="1" checked>園長</label>
      <label class="block"><input type="radio" name="position" value="2" >主任</label>
      <label class="block"><input type="radio" name="position" value="3">0歳児担任</label>
      <label class="block"><input type="radio" name="position" value="4">事務</label>
      <label class="block"><input type="radio" name="position" value="5">栄養士</label>
      <label class="block"><input type="radio" name="position" value="6">保育士</label>
      </el-form-item>
    </el-form>
    
   <a href="" class="btn btn--orange btn--cubic btn--shadow">登録する</a>
   
  
    </div>
    </div>
  </template>

  <style>
.yellow {
    min-height: 100vh;
    display: flex;
    background-color: rgb(252, 255, 212);
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
</style>