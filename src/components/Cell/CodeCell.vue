<template>
  <div class="code-cell--container">

      <div class="top-bar">
          <div class="is-pulled-right">
            <span v-if="busy" class="top-bar-message">{{status}}</span>
            <pulse-loader :loading="busy" size="8px"></pulse-loader>
          </div>
      </div>

      <!-- codemirror: using cursorActivity, since on change is weird on mobile -->
      <codemirror :value="content"
                  @cursorActivity="setContent"
                  ref="cm"
                  :options="cmOptions" 
                  />
    
      <button @click="execute()">run</button>
      <button @click="resetContent()">reset</button>

      <div class="code-cell--output">
        <div v-if="!activeOutput">
          <slot name="output"></slot>
        </div>
      
        <output-area :output="output" ref="output"></output-area>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
// Pulse Loader
var PulseLoader = require('vue-spinner/src/PulseLoader.vue').default;

// code mirror
import codemirror from '~/components/codemirror'
//import CodeMirror from 'codemirror'
import 'codemirror/mode/python/python'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css'
import "code-mirror-themes/themes/github.css"

// jupyter stuff
const OutputArea = require("~/components/OutputArea.vue").default;

// taken from https://stackoverflow.com/a/42956086/1144523
export function getPreCodeText(slot) {
  return slot[0].children[0].children[0].text
}

export default {
  props: {
    value: String,
    locked: Boolean,
    status: String,
    onExecute: Function,
    onReady: Function,    // called when content first loaded, and on update
  },
  components: {OutputArea, PulseLoader, codemirror},
  beforeMount () {
    if (this.value !== undefined) {
      this.originalContent = this.value
    } else if (this.$slots.default) {
      // get raw code passed into slot. Code should be in a <pre></code> block...
      // this is brittle, but supports using vue markup as a DSL
      this.usingSlotContent = true
      this.slotContent = this.originalContent = getPreCodeText(this.$slots.default)
    }

    if (this.onReady) this.onReady(this.content)
  },
  data: function() { 
    return {
      output: null,
      activeOutput: false,
      slotContent: "",
      usingSlotContent: false,
    }
  },
  computed: {
    content: {
      get () {
        if (this.usingSlotContent) {
          return this.slotContent
        }
        return this.value
      },
      set (v) {
        this.$emit('input', v)
        if (this.usingSlotContent) {
          this.slotContent = v
        }
      }
    },
    content2 () {
      return this.slotContent
    },
    busy () {
      return this.status && this.status != "idle"
    },
    cmOptions () {
      return {
        readOnly: this.locked,
        spellcheck: false,
        autocorrect: false,
        autocapitalize: false,
        theme: 'jupyter',
        mode: 'text/x-python'
      }
    }
  },
  methods: {
    async execute () {
      // on mobile, inputs only update once user clicks out of text field.
      // not sure if this is a codemirror or vue issue.
      await this.$nextTick()
      const future = await this.onExecute(this.content)
      this.output = future
      this.activeOutput = true
    },
    resetContent () {
      const cm = this.$refs.cm.codemirror
      cm.setValue(this.originalContent)
      cm.refresh()
      this.content = this.originalContent
    },
    setContent (cminstance) {
      const val = cminstance.getValue()
      this.slotContent = val
      this.$emit('input', val)
    }
  }
}
</script>

<style>
.code-cell--output {
  overflow: scroll;
  background-color: white;
}

.top-bar {
  height: 30px;
  background-color: white;
}

.is-pulled-right {
  float: right;
}

.top-bar-message {
  padding-right: 8px;
}

.v-spinner {
  float: right;
}

.button-run {
  min-width: 200px;
}

.button-run {
  /*background-color: green;*/
}

.output-stdout > pre {
  padding-bottom: 0px;
}

/*
.button-run.disabled {
  background-color: lightgrey;
}
*/

.textarea--code {
  font-family: Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace;
}

.code-cell--container {
  margin-bottom: 40px;
  /*background-color: rgb(248, 248, 255);*/
}

.code-cell--container + .code-cell--container {
  margin-top: -20px;
  /*background-color: rgb(248, 248, 255);*/
}

.CodeMirror.cm-s-jupyter {
  background-color: rgb(248, 248, 255);
}

.CodeMirror {
  font-family: "IBM Plex Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
</style>
