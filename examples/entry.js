import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import Element from 'main/index.js';
Vue.use(Element);
import entry from './app';

new Vue({ 
  ...entry,
}).$mount('#app');
