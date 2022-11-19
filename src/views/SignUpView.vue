<script lang="ts" setup>
import { reactive, ref } from 'vue'

const labelPosition = ref('right')

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
</script>


<template>
  <div class="sign">
    <div class="signup">
    <h1>新規登録</h1>
    
    <div style="margin: 20px" />
  <el-form
    :label-position="labelPosition"
    label-width="100px"
    :model="formLabelAlign"
    style="max-width: 460px"
  >
    <el-form-item label="法人名">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="園名">
      <el-input v-model="formLabelAlign.region" />
    </el-form-item>
    <el-form-item label="メールアドレス">
      <el-input v-model="formLabelAlign.type" />
    </el-form-item>
  </el-form>
    </div>
  </div>
</template>

<style>

.sign {
    min-height: 100vh;
    display: flex;
    margin: 0px;
    background-color: rgb(218, 255, 255);
  }

  .signup {
    text-align: center;
    margin: auto;
    width: 45%;
    border: 2px solid #5cbec7d8;
    background-color: #ffffff;
    box-shadow: 6px 7px 0 0 rgba(109, 103, 103, 0.5);
    padding: 3em;
  }


@media (min-width: 1024px) {
  .sign {
    min-height: 100vh;
    display: flex;
    margin: 0px;
    background-color: rgb(218, 255, 255);
  }

  .signup {
    text-align: center;
    margin: auto;
    width: 45%;
    border: 2px solid #52bfc9d8;
    background-color: #ffffff;
    box-shadow: 6px 7px 0 0 rgba(109, 103, 103, 0.5);
    padding: 3em;
  }
}
</style>
