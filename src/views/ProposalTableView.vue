<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { computed, ref } from "@vue/reactivity";
import { RouterLink, RouterView } from "vue-router";
import axios from "axios";

const proposals = ref([]);
const id = ref("");

onMounted(() => {
  axios
    .get("http://hoikudiary-env.eba-5qvm4cyt.us-east-2.elasticbeanstalk.com/api/proposals")
    .then((response) => {
      proposals.value = response.data;
      id.value = response.data[0].id;
      console.log(id.value);
    })
    .catch((error) => console.log(error));
});

// const proposalss = [
//   {
//     id: 1,
//     schedule: 4 / 1,
//     event_name: "入園式",
//     proposal_image_path: "image1",
//   },
// ];

// const proposalsData = ([
//   {
//     id: id.value,
//     schedule: schedule.value,
//     event_name: event_name.value,
//     proposal: proposal_image_path.value,
//   },
// ])

// const proposalsData = [
//   {
//     schedule: schedule.value,
//     event_name: event_name.value,
//     proposal: proposal_image_path.value
//   },
// ]

// 繰り返し
// proposalsData.forEach( function( value ) {

//  console.log( value.schedule );
//  console.log( value.event_name );
// });

var author_id = 1;
</script>

<template>
  <el-button type="success" id="navButton"
    ><RouterLink to="/main" id="white">戻る</RouterLink></el-button
  >
  <div id="post-btn">
    <RouterLink to="/proposal-post"
      ><el-button class="red-btn" v-if="author_id === 1 || author_id === 2"
        >投稿する</el-button
      ></RouterLink
    >
  </div>

  <el-table style="width: 80%" v-for="proposal in proposals" :key="id">
    <el-table-column label="日程">{{ proposal.schedule }}</el-table-column>
    <el-table-column label="行事名">{{ proposal.event_name }}</el-table-column>
    <el-table-column label="企画書">{{
      proposal.proposal_image_path
    }}</el-table-column>
    <!-- <RouterLink to="/proposal"><el-button class="small-btn">企画書ページへ</el-button></RouterLink></el-table-column> -->

    <!-- <template #header>
                  <el-input v-model="search" size="small" placeholder="キーワードを入力して探す" />
              </template> -->
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
