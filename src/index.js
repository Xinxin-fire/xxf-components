import Input from "../packages/select/index.js";
import Select from "../packages/input/index.js";
const components = [
  Input,
  Select,
]
console.log(Input)
const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
export default {
  install
}