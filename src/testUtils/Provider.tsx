import React, { useMemo } from 'react'
import { createApolloClient } from 'src/shared/apollo/client'
import { ApolloProvider as ApolloProviderLibs } from '@apollo/client'

export const Provider: React.FCWithChildren = (props) => {
  return <ApolloProvider>{props.children}</ApolloProvider>
}

const ApolloProvider: React.FCWithChildren = (props) => {
  const client = useMemo(() => createApolloClient({ idToken: 'token' }), [])

  return (
    <ApolloProviderLibs client={client}>{props.children}</ApolloProviderLibs>
  )
}
