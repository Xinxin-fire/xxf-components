<template>
  <div class="xxf-search">
    <component
      v-for="item in searchConfig" 
      :key="item.prop"
      v-bind:is="item.type"
    />
    <!-- <XxfInput></XxfInput>
    <XxfSelect></XxfSelect> -->
  </div>
</template>

<script>
import input from "../../input/src/main.vue";
import select from "../../select/src/main.vue";
  export default {
    name: 'XxfSearch',
    components: {xxfInput: input, xxfSelect: select },
    props: {
      searchConfig: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        input: 123
      };
    },
  };
</script>
<style>
.xxf-search {
  display: flex;
}
</style>