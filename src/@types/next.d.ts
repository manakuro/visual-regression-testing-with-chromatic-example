import { ReactElement, ReactNode } from 'react'

export type GetLayout = {
  getLayout?: (page: ReactElement) => ReactNode
}
