import { HttpLink } from '@apollo/client'
import { config } from 'src/config'

export type CreateHttpProps = {
  idToken: string
}

export const createHttpLink = (props: CreateHttpProps) => {
  return new HttpLink({
    uri: config.API_URL,
    headers: {
      Authorization: `Bearer ${props.idToken}`,
    },
  })
}
