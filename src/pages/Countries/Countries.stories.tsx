import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { Countries as Page } from './Countries'

export default {
  title: 'Pages/Countries',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    nextRouter: {
      asPath: '/countries',
      path: '/countries',
    },
  },
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />

export const Default = Template.bind({})
