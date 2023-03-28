<template>
  <div id="app">
    <!-- <XxfFormTable :searchConfig="searchConfig" :tableHead="tableHead" /> -->
    <XxfForm class="xxf-form" :formConfig="formConfig" :form="form"/>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      input: 1,
      form: {
        contract: '',
        contractName: "",
        settle: '',
        settleName: ''
      },
      formConfig: {
        contract: {
          type: "xxfSelect",
          label: "合同类型",
          options: [
            { label: "正式合同", value: 1 },
            { label: "临时合同", value: 2 },
          ],
        },
        contractName: {
          type: "xxfInput",
          label: "合同名称",
          linkValue: ["contract"],
          linkFunction: (form, itemConfig, newValue, oldValue) => {
            if (newValue === 1) {
              form.contractName = "正式合同";
              itemConfig.disabled= true;
            } else {
              form.contractName = "临时合同";
              itemConfig.disabled= false;
            }
          },
        },
        settle: {
          type: "xxfSelect",
          label: "结算类型",
          options: [],
          linkValue: ["contract"],
          linkFunction: (form, itemConfig, newValue, oldValue) => {
            if (newValue === 1) {
              itemConfig.options = [
              { label: "按月结算", value: 1 },
              { label: "按年结算", value: 2 },
              ];
            } else {
              itemConfig.options = [
                { label: "临时结算", value: 3 },
                { label: "按日结算", value: 4 },
              ];
            }
          },
        },
        settleName: {
          type: "xxfInput",
          label: "合同名称",
          linkValue: ["contract", 'settle'],
          linkFunction: (form, itemConfig, newValue, oldValue) => {
            console.log(form.contract, form.settle);
            if (form.contract === 1 && form.settle === 1) {
              form.settleName = "已结算";
            } else {
              form.settleName = "未结算";
            }
          },
        },
      },
      searchConfig: [
        { type: "xxfInput", prop: "name", value: "" },
        { type: "xxfSelect", prop: "status", value: "" },
      ],
      tableHead: [
        { prop: "name", label: "姓名" },
        { prop: "status", label: "状态" },
        { prop: "address", label: "地址" },
      ],
    };
  },
  mounted() {},
  methods: {
    change() {
      console.log(1);
    }
  }
};
</script>

<style>
.xxf-form {
  margin-top: 20px;
}
</style>
