import { graphql } from 'msw'
import { data } from './data'
import { Options, Query } from './type'

export const countriesQuery = (options?: Options) => {
  return graphql.query<Query>('Countries', (_, res, ctx) => {
    if (options?.networkError) {
      return res(
        ctx.errors([
          {
            message: 'Network request failed',
            graphQLErrors: [],
            networkError: new Error('error'),
            errorMessage: 'error',
            extraInfo: {},
          },
        ]),
      )
    }

    return res(ctx.data(data(options?.res, options?.deepMergeOptions)))
  })
}
