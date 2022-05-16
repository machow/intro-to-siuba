<template>
  <div v-on:click.shift.68.66="debug = !debug">
    <!-- click + shift + d + b to debug -->
    <slot :kernel="kernel" :status="status" :execute="execute" :updateSetupCode="updateSetupCode" :debug="debug" :useStorage="useStorage">
      <code-cell :kernel="kernel" :onExecute="execute"></code-cell>
      <code-cell :kernel="kernel" :onExecute="execute"></code-cell>
    </slot>
      <!--<input class="input" type="text" v-model="token">-->
    <div v-if="debug">
      <details>
        <summary>debug</summary>
        <button @click="createKernel()">create</button><br>
        setup code: {{setupCode}}<br><br>
        settings: {{settings}}<br>
        status: {{status}}<br>
        kernel status: {{(kernel || {}).status}}<br>
        phase: {{phase}}<br>
        connectionError: {{connectionError}}<br>
      </details>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
const { Kernel, ServerConnection } = require('@jupyterlab/services')


module.exports = {
  props: {
    useBinder:  { default: true },
    repo:       { default: null },
    branch:     { default: null },
    url:        { default: null },
    token:      { default: null },
    useStorage: { default: true },
    storageKey: { default: "purview" },
    baseUrl: { default: "http://localhost:8888" },
  },
  data: function() { 
    return {
      kernel: null,
      phase: null,
      settings: {},
      setupCode: "",
      connectionError: null,
      storageExpire: 60,
      debug: false,
    }
  },
  computed: {
    status () {
      if (this.connectionError) 
        return "error connecting. please try running again."
      if (this.phase && this.phase != "ready")
        return `binder: ${this.phase}`

      if (this.kernel !== null && this.kernel.status != "idle")
        return this.kernel.status

      return null
    }
  },
  methods: {
    log (f) {
      if (this.debug) f()
    },
    async createKernel () {
        // createKernel() -> (requestBinder()) -> init(): kernel
      let settings

      if (this.useStorage) {
        // attempt to create from localStorage settings
        settings = this.requestLocal()
        if (settings) {
          return await this.init(settings)
        }
      }

      if (this.useBinder) {
        // get new binder settings or use custom ones
        settings = await this.requestBinder(this.repo, this.branch, this.url)
        return await this.init(settings)
      }

      return await this.init({baseUrl: this.url, token: this.token})
    },
    async init (settings) {
      // baseUrl, token
      this.connectionError = false
      this.settings = settings

      if (this.useStorage) {
        this.saveLocal(settings)
      }

      const serverSettings = ServerConnection.makeSettings(settings)
      const kernel = await Kernel.startNew({type: "python3", kernelType: "python3", serverSettings})

      kernel.statusChanged.connect(({status}) => console.log("status change", status))
      kernel.anyMessage.connect((kern, d) => console.log("kernel msg", d.direction, d.msg))

      this.kernel = kernel
      await this.executeSetupCode()
    },
    requestBinder(repo, branch, url) {
        const binderUrl = `${url}/build/gh/${repo}/${branch}`
        return new Promise((resolve, reject) => {
            const es = new EventSource(binderUrl)
            es.onerror = err => {
                es.close()
                this.log(() => console.error('failed'))
                reject(new Error(err))
            }
            es.onmessage = ({ data }) => {
                const msg = JSON.parse(data)
                if (msg.phase && msg.phase !== this.phase) {
                    this.phase = msg.phase.toLowerCase()
                    this.log(() => console.info("phase:", this.phase))
                }

                if (msg.phase === 'failed') {
                    es.close()
                    reject(new Error(msg))
                } else if (msg.phase === 'ready') {
                    es.close()
                    const settings = {
                        baseUrl: msg.url,
                        wsUrl: `ws${msg.url.slice(4)}`,
                        token: msg.token,
                    }
                    resolve(settings)
                }
            }
        })
    },
    requestLocal() {
      // get settings from local storage
      const stored = window.localStorage.getItem(this.storageKey)
      if (stored) {
        this.fromStorage = true
        const { settings, timestamp } = JSON.parse(stored)
        if (timestamp && new Date().getTime() < timestamp) {
          return settings
        }
        window.localStorage.removeItem(this.storageKey)
      }
    },
    saveLocal (settings) {
      const timestamp = new Date().getTime() + this.storageExpire * 60 * 1000
      const json = JSON.stringify({ settings, timestamp })
      window.localStorage.setItem(this.storageKey, json)
    },
    updateSetupCode (code) {
      this.setupCode = code
    },
    async requireKernel () {
      if (this.kernel === null) {
        return await this.createKernel()
      }
      if (['dead', 'reconnecting'].includes(this.kernel.status)) {
        window.localStorage.removeItem(this.storageKey)
        return await this.createKernel()
      }
      
      return this.kernel
    },
    async execute (code) {
      // run given code and return an ipython Future
      try {
        await this.requireKernel()
        const future = await this.kernel.requestExecute({code})
        return future
      } catch (error) {
        this.log(() => console.log(error))
        console.log("execute error handling")
        window.localStorage.removeItem(this.storageKey)
        this.connectionError = true
      }
    },
    async executeSetupCode (code) {
      if (this.setupCode) {
        return await this.execute(this.setupCode)
      }
    },
    async restart () {
      // restart the kernel and re-run setup code
      await this.requireKernel()
      await this.kernel.restart()
      if (this.setupCode) {
        await this.execute(this.setupCode)
      }
    }
  }
}
</script>

<style>
</style>

