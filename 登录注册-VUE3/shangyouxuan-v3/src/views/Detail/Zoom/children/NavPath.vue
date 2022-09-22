<template>
  <a
    :href="Navpath.url"
    v-for="(Navpath, NavpathIndex) in NavPathData.NavPath"
    :key="NavpathIndex"
    >{{ Navpath.title
    }}<i v-if="NavpathIndex !== NavPathData.NavPath.length - 1">/</i></a
  >
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import { useStore } from "vuex";
const store = useStore();
const NavPathData = reactive({
  NavPath: computed(() => store.state.detail.PathDataList),
});
</script>

<style scoped></style>
