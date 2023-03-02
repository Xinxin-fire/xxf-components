<template>
  <div class="xxf--table">
    <XxfSearch :searchConfig="searchConfig" />
    <XxfTable :tableHead="tableHead" />
  </div>
</template>

<script>
import XxfSearch from '../../search';
import XxfTable from '../../table';

  export default {
    name: "XxfFormTable",
    components: { XxfSearch, XxfTable},
    props: {
        searchConfig: {
            type: Array,
            default: () => []
        },
        tableHead: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            input: 123
        };
    }
};
</script>