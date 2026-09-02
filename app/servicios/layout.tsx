import NavbarF from '@/components/NavbarF'
import Footer from '@/components/Footer'
import CtaServices from '@/components/CtaServices'

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarF />
      {children}
      <CtaServices />
      <Footer />
    </>
  )
}