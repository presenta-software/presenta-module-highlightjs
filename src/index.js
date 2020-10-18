import hljs from 'highlight.js'

const injectTheme = name => {
  const theme = document.createElement('link')
  theme.href = `http://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.0.0/build/styles/${name}.min.css`
  theme.rel = 'stylesheet'
  document.head.appendChild(theme)
}

let injected = false

const module = function (sceneElement, modConfig, sceneConfig, projectConfig) {
  const theme = modConfig.theme || 'default'
  if (!injected) {
    injectTheme(theme)
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
