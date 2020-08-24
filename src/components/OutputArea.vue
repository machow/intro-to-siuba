<template>
  <div class="container-editor container">
  </div>
</template>

<script>
/* eslint-disable */
import { Widget } from '@phosphor/widgets'
import { Kernel, ServerConnection } from '@jupyterlab/services'
import { OutputArea, OutputAreaModel } from '@jupyterlab/outputarea'
import { RenderMimeRegistry, standardRendererFactories } from '@jupyterlab/rendermime'

export default {
  props: ["output", "message"],
  mounted () {
    const renderers = standardRendererFactories.filter(factory =>
      factory.mimeTypes.includes('text/latex') ? global.MathJax : true
    )

    const outputArea = new OutputArea({
      model: new OutputAreaModel({ trusted: true }),
      rendermime: new RenderMimeRegistry({ initialFactories: renderers})
    })

    this.outputArea = outputArea

    Widget.attach(outputArea, this.$el)
  },
  watch: {
    output (val) {
      if (val === null || val === undefined || !this.outputArea) return 
        
      this.outputArea.future = val
      this.outputArea.model.clear(true)
    }
  },
}
</script>

<style>
</style>

