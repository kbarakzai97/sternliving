// Fades sections in as they scroll into view. index.html adds the `reveal` class before first paint
// (unless the visitor prefers reduced motion), and index.css hides these targets until revealed.
// Keep REVEAL_TARGETS in sync with the selectors in index.css.
export const REVEAL_TARGETS =
  'main > section:not(:first-child):not(.hero) > :not(.services__grid, .why__list, .promise__grid), ' +
  '.services__grid > li, .why__list > li, .promise__grid > li, .philosophy__list > li'

const STAGGER_GROUPS = '.services__grid, .why__list, .promise__grid, .philosophy__list'
const STAGGER_MS = 90

export function startScrollReveal() {
  window.__revealReady = true
  const root = document.documentElement
  if (!root.classList.contains('reveal')) return undefined

  // Cards in a list cascade in one after another.
  for (const group of document.querySelectorAll(STAGGER_GROUPS)) {
    ;[...group.children].forEach((item, i) => {
      item.style.setProperty('--reveal-delay', `${i * STAGGER_MS}ms`)
    })
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.setAttribute('data-revealed', '')
        observer.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  )
  document.querySelectorAll(REVEAL_TARGETS).forEach((el) => observer.observe(el))
  return () => observer.disconnect()
}
