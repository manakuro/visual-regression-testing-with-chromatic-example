import { ApolloProvider as ApolloProviderLibs } from '@apollo/client'
import React, { useMemo } from 'react'
import { createApolloClient } from './client'

export const ApolloProvider: React.FCWithChildren = (props) => {
  const client = useMemo(
    () => createApolloClient({ idToken: 'token here' }),
    [],
  )

  return (
    <ApolloProviderLibs client={client}>{props.children}</ApolloProviderLibs>
  )
}
