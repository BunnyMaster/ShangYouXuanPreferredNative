<template>
  <!-- 分类导航开始 -->
  <div id="navWarp">
    <!-- 版新元素 -->
    <div class="navWapMain">
      <a href="javascript:;">全部商品分类</a>
      <a href="javascript:;">服装城</a>
      <a href="javascript:;">美妆馆</a>
      <a href="javascript:;">尚优选超市</a>
      <a href="javascript:;">全球购</a>
      <a href="javascript:;">闪购</a>
      <a href="javascript:;">团购</a>
      <a href="javascript:;">有趣</a>
      <a href="javascript:;">秒杀</a>
    </div>
  </div>
  <!-- 分类导航结束 -->
</template>

<script setup lang="ts"></script>

<style lang="less">
// 分类导航开始
#navWarp {
  border-bottom: 2px solid #e1251b;

  // 版新元素
  .navWapMain {
    width: 1200px;
    margin: 0 auto;
    .clearfix();

    a {
      margin: 0 22px;
      font-size: 16px;
      color: #333;
      float: left;
      line-height: 50px;

      &:first-child {
        float: left;
        width: 210px;
        height: 50px;
        background-color: #e1251b;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        line-height: 50px;
      }
    }
  }
}

// 分类导航结束
</style>
