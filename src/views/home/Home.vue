<template>
  <div>
    <main-search @send="get">
    </main-search>
    <show-result class="result" :tableData="tableData"></show-result>
  </div>
</template>

<script>
  import mainSearch from "../../components/common/mainSearch/mainSearch"
  import NavTop from "../../components/common/navbar/NavTop";
  import showResult from "../../components/common/showResult/showResult";

  export default {
    name: "Home",
    components: {
      NavTop,
      mainSearch,
      showResult,

    },
    data() {
      return {
       result_all: null,
        tableData: null,
      }
    },
    methods: {
      get(msg){
        this.tableData = msg;
        console.log(this.tableData)
      }
    }
  }
</script>

<style scoped>
  .result {
    margin-top: 50px;
  }
</style>
