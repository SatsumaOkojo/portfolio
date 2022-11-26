<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
     <div class="yellow">
    <div class="post">

<div class="post3">
    <label for="post1">行事名  </label>
    <input type="textbox" placeholder="11月誕生会">
</div>

<div class="post3">
    <!-- ドラック＆ドロップしたい -->
    <label for="post2">企画書  </label>
    <input type="textbox" >
</div>

<div class="post3">
    <lavel for="post3">実施日  </lavel>
  <input type="date" value="2022-11-11" name="date" id="date">
</div>

<RouterLink to="/proposal-table"><a href="" class="btn btn--red btn--cubic btn--shadow">投稿する</a></RouterLink>
  <!-- 投稿できました　必要？ -->

</div>
</div>

</template>


<style>
.yellow {
    background-color: rgb(255, 250, 196);
    min-height: 100vh;
    display: flex;
    background-image: url(@/assets/trees.png);
  background-position: bottom; 
  background-size: contain;
  background-repeat: no-repeat;
}

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

a.btn--red {
  color: #fff;
  background-color: #e70000;
  border-bottom: 5px solid #b80000;
  border-radius: 50px;
  padding: 0.3em 1.3em;
  margin: 3em;
  font-size: 1.2em;
}

a.btn--red:hover {
  margin-top: 3px;
  color: #fff;
  background: #e70000;
  border-bottom: 2px solid #b80000;
}

a.btn--shadow {
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
}


</style>