import Footer from '../_components/Footer'
import Header from '../_components/Header'
import Toast from '../_components/Toast'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Toast />
    </>
  )
}
