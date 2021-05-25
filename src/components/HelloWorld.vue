<template>
  <div class="hello">
    <h3>待办事项</h3>
    <input type="text" v-model.trim ="state.todo" class="input" />
    <button @click="addtodo">添加待办事项</button>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'HelloWorld',
  emits: ['todo'],
  setup (props, context) {
    console.log(props, '接受父组件数据')
    const state = reactive({
      todo: ''
    })
    const addtodo = () => {
      if (state.todo === '') {
        alert('输入不能为空 ')
        return
      }
      console.log(state.todo, '添加待办事项')
      context.emit('todo', state.todo)
      state.todo = ''
    }
    return {
      state,
      addtodo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input {
  margin-right: 30px;
}
h3 {
  margin: 40px 10px;
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
