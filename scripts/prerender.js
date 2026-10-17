// Renders each route to static HTML so content shows before the JS bundle loads.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const ssrDir = resolve(root, 'dist-ssr')

const { render, routes } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)
const template = withCsp(await readFile(resolve(dist, 'index.html'), 'utf-8'))

// Adds a Content-Security-Policy <meta> (GitHub Pages can't send the header). Inline scripts and
// on* handlers are allowed by hash, computed from the built HTML so they can't go stale.
function withCsp(html) {
  // Browsers hash inline code after normalizing line endings to \n, so do the same.
  const hash = (code) =>
    `'sha256-${createHash('sha256').update(code.replace(/\r\n?/g, '\n')).digest('base64')}'`
  const scripts = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)].map((m) => hash(m[1]))
  const handlers = [...html.matchAll(/\son\w+="([^"]*)"/g)].map((m) => hash(m[1]))
  const policy = [
    "default-src 'self'",
    `script-src 'self' https://assets.calendly.com ${scripts.join(' ')}${handlers.length ? ` 'unsafe-hashes' ${handlers.join(' ')}` : ''}`,
    // 'unsafe-inline' covers React's style="" attributes (e.g. the gallery slide offset).
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https://assets.calendly.com",
    // Google Maps embed, and the Calendly scheduling popup (src/calendly.js).
    'frame-src https://www.google.com https://maps.google.com https://calendly.com',
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    'upgrade-insecure-requests',
  ].join('; ')
  return html.replace('<meta charset="UTF-8" />', (tag) => `${tag}\n    <meta http-equiv="Content-Security-Policy" content="${policy}" />`)
}

for (const route of routes) {
  const html = template.replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`)
  const file = resolve(dist, `.${route}`, 'index.html')
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, html)
  console.log(`prerendered ${route}`)
}

await rm(ssrDir, { recursive: true, force: true })
