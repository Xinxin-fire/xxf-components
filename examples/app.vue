<template>
  <div id="app" >
    <XxfFormTable :formContent="formContent" :tableHead="tableHead" />
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        input: 1,
        formContent: [
          {type: 'xxfInput', prop: 'name', value: '' },
          {type: 'xxfSelect', prop: 'status', value: '' },
        ],
        tableHead: [
          {prop: 'name', label: '姓名'},
          {prop: 'status', label: '状态'},
          {prop: 'address', label: '地址'}
        ],
      }
    },
    mounted() {
      console.log(123)
    }
  };
</script>
