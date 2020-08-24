<template>
  <div>
    <ul class="code-cell-template__args">
      <li v-for="(entry, field) in templateVars">
        <label>{{entry.label}}</label><span>: </span>
        <select @input="setField(field, $event.target.value)">
          <option v-for="opt in entry.options" :value="opt">{{opt}}</option>
        </select>
      </li>
    </ul>
    <CodeCell v-bind="$props" v-model="code">
      <template v-slot:output>
        <slot name="output"></slot>
      </template>
    </CodeCell>
  </div>
</template>

<script>
import CodeCell from './CodeCell.vue'
import {getPreCodeText} from './CodeCell.vue'

const fillTemplate = function(templateString, templateVars){
    // use string literal syntax as a templating language, e.g. "hello ${this.world}!"
  // https://stackoverflow.com/a/37217166/1144523
  return new Function(`return \`${templateString}\`;`).call(templateVars);
}

const SelectList = {
  props: ["placeholder", "label", "name"],
  template: `
    <div>
      <label>{{label}}</label>
      <select @change="$emit('input', $event.target.value)">
        <option v-for="option in options"
                :key="option">
          {{option}}
        </option>
      </select>
    </div>
  `,
}

export default {
  props: ["template", "templateVars", 'locked', 'status', 'onExecute', 'onReady'],
  data () {
    return {
      formData: {},
      code: "",
    }
  },
  beforeMount () {
    const defaults = {}
    for (const [k, v] of Object.entries(this.templateVars)) {
      defaults[k] = this.getFormEntryDefaults(v)
    }
    this.formData = defaults
    this.setCodeFromTemplate()
  },
  computed: {
    templateRaw () {
      // get raw code passed into slot. Code should be in a <pre></code> block...
      // this is brittle, but supports using vue markup as a DSL
      if (this.template === undefined) {
        return getPreCodeText(this.$slots.default)
      }
      return this.template
    },
  },
  methods: {
    getFormEntryDefaults (entry) {
      return entry.options[0]
    },
    setField (key, value) {
      this.formData[key] = value
      this.setCodeFromTemplate()
    },
    setCodeFromTemplate () {
      this.code = fillTemplate(this.templateRaw, this.formData)
    }
  }
}
</script>

<style lang="sass">
.code-cell-template__args
    ul
        list-style: none
    select
        border-color: #dbdbdb
</style>
