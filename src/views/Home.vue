<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// import { apiTourScene } from "@/utils/api.js";
import * as api from "@/utils/api.js";
export default {
  name: "Home",
  components: {},
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
