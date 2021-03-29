<template>
  <div>
    <form>
    <label>Upload Image Here</label><br/>
    <div>Name:<input type=text v-model="projectname"/></div>
    <input
      class ="mt-2"
      multiple="multiple"
      type="file"
      id="myFile"
      name="filename"
      ref="file"
      @change="selectFile($event)"
    /><br/>
    <button class="mt-3" @click="uploadImage($event)">Upload Image</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      uploadURL: "http://localhost:5000/upload_image",
      projectname: "",
      file: [],
      name: "",
      resul: "",
    };
  },
  methods: {
    selectFile(event) {
      this.file = event.target.files;
      console.log(this.file);
    },
    async uploadImage(event) {
      event.preventDefault();
      let formData = new FormData();
      for (let i = 0; i < this.file.length; i++) {
        formData.append("File", this.file[i]);
      }
      formData.append("imagename",this.projectname)
      formData.append("username", this.name);

      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      axios.post(this.uploadURL, formData, config).then(() => {
          this.$router.push("/");
        });
    },
  },
  mounted() {
    if (sessionStorage.getItem("username") != undefined) {
      this.name = sessionStorage.getItem("username");
    } else {
      this.$router.push("/login");
    }
  },
};
</script>
