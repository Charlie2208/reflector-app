import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

const postsQuery = groq`*[_type == "post"]{ slug, publishedAt }`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch(postsQuery)

  const postUrls = posts.map((post: any) => ({
    url: `https://reflector.cl/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://reflector.cl',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: 'https://reflector.cl/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...postUrls,
  ]
}