<template>
    <!-- hack to compile slot element (note: appears in DOM) -->
    <div v-show="false"><slot></slot></div>
</template>


<script>
// taken from https://stackoverflow.com/a/42956086/1144523
function getSlotText(children) {
  return children.map(vnode => (vnode.text || vnode.elm.outerHTML)).join('');
}


export default {
  props: ["text"],
  inheritAttrs: false,
  data () { return {result: "", domVisible: true}},
  mounted () {
    // hack to get the outer html out of option (this allows people to define
    // exercises simply in html, w/o knowledge of vue)
    this.domVisible = false
    this.result = getSlotText(this.$slots.default)
  } 
}

</script>

<style>
</style>
