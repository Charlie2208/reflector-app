import { client } from '@/sanity/lib/client'
import { postQuery } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import Image from 'next/image'
import NavbarF from '@/components/NavbarF'
import Footer from '@/components/Footer'


export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await client.fetch(postQuery, { slug })

  if (!post) return <div>Post no encontrado</div>

  return (
  <main style={{ background: '#fff' }}>
    <NavbarF />
    <article className="post-article">
      <Link href="/blog" className="back-to-blog">
        ← Volver al blog
      </Link>
      <p className="section-label">Blog</p>
      <h1 className="section-title">{post.title}</h1>
      <p className="post-date">
        {new Date(post.publishedAt).toLocaleDateString('es-CL', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      {post.mainImage && (
        <div style={{ marginBottom: '2.5rem' }}>
          <Image
            src={urlFor(post.mainImage).width(720).url()}
            alt={post.title}
            width={720}
            height={400}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
      )}
      <div className="post-body">
        <PortableText value={post.body} />
      </div>
    </article>
    <Footer />
  </main>
)
}