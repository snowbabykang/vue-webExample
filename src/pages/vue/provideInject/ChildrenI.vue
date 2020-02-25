<template functional>
  <div class="border2">
    <h3 :style="{ color: injections.theme.color }">I 结点</h3>
  </div>
</template>
<script>
export default {
  inject: {
    theme: {
      default: () => ({})
    }
  }
};
</script>
<style scoped>
h3 {
    margin: 0;
}
.border2 {
    border:1px solid #eee;
    padding: 10px 0;
    margin: 10px 10px 0;
    text-align: center;
}
</style>