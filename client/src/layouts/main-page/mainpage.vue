<!-- 
frontend\src\App.vue
Author: Author : Andre Baldo (http://github.com/andrebaldo/) -->
<template>
<div>
    <header>
    <Navbar/>
    </header>
      <router-view/>
</div>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>