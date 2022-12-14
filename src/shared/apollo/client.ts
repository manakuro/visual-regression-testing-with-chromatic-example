import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { createLink, CreateLinkProps } from './createLink'

type Props = CreateLinkProps
let client: ApolloClient<NormalizedCacheObject>
export const createApolloClient = (props: Props) => {
  if (!client) {
    client = new ApolloClient({
      link: createLink(props),
      cache: new InMemoryCache(),
    })
    return client
  }

  return client
}
