<template>
  <div class="border2">
    <h3 :style="{ color: theme.color }">E 结点</h3>
    <button @click="handleClick">改变color为green</button>
  </div>
</template>
<script>
export default {
  components: {},
  inject: {
    theme: {
      default: () => ({})
    }
  },
  methods: {
    handleClick() {
      if (this.theme.changeColor) {
        this.theme.changeColor("green");
      }
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