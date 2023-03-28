<template>
  <div class="xxf-form">
    <el-form ref="form" :model="form" :label-width="labelWidth">
      <el-form-item v-for="item in Object.keys(formConfig)" :key="item"  :label="formConfig[item].label">
        <el-col>
          <component
            v-on="$listeners"
            :form="form"
            :prop="item"
            :is="formConfig[item].type"
            :itemConfig="formConfig[item]"
          />
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import xxfInput from "../../input";
import xxfSelect from "../../select";
  export default {
    name: 'XxfForm',
    components: {xxfInput, xxfSelect },
    props: {
      form: {
        type: Object,
        default: () => {}
      },
      labelWidth: {
        type: String,
        default: '80px'
      },
      formConfig: {
        type: Object,
        default: () => {}
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