import { client } from '@/sanity/lib/client'
import { postsQuery } from '@/sanity/lib/queries'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery)

  return (
    <main>
      <section className="blog-section">
        <p className="section-label">Blog</p>
        <h1 className="section-title">Tendencias y estrategias</h1>
        <p className="section-body">
          Contenido sobre marketing digital, estrategia y crecimiento de marcas.
        </p>
        <div className="posts-grid">
          {posts.map((post: any) => (
            <Link href={`/blog/${post.slug.current}`} key={post._id} className="post-card">
              <div className="post-date">
                {new Date(post.publishedAt).toLocaleDateString('es-CL', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-excerpt">{post.excerpt}</p>
              <span className="post-link">Leer más →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}