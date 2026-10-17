export const CALENDLY_URL = 'https://calendly.com/sternlifeinc/30min'

const WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js'
const WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css'

let widgetLoading

function loadWidget() {
  widgetLoading ??= new Promise((resolve, reject) => {
    const css = document.createElement('link')
    css.rel = 'stylesheet'
    css.href = WIDGET_CSS
    document.head.append(css)

    const script = document.createElement('script')
    script.src = WIDGET_JS
    script.async = true
    script.onload = resolve
    script.onerror = reject
    document.head.append(script)
  })
  return widgetLoading
}

export function openCalendly(event) {
  event.preventDefault()
  loadWidget()
    .then(() => window.Calendly.initPopupWidget({ url: CALENDLY_URL }))
    .catch(() => window.open(CALENDLY_URL, '_blank', 'noopener'))
}
