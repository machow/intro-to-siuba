<template>
  <div>
    <div v-for="(entry, ii) in entries" :key="ii">
      <label class="container">
        <input type="radio" name="test" :value="entry.result" @input="inputEntry(entry)">
        <span class="checkmark"></span>
        <span>{{entry.text}}</span>
      </label>
    </div>

    <button @click="submitted = true">Submit</button>
    <div v-if="submitted" v-html="result">
    </div>
    <slot>
        <Opt text="option a"><div><p>a</p><p>b</p></div></Opt>
        <Opt text="option b"><div><span>xyz</span></div></Opt>
    </slot>
  </div>
</template>

<script>
/* eslint-disable */
import Opt from './Opt.vue'
export default {
  components: {Opt},
  data () {
    return {entries: [], submitted: false, result: null}
  },
  mounted () {
    this.$nextTick(() => {
      // this is the opposite of how vue normally should work. we are passing data
      // up from child components. doing this way for two reasons:
      // 1. vue is being used as a DSL for people to create exercises
      // 2. vue webcomponents wrap all components used in slots in their own shadow dom,
      //    so specifying the radio buttons needs to happen here, using child data.
      // 3. children do not appear available in WC, even using nextTick...
      // see https://forum.vuejs.org/t/how-to-create-nested-components-webcomponent-vue-cli/56155/3
      const vm = this
      this.entries = this.$slots.default
        .map((vnode, ii) => {
          const comp = vnode.elm.vueComponent || vnode.componentInstance
          const result = comp ? comp.$el.innerHTML : vnode.elm.innerHTML
          return {text: comp.$props.text, result}
        })
    })
  },
  methods: {
    inputEntry (entry) {
      this.result = entry.result
      this.submitted = false
    }
  }
}
</script>


<style scoped>
/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>
