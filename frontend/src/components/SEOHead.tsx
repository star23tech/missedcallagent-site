import { useEffect } from 'react'

type Schema = Record<string, unknown>

interface Props {
  title: string
  description: string
  canonical: string
  schema?: Schema | Schema[]
  ogImage?: string
}

function setMetaName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.content = content
}

function setMetaProp(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.content = content
}

export default function SEOHead({ title, description, canonical, schema, ogImage }: Props) {
  useEffect(() => {
    document.title = title

    setMetaName('description', description)

    setMetaProp('og:type', 'website')
    setMetaProp('og:title', title)
    setMetaProp('og:description', description)
    setMetaProp('og:url', canonical)
    if (ogImage) setMetaProp('og:image', ogImage)

    setMetaName('twitter:card', 'summary_large_image')
    setMetaName('twitter:title', title)
    setMetaName('twitter:description', description)
    if (ogImage) setMetaName('twitter:image', ogImage)

    let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalEl) {
      canonicalEl = document.createElement('link')
      canonicalEl.rel = 'canonical'
      document.head.appendChild(canonicalEl)
    }
    canonicalEl.href = canonical

    document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove())
    if (schema) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    }
  }, [title, description, canonical, schema, ogImage])

  return null
}
