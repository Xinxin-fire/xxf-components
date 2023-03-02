<template>
  <div id="app" >
    <!-- <XxfFormTable :searchConfig="searchConfig" :tableHead="tableHead" /> -->
    <XxfForm class="xxf-form" :formConfig="formConfig" :form="form" />
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        input: 1,
        // formConfig: [
        //   {type: 'xxfInput', prop: 'name', value: '' },
        //   {type: 'xxfSelect', prop: 'status', value: '' },
        // ],
        form: {
          contract: 1,
          contractName: '1',
        },
        formConfig: {
          contract: { 
            type: 'xxfSelect', 
            label:'合同类型',  
            options: [{label :'正式合同', value: 1}, {label :'临时合同', value: 2}], 
          },
          contractName: { 
            type: 'xxfInput', 
            label:'合同名称', 
            linkValue: ['contract'], 
            linkFunction: (form, newValue, oldValue) => {
              if (newValue === 1) {
                console.log(this)
                form.contractName = '正式合同'
              } else {
                form.contractName = '临时合同'
              }
            }, 
          },
        },
        searchConfig: [
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
    }
  };
</script>

<style>
.xxf-form {
  margin-top: 20px;
}
</style>
