import { ErrorResponse } from '@apollo/client/link/error'

let unauthorized = false

// For graphql
export const graphqlErrorHandler = ({
  graphQLErrors,
  networkError,
}: ErrorResponse) => {
  console.log('graphQLErrors: ', graphQLErrors)
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    )

  if ((networkError as any)?.statusCode === 401) {
    // Handle unauthorized Error
  }

  if (networkError) console.log(`[Network error]: ${networkError}`)
}

const handleUnauthorizedError = () => {}
