import hljs from 'highlight.js'

const module = function (sceneElement, modConfig, sceneConfig, projectConfig) {
  // The module runs before the block render function.
  // To affect the block DOM we need to postpone the execution to the next tick
  setTimeout(() => {
    sceneElement.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block)
    })
  })

  // const highlightedCode = hljs.highlightAuto('<span>Hello World!</span>').value
  // const highlightedCode = hljs.highlight('xml', '<span>Hello World!</span>').value
}

export default module

module.install = Presenta => {
  Presenta.addModule('highlightjs', module)
}

if (typeof window !== 'undefined' && window.Presenta) {
  window.Presenta.use(module)
}
