<template>
  <div>
    <div class="reveal-container">
      <div class="reveal show-notes">
        <div class="slides" ref="slides" v-html="slides">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Reveal from 'reveal.js/js/reveal'

import Prism from 'prismjs'
import 'prismjs/plugins/keep-markup/prism-keep-markup.js'

import 'reveal.js/css/reveal.css'
import '~/styles.sass'
//import 'prismjs/themes/prism.css'


export default {
  name: 'app',
  props: ['slides'],
  data () {
    return {
      value: "woho",
      showSlides: true
    }
  },
  mounted() {
    import('reveal.js').then(({ default: Reveal }) => {

      Reveal.initialize({
        center: false,
        progress: false,
        showNotes: true,
        controls: true,
        width: 650,
        height: 600,
        minScale: .5,
        maxScale: 1,
      })
      //Reveal.slide(-1, -1, -1)
      //console.log("syncing")
      //Reveal.sync()

      Reveal.addEventListener( 'slidechanged', event => {
        // add the has-vertical-slide class to controls, to grey the right arrow
        const controls = event.srcElement.querySelector('.controls')
        const crntSlide = event.currentSlide

        const isVertical = crntSlide.tagName == "SECTION"
                & !crntSlide.classList.contains("stack")
                & crntSlide.nextElementSibling?.tagName == "SECTION"

        isVertical ?  controls.classList.add('has-vertical-slide')
                   : controls.classList.remove('has-vertical-slide')
      })

    })

    import(`prismjs/components/prism-python.js`).then(() =>
        setTimeout(() => {
            Prism.highlightAll()
        }, 1000)
    )
  },
  destroyed () {
    delete require.cache[require.resolve('reveal.js')]
    delete require.cache[require.resolve('reveal.js/plugin/markdown/markdown.js')]

  }
}
</script>

<style lang="sass">

html
    overflow-y: visible !important;

body
    overflow-y: visible !important;

.reveal.overview .slides
    overflow: visible !important

.slides
    text-align: left !important
    overflow: hidden !important

.reveal-container
    height: 600px;

.reveal.show-notes
    max-width: 100% !important;

.reveal .speaker-notes
    background-color: white
    left: 698px;
    border: 2px solid var(--color-subtle-medium) !important
    border-radius: var(--border-radius)
    font-size: var(--font-size-sm)

    ul
        padding-left: 0px

.reveal .speaker-notes:before 
    visibility: hidden

@media screen and (max-width: 1024px)
    .reveal.show-notes .speaker-notes
        height: auto !important
    
    // compensate for notes being below slides
    .reveal-container
        height: 1024px;


/* overwrite white theme styles */
.reveal pre
    box-shadow: none !important;

.reveal
    h1
        border-bottom: 1px solid var(--color-subtle-medium)
        font-size: 2rem
    
    section.stack:first-child h1, .reveal section:last-child h1
        font-size: 4rem;
        border: 0;
        text-align: center;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;



    h1, h2, h3, pre, ul, ol
        margin-bottom: 2rem

    li
        margin-left: 2rem

    img, video, iframe
        max-width: 95%
        margin-bottom: 2rem

    img[align]
        padding: 2rem

    td
        border-bottom: 1px solid var(--color-subtle-medium)

    th
        border-bottom: 2px solid var(--color-theme)

    a
        color: var(--color-theme)
        text-decoration: underline

    section
        height: 100%
        padding: 1rem

    .slides > section > section
        padding: 0px !important

    .notes-placeholder
        display: none
    
    section
        .img-height-350 img
            height: 350px;

        .img-height-300 img
            height: 300px;

        .font-size-sm pre code
            font-size: var(--font-size-sm)

    .has-vertical-slide .navigate-right
        opacity: .3 !important;

</style>

