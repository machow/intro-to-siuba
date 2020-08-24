// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
import QMultipleChoice from '~/components/edutools/MultipleChoice.vue'
import QOpt from '~/components/edutools/Opt.vue'
import PromptExpandable from '~/components/edutools/PromptExpandable.vue'


// Vue setup
import Vue from 'vue'

//Vue.use(Buefy)
Vue.directive('fix-codemirror', {
  bind (el) {
    el.addEventListener("toggle", event => {
      if (el.open) {
        el.querySelectorAll(".CodeMirror").forEach(cm => cm.CodeMirror.refresh())
      }
    });
  }
})

// Fix server-side rendering
import { window, document} from 'browser-monads'

// note: jupyterlab/services checks whether window is undefined while phosphor/widgets
//       assumes it exists. So we are stuck in a weird place where both cannot be 
//       satisfied, unless we change the global env between when they are imported.
//       importing jupyterlab/services here let's it run its reasonable checks,
//       and then setting globals satisfies phosphor ¯\_(ツ)_/¯
import { Kernel, ServerConnection } from '@jupyterlab/services'
if (process.isServer) {
  global.navigator = {}
  global.navigator.platform = "Mac"
  global.document = document
  global.Element = function() {}
  global.window = window
  global.self = window
}

// requiring here so they run (and import phosphor) after setting globals
const Notebook = require('~/components/Notebook.vue').default
const CodeCell = require('~/components/Cell/CodeCell.vue').default

// similarly, reveal.js uses global navigator
const RevealSlides = require('~/components/RevealSlides.vue').default

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Notebook', Notebook)
  Vue.component('CodeCell', CodeCell)
  Vue.component('QMultipleChoice', QMultipleChoice)
  Vue.component('QOpt', QOpt)
  Vue.component('PromptExpandable', PromptExpandable)
  Vue.component('RevealSlides', RevealSlides)

  // overwrite the scrollBehavior function with custom one
  router.options.scrollBehavior = function(to, from , savedPosition) {
    if (savedPosition) {
      return  savedPosition;
    }
    if (to.hash) {
      return {selector: to.hash};
    }

    document.getElementById('app').scrollIntoView()
    //return {x: 0, y: 0}
  }

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    })
    next()
  })
}

/*
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
*/
