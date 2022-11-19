<script lang="ts" setup>
import { reactive, ref } from 'vue'

const labelPosition = ref('right')

const formLabelAlign = reactive({
  name: '',
  region: '',
})
</script>


<template>
  <div class="yellow">
    <div class="login">
    <h1>ログイン</h1>

     
    <div style="margin: 20px" />
  <el-form
    :label-position="labelPosition"
    label-width="100px"
    :model="formLabelAlign"
    style="max-width: 460px"
  >
    <el-form-item label="メールアドレス">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="パスワード">
      <el-input v-model="formLabelAlign.region" />
    </el-form-item>
  </el-form>

  </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .yellow {
    min-height: 100vh;
    display: flex;
    background-color: rgb(252, 255, 212);
  }

  .login {
    text-align: center;
    margin: auto;
    width: 45%;
    border: 2px solid #bc9244d8;
    background-color: #ffffff;
    box-shadow: 6px 7px 0 0 rgba(108, 73, 47, 0.5);
    padding: 3em;
  }
}
</style>
