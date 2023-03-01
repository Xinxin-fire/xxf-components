<template>
  <div id="app" >
    123
     <el-input v-model="input" placeholder="Please input" />
    <XxfInput></XxfInput>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        input: 1,
      }
    },
    mounted() {
      console.log(123)
    }
  };
</script>
