import { ErrorResponse } from '@apollo/client/link/error'

// For graphql
export const graphqlErrorHandler = ({
  graphQLErrors,
  networkError,
}: ErrorResponse) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    )

  if (networkError) console.log(`[Network error]: ${networkError}`)
}
