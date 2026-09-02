import Link from 'next/link'

interface BackLinkProps {
  href: string
  label: string
}

export default function BackLink({ href, label }: BackLinkProps) {
  return (
    <Link href={href} className="back-to-blog back-link-left">
      ← {label}
    </Link>
  )
}