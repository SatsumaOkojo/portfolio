<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { userCurrentUserStore, type User } from "@/stores/userState.js";
import type pinia from "@/stores/userState.js";

var author_id = 1;

const router = useRouter();
const homepage = (): void => {
  router.push("/");
};

const currentUserStore = userCurrentUserStore();

function logout() {
  currentUserStore.$reset();
}
</script>

<template>
  <img
    alt="logo"
    class="logo"
    v-on:click="homepage"
    src="@/assets/icon.logo.png"
    width="170"
    height="50"
  />

  <nav>
    <template v-if="!currentUserStore.isLoggedIn">
      <RouterLink to="/login">ログイン</RouterLink>
      <RouterLink to="/signup">新規登録</RouterLink>
    </template>
    <template v-if="currentUserStore.isLoggedIn">
      <RouterLink to="/main">メインページ</RouterLink>
      <RouterLink to="/logout" @click="logout">ログアウト</RouterLink>
      <RouterLink to="/mypage">マイページ</RouterLink>
      <RouterLink to="/proposal-table">企画書</RouterLink>
      <RouterLink to="/create-user" v-if="author_id == 1"
        >ユーザー作成</RouterLink
      >
    </template>
  </nav>
</template>

<style scoped>
nav {
  margin: 0.3em 0;
  float: right;
  font-size: 0.4em;
}

nav a {
  padding: 1em 2em;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    height: 50px;
    position: fixed;
    box-shadow: 0 3px 5px rgba(106, 103, 103, 0.537);
  }

  .logo {
    margin-left: 1em;
  }

  nav {
    margin: 1em;
    float: right;
    font-size: 1rem;
  }

  nav a {
    border-left: 1px solid var(--color-border);
  }
}
</style>
