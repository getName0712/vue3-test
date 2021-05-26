<template>
  <div class="home">404页面</div>
</template>
<script>
import { reactive, toRefs } from 'vue'
// import { useStore } from 'vuex'
// useStore == vuex
export default {
  name: 'Home',
  components: {},
  setup () {
    const state = reactive({})
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="scss" scoped></style>
