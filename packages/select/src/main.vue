<template>
  <el-select v-model="form[prop]" placeholder="请选择">
    <el-option
      v-for="item in config.options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    name: 'XxfSelect',
    props: {
      config: {
        type: Object,
        default: () => {}
      },
      form: {
        type: Object,
        default: () => {}
      },
      prop: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        value: ''
      }
    },
    mounted() {
      // console.log(this.form)
      // console.log(this.prop)
      // console.log(this.config)
    }
  };
</script>