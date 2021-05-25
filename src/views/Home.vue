<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h3>你今天准备做什么{{count}}</h3>
    <p>vuex---{{sss}}</p>
    <button @click="add()">按钮</button>
    <br>
    <button @click="banners()">测试banne</button>
    <p>测试结果：{{fff}}</p>
    <HelloWorld @todo="addtodo" />
    <List :list="todoList" @remove="remove" />
    <Echart />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import List from '@/components/lisi.vue'
import Echart from '@/components/echrt.vue'
import { reactive, ref, toRefs } from 'vue'
import { useStore } from 'vuex'
// import axios from 'axios'
import { banner } from '@/api/api.js'

// useStore == vuex
export default {
  name: 'Home',
  components: {
    HelloWorld,
    List,
    Echart
  },
  setup () {
    const store = useStore()
    const state = reactive({
      todoList: ['吃饭1', '睡觉2'],
      sss: store.state.count,
      fff: ''
    })
    const banners = () => {
      banner().then(res => {
        console.log(res)
      })
    }
    const count = ref(0)
    const add = () => {
      console.log(count)
      count.value++
    }
    const addtodo = todo => {
      console.log(todo)
      state.todoList.push(todo)
    }
    const remove = i => {
      console.log(i)
      state.todoList.splice(i, 1)
    }
    return {
      ...toRefs(state),
      count,
      add,
      addtodo,
      remove,
      banners
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  text-align: center;
}
#main {
  width: 1200px;
  height: 400px;
  margin: 0 auto;
}
.div {
  width: 0;
  height: 0;
  border-top: 20px solid red;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid transparent;
  margin: 0 auto;
}
</style>
