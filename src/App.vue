<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavMenu from './components/NavMenu.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <header>
       <NavMenu />
       <RouterView />
 </header>


  
  <footer>
       <Footer />
  </footer>
</template>





