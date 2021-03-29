<template>
  <div class="home">
    <div class="row mx-0 mt-3">
      <div
        class="col-4"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
      >
        <img
          style="width: 300px !important ; height: 300px !important"
          :src="`data:image/png;base64,${image[1].slice(2, -1)}`"
          alt="image"
        /><br/>
        <div class="mt-1">
        Uploaded by {{image[0]}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      uploadURL: "http://localhost:5000/get_image",
      images: [],
    };
  },
  mounted() {
    axios.get(this.uploadURL).then((Response) => {
      this.images = Response.data.images;
    });
  },
};
</script>
