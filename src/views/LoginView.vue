<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { RouterLink, RouterView } from 'vue-router';
import { reactive, ref } from 'vue'

import axios from "axios";

const labelPosition = ref('right')

const results = ref([]);
const id = ref("");
const mail = ref("");
const password = ref("");





onMounted(() => {
  axios
    .get("http://localhost/api/users")
    .then((response) => {
      results.value = response.data;
      id.value = response.data[0].id;
      mail.value = response.data[0].mail;
      password.value = response.data[0].password;
      console.log(id.value);
      console.log(mail.value);
      console.log(password.value);
    })
    .catch((error) => console.log(error));


    // axios
    // .get("http://localhost/api/users/1")
    // .then((response) => {
    //   results.value = response.data;
    //   console.log(id.value);
    // })
    // .catch((error) => console.log(error))
    
  });

  const loginCheck = (): void => {
  axios
    .get("http://localhost/api/users/${mail}" ,{
                  //  [, config]

      mail: "sawayama23@gmail.com",
      password: "tanaka2022",

    })
    .then((response) => {
      console.log(response);
      document.location.href = "http://127.0.0.1:5173/main";
    })
    .catch((error) => {
      console.log(error);
    });
};





// 自分で考えてたログインチェックの関数
//   const loginCheck = (): void => {
//     axios
//     .get("http://localhost/api/users/sawayama23@gmail.com")
//     .then((response) => {
//       document.location.href = "http://127.0.0.1:5173/main";
//     })
//     .catch((error) => console.log(error));

//   }








//   const userData = [
//   {
//     mail: this.mail,
//     password: this.value,
//   }
// ]

// ↓関数最初で作る
//   const loginCheck = (): void => {
//   axios
//     .get("http://localhost/api/users/入力されたメールとパスワード？", {
//     })
//     .then((response) {
     
//          メインページに行くコード書く

//     })
//     .catch((error) => {
      
//         「ユーザーがありません」を表示させるコードを書く

//     })

    
//  };


// axios.get('/sanctum/csrf-cookie').then(response => {
//     // ログイン…
// })








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



</script>


<template>
     <div class="login">

     
          <div style="margin: 20px" />
             <el-form
               :label-position="labelPosition"
                label-width="100px"
                >

                  <el-form-item label="メールアドレス">
                      <!-- <input id="search-mail"/> -->
                      <el-input v-model="mail" />
                  </el-form-item>

                  <el-form-item label="パスワード">
                       <el-input type="password"  v-model="password" />
                       <!-- <input id="search-password" /> -->
                  </el-form-item>
             </el-form>
  

              <el-button class="red-btn" v-on:click="loginCheck">ログイン</el-button>
                <!--                 <RouterLink to="/main"><el-button class="red-btn">ログイン</el-button></RouterLink> -->
                <p id="search-result"></p>
                <!-- ログインできなかったらどうする？ -->
                <p>パスワードをお忘れの方</p>

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










