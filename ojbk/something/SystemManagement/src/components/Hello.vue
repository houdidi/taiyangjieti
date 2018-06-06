<template>
  <div class="hello">
    <!-- 头部 -->
    <rs-Head :username="username"></rs-Head>
    <!-- 左侧导航 -->
    <left-nav></left-nav>
    <router-view></router-view> 
  </div>
</template>

<script>
import rsSelect from './rs-select.vue'
import rsHead from './page/rs-Head.vue'
import leftNav from './page//left-nav.vue'

export default {
  name: 'hello',
  components: {rsSelect,rsHead,leftNav},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      txt: '',
      username: '',
      getData: {}
    }
  },
  created () {
    this.getData = this.$route.params
    this.username = this.getData.username
  },
  methods: {
    getDate (date) {
      alert('搜索')
    },
    getDate1 (date) {
      alert('查询')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
