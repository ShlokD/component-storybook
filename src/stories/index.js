import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ClapButton } from '../components/buttons';


storiesOf('Button', module)
  .add('Clap Button', () => <ClapButton />)
