<template>
  <div class="chooseWarp">
    <dl
      v-for="(crumb, crumbIndex) in ChooseWarpData.GoodsDetailList"
      :key="crumbIndex"
    >
      <dt>{{ crumb.title }}</dt>
      <dd
        :class="{ active: data.active === 1 }"
        v-for="(data, dataIndex) in crumb.data"
        @click="ChooseWarpFun.ChangeDataIndex(crumb, dataIndex, crumbIndex)"
      >
        {{ data.type }}
      </dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed, reactive, watch, onMounted } from "vue";
import emitter from "@/utils/mitt";
const store = useStore();
const ChooseWarpData = reactive({
  GoodsDetailList: computed(
    () => store.state.detail.GoodsDetailList.crumbData,
  ) || [{}],
  DataIndex: 0,
  crumbIndex: 0,
});
const ChooseWarpFun = reactive({
  //点击改变颜色
  ChangeDataIndex(data: any, index: number, crumbIndex: number) {
    data.data.forEach(item => {
      item.active = 0;
    });
    data.data[index].active = 1;
    emitter.emit("ShowItem", {
      data: data.data,
      index,
      crumbIndex,
      len: ChooseWarpData.GoodsDetailList.length,
    });
    emitter.emit("ChangePrice", {
      data: data.data,
      index,
      crumbIndex,
      len: ChooseWarpData.GoodsDetailList.length,
    });
  },
});
onMounted(() => {
  watch(
    () => ChooseWarpData.GoodsDetailList,
    () => {
      ChooseWarpData.GoodsDetailList.forEach(item => {
        item.data[0].active = 1;
      });
    },
    { deep: false },
  );
});
</script>

<style lang="less" scoped></style>
