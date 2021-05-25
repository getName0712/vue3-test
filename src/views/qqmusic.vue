<template>
  <div class="home">
    <div class="pai">
      <!-- <div>首页推荐</div> -->
      <div class="ranking">
        <el-carousel interval="1000">
          <el-carousel-item v-for="(item, index) in focus" :key="index">
            <!-- <h3>{{ index }}</h3> -->
            <img :src="item.pic_info.url" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="margin-top:50px">歌单推荐</div>
      <div class="song">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in song " :key="item">
            <div class="flex">
              <div class="song_card" v-for="val in item " :key="val">
                <img :src="val.imgurl" alt="" />
                <div class="song_name">
                  <a href="javascript:">{{val.dissname}}</a>
                </div>
                <div class="song_num">播放量  {{val.listennum}}</div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="margin-top:50px">音乐排行榜</div>
      <div class="pai_con">
        <div class="icon" v-for="item in topList.splice(0, 4)" :key="item">
          <div class="top">{{ item.topTitle }}</div>
          <i class="el-icon-minus"></i>
          <div class="context " v-for="val in item.songList" :key="val">
            <div class="yi">{{ val.songname }}</div>
            <div style="font-size:16px" class="yi">{{ val.singername }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, onMounted } from 'vue'
import { getSongLists, getRecommend, getTopLists } from '@/api/api.js'
// import { useStore } from 'vuex'
// useStore == vuex
export default {
  components: {},
  setup () {
    console.log(11)
    const state = reactive({
      focus: '',
      topList: [],
      song: []
    })
    onMounted(() => {})
    // 排行榜
    const getTop = () => {
      getTopLists().then(res => {
        console.log(res)
        console.log('排行榜')
        state.topList = res.response.data.topList
      })
    }
    getTop()
    // 歌单列表
    const getLists = () => {
      getSongLists().then(res => {
        console.log(res)
        console.log('歌单列表')
        // state.song = res.response.data.list
        const lenth = Math.ceil(res.response.data.list.length / 5) || 1
        const totalPage = []
        for (let i = 0; i < lenth; i++) {
          totalPage[i] = res.response.data.list.slice(5 * i, 5 * (i + 1))
        }
        state.song = totalPage
      })
    }
    getLists()
    // 首页推荐
    const getRec = () => {
      getRecommend().then(res => {
        console.log(res)
        console.log('首页推荐')
        state.focus = res.response.focus.data.content
      })
    }
    getRec()
    return {
      ...toRefs(state),
      getLists,
      getRec,
      getTop
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  // background-image: url("//scpic.chinaz.net/files/pic/pic9/202003/zzpic24019.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 100vh;
  .yi {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .pai {
    width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
    font-size: 32px;
    text-align: center;
    .flex {
      display: flex;
      justify-content: space-around;
    }
    .song {
      padding: 30px 10px;
      box-sizing: border-box;
      .song_card {
        line-height: 30px;
        img {
          width: 224px;
          height: 224px;
          margin-bottom: 20px;
        }
        .song_name {
          font-size: 14px;
        }
        .song_num {
          font-size: 14px;
        }
      }
    }
    .ranking {
      color: #dddd;
    }
    .pai_con {
      padding: 26px;
      display: flex;
      justify-content: space-around;
      .icon {
        background: #dddd;
        width: 24%;
        box-sizing: border-box;
        padding: 20px 10px;
      }
      .top {
        font-size: 28px;
        line-height: 40px;
        margin-bottom: 20px;
      }
      .context {
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
