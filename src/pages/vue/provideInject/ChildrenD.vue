<template>
  <div class="border1">
    <h2>D 结点</h2>
    <ChildrenG />
    <ChildrenH />
    <ChildrenI />
  </div>
</template>
<script>
import ChildrenG from "./ChildrenG";
import ChildrenH from "./ChildrenH";
import ChildrenI from "./ChildrenI";
export default {
  components: {
    ChildrenG,
    ChildrenH,
    ChildrenI
  }
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