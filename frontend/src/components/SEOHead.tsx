import { useEffect } from 'react'

type Schema = Record<string, unknown>

interface Props {
  title: string
  description: string
  canonical: string
  schema?: Schema | Schema[]
}

export default function SEOHead({ title, description, canonical, schema }: Props) {
  useEffect(() => {
    document.title = title

    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = description

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
  }, [title, description, canonical, schema])

  return null
}
