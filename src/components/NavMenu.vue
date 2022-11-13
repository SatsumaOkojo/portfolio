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
        </nav>
     

    </header>
 
  
    <RouterView />
  </template>

<style scoped>
header {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  margin: 0px;
  background: #ffffff;
  position: fixed;
  box-shadow: 0px 10px 10px -6px rgba(135, 131, 131, 0.3);
}


nav {
  width: 100%;
  font-size: 12px;
  position:fixed;
  padding: 10px;
}

nav a {
  display: inline-block;
  padding: 0 2rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}




@media (min-width: 1024px) {
  header {
    display: flex;
    width: 100%;
    height: 50px;
    position: fixed;
    box-shadow: 0px 10px 10px -6px rgba(0, 0, 0, 0.3);
  }

  .logo {
    margin-left: 15px;
    display: inline;
  }

 

  nav {
    position:fixed;
    font-size: 1rem;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
