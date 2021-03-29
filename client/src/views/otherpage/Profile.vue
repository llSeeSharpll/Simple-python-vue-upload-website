<template>
  <div class="profile">
      <div class="font-weight-bold mx-5 mt-3 text-left">Username:{{username}}</div>
      <UploadImage class="mt-2 mx-5 text-left"/>
  </div>
</template>

<script>
import UploadImage from '@/components/Upload_image.vue'
export default {
  name: 'Home',
  components: {
    UploadImage
  },
  data(){
      return{
          username:sessionStorage.getItem("username"),
      }
  },
  mounted(){
      if(sessionStorage.getItem("username")==undefined){
          this.$router.push('/login')
      }
  }
}
</script>