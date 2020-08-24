<template>
  <div class="prompt-container" @click="toggleExpand()">
    <div class="prompt-title">
      <span>Test yourself</span>
    </div>
    <div class="prompt-header">
      <p>{{header}}</p>
      <p v-if="!expanded">(click to answer)</p>
    </div>
    <div :class="{expanded: expanded}" class="prompt-body" @click.stop="$event">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ["header"],
  data () {
    return {expanded: false}
  },
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded
    }
  }
}
</script>


<style lang="sass">

.prompt-container
  /*background-color: #FFFEDC*/
  border-radius: 5px 
  border: 3px solid #FEFAD5
  margin-top: 25px

.prompt-title
  padding: 5px
  background-color: #FEFAD5

.prompt-header
  padding: 5px

.prompt-body:not(.expanded)
  padding: 5px
  display: none
  
  
/* Customize the label (the container) */
</style>
