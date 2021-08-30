<template>
<div>
  <menubar></menubar>
  <router-view></router-view>
</div>
</template>
<script>
  import menubar from './components/menu.vue'
  
 export default {
  name:"web",
  components: {
    menubar,
  }
 }
</script>


  



