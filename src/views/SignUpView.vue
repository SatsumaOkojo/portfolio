<script lang="ts" setup>
import { RouterLink, RouterView } from "vue-router";
import axios from "axios";
import { reactive, ref } from "vue";

const centerDialogVisible = ref(false);

const labelPosition = ref("right");

const results = ref([]);
const id = ref("");
const corporation = ref("");
const facility_name = ref("");
const name = ref("");
const mail = ref("");
const password = ref("");

const signUp = (): void => {
  axios
    .post(import.meta.env.BASE_URL + "/api/facilities", {
      corporation: corporation.value,
      facility_name: facility_name.value,
      delete_at: "2023-02-05",
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error));
};

const signUp2 = (): void => {
  axios
    .post(import.meta.env.BASE_URL + "/api/users", {
      name: name.value,
      mail: mail.value,
      password: password.value,
      position_id: "1",
      facility_id: "2",
      icon_image_path: "image1",
      delete_at: "2023-02-05",
    })
    .then((response) => {
      console.log(response.data);
      document.location.href = import.meta.env.BASE_URL + "/login";
      alert("新規登録できました！");
    })
    .catch((error) => console.log(error));
};
</script>

<template>
  <div class="signup">
    <div style="margin: 20px" />
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      style="max-width: 460px"
    >
      <el-form-item label="法人名">
        <el-input v-model="corporation" />
      </el-form-item>

      <el-form-item label="園名">
        <el-input v-model="facility_name" />
      </el-form-item>

      <el-form-item label="ユーザー名">
        <el-input v-model="name" />
      </el-form-item>

      <el-form-item label="メールアドレス">
        <el-input v-model="mail" />
      </el-form-item>

      <el-form-item label="パスワード">
        <el-input v-model="password" />
      </el-form-item>

      <el-button text @click="centerDialogVisible = true"
        ><input type="checkbox" id="consent-chk" name="consent-chk" />
        <p><span id="blue">利用規約</span>に同意する</p>
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
            <el-button type="primary" @click="centerDialogVisible = false">
              確認
            </el-button>
          </span>
        </template>
      </el-dialog>
    </el-form>
    <el-button type="danger" class="redButton1" v-on:click="signUp2"
      >新規登録</el-button
    >
  </div>
</template>

<style>
.signup {
  text-align: center;
  margin: 3em auto;
  width: 45%;
  border: 2px solid #5cbec7d8;
  background-color: #ffffff;
  box-shadow: 6px 7px 0 0 rgba(193, 193, 193, 0.242);
  padding: 3em;
}

#blue {
  color: rgb(0, 162, 255);
}

@media (min-width: 1024px) {
  .signup {
    text-align: center;
    margin: 3em auto;
    width: 45%;
    border: 2px solid #c98252d8;
    background-color: #ffffff;
    box-shadow: 6px 7px 0 0 rgba(148, 148, 148, 0.5);
    padding: 1em;
    border-radius: 10px;
  }

  .el-form {
    margin: 1em 2em;
  }

  .el-form-item {
    margin-bottom: 1.5em;
  }

  .el-form-item__content {
    max-width: 60%;
    padding-left: 1em;
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
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  }
}
</style>
