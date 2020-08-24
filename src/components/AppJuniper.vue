<template>
  <div>
    <h1 class="title is-1">siublocks</h1>
    <notebook>
      <template v-slot:default="sp">
        <code-cell :kernel="sp.kernel"></code-cell>

      </template>

    </notebook>
  </div>
</template>

<script>
/* eslint-disable */

// external plugins ----

const Notebook = require("./Notebook.vue").default;
const CodeCell = require("./Cell/CodeCell.vue").default;

module.exports = {
  components: {Notebook, CodeCell},
  data: function() { 
    return {
    }
  },
}
</script>

<style>
</style>


