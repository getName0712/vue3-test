<template>
  <div class="ip">
    <ul>
      <li v-for="(item, index) in list" :key="index"><span>{{item}}</span><button @click="remove(index)">删除</button></li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'List',
  props: {
    list: {
      type: Array,
      default: null
    }
  },
  emit: ['remove'],
  // props接收父组件传值 context子组件往父组件传值
  setup (props, context) {
    const state = reactive({
      list: props.list
    })
    const remove = (i) => {
      console.log(i, '删除')
      context.emit('remove', i)
    }
    return {
      state,
      remove
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  width: 300px;
  margin: 40px auto;
  li{
      margin: 10px;
      text-align: center;
  }
  span {
    margin-right: 20px;
  }
}
</style>
