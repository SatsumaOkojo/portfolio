<script lang="ts" setup>
import { ElButton } from "element-plus";

setTimeout(function () {
  document.location =
    "http://hoikudiary-env.eba-5qvm4cyt.us-east-2.elasticbeanstalk.com/";
}, 3000);
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
#logout {
  margin: 0 4em;
}

#logout h1 {
  font-size: 1em;
  margin-left: 34%;
  padding-top: 2em;
}

.bye {
  width: 30%;
  height: 30%;
}

.msg {
  position: absolute;
  margin: 1em 15% 1em 30%;
  top: 3em;
  width: 40%;
  height: 17%;
}

@media (min-width: 1024px) {
  #logout {
    margin: 0 4em;
    padding: 0 2em;
  }

  #logout h1 {
    font-size: 2.6em;
    padding-top: 2em;
    margin: 0 10%;
  }

  .bye {
    width: 30%;
    height: 30%;
  }

  .msg {
    position: absolute;
    margin: 10em 30% 1em 30%;
    top: 3em;
    width: 40%;
    height: 40%;
  }
}
</style>
