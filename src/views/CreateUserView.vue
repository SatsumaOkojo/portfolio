<script lang="ts" setup>
import { reactive, ref } from 'vue'
import axios from "axios";

const id = ref("");
const name = ref("");
const mail = ref("");
const position_id = ("");

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
const value1 = ref([])

const options = [
  {
    value: '主任',
    label: '主任',
  },
  {
    value: '副主任',
    label: '副主任',
  },
  {
    value: '0歳児担任',
    label: '0歳児担任',
  },
  {
    value: '1歳児担任',
    label: '1歳児担任',
  },
  {
    value: '2歳児担任',
    label: '2歳児担任',
  },
  {
    value: '3歳児担任',
    label: '3歳児担任',
  },
  {
    value: '4歳児担任',
    label: '4歳児担任',
  },
  {
    value: '5歳児担任',
    label: '5歳児担任',
  },
  {
    value: '合同クラス担任',
    label: '合同クラス担任',
  },
  {
    value: '栄養士',
    label: '栄養士',
  },
  {
    value: '看護師',
    label: '看護師',
  },
  {
    value: '保育士',
    label: '保育士',
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
                                v-model="position_id"
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