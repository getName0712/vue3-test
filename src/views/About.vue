<template>
  <div class="about">
    <div class="top">导航栏</div>
    <div class="nav">
      <router-link to="/qqmusic">QQ音乐</router-link>
      <router-link to="/map">地图</router-link>
    </div>
  </div>
</template>
<script>
export default {
  setup () {}
}
</script>
<style lang="scss" scoped>
.about {
  width: 100%;
  background-image: url("//scpic.chinaz.net/files/pic/pic9/202103/apic31134.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 100vh;
  .top {
    text-align: center;
    font-size: 30px;
    padding-top: 30px;
  }
  .nav {
    width: 1200px;
    margin: 0 auto;
    font-size: 20px;
  }
}
</style>
