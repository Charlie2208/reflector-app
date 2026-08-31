import NavbarF from '@/components/NavbarF'
import Footer from '@/components/Footer'

export default function NosotrosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarF />
      {children}
      <Footer />
    </>
  )
}