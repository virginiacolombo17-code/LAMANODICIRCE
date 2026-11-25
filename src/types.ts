export type Article = {
  slug: string
  title: string
  subtitle: string
  category: string
  date: string
  readingTime: number
  author: string
  excerpt: string
  visual: string
  body: { type: 'heading' | 'paragraph' | 'quote' | 'note'; text: string }[]
  references: string[]
}

export type Category = { title: string; number: string; description: string; symbol: string; tone: string }
