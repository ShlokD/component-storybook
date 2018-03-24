import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { decorateAction } from '@storybook/addon-actions';

import { linkTo } from '@storybook/addon-links';

import { ClapButton } from '../components/buttons/clap-button';
import { PulseButton } from '../components/buttons/pulse-button';

import { MultiQuestionInput } from '../components/inputs/multi-question-input';
import { EmailSignup } from '../components/inputs/email-signup';
import { MarkdownInput } from '../components/inputs/markdown-input';
import { SocialButton } from '../components/buttons/social-button';

import { ArticleNavigation } from '../components/navigations/article-navigation';

import { articles } from '../data/articles';
const questions = ['What is your hometown?', 'Do you have a pet?'];

const emailAction = decorateAction([args => args.slice(0, 1)]);

storiesOf('Button', module)
  .add('Clap Button', () => <ClapButton />)
  .add('Pulse Button', () => <PulseButton />)
  .add('Social Button', () => <SocialButton />);

storiesOf('Inputs', module)
  .add('Multi-Question Input', () => (
    <MultiQuestionInput questions={questions} />
  ))
  .add('Email Signup', () => (
    <EmailSignup onEmailSubmit={emailAction('email-submit')} />
  ))
  .add('Markdown Input', () => <MarkdownInput />);

storiesOf('Navigations', module).add('Article Navigation', () => (
  <ArticleNavigation articles={articles} />
));
