<template>
  <div class="border1">
    <h2>C 结点</h2>
    <ChildrenE />
    <ChildrenF />
  </div>
</template>
<script>
import ChildrenE from "./ChildrenE";
import ChildrenF from "./ChildrenF";
export default {
  components: {
    ChildrenE,
    ChildrenF
  },
  // provide() {
  //   return {
  //     theme: {
  //       color: "orange"
  //     }
  //   };
  // }
};
</script>
<style scoped>
h2 {
    margin: 0;
}
.border1 {
    border:1px solid #ccc;
    padding: 10px 0;
    margin: 10px 10px 0;
    text-align: center;
}
</style>