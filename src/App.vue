<template>
  <section>
    <section class="vertical-packages js-vertical-packages">
      <div class="packages-wrapper">
        <select v-model="contractLength">
          <option v-for="option in contractLengthOptions" :key="option" :value="option">{{ option }}</option>
        </select>
        <div class="main-content-wrapper">
          <package
            v-for="bundle in packageData.items"
            :key="bundle.id"
            :bundle="bundle"
            :contractLength="contractLength"
          ></package>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import axios from "axios";
import Package from "./components/Package.vue";
import setEqualHeight from "./util/equalHeight";

//  http://www.mocky.io/v2/5e73387f3000004c442e6305
// http://www.mocky.io/v2/5e734acb3000004c442e63a8
// http://www.mocky.io/v2/5e734d3e3000007c282e63bc
export default {
  data() {
    return {
      packageData: "",
      contractLength: "24",
      contractLengthOptions: ["Bez ugovorne obaveze", "12", "24"]
    };
  },
  mounted() {
    axios
      .get(`http://www.mocky.io/v2/5e734d3e3000007c282e63bc`)
      .then(response => {
        this.packageData = response.data;
        setTimeout(() => {
          setEqualHeight("single-product-tv");
          setEqualHeight("single-product-net");
          setEqualHeight("single-product-tel");
          setEqualHeight("package-name");
        }, 0);
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {},
  watch: {},
  computed: {},
  components: {
    Package
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" >
.main-content-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
</style>