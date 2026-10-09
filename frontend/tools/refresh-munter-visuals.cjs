const fs = require('node:fs')
const path = require('node:path')
const { parse } = require('@vue/compiler-dom')
const root = path.resolve(__dirname, '../src')
const image = (name) => `/images/${name}`
for (const name of fs.readdirSync(path.join(root, 'views'))) {
  const file = path.join(root, 'views', name)
  let source = fs.readFileSync(file, 'utf8')
  source = source.replaceAll('/infinity-assets/53aeed785024fa756bea.jpg', image('portada-derecho.jpg'))
  if (name === 'HomeView.vue') {
    source = source.replace(/(id="img_comp-mmkfyj5p"[\s\S]*?src=")[^"]+/, '$1/images/portada-derecho.jpg')
      .replace(/(id="img-comp-mmof7l0k1__item-mmng1m3y"[\s\S]*?src=")[^"]+/, '$1/infinity-assets/cab28935363f6e7abbd2.jpg')
      .replaceAll('/infinity-assets/cbb6fbf06e6d70f1b310.jpg', image('consultoria.jpg'))
      .replaceAll('/infinity-assets/b9d22d380fb9740b2c5f.jpg', image('equipo.jpg'))
      .replaceAll('/infinity-assets/3dfa812e2ce83092384a.jpg', image('equipo.jpg'))
      .replace(/(id="img-comp-mmof7l0k1__item-j9ples3e"[\s\S]*?src=")[^"]+/, '$1/images/arquitectura-planos.jpg')
  } else {
    source = source.replaceAll('/infinity-assets/5be5f11f89e32d9c7b87.jpg', image(name === 'AboutView.vue' ? 'equipo.jpg' : 'portada-derecho.jpg'))
  }
  if (name === 'AboutView.vue') source = source.replaceAll('/infinity-assets/2b607a50ec2e5d188a12.jpg', image('consultoria.jpg'))
  if (name === 'ContactView.vue') source = source.replaceAll('/infinity-assets/a15cf7e988325a209de3.jpg', image('consultoria.jpg'))
  if (name !== 'HomeView.vue') {
    const hasTitle = (node) => node.tag === 'h1' || node.children?.some(hasTitle)
    const edits = []
    const visit = (node) => {
      if (node.tag === 'section' && hasTitle(node)) {
        const cls = node.props.find((prop) => prop.name === 'class')
        if (cls && !cls.value.content.includes('munter-page-cover')) edits.push({at:cls.value.loc.start.offset+1})
      }
      node.children?.forEach(visit)
    }
    visit(parse(source))
    for (const edit of edits.reverse()) source = source.slice(0, edit.at) + 'munter-page-cover ' + source.slice(edit.at)
  }
  fs.writeFileSync(file, source)
}
const contentPath = path.join(root, 'data/content.ts')
const content = fs.readFileSync(contentPath, 'utf8')
  .replace(/(id: 'arquitectura-ingenieria'[\s\S]*?image: ')[^']+/, '$1/images/arquitectura-planos.jpg')
  .replace(/(id: 'marketing-diseno'[\s\S]*?image: ')[^']+/, '$1/images/equipo.jpg')
fs.writeFileSync(contentPath, content)
