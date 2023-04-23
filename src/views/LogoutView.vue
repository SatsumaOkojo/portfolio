<script lang="ts" setup>
import { ElButton } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();

setTimeout(function () {
  router.push("/");
}, 3000);
</script>

<template>
  <div class="color">
    <img alt="bye" class="bye" src="@/assets/logout.png" />
    <img alt="msg" class="msg" src="@/assets/message.png" />
  </div>
</template>

<style>
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
  .bye {
    width: 30%;
    height: 30%;
    margin-top: 2em;
  }

  .msg {
    position: absolute;
    height: 48%;
    margin-left: 0;
    margin-top: 3em;
  }
}
</style>
