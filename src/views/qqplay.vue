<template>
  <div class="song">
    <div class="nav"></div>
    <div class="song_top">
      <div class="img"><img :src="cdlist.logo" alt="" /></div>
      <div class="concent">
        <div class="font">{{cdlist.dissname}}</div>
        <p class="name"><i class="el-icon-s-custom"></i><span>{{cdlist.nickname}}</span></p>
        <p class="name">标签：<span v-for="item in  cdlist.tags" :key="item.id">{{item.name}}</span></p>
        <p class="name">播放量：96.0万</p>
        <p class="name">收藏量：2165</p>
        <div class="button">
          <el-button type="success" icon="el-icon-video-play">播放全部</el-button>
          <el-button  icon="el-icon-star-off">收藏</el-button>
          <el-button  icon="el-icon-chat-round">评论</el-button>
          <el-button  icon="el-icon-chat-dot-round">更多</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { getSongListDetail } from '@/api/api.js'
export default {
  setup () {
    const route = useRoute()
    const state = reactive({
      cdlist: ''
    })
    const init = () => {
      const { disstid } = route.params
      getSongListDetail({ disstid }).then(res => {
        console.log(res)
        state.cdlist = res.response.cdlist[0]
      })
    }
    init()
    return {
      ...toRefs(state),
      init
    }
  }
}
</script>
<style lang="scss" scoped>
.song {
  width: 1200px;
  margin: 0 auto;
  .nav {
    height: 160px;
  }
  .song_top {
    display: flex;
    .img {
      width: 250px;
      height: 250px;
      margin-right: 60px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .concent {
        margin-top: 10px;
      .font {
        font-size: 30px;
        line-height: 50px;
      }
      .name {
        line-height: 30px;
        span {
          margin-left: 5px;
        }
        .el-icon-s-custom {
          color: rgb(104, 101, 101);
        }
      }
    }
    .button{
        margin-top: 10px;
        .el-button{
            width: 140px;
        }
    }
  }
}
</style>
