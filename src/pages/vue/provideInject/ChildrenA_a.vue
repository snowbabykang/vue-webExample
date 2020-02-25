<template>
  <div class="border">
    <h1>A 结点</h1>
    <button @click="() => changeColor()">改变color</button>
    <ChildrenB />
    <ChildrenC />
    <ChildrenD />
  </div>
</template>
<script>
import Vue from "vue";
import ChildrenB from "./ChildrenB";
import ChildrenC from "./ChildrenC";
import ChildrenD from "./ChildrenD";
export default {
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD
  },
  provide() {
    this.theme = Vue.observable({
      color: "blue"
    });
    return {
      theme: this.theme
    };
  },
  methods: {
    changeColor(color) {
      if (color) {
        this.theme.color = color;
      } else {
        this.theme.color = this.theme.color === "blue" ? "red" : "blue";
      }
    }
  }
};
</script>
<style scoped>
h1, h2, h3 {
    margin: 0;
}
.border,
.border1,
.border2 {
    border: 1px solid #000;
    padding: 10px 0;
    margin: 10px 10px 0;
    text-align: center;
}
.border1 {
    border-color: #ccc;
}
.border2 {
    border-color: #eee;
}
</style>