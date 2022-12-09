import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import {ApolloProvider} from "src/shared/apollo/ApolloProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
