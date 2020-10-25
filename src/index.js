import hljs from 'highlight.js'

const injectStyle = style => {
  const protocol = location.protocol.indexOf('file') ? 'http' : ''
  const link = document.createElement('link')
  link.href = `${protocol}://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.0.0/build/styles/${style}.min.css`
  link.rel = 'stylesheet'
  document.head.appendChild(link)
}

let injected = false

const module = function (sceneElement, modConfig, sceneConfig, projectConfig) {
  const style = typeof modConfig === 'string' ? modConfig : 'default'
  if (!injected) {
    injectStyle(style)
    injected = true
  }

  sceneElement.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block)
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
