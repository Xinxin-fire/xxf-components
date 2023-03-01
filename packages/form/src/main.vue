<template>
  <div class="xxf-form">
    <component
      v-for="item in formContent" 
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
    name: 'XxfForm',
    components: {xxfInput: input, xxfSelect: select },
    props: {
      formContent: {
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
.xxf-form {
  display: flex;
}
</style>