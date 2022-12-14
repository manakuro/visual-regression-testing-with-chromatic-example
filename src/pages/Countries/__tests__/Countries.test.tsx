import { render, screen } from '@testing-library/react'
import React from 'react'
import { removeAllListeners } from 'src/mocks/server'
import { Provider } from 'src/testUtils'
import {
  closeServer,
  resetHandlers,
  resetServer,
  startServer,
} from 'src/testUtils/mock/setup'
import { Countries as Component } from '../Countries'

type Props = {}
const propsData = (options?: Partial<Props>): Props => ({
  ...options,
})

describe('pages/Countries', () => {
  startServer()
  closeServer()
  resetServer()
  resetHandlers()

  beforeEach(async () => {
    removeAllListeners()
  })

  describe('Countries', () => {
    test('renders countries list', async () => {
      render(
        <Provider>
          <Component {...propsData()} />
        </Provider>,
      )

      expect(await screen.findByText('Argentina')).toBeInTheDocument()
    })
  })
})
