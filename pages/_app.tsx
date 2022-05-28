import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(2992566, 6)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
