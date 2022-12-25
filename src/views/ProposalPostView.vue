<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref } from 'vue'

const labelPosition = ref('right')

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
</script>

<template>
<!-- 権限4と3の人はここに来れない -->
        <div class="post">
          <el-form
              :label-position="labelPosition"
               label-width="100px"
               :model="formLabelAlign"
               style="max-width: 460px"
                >
                  <el-form-item label="行事名">
                    <el-input v-model="formLabelAlign.name" />
                  </el-form-item>
                  <el-form-item label="企画書">
                     <el-input v-model="formLabelAlign.region" />
                  </el-form-item>
                  <el-form-item label="企画書">
                    <input type="date" value="2023-01-01" name="date" id="date">
                  </el-form-item>

          </el-form>
               <RouterLink to="/proposal-table"><el-button class="red-btn">投稿する</el-button></RouterLink>

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
  padding:2em;
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