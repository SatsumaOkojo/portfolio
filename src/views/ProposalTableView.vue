<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { computed, ref } from "@vue/reactivity";
import { RouterLink, RouterView } from 'vue-router'
// import { defineComponent, PropType } from 'vue';
import axios from "axios";


// const search = ref('')
// const filterTableData = computed(() =>
//   tableData.filter(
//     (data) =>
//       !search.value ||
//       data.name.toLowerCase().includes(search.value.toLowerCase())
//   )
// )
// const handleEdit = (index: number, row: User) => {
//   console.log(index, row)
// }
// const handleDelete = (index: number, row: User) => {
//   console.log(index, row)
// }

// const tableData: User[] = [
//   {
//     date: '2016-05-03',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-02',
//     name: 'John',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-04',
//     name: 'Morgan',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-01',
//     name: 'Jessy',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
// ]


const results = ref([]);
const id = ref("");
const schedule = ref("");
const event_name = ref("");
const proposal_image_path = ref("");



onMounted(() => {
  axios
    .get("http://localhost/api/proposals")
    .then((response) => {
      results.value = response.data;
      id.value = response.data[0].id;
      schedule.value = response.data[0].schedule;
      event_name.value = response.data[0].event_name;
      proposal_image_path.value = response.data[0].proposal_image_path;
      console.log(id.value);
    })
    .catch((error) => console.log(error));
});

// const proposalsData = [
//   {
//     schedule: schedule.value,
//     event_name: event_name.value,
//     proposal: proposal_image_path.value
//   }
// ]

const proposalsData = [
  {
    schedule: schedule.value,
    event_name: event_name.value,
    proposal: proposal_image_path.value
  }
]

var author_id = 1;
</script>


<template>

  <div id ="post-btn">
    <RouterLink to="/proposal-post"><el-button class="red-btn" v-if="author_id === 1 || author_id === 2">投稿する</el-button></RouterLink>
 </div>

      <el-table :data="proposalsData" style="width: 80%">
           <el-table-column label="日程">{{ schedule }}</el-table-column>
           <el-table-column label="行事名">{{ event_name }}</el-table-column>
           <el-table-column label="企画書">{{ proposal_image_path }}</el-table-column>
           <el-table-column>
              <!-- <template #header>
                  <el-input v-model="search" size="small" placeholder="キーワードを入力して探す" />
              </template> -->
      
            </el-table-column>
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
    margin:3em 1em;
}

</style>