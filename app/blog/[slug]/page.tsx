import { client } from '@/sanity/lib/client'
import { postQuery } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(postQuery, { slug: params.slug })

  if (!post) return <div>Post no encontrado</div>

  return (
    <main>
      <article className="post-article">
        <p className="section-label">Blog</p>
        <h1 className="section-title">{post.title}</h1>
        <p className="post-date">
          {new Date(post.publishedAt).toLocaleDateString('es-CL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <div className="post-body">
          <PortableText value={post.body} />
        </div>
      </article>
    </main>
  )
}