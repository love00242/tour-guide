<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
// import { apiTourScene } from "@/utils/api.js";
import * as api from "@/utils/api.js";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    getTourData() {
      const parm = {
        // $top:30,
        $filter: "contains(Name,'台北')"
      }
      api.getApi(parm).then(res=> {
        if(res?.status === 200) {
          console.log(res,"success");
        }
      })
    }
  },
  mounted() {
    this.getTourData();
  }
};
</script>
