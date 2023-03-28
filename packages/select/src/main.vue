<template>
  <el-select v-model="form[prop]" placeholder="请选择">
    <el-option
      v-for="item in itemConfig.options"
      :key="item.value"
      :label="item.label"
      :disabled="itemConfig.disabled"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    name: 'XxfSelect',
    props: {
      itemConfig: {
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
    created() {
      this.initWatch()
    },
    methods: {
      initWatch() {
        console.log(this.itemConfig);
        if (this.itemConfig.linkValue && typeof this.itemConfig.linkFunction === 'function') {
          this.itemConfig.linkValue.forEach(element => {
            const watchKey = `form.${element}`
            console.log(watchKey);
            this.$watch(watchKey, (newValue, oldValue) => {
              this.itemConfig.linkFunction(this.form, this.itemConfig, newValue, oldValue)
            })
          });
        }
      }
    }
  };
</script>