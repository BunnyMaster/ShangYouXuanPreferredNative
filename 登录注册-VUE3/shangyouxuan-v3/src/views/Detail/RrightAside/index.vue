<template>
  <!-- 右侧侧边栏结束 -->
  <div
    class="rightAside"
    :class="RightAsideData.flag ? 'asideOpen' : 'asideClose'"
  >
    <!-- 按钮区域 -->
    <div
      class="btns"
      :class="RightAsideData.flag ? 'btnsOpen' : 'btnsClose'"
      @click="RightAsideFun.btnsCloseOrOpen"
    ></div>
    <!-- 侧边栏区域 -->
    <div class="content"></div>
    <!-- 侧边导航栏 -->
    <NavList />
  </div>
  <!-- 右侧侧边栏结束 -->
</template>

<script setup lang="ts">
import { reactive } from "vue";
import NavList from "@/views/Detail/RrightAside/children/NavList.vue";
const RightAsideData = reactive({
  flag: false,
  btnsCloseOrOpen: "btnsClose",
});
const RightAsideFun = reactive({
  btnsCloseOrOpen() {
    RightAsideData.flag = !RightAsideData.flag;
  },
});
</script>

<style lang="less">
// 右侧侧边栏开始
.rightAside {
  width: 300px;
  height: 100%;
  background: #7a6e6e;
  transition: all 0.5s linear;
  position: fixed;
  top: 0;

  &.asideClose {
    right: -294px;
  }

  &.asideOpen {
    right: 0;
  }

  .btns {
    width: 35px;
    height: 35px;
    background: #7a6e6e;
    border-radius: 5px 0 0 5px;
    left: -29px;
    background-size: 35px 35px;
    position: absolute;

    &.btnsClose {
      background-image: url(~"@/assets/images/list.png");
    }

    &.btnsOpen {
      background-image: url(~"@/assets/images/cross.png");
    }
  }

  .content {
    position: absolute;
    width: 294px;
    background-color: bisque;
    left: 6px;
    top: 0;
    bottom: 0;
    z-index: 50;
  }

  .navList {
    position: absolute;
    left: -29px;
    top: 50%;
    transform: translateY(-50%);

    li {
      position: relative;
      width: 35px;
      height: 35px;

      p {
        width: 35px;
        height: 35px;
        background-color: #7a6e6e;
        background-image: url(~"@/assets/images/toolbars.png");
        background-position: -87px -174px;
      }

      i {
        position: absolute;
        left: 35px;
        top: 0;
        width: 62px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        transition: all 0.5s linear;
        background-color: #7a6e6e;
      }

      &:hover {
        p {
          background-color: pink;
        }

        i {
          background-color: pink;
          left: -62px;
        }
      }
    }
  }
}
</style>
