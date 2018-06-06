<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Test from './components/Test'
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,body {
  margin: 0px;
  padding: 0px; 
}
</style>
