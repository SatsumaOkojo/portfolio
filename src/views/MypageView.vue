<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { RouterLink } from "vue-router";
import axios from "axios";
import { reactive, ref } from "vue";
import { Edit } from "@element-plus/icons-vue";

const labelPosition = ref("right");
const results = ref([]);
const id = ref("");
const name = ref("");
const mail = ref("");
const password = ref("");
const facility_name = ref("");
const corporation = ref("");
const position_name = ref("");

onMounted(() => {
  axios
    .get("http://hoikudiary-env.eba-5qvm4cyt.us-east-2.elasticbeanstalk.com/api/users")
    .then((response) => {
      results.value = response.data;
      id.value = response.data[2].id;
      name.value = response.data[2].name;
      mail.value = response.data[2].mail;
      password.value = response.data[2].password;
      console.log(id.value);
    })
    .catch((error) => console.log(error));

  axios
    .get("http://hoikudiary-env.eba-5qvm4cyt.us-east-2.elasticbeanstalk.com/api/facilities")
    .then((response) => {
      results.value = response.data;
      id.value = response.data[0].id;
      facility_name.value = response.data[0].facility_name;
      corporation.value = response.data[0].corporation;
      console.log(id.value);
    })
    .catch((error) => console.log(error));

  axios
    .get("http://hoikudiary-env.eba-5qvm4cyt.us-east-2.elasticbeanstalk.com/api/positions")
    .then((response) => {
      results.value = response.data;
      id.value = response.data[2].id;
      position_name.value = response.data[2].position_name;
      console.log(id.value);
    })
    .catch((error) => console.log(error));
});

const updateUserName = (): void => {
  axios
    .put("http://hoikudiary-env.eba-5qvm4cyt.us-east-2.elasticbeanstalk.com/api/users/1", {
      name: name.value,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error));
};

const updateMail = (): void => {
  axios
    .put("http://hoikudiary-env.eba-5qvm4cyt.us-east-2.elasticbeanstalk.com/api/users/", {
      mail: mail.value,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error));
};

const deleteUser = (): void => {
  axios
    .delete("http://localhost/api/users/", {})
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error));
};
const formLabelWidth = "140px";
const dialogFormVisible = ref(false);
const dialogFormVisible2 = ref(false);
var author_id = 1;
</script>

<template>
  <el-button type="success" id="navButton"
    ><RouterLink to="/main" id="white">戻る</RouterLink></el-button
  >

  <div id="mypage">
    <div class="float_box-wrap">
      <div class="float_box">
        <img alt="Character2" src="@/assets/Character2.png" />

        <RouterLink to="/"
          ><el-button class="green-btn" v-on:click="deleteUser"
            >退会する</el-button
          ></RouterLink
        >
      </div>

      <div class="float_text">
        <el-form-item v-if="author_id == 1" label="法人名">
          <h4>{{ corporation }}</h4>
        </el-form-item>

        <el-form-item v-if="author_id == 1" label="園名">
          <h4>{{ facility_name }}</h4>
        </el-form-item>

        <el-form-item label="ユーザー名">
          <h4>
            {{ name
            }}<el-button
              type="primary"
              :icon="Edit"
              circle
              @click="dialogFormVisible = true"
            />
          </h4>
        </el-form-item>

        <el-form-item label="メールアドレス">
          <h4>
            {{ mail
            }}<el-button
              type="primary"
              :icon="Edit"
              circle
              @click="dialogFormVisible2 = true"
            />
          </h4>
        </el-form-item>

        <el-dialog v-model="dialogFormVisible" title="ユーザー名">
          <el-form>
            <el-form-item label="" :label-width="formLabelWidth">
              <el-input v-model="name" autocomplete="off" />
            </el-form-item>
          </el-form>

          <template #footer>
            <span class="dialog-footer">
              <el-button
                type="primary"
                @click="dialogFormVisible = false"
                v-on:click="updateUserName"
              >
                更新する
              </el-button>
            </span>
          </template>
        </el-dialog>

        <el-dialog v-model="dialogFormVisible2" title="メールアドレス">
          <el-form>
            <el-form-item label="" :label-width="formLabelWidth">
              <el-input v-model="mail" autocomplete="off" />
            </el-form-item>
          </el-form>

          <template #footer>
            <span class="dialog-footer">
              <el-button
                type="primary"
                @click="dialogFormVisible2 = false"
                v-on:click="updateMail"
              >
                更新する
              </el-button>
            </span>
          </template>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<style>
#navButton {
  font-weight: bold;
  margin: 1em 3em;
  background-color: #ff6eaf;
  border: 2px solid #fc9fbb;
  border-radius: 20px;
  padding: 20px;
}

#mypage {
  text-align: center;
  margin: auto;
  width: 65%;
  height: 420px;
  border: 2px solid #bc9244d8;
  background-color: #ffffff;
  box-shadow: 6px 7px 0 0 rgba(108, 73, 47, 0.5);
  padding: 3em;
  border-radius: 10px;
}

.faceicon img {
  width: 70%;
  height: auto;
  border: solid 3px #ffffff;
  border-radius: 50%;
}

.el-form-item {
  margin-bottom: 0.3em;
}

.el-form-item p {
  text-decoration: underline;
}
@media (min-width: 1024px) {
  #mypage {
    text-align: center;
    margin: 4em auto;
    width: 60%;
    height: 420px;
    border: 2px solid #bc9244d8;
    background-color: #ffffff;
    box-shadow: 6px 7px 0 0 rgba(158, 113, 79, 0.5);
    padding: 2em;
  }

  .float_box {
    padding: 0.5em; /* 箱の大きさ調整 */
    width: 200px;
    height: 70%; /* 箱の大きさ調整 */
    text-align: center; /* テキストをセンタリング */
    float: left; /* 要素を右に回り込ませる */
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
    float: left; /* 要素を右に回り込ませる */
    width: calc(87% - 140px); /* 文字の箱の大きさ調整 */
  }

  .el-form-item__label {
    padding-right: 2em;
    width: 9em;
    max-width: 9em;
  }

  .el-form-item {
    margin-bottom: 2em;
  }

  .el-form-item h4 {
    text-decoration: underline;
  }

  .red-btn {
    background-color: #ff3700;
    color: #fff;
    border: 2px solid #ad3100;
    border-radius: 50px;
    padding: 0.3em 1.3em;
    margin: 2em;
    font-size: 1.2em;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  }

  .green-btn {
    background-color: #00a835;
    color: #fff;
    border: 2px solid #036502;
    border-radius: 50px;
    padding: 0.3em 1.3em;
    margin: 2em;
    font-size: 1.2em;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  }
}
</style>
