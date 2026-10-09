// Renders each route to static HTML so content shows before the JS bundle loads.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const ssrDir = resolve(root, 'dist-ssr')

const { render, routes } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)
const template = await readFile(resolve(dist, 'index.html'), 'utf-8')

for (const route of routes) {
  const html = template.replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`)
  const file = resolve(dist, `.${route}`, 'index.html')
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, html)
  console.log(`prerendered ${route}`)
}

await rm(ssrDir, { recursive: true, force: true })
