<template>
  <el-input 
    v-model="form[prop]" 
    :placeholder="config.placeholder" 
    style="width: 300px" 
  />
</template>

<script>
  export default {
    name: 'XxfInput',
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
        input: 123
      };
    },
    created() {
      this.initWatch()
    },
    methods: {
      initWatch() {
        if (this.config.linkValue && typeof this.config.linkFunction === 'function') {
          this.config.linkValue.forEach(element => {
            const watchKey = `form.${element}`
            console.log(watchKey);
            this.$watch(watchKey, (newValue, oldValue) => {
              this.config.linkFunction(this.form, newValue, oldValue)
            })
          });
        }
      }
    }
  };
</script>