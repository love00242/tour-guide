<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { apiTourScene } from "@/utils/api.js";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    async getTourData() {
      try {
        const result = await apiTourScene("$top=30");
        if(result.status === 200) {
          console.log("success");
        }
      } catch (err) {
        console.error(err);
      }
    }
  },
  mounted() {
    this.getTourData();
  }
};
</script>
