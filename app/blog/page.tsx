import { client } from '@/sanity/lib/client'
import { postsQuery } from '@/sanity/lib/queries'
import Link from 'next/link'
import { Metadata } from 'next'
import NavbarF from '@/components/NavbarF'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog | Reflector Agencia de Marketing Digital',
  description: 'Artículos sobre marketing digital, estrategia, redes sociales y crecimiento de marcas. Contenido creado por Reflector, agencia de marketing en Santiago, Chile.',
  openGraph: {
    title: 'Blog | Reflector Agencia de Marketing Digital',
    description: 'Artículos sobre marketing digital, estrategia, redes sociales y crecimiento de marcas.',
    url: 'https://reflector.cl/blog',
    siteName: 'Reflector',
    locale: 'es_CL',
    type: 'website',
  },
}

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery)

  return (
    <main style={{ background: '#fff' }}>
      <NavbarF />
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
      <Footer />
    </main>
  )
}