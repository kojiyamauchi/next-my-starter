/*
  Global Heading Component Storybook.
*/

import { GlobalHeading } from './Component'
// import { action } from '@storybook/addon-actions'

export default {
  title: 'Global Heading Component',
  component: GlobalHeading
}

export const Default = (): JSX.Element => <GlobalHeading />
