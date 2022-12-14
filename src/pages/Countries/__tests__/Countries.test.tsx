import { render, screen } from '@testing-library/react'
import React from 'react'
import { removeAllListeners, server } from 'src/mocks/server'
import { Provider } from 'src/testUtils'
import {
  closeServer,
  resetHandlers,
  resetServer,
  startServer,
} from 'src/testUtils/mock/setup'
import { Countries as Component } from '../Countries'
import { countriesQuery } from 'src/mocks/queries/countries'

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

    test('renders Japan', async () => {
      server.use(
        countriesQuery({
          res: {
            countries: [
              {
                name: 'Japan',
                native: '日本',
                capital: 'Tokyo',
                emoji: '🇯🇵',
                currency: 'JPY',
                languages: [
                  {
                    code: 'ja',
                    name: 'Japanese',
                  },
                ],
              },
            ],
          },
        }),
      )

      render(
        <Provider>
          <Component {...propsData()} />
        </Provider>,
      )

      expect(await screen.findByText('Japan')).toBeInTheDocument()
    })
  })
})
