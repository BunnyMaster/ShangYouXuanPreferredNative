<template>
  <div id="picList">
    <swiper :modules="modules" :slides-per-view="3" :space-between="50" navigation>
      <swiper-slide v-for="(picList, picListIndex) in picListData.picList" :key="picListIndex" @click="picListFun.ClickChange(picListIndex)" class="inBox">
        <img :src="picList.s" :class="{ current: picListIndex === picListData.picListIndex }" style="width: 50px; height: 50px" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { computed, nextTick, reactive, watch } from "vue";
import { useStore } from "vuex";
import emitter from "@/utils/mitt";
const store = useStore();
const modules = [Navigation, Pagination, Scrollbar, A11y];
const picListData = reactive({
  picList: computed(() => store.state.detail.ImagessrcList),
  picListIndex: 0,
});
const picListFun = reactive({
  ClickChange(index: number) {
    picListData.picListIndex = index;
    emitter.emit("picList", picListData.picList[index].b);
  },
});

watch(
  () => picListData.picList,
  () => {
    nextTick(() => {
      picListFun.ClickChange(0);
    });
  },
  { deep: true, immediate: true },
);
</script>
<style lang="less">
.current {
  box-sizing: border-box;
  border: 1px solid #b1191a;
}
#picList {
  position: relative;
  width: 372px;
  height: 56px;
  float: left;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.outBox {
  position: absolute;
  left: 0;
  top: 0;
  flex: 1;
  display: flex;
  flex-wrap: nowrap;
  font-size: 0;
  transition: all 0.5s linear;
  overflow: hidden;

  .inBox {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    margin: 0 20px 0 20px;
    box-sizing: border-box;
    &:hover {
      border: 1px solid #b1191a;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
