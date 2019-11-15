<template>
    <div id="app">
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
    margin: 0;
    padding: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
* {
    box-sizing: border-box;
}
pre{
    background: #f0f1f2;
    padding: 10px;
}
.init-table table{
    border-collapse: collapse;
    width: 100%;
}
.init-table tr th,.init-table tr td{
    padding-left: 10px;
    padding-right: 10px;
}
</style>
