<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
 
    <header>
      <img alt="logo" class="logo" src="@/assets/icon.logo.png" width="170" height="50" />
      
   
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/login">ログイン</RouterLink>
          <RouterLink to="/signup">新規登録</RouterLink>
          <RouterLink to="/logout">ログアウト</RouterLink>
          <!-- v-if = "author == 1" -->
          
        </nav>
    </header>
 
  
    <RouterView />
  </template>

<style scoped>
header {
  height: 50px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  margin: 0px;
  background: #ffffff;
  position: fixed;
  box-shadow: 0px 3px 5px rgba(106, 103, 103, 0.537);
}


nav {
  margin: 0.3em 0;
  float: right;
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
    margin-left: 15px;
  }

   nav {
    margin: 1em;
    float: right;
    font-size: 1rem;
  }
}
</style>
