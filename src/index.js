import hljs from 'highlight.js'

let injected = false

const injectStyle = style => {
  const protocol = location.protocol.indexOf('file') >= 0 ? 'http:' : ''
  const link = document.createElement('link')
  link.href = `${protocol}//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/${style}.min.css`
  link.rel = 'stylesheet'
  document.head.appendChild(link)
}

const module = function (sceneElement, modConfig, sceneConfig, projectConfig) {
  let style = 'default'
  if (typeof modConfig === 'object') {
    injected = !!modConfig.noCss
    style = modConfig.style || 'default'
  }else {
    style = typeof modConfig === 'string' ? modConfig : 'default'
  }


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
