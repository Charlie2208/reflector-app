import NavbarF from '@/components/NavbarF'
import Footer from '@/components/Footer'
import CtaServices from '@/components/CtaServices'
import WhatsappButton from "@/components/WhatsappButton";

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarF />
      {children}
      <CtaServices />
      <WhatsappButton />
      <Footer />
    </>
  )
}