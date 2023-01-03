<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavMenu from './components/NavMenu.vue';
// import Footer from './components/Footer.vue';

</script>

<template>
      <div class="common-layout">
        <el-container>
               <el-header>
                  <NavMenu />
               </el-header>

               <el-main>
         <RouterView />
               </el-main>
              
               <el-footer>
                <p>Copyright</p>
                 <!-- <Footer /> -->
               </el-footer>
        </el-container>
      </div>
    </template>

    

<style>
.el-header {
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

.el-main {
  padding: 0;
  margin: 0;
  min-height: 82vh;
}

.el-footer {
  background-color: rgb(200, 137, 43);
  text-align: center;
  color:#ffffff;
}



</style>



