<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'

import { reactive, ref } from 'vue'

const labelPosition = ref('right')

// //ログインボタン押下で作動
// button.addEventListener('click', () =>{
//   const searchId = document.querySelector('#search-name').value;
//   const searchPassword = document.querySelector('#search-password').value;
//   findUser(searchId,searchPassword);
// });

// /*** 登録しているユーザーを検索する */
// function findUser(searchMail,searchPassword) {
//   // 該当データを取得する
//   const targetData = 
//   userDataList.find((data) => data.mail === searchMail) &&
//   userDataList.find((data) => data.password === searchPassword);
//   // 該当データが存在しなかったら、「該当者なし」と表示して終了
//   if (targetData == null) {
//     searchResult.textContent = 'IDまたはパスワードが違います';
//     return;
//   }

//   //トップ画面へ遷移
//   window.open('https://emotopi.com/', '_blank');
// }
</script>


<template>
     <div class="login">

     
          <div style="margin: 20px" />
             <el-form
               :label-position="labelPosition"
                label-width="100px"
                >

                  <el-form-item label="メールアドレス">
                      <input id="search-mail"/>
                  </el-form-item>

                  <el-form-item label="パスワード">
                       <input id="search-password" />
                  </el-form-item>
             </el-form>
  

                <RouterLink to="/main"><el-button class="red-btn">ログイン</el-button></RouterLink>
                <p id="search-result"></p>
                <!-- ログインできなかったらどうする？ -->
                <p><RouterLink to="/main">パスワードをお忘れの方</RouterLink></p>

    </div>
</template>

<style>

  .login {
    text-align: center;
    margin: 3em auto;
    width: 45%;
    border: 2px solid #bc9244d8;
    background-color: #ffffff;
    box-shadow: 6px 7px 0 0 rgba(108, 73, 47, 0.5);
    padding: 3em;
    border-radius: 10px;
  }
  
@media (min-width: 1024px) {

  .login {
    text-align: center;
    margin: 3em auto;
    width: 40%;
    border: 2px solid #bc9244d8;
    background-color: #ffffff;
    box-shadow: 6px 7px 0 0 rgba(158, 113, 79, 0.5);
    padding: 3em;
    border-radius: 10px;
  }

  .el-form-item {
    margin: 2em;
  }

  .el-form-item__label {
    min-width: 30%;
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
