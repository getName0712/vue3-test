<template>
  <div class="song">
    <div class="nav"></div>
    <div class="song_top">
      <div class="img"><img :src="cdlist.logo" alt="" /></div>
      <div class="concent">
        <div class="font">{{cdlist.dissname}}</div>
        <p class="name"><i class="el-icon-s-custom"></i><span><a href="">{{cdlist.nickname}}</a></span></p>
        <p class="name">标签：<span v-for="item in  cdlist.tags" :key="item.id"><a href="">{{item.name}}</a></span></p>
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
    <div class="song_list">
        <div class="table">
            <table>
                <tr class="song_tr">
                    <td style="width:50px"></td>
                    <td style="width:350px">歌曲</td>
                    <td style="width:150px">歌手</td>
                    <td style="width:150px">专辑</td>
                    <td style="width:60px">时长</td>
                </tr>
                <tr class="song_trs" v-for="(val, ind) in cdlist.songlist" :key="ind">
                    <td style="width:50px">{{ind}}</td>
                    <td style="width:350px"><p @click="play(val.mid)">{{val.title}}</p></td>
                    <td style="width:150px"><p @click="play()">{{val.singer[0].name}}</p></td>
                    <td style="width:150px"><p @click="play()">{{val.album.name}}</p></td>
                    <td style="width:60px"><span>00:{{val.interval}}</span></td>
                </tr>
            </table>
        </div>
        <div>
            <!-- <div>简介</div> -->
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
    const play = (play) => {
      console.log(play)
    }
    return {
      ...toRefs(state),
      init,
      play
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
  .song_list{
      display: flex;
      .table{
           width: 850px;
           margin-right: 50px;
           padding-bottom: 50px;
           table{
               tr{
                   font-size: 16px;
                   line-height: 40px;
                   color: rgb(104, 101, 101);
                   td{
                       text-indent:8px ;
                        p{font-size: 14px;}
                         p:hover{
                           color: rgb(209, 224, 201);
                           cursor: pointer;
                         }
                       p{
                           width: 80%;
                           overflow: hidden;
                           text-overflow: ellipsis;
                           white-space: nowrap;
                       }
                   }
               }
           }
      }
  }
  .song_top {
    display: flex;
    padding: 30px 0;
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
