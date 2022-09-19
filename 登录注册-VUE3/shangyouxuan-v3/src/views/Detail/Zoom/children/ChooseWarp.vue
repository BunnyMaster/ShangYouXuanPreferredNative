<template>
  <div class="chooseWarp">
    <dl>
      <dt>选择颜色</dt>
      <dd data="0" class="active">金色</dd>
      <dd data="40">银色</dd>
      <dd data="90">黑色</dd>
    </dl>
    <dl>
      <dt>内存容量</dt>
      <dd data="0" class="active">16G</dd>
      <dd data="300">64G</dd>
      <dd data="900">128G</dd>
      <dd data="1300">256G</dd>
    </dl>
    <dl>
      <dt>选择版本</dt>
      <dd data="0" class="active">公开版</dd>
      <dd data="-1000">移动版</dd>
    </dl>
    <dl>
      <dt>购买方式</dt>
      <dd data="0" class="active">官方标配</dd>
      <dd data="-240">优惠移动版</dd>
      <dd data="-390">电信优惠版</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "ChooseWarp",
};
</script>

<style scoped></style>
