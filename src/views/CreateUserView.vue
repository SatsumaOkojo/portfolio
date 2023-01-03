<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { reactive, ref } from 'vue'
import axios from "axios";

const results = ref([]);
const id = ref("");
const name = ref("");
const mail = ref("");
const position_id = ("");
const position_name = ref("");


onMounted(() => {
  axios
    .get("http://localhost/api/positions")
    .then((response) => {
      results.value = response.data;
      id.value = response.data[0].id;
      position_name.value = response.data[0].position_name;
      console.log(id.value);
    })
    .catch((error) => console.log(error));
});

const createNewUser = (): void => {
  axios
    .post("http://localhost/api/users", {
      id: id.value,
      name: "",
      mail: "",
      position_id: "",
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error));
}



const labelPosition = ref('right')
const value = ref('')

// const options = [
//   {
//     value: position_name.value,
//     label: position_name.value,
//   },
// ]

const options = [
  {
    value: ("主任"),
    label: ("主任"),
  },
]


</script>


<template>


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
                                v-model="value"
                                multiple
                                placeholder="選択してください"
                                style="width: 240px"
                                 >
                                 <el-option
                                   v-for="item in options"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value"
                                    />
                                </el-select>
                  
                         </el-form-item>
                           
                </el-form>
    
                  <el-button class="red-btn" v-on:click="createNewUser">登録する</el-button>
   
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
  box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
}
</style>