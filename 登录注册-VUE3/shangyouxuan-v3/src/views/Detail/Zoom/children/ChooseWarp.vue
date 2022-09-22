<template>
  <div class="chooseWarp">
    <dl
      v-for="(crumb, crumbIndex) in ChooseWarpData.GoodsDetailList"
      :key="crumbIndex"
    >
      <dt>{{ crumb.title }}</dt>
      <dd data="0" class="active" v-for="data in crumb.data">
        {{ data.type }}
      </dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed, reactive } from "vue";

const store = useStore();
const ChooseWarpData = reactive({
  GoodsDetailList: computed(() => store.state.detail.GoodsDetailList.crumbData),
});
const ChooseWarpFun = reactive({});
</script>

<style scoped></style>
