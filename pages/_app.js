import '../styles/global.css'
import '../styles/home.css'
import '../styles/blogpost.css'
import Header from '../Header'
import Footer from '../Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
    <div className="main-content">
      <Component {...pageProps} />
    </div>
    <Footer />
    </>
  )
}

export default MyApp
