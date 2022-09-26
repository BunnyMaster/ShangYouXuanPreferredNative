<template>
  <div class="rightTop">
    <h3>{{ RightTopData.RightTop.title }}</h3>
    <p>{{ RightTopData.RightTop.recommend }}</p>
    <div class="priceWrap">
      <div class="priceTop">
        <span>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
        <div class="price">
          <span>￥</span>
          <p>{{ RightTopData.RightTop.price }}</p>
          <i>降价通知</i>
        </div>
        <p>
          <span>累计评价</span>
          <span>{{ RightTopData.RightTop.evaluateNum }}</span>
        </p>
      </div>
      <div class="priceBottom">
        <span>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
        <p>
          <span v-if="RightTopData.RightTop.promoteSales">{{
            RightTopData.RightTop.promoteSales.type
          }}</span>
          <span v-if="RightTopData.RightTop.promoteSales">{{
            RightTopData.RightTop.promoteSales.content
          }}</span>
        </p>
      </div>
    </div>
    <div class="support">
      <span>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</span>
      <p>{{ RightTopData.RightTop.support }}</p>
    </div>
    <div class="address">
      <span>配&nbsp;送&nbsp;至</span>
      <p>{{ RightTopData.RightTop.address }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import emitter from "@/utils/mitt";

const store = useStore();
const RightTopData = reactive({
  RightTop: computed(() => store.state.detail.GoodsDetailList) || [{}],
  changePrice: 0,
});
emitter.on("ChangePrice", res => {
  let changePrice = res.data[res.index].changePrice;
  let price = RightTopData.RightTop.price;
  if (changePrice !== RightTopData.changePrice) {
    RightTopData.RightTop.price =
      price + changePrice - RightTopData.changePrice;
    RightTopData.changePrice = changePrice;
  }
});
</script>

<style scoped></style>
