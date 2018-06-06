<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <i-input :value.sync = 'schoolPicker.theSchool' @on-focus='openPicker'></i-input>
    <school :school-picker = 'schoolPicker' v-if = 'schoolPicker.flag'></school>
  </div>
</template>

<script>
import 'iview/dist/styles/iview.css'; 
import Hello from './components/Hello'
import school from './components/school'

export default {
  components: {
    Hello,
    school
  },
  data() {
    return {
      schoolPicker:{
        flag:false,
        theSchool:'',
      }
    } 
  },
  methods:{
    openPicker(){
      this.schoolPicker.flag = true;
    },
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
