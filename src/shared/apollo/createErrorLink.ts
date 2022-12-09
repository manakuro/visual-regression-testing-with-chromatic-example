import { onError } from '@apollo/client/link/error'
import { graphqlErrorHandler } from './errorHandler'

export const createErrorLink = () =>
  onError((error) => {
    graphqlErrorHandler(error)
  })
