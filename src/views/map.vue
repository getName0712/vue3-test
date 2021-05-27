<template>
    <div id="map"></div>
</template>
<script>
import { reactive, onMounted, toRefs } from 'vue'
export default {
  setup () {
    let BMapGL
    const state = reactive({

    })
    onMounted(() => {
      console.log(1)
      var map = new BMapGL.Map('map') // 创建Map实例
      map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11) // 初始化地图,设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
      var navi3DCtrl = new BMapGL.NavigationControl3D() // 添加3D控件
      map.addControl(navi3DCtrl)
    })

    return {
      ...toRefs(state)
    }
  }

}
</script>
<style lang="scss" scoped>
#map{
    width: 100%;
    height: 100vh;
}
</style>
