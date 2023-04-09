<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
import { RouterLink } from "vue-router";

import axios from "axios";
import { ElButton } from "element-plus";
import { reactive } from "vue";
import { ElLoading } from "element-plus";

const results = ref([]);
const users = ref([]);
const messageResults = ref([]);
const proposals = ref([]);
const positions = ref([]);
const items = ref([]);
const id = ref("");
const user_id = ref("");
const name = ref("");
const facility_name = ref("");
const position_name = ref("");
const event_name = ref("");
const updated_at = ref<Date>();
const created_at = ref<Date>();
const message = ref("");

const toString = Object.prototype.toString;

onMounted(() => {
  axios
    .get(import.meta.env.VITE_LARAVEL_APP_URL + "/api/users")
    .then((response) => {
      users.value = response.data;
      user_id.value = response.data[0].id;
      name.value = response.data[0].name;
      console.log(id.value);
    })
    .catch((error) => console.log(error));

  axios
    .get(import.meta.env.VITE_LARAVEL_APP_URL + "/api/messages/items/1")
    .then((response) => {
      items.value = response.data;
      console.log(response.data);
    })
    .catch((error) => console.log(error));

  axios
    .get(import.meta.env.VITE_LARAVEL_APP_URL + "/api/facilities")
    .then((response) => {
      results.value = response.data;
      id.value = response.data[0].id;
      facility_name.value = response.data[0].facility_name;
      console.log(id.value);
    })
    .catch((error) => console.log(error));

  axios
    .get(import.meta.env.VITE_LARAVEL_APP_URL + "/api/positions")
    .then((response) => {
      positions.value = response.data;
      id.value = response.data[0].id;
      position_name.value = response.data[0].position_name;
      console.log(id.value);
    })
    .catch((error) => console.log(error));

  axios
    .get(import.meta.env.VITE_LARAVEL_APP_URL + "/api/proposals")
    .then((response) => {
      proposals.value = response.data;
      id.value = response.data[0].id;
      event_name.value = response.data[0].event_name;
      created_at.value = response.data[0].updated_at;
      console.log(id.value);
    })
    .catch((error) => console.log(error));

  axios
    .get(import.meta.env.VITE_LARAVEL_APP_URL + "/api/messages")
    .then((response) => {
      messageResults.value = response.data;
      id.value = response.data[0].id;
      message.value = response.data[0].message;
      updated_at.value = response.data[0].updated_at;
      console.log(id.value);
      console.log(response.data[1].updated_at);
      console.log(toString.call(response.data[1].updated_at));
      console.log(updated_at.value);
      console.log(toString.call(updated_at.value));
      console.log(updated_at.value.toString());
    })
    .catch((error) => console.log(error));
});

const updateMessage = (): void => {
  axios
    .put(import.meta.env.VITE_LARAVEL_APP_URL + "/api/messages/1", {
      id: id.value,
      message: inputMessage.value,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error));
};

const inputMessage = ref("");
const editMessage = (message: string): void => {
  dialogFormVisible.value = true;
  inputMessage.value = message;
};

const formLabelWidth = "140px";
const dialogFormVisible = ref(false);

var author_id = 1;
</script>

<template>
  <div id="facility">
    <h1>{{ facility_name }}</h1>
  </div>

  <div class="center">
    <RouterLink to="/logout" class="hover"
      ><el-button type="danger" class="redButton1"
        >ログアウト</el-button
      ></RouterLink
    >
    <RouterLink to="/proposal-table" class="hover"
      ><el-button type="danger" class="redButton1"
        >企画書</el-button
      ></RouterLink
    >
    <RouterLink to="/mypage" class="hover"
      ><el-button type="danger" class="redButton1"
        >マイページ</el-button
      ></RouterLink
    >
    <RouterLink to="/create-user" class="hover"
      ><el-button type="danger" class="redButton1"
        >ユーザー作成</el-button
      ></RouterLink
    >
  </div>

  <div class="wrap2">
    <div class="item2">
      <h1>今月の予定</h1>
      <p>
        9日 身体測定<br />
        16日 消火避難訓練<br />
        25日 誕生会<br />
        26日 職員会議 園内研修
      </p>
    </div>

    <div class="item2">
      <h1>更新情報</h1>

      <p class="small" v-for="proposal in proposals" :key="id">
        {{ proposal.created_at }}<br />
        「{{ proposal.event_name }}」更新しました！<br />
      </p>
    </div>
  </div>

  <div class="balloon5" v-for="item in items" :key="id">
    <div class="faceicon">
      <img alt="Character2" src="@/assets/Character2.png" />

      <h3>
        {{ item.position_name }}<br />
        {{ item.name }}
      </h3>
    </div>
    <div class="chatting">
      <div class="says">
        <p>{{ item.message }}</p>
      </div>

      <div class="sub">
        <h6>更新日 {{ item.updated_at }}</h6>

        <el-button
          id="edit"
          type="danger"
          class="redButton1"
          @click="editMessage(item.message)"
          v-if="author_id !== 4"
        >
          編集する
        </el-button>
      </div>
    </div>
  </div>
  <el-dialog v-model="dialogFormVisible" title="メッセージ">
    <el-form>
      <el-form-item label="Message" :label-width="formLabelWidth">
        <el-input v-model="inputMessage" autocomplete="off" />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button
          type="primary"
          @click="dialogFormVisible = false"
          v-on:click="updateMessage"
        >
          更新する
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style>
.redButton1 {
  margin: 1em;
  padding: 1.3em;
  box-shadow: 0 6px 6px 0px rgba(97, 9, 42, 0.258);
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 30px;
  border: 2px solid #ff9d9d;
}

.hover:hover {
  background-color: transparent;
}

#facility {
  background-color: rgb(255, 55, 55);
  text-align: center;
  padding: 0.5px;
  margin-top: 0.3em;
}

#facility h1 {
  color: #ffffff;
  margin: 5px;
  font-size: 2.3em;
}

.wrap2 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 1% 10%;
}

.item2 {
  padding: 1em;
  width: 40%;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 6px 6px 0px rgba(33, 93, 222, 0.258);
  border-radius: 20px;
}

.small {
  font-size: 0.5em;
}
.balloon5 {
  width: 100%;
  margin: 1.5em 0;
  overflow: hidden;
}

.balloon5 .faceicon {
  float: left;
  margin-right: -90px;
  padding: 20px;
  width: 20%;
  text-align: center;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}

.balloon5 .faceicon h3 {
  background-color: #fff;
  border-radius: 30px;
  margin: 1em;
}

.balloon5 .faceicon img {
  width: 70%;
  height: auto;
  border: solid 3px #ffffff;
  border-radius: 50%;
}

.balloon5 .chatting {
  width: 100%;
  margin-top: 2.3em;
}

.says {
  display: inline-block;
  position: relative;
  margin: 5px 0 0 105px;
  padding: 17px 13px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 9px 8px 0 0 rgba(109, 103, 103, 0.5);
  max-width: 60%;
  min-width: 60%;
}

.says:after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 18px;
  left: -24px;
  border: 12px solid transparent;
  border-right: 12px solid #ffffff;
}

.says p {
  margin: 0;
  padding: 0;
}

.sub {
  float: right;
  padding: 0 20%;
  display: inline;
}
</style>
