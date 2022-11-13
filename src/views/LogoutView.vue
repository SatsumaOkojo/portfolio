<template>
  <div class="color">
    <div class="logout">
     <h1>ログアウトしました</h1>
     </div>
     <img alt="bye" class="bye" src="@/assets/logout.png" /> 
     <img alt="msg" class="msg" src="@/assets/message.png" />
</div>
</template>

<style>
@media (min-width: 1024px) {
  .color {
    background-color: rgba(255, 235, 205, 0.783);
  }
  
  .logout h1 {
    margin-left: 50px;
    margin-top: 80px;
    border-bottom: dashed 3px #2ba43b;
  }

  .bye {
    left: 40px;
    width:400px;
    height:400px;
  }

  .msg {
    right: 100px;
    top: 80px;
    width:450px;
    height:300px;
  }

}
</style>
