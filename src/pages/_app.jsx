import '../styles/globals.css'
import { Layout } from '../components/Layout'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      await import('tw-elements').default
    }
    use()
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
