<template>
  <div id="picList">
    <ul>
      <li
        v-for="(picList, picListIndex) in picListData.picList"
        :key="picListIndex"
      >
        <img :src="picList.s" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import { useStore } from "vuex";
const store = useStore();
const picListData = reactive({
  picList: computed(() => store.state.detail.ImagessrcList),
});
</script>
