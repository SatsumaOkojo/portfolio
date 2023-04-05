<script lang="ts" setup>
import { RouterLink, RouterView } from "vue-router";
import { reactive, ref } from "vue";
import axios from "axios";

const results = ref([]);
const id = ref("");
const event_name = ref("");
const proposal_image_path = ref("");
const schedule = ref("");

const createProposal = (): void => {
  axios
    .post(import.meta.env.VITE_LARAVEL_APP_URLL + "/api/proposals", {
      id: id.value,
      user_id: "1",
      event_name: event_name.value,
      proposal_image_path: proposal_image_path.value,
      schedule: schedule.value,
      deleted_at: "2023-02-10",
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error));
};
const labelPosition = ref("right");
</script>

<template>
  <RouterLink to="/proposal-table" class="hover"
    ><el-button type="primary" class="backButton">戻る</el-button></RouterLink
  >
  <!-- 権限4と3の人はここに来れない -->
  <div class="post">
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      style="max-width: 460px"
    >
      <el-form-item label="行事名">
        <el-input v-model="event_name" />
      </el-form-item>
      <el-form-item label="企画書">
        <el-input v-model="proposal_image_path" />
      </el-form-item>
      <el-form-item label="企画日">
        <input type="date" v-model="schedule" />
      </el-form-item>
    </el-form>
    <RouterLink to="/proposal-table" class="hover"
      ><el-button type="danger" class="redButton1" v-on:click="createProposal"
        >投稿する</el-button
      ></RouterLink
    >
  </div>
</template>

<style>
.post {
  margin: 3em auto;
  text-align: center;
  width: 40%;
  border: 2px solid #bc9244d8;
  background-color: #ffffff;
  box-shadow: 6px 7px 0 0 rgba(158, 113, 79, 0.5);
  padding: 3em;
  border-radius: 10px;
}

.post3 {
  padding: 2em;
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
