<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { RouterLink, RouterView } from 'vue-router';
import { reactive, ref } from 'vue'

import axios from "axios";

const labelPosition = ref('right')

// const results = ref([]);
// const id = ref("");
const mail = ref("");
const password = ref("");


// const data = { mail : mail.value, password : password.value}


// onMounted(() => {
//   axios
//     .get("http://localhost/api/users")
//     .then((response) => {
//       results.value = response.data;
//       id.value = response.data[0].id;
//       mail.value = response.data[0].mail;
//       password.value = response.data[0].password;
//       console.log(id.value);
//       console.log(mail.value);
//       console.log(password.value);
//     })
//     .catch((error) => console.log(error));
    
//   });


  const loginCheck = (): void => {
  axios
    .post("http://localhost/api/users/login/" , {
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


</script>


<template>
     <div class="login" >

     
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










