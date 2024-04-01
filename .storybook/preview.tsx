import type { Preview } from '@storybook/react';
import React from 'react';
import {SortProvider} from "../src/context/SortContext"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <SortProvider>
        <Story />
      </SortProvider>
    ),
  ],
};

export default preview;
