import deepmerge from 'deepmerge'
import { CountriesQuery as Query } from 'src/graphql/types/index.mock'
import { DeepPartial } from 'utility-types'

export type Response = DeepPartial<Query>
export type { CountriesQuery as Query } from 'src/graphql/types/index.mock'

export type Options = {
  res?: Response
  networkError?: boolean
  deepMergeOptions?: deepmerge.Options
}
