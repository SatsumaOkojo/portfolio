<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { reactive, ref } from "vue";
import axios from "axios";

const positions = ref([]);
const id = ref("");
const name = ref("");
const position_name = ref("");
const mail = ref("");

onMounted(() => {
  axios
    .get(import.meta.env.VITE_LARAVEL_APP_URL + "/api/positions")
    .then((response) => {
      positions.value = response.data;
      console.log(id.value);
    })
    .catch((error) => console.log(error));
});

const createNewUser = (): void => {
  axios
    .post(import.meta.env.VITE_LARAVEL_APP_URL + "/api/users", {
      name: name.value,
      mail: mail.value,
      position_id: "2",
      facility_id: "1",
      password: "aiueohoikuen",
      icon_image_path: "image1",
      delete_at: "2023-02-05",
    })
    .then((response) => {
      console.log(response.data);
      alert("作成できました！");
      document.location.reload();
    })
    .catch((error) => console.log(error));
};

const labelPosition = ref("right");
const value = ref("");
</script>

<template>
  <RouterLink to="/main"
    ><el-button type="danger" class="redButton1">戻る</el-button></RouterLink
  >

  <div class="create_user">
    <h1>ユーザー作成</h1>

    <div style="margin: 20px" />
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      style="max-width: 460px"
    >
      <el-form-item label="ユーザー名">
        <el-input v-model="name" />
      </el-form-item>

      <el-form-item label="メールアドレス">
        <el-input v-model="mail" />
      </el-form-item>

      <el-form-item label="役職">
        <!-- 役職に権限ついている -->
        <!-- {{position_name}} {{author_id}} -->
        <el-select
          v-model="position_name"
          multiple
          placeholder="選択してください"
          style="width: 240px"
        >
          <el-option
            v-for="position in positions"
            :value="position.position_name"
          ></el-option>

          <!-- positionsの中にあるposition_nameをidと紐づけて？表示させたい＋ユーザーに役職持たせて渡したい -->
          <!-- <el-option>{{ valueみたいな？ }}</el-option> -->
        </el-select>
      </el-form-item>
    </el-form>

    <el-button type="danger" class="redButton1" v-on:click="createNewUser"
      >登録する</el-button
    >
  </div>
</template>

<style>
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
</style>
