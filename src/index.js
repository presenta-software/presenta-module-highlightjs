import hljs from 'highlight.js'

let injected = false

const injectStyle = style => {
  const protocol = location.protocol.indexOf('file') >= 0 ? 'http:' : ''
  const link = document.createElement('link')
  link.href = `${protocol}//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/${style}.min.css`
  link.rel = 'stylesheet'
  setTimeout(() => {
    document.head.appendChild(link)
  })
}

const module = function (sceneElement, modConfig, sceneConfig) {
  sceneElement.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block)
  })
}

export default module

module.install = Presenta => {
  Presenta.addModule('highlightjs', module)
}

module.init = modConfig => {
  let style = 'default'
  if (typeof modConfig === 'object') {
    injected = !!modConfig.noCss
    style = modConfig.style || 'default'
  } else {
    style = typeof modConfig === 'string' ? modConfig : 'default'
  }

  // we cannot use more than one HighlightJs style on a single page
  // therefore, once one style is present, we deny further injection
  if (!injected) {
    injectStyle(style)
    injected = true
  }
}

module.run = projectConfig => {

}

if (typeof window !== 'undefined' && window.Presenta) {
  window.Presenta.use(module)
}
