<script lang="ts" setup>
  import { ElButton } from 'element-plus'

</script>


<template>

  <div class="color">
      <div id="logout">
          <h1>ログアウトしました</h1>
       </div>
     <img alt="bye" class="bye" src="@/assets/logout.png" /> 
     <img alt="msg" class="msg" src="@/assets/message.png" />
   </div>
   
</template>

<style>
 .color {
    background-color: rgba(255, 235, 205, 0.783);
    background-image: url(@/assets/trees.png);
    background-position: bottom; 
    background-size: contain;
    background-repeat: no-repeat;
  }

 #logout {
  margin: 0 4em;
 }

 #logout h1 {
    font-size: 1em;
    margin-left: 2em;
    padding-top: 2em;
    border-bottom: dashed 3px #2ba43b;
  }

  .bye {
    width:30%;
    height:30%;
  }

  .msg {
    position: absolute;
    margin: 1em 0 2em 7em;
    top: 3em;
    width:40%;
    height:17%;
  }

@media (min-width: 1024px) {
  .color {
    background-color: rgba(255, 235, 205, 0.783);
  }
  
 #logout {
  margin: 0 4em;
  padding: 0 2em
 }


 #logout h1 {
    font-size: 2.6em;
    padding-top: 2em;
    margin: 0 2em;
    border-bottom: dashed 3px #2ba43b;
  }

  .bye {
    width:30%;
    height:30%;
  }

  .msg {
    position: absolute;
    margin: 2em 0 4em 19em;
    top: 3em;
    width:40%;
    height:40%;
  }

}
</style>
