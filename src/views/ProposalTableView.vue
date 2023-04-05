<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { computed, ref } from "@vue/reactivity";
import { RouterLink, RouterView } from "vue-router";
import axios from "axios";

const proposals = ref([]);
const id = ref("");
const schedule = ref("");
const event_name = ref("");
const proposal_image_path = ref("");

onMounted(() => {
  axios
    .get(import.meta.env.BASE_URL + "/api/proposals")
    .then((response) => {
      proposals.value = response.data;
      event_name.value = response.data;
      schedule.value = response.data;
      proposal_image_path.value = response.data;
      console.log(response.data);
    })
    .catch((error) => console.log(error));
});

const proposalsData = [
  {
    schedule: "2023/4/1",
    event_name: "入園式",
    proposal_image_path: "image1",
  },
  {
    schedule: "2023/4/25",
    event_name: "4月誕生会",
    proposal_image_path: "image2",
  },
  {
    schedule: "2023/4/30",
    event_name: "園外遠足",
    proposal_image_path: "image3",
  },
];
var author_id = 1;
</script>

<template>
  <RouterLink to="/main" class="hover"
    ><el-button type="primary" class="backButton">戻る</el-button></RouterLink
  >
  <div id="post-btn">
    <RouterLink to="/proposal-post" class="hover"
      ><el-button
        type="danger"
        class="redButton1"
        v-if="author_id === 1 || author_id === 2"
        >投稿する</el-button
      ></RouterLink
    >
  </div>

  <el-table style="width: 80%" :data="proposalsData">
    <el-table-column prop="schedule" label="日程"></el-table-column>
    <el-table-column prop="event_name" label="行事名"></el-table-column>
    <el-table-column
      prop="proposal_image_path"
      label="企画書"
    ></el-table-column>
    <!-- <RouterLink to="/proposal"><el-button class="small-btn">企画書ページへ</el-button></RouterLink></el-table-column> -->
  </el-table>
</template>

<style>
#post-btn {
  margin: 1em;
}
.el-table {
  background-color: #ffffff;
  padding: 1em 3em;
  border: 2px solid #52bfc9d8;
  text-align: left;
  margin: 3em 6em;
}

.small-btn {
  font-size: 0.2em;
}
</style>
