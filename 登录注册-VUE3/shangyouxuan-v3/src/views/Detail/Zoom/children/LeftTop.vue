<template>
  <div id="leftTop">
    <!-- 小图框 -->
    <div id="event" @mousemove="LeftTopFun.MaskIsShow(true)" @mouseleave="LeftTopFun.MaskIsShow(false)" ref="Event"></div>
    <div id="smallPic">
      <img :src="LeftTopData.picUrl" alt="" />
    </div>
    <!-- 蒙版 -->
    <div id="mask" ref="mask" v-show="LeftTopData.Bigpic_Smallpic"></div>
    <!-- 大图框 -->
    <div id="bigPic" v-show="LeftTopData.Bigpic_Smallpic">
      <img :src="LeftTopData.picUrl" alt="" ref="bigPic" />
    </div>
  </div>
</template>

<script setup lang="ts">
import emitter from "@/utils/mitt";
import { reactive, ref } from "vue";
const Event: HTMLDivElement = ref(null);
const mask: HTMLDivElement = ref(null);
const bigPic: HTMLDivElement = ref(null);
const LeftTopData = reactive({
  picUrl: "",
  Bigpic_Smallpic: false,
});
const LeftTopFun = reactive({
  //放大镜的显示
  MaskIsShow(v: boolean) {
    LeftTopData.Bigpic_Smallpic = v;
    //鼠标移动位置
    let X = event.offsetX;
    let Y = event.offsetY;
    //整体的长宽高
    let EventWidth = Event.value.offsetWidth;
    let EventHeight = Event.value.offsetHeight;
    //蒙版的长宽高
    let MaskWidth = mask.value.offsetWidth;
    let MaskHight = mask.value.offsetHeight;
    //蒙版的位置
    let MaskX = X - MaskWidth / 2;
    let MaskY = Y - MaskHight / 2;
    if (MaskX <= 0) MaskX = 0;
    if (MaskX >= EventWidth - MaskWidth) MaskX = EventWidth - MaskWidth;
    if (MaskY <= 0) MaskY = 0;
    if (MaskY >= EventHeight - MaskHight) MaskY = EventHeight - MaskHight;
    //赋值
    mask.value.style.left = MaskX + "px";
    mask.value.style.top = MaskY + "px";
    //大图位置
    bigPic.value.style.left = -2 * MaskX + "px";
    bigPic.value.style.top = -2 * MaskY + "px";
  },
});
emitter.on("picList", res => {
  LeftTopData.picUrl = res;
});
</script>

<style scoped lang="less">
// 左侧上面
#leftTop {
  position: relative;

  // 小图
  #smallPic {
    width: 400px;
    height: 400px;
    border: 1px solid #fdfdfd;

    img {
      width: 100%;
      height: 100%;
    }
  }

  #event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    // background-color: #e1251b;
    z-index: 998;
  }

  #mask {
    width: 200px;
    height: 200px;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    //display: none;
  }

  // 大图
  #bigPic {
    width: 400px;
    height: 400px;
    border: 1px solid #ddd;
    left: 420px;
    top: 0;
    position: absolute;
    overflow: hidden;
    //display: none;

    img {
      position: absolute;
      width: 800px;
      height: 800px;
    }
  }
}
</style>
