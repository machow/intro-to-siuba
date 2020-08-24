<template>
  <div class="examples">
    <div class="examples__sidebar">
      <li v-for="tab in tabs" @click="activateTab(tab)">
        <slot :name="'tab-head-' + tab">
          {{tab}}
        </slot>
      </li>
    </div>
    <div class="examples__frame">
      <slot :name="activeExampleSlotName">
      </slot>
    </div>
  </div>
</template>

<script>

export default {
  props: ["tabs"],
  data () {
    return {
      activeTab: this.tabs[0]
    }
  },
  computed: {
    activeExampleSlotName () {
      return `tab-panel-${this.activeTab}`
    }
  },
  methods: {
    tabHeadSlotName(tab) {
      return `tab-head-${tab}`
    },
    activateTab(tab) {
      this.activeTab = tab
    }
  }
}
</script>

<style lang="sass">
.examples
  display: flex
  flex-wrap: wrap

.examples__sidebar
  width: 218px
  border: 1px solid black

.examples__sidebar a
  text-decoration: none
  line-height: 1.2
  margin: 0 8px 8px 0
  display: inline-block
  width: 100%

.examples__frame
  border: 1px solid black
  width: 458px
  

</style>
