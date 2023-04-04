<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { computed, ref } from "@vue/reactivity";
import { RouterLink, RouterView } from "vue-router";
import axios from "axios";

const results = ref([]);
const id = ref("");
const event_name = ref("");
const proposal_image_path = ref("");
const name = ref("");

onMounted(() => {
  axios
    .get("http://localhost/api/proposals")
    .then((response) => {
      results.value = response.data;
      id.value = response.data[0].id;
      event_name.value = response.data[0].event_name;
      proposal_image_path.value = response.data[0].proposal_image_path;
      console.log(id.value);
    })
    .catch((error) => console.log(error));

  axios
    .get("http://localhost/api/users")
    .then((response) => {
      results.value = response.data;
      id.value = response.data[0].id;
      name.value = response.data[0].name;
      console.log(id.value);
    })
    .catch((error) => console.log(error));
});
</script>

<template>
  <RouterLink to="/main" class="hover"
    ><el-button type="primary" class="backButton">戻る</el-button></RouterLink
  >
  <div class="center">
    <h1 id="yellow">七夕</h1>
    <img alt="tanabata" class="proposal_image" src="@/assets/tanabata.png" />
  </div>
  <!-- <div class="center">
        <h1 id="yellow">{{ event_name }}</h1>
        <p>{{ name }}</p>
        <img alt="tanabata" class="proposal_image" {{ proposal_image_path }} />
        </div> -->
</template>

<style>
.center {
  text-align: center;
}

#yellow {
  background-color: #ffe600;
  border: 1em;
  padding: 1em;
  margin: 0 auto;
  max-width: 30%;
  font-size: 2em;
}

.proposal_image {
  margin: 1em;
}
</style>
