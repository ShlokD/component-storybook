import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ClapButton } from '../components/buttons/clap-button';
import { PulseButton } from '../components/buttons/pulse-button';

import { MultiQuestionInput } from '../components/inputs/multi-question-input';
import { EmailSignup } from '../components/inputs/email-signup';

const questions = ['What is your hometown?', 'Do you have a pet?']

storiesOf('Button', module)
  .add('Clap Button', () => <ClapButton />)
  .add('Pulse Button', () => <PulseButton />)


storiesOf('Inputs', module)
  .add('Multi-Question Input', () => <MultiQuestionInput questions={questions}/>)
  .add('Email Signup', () => <EmailSignup onEmailSubmit={(email) => console.log(email)} />)