<template>
  <div class="test">
    <div>
      当前数字是: {{count}}
    </div>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'test',
  data () {
    return {
      data: '这是数据'
    }
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  },
  computed: {
    ...mapGetters(['count'])
  }
}

</script>
<style>

</style>