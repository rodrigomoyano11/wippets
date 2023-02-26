import css from 'styled-jsx/css'

import { theme } from '../ThemeProvider'

const { typography, spacings } = theme

const textStyles = css`
  .container {
    display: block;
    color: var(--color);
  }

  .container :global(:where(h1, h2, h3, h4, h5, h6, p, span)) {
    all: unset;
    display: flex;
  }

  /* Variants */
  .container :global(.display-large) {
    font-weight: ${typography.weights.bold};
    font-size: 3.5625rem;
    line-height: 4rem;
    letter-spacing: -0.016rem;
  }
  .container :global(.display-medium) {
    font-weight: ${typography.weights.bold};
    font-size: 2.8125rem;
    line-height: 3.25rem;
    letter-spacing: 0;
  }
  .container :global(.display-small) {
    font-weight: ${typography.weights.bold};
    font-size: 2.25rem;
    line-height: 2.75rem;
    letter-spacing: 0;
  }

  .container :global(.headline-large) {
    font-weight: ${typography.weights.bold};
    font-size: 2rem;
    line-height: 2.5rem;
    letter-spacing: 0;
  }
  .container :global(.headline-medium) {
    font-weight: ${typography.weights.bold};
    font-size: 1.75rem;
    line-height: 2.25rem;
    letter-spacing: 0;
  }
  .container :global(.headline-small) {
    font-weight: ${typography.weights.bold};
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: 0;
  }

  .container :global(.title-large) {
    font-weight: ${typography.weights.medium};
    font-size: 1.375rem;
    line-height: 1.75rem;
    letter-spacing: 0;
  }
  .container :global(.title-medium) {
    font-weight: ${typography.weights.medium};
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.15px;
  }
  .container :global(.title-small) {
    font-weight: ${typography.weights.medium};
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.1px;
  }

  .container :global(.body-large) {
    font-weight: ${typography.weights.regular};
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.5px;
  }
  .container :global(.body-medium) {
    font-weight: ${typography.weights.regular};
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.25px;
  }
  .container :global(.body-small) {
    font-weight: ${typography.weights.regular};
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.4px;
  }

  .container :global(.label-large) {
    font-weight: ${typography.weights.bold};
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.1px;
  }
  .container :global(.label-medium) {
    font-weight: ${typography.weights.bold};
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.5px;
  }
  .container :global(.label-small) {
    font-weight: ${typography.weights.bold};
    font-size: 0.6875rem;
    line-height: 1rem;
    letter-spacing: 0.5px;
  }

  /* Spacings */
  .with-spacing :global(.display-large) {
    margin-bottom: ${spacings[9]};
  }

  .with-spacing :global(.display-medium) {
    margin-bottom: ${spacings[7]};
  }
  .with-spacing :global(.display-small) {
    margin-bottom: ${spacings[5]};
  }

  .with-spacing :global(.headline-large) {
    margin-bottom: ${spacings[5]};
  }
  .with-spacing :global(.headline-medium) {
    margin-bottom: ${spacings[4]};
  }
  .with-spacing :global(.headline-small) {
    margin-bottom: ${spacings[3]};
  }

  .with-spacing :global(.title-large) {
    margin-bottom: ${spacings[4]};
  }
  .with-spacing :global(.title-medium) {
    margin-bottom: ${spacings[3]};
  }
  .with-spacing :global(.title-small) {
    margin-bottom: ${spacings[2]};
  }

  .with-spacing :global(.body-large) {
    margin-bottom: ${spacings[3]};
  }
  .with-spacing :global(.body-medium) {
    margin-bottom: ${spacings[2]};
  }
  .with-spacing :global(.body-small) {
    margin-bottom: ${spacings[1]};
  }
`

export { textStyles }
