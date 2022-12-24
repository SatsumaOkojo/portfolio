<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<!-- 権限4と3の人はここに来れない -->
        <div class="post">

            <div class="post3">
               <label for="post1">行事名  </label>
               <!-- {{event_name}} -->
               <input type="textbox" placeholder="11月誕生会">
            </div>

            <div class="post3">
                <!-- ドラック＆ドロップしたい -->
                <label for="post2">企画書  </label>
               <!-- {{proposal_image_path}} -->
               <input type="textbox" >
             </div>

            <div class="post3">
                <lavel for="post3">実施日  </lavel>
                 <!-- {{schedule}} -->
                <input type="date" value="2022-11-11" name="date" id="date">
             </div>

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