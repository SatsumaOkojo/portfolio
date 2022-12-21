<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'

const tableData = [
  {
    schedule: '2022年7月7日',
    event_name: '七夕',
    proposal_image_path: 'img',
    name: "鈴木　すず"
  },
  {
    schedule: '2022年7月25日',
    event_name: '7月誕生会',
    proposal_image_path: 'img',
    name: "町田　真智子"
  },
]
</script>


<template>
    <div id =skyblue>
      
        <div id="keyword">

         <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

           <form method="get" action="#" class="search_container">
               <input type="text" size="25" placeholder="キーワード検索">
               <input type="submit" value="&#xf002">
           </form>
   
                 <!-- これは役職あるひとだけ -->
               <RouterLink to="/proposal-post"><el-button class="red-btn" v-if="author == !4">投稿する</el-button></RouterLink>

        </div>


            <div id="column">
                <el-table :data="tableData">
                  <el-table-column prop="schedule" label="日程" width="190" />
                  <el-table-column prop="event_name" label="行事名" width="190" />
                  <!-- 企画書はクリックしたらProposalView.vueへ -->
                  <el-table-column prop="proposal_image_path" label="企画書" width="190" />
                  <el-table-column prop="name" label="担当者" width="190"/>
                </el-table>
             </div>

    </div>
</template>



<style>
#skyblue {
  background-color: rgb(228, 244, 255);
  min-height: 100vh;
  background-image: url(@/assets/trees.png);
  background-position: bottom; 
  background-size: contain;
  background-repeat: no-repeat;
}

#keyword {
  padding: 2.5em;
  margin: 0 10%;
  display: flex;
}

.search_container{
  position: relative;
  box-sizing: border-box;
  border: 2px solid #576fe8;
  display: block;
  padding: 3px 10px;
  border-radius: 3px;
  height: 2.3em;
  width: 265px;
  overflow: hidden;
}

.search_container input[type="text"]{
  border: none;
  height: 2.0em;
}

.search_container input[type="text"]:focus {
  outline: 0;
}

.search_container input[type="submit"]{
  cursor: pointer;
  font-family: FontAwesome;
  border: none;
  background: #578fef;
  color: #fff;
  position: absolute;
  width: 3.5em;
  height: 3.0em;
  right:0px;
  top: -5px;
  outline : none;
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

#column {
    margin: 0 2em;
}

.el-table {
    background-color: #ffffff;
    padding: 1em 3em;
    border: 2px solid #52bfc9d8;
    text-align: left;
}

</style>