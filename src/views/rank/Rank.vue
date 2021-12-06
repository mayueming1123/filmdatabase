<template>
  <div>
    <rank-result></rank-result>
  </div>
</template>

<script>
import rankResult from "../../components/common/rankResult/rankResult";
export default {
  name: "Rank",
  components: {
    rankResult,
    // buttonForRank,
  },
  data(){
    return {
      isShow: 0,
    }
  },
}
</script>

<style scoped>

</style>
