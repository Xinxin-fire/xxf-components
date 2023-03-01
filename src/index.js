import Input from "../packages/select/index.js";
import Select from "../packages/input/index.js";
import XxfForm from "../packages/form/index.js";
import XxfTable from "../packages/table/index.js";
import XxfFormTable from "../packages/formTable/index.js";
const components = [
  Input,
  Select,
  XxfForm,
  XxfTable,
  XxfFormTable,
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