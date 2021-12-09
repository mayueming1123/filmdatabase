<template>
  <div>
    <main-search>
    </main-search>
  </div>
</template>

<script>
  import mainSearch from "../../components/common/mainSearch/mainSearch"
  import NavTop from "../../components/common/navbar/NavTop";

  export default {
    name: "Home",
    components: {
      NavTop,
      mainSearch,
    },
    data() {
      return {
        tableData: null,
      }
    },
  }
</script>

<style scoped>
  .result {
    margin-top: 50px;
  }
</style>
