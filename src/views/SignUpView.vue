<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'

import { reactive, ref } from 'vue'

const centerDialogVisible = ref(false)

const labelPosition = ref('right')

const formLabelAlign = reactive({
  name: '',
  mail: '',
  password: '',
  corporation: '',
  facility_name: '',
})


</script>


<template>
  <div class="sign">
     <div class="signup">
    
          <div style="margin: 20px" />
              <el-form
                 :label-position="labelPosition"
                  label-width="100px"
                 :model="formLabelAlign"
                  style="max-width: 460px"
                 >

                   <el-form-item  label="法人名">
                      <el-input v-model="formLabelAlign.corporation" />
                   </el-form-item>

                   <el-form-item  label="園名">
                      <el-input v-model="formLabelAlign.facility_name" />
                   </el-form-item>

                   <el-form-item label="ユーザー名">
                      <el-input v-model="formLabelAlign.name" />
                   </el-form-item>

                   <el-form-item label="メールアドレス">
                      <el-input v-model="formLabelAlign.mail" />
                   </el-form-item>

                   <el-form-item label="パスワード">
                      <el-input v-model="formLabelAlign.password" />
                   </el-form-item>

                      
			                <el-button text @click="centerDialogVisible = true"><input type="checkbox" id="consent-chk" name="consent-chk">
    利用規約に同意する
  </el-button>

  <el-dialog
    v-model="centerDialogVisible"
    title="利用規約"
    width="30%"
    align-center
  >
    <span>利用規約が書かれています</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">閉じる</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          確認
        </el-button>
      </span>
    </template>
  </el-dialog>
                  <RouterLink to="/login"><el-button class="red-btn">新規登録</el-button></RouterLink>   
    
                  </el-form>
                </div>
  </div>
</template>

<style>

.sign {
    background-image: url(@/assets/trees.png);
    background-position: bottom; 
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    margin: 0px;
    background-color: rgb(218, 255, 255);
  }

  .signup {
    text-align: center;
    margin: auto;
    width: 40%;
    border: 2px solid #5cbec7d8;
    background-color: #ffffff;
    box-shadow: 6px 7px 0 0 rgba(193, 193, 193, 0.242);
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
    width: 40%;
    border: 2px solid #52bfc9d8;
    background-color: #ffffff;
    box-shadow: 6px 7px 0 0 rgba(148, 148, 148, 0.5);
    padding: 1em;
  }

  .el-form {
    margin: 1em 2em;
  }

  .el-form-item{
    margin-bottom: 1.5em;
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
