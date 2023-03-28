<template>
  <el-input 
    v-model="form[prop]"
    :placeholder="itemConfig.placeholder"
    :disabled="itemConfig.disabled"
    style="width: 300px" 
  />
</template>

<script>
  export default {
    name: 'XxfInput',
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
        input: 123
      };
    },
    created() {
      this.initWatch()
    },
    methods: {
      initWatch() {
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