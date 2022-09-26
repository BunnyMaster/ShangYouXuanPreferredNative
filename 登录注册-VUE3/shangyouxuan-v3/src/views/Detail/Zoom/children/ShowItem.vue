<template>
  <div class="ShowItem">
    <ul>
      <li
        v-for="(crum, index) in ShowItem.list"
        :key="index"
        v-show="crum !== undefined"
      >
        {{ crum }}<i @click="ShowItemFun.RemoveItem(index)">×</i>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import emitter from "@/utils/mitt";
import { reactive } from "vue";
const ShowItem = reactive({
  list: new Array(4),
});
const ShowItemFun = reactive({
  RemoveItem(index) {
    ShowItem.list[index] = undefined;
  },
});
emitter.on("ShowItem", res => {
  ShowItem.list[res.crumbIndex] = res.data[res.index].type;
});
</script>

<style scoped></style>
