

import Home from '.'
import Navbar from './navbar'
import { CookiesProvider } from "react-cookie"
import ContextProvider from './contextapi/contextapi'


export default function App({ Component, pageProps }) {
  return (
    <>
    <ContextProvider>
<CookiesProvider>
    <Navbar/>
    
    <Component {...pageProps} />
    </CookiesProvider>
    </ContextProvider>
    </>
  
  )
  
  
}
