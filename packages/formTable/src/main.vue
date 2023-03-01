<template>
  <div class="xxf--table">
    <XxfForm :formContent="formContent" />
    <XxfTable :tableHead="tableHead" />
  </div>
</template>

<script>

  export default {
    name: 'XxfFormTable',
    
    props: {
      formContent: {
        type: Array,
        default: () => []
      },
      tableHead: {
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