import css from 'styled-jsx/css'

import { theme } from '../ThemeProvider'

const { spacings } = theme

const buttonStyles = css`
  .button {
    all: unset;
    cursor: pointer;
    border-radius: 1.5rem;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Sizes */
  .small {
    padding: ${spacings[4]} ${spacings[8]};
  }

  .medium {
    padding: ${spacings[5]} ${spacings[10]};
  }

  .large {
    padding: ${spacings[6]} ${spacings[12]};
  }

  /* Variants */
  .filled {
    background: var(--fill);
    color: var(--on-fill);
  }

  .bordered {
    border: ${spacings[1]} solid var(--fill);
    color: var(--fill);
  }

  .text {
    color: var(--fill);
  }

  /* Hovers */
  .filled:hover {
    filter: brightness(0.9) saturate(1.25);
  }

  .bordered:hover {
    filter: brightness(0.9) saturate(1.25) grayscale(0.5);
  }

  .text:hover {
    color: var(--fill);
    filter: brightness(0.9) saturate(1.25) grayscale(0.5);
  }

  /* With current color */
  .with-current-color:hover {
    filter: brightness(0.9) saturate(1.25) grayscale(0.5);
  }

  .filled.with-current-color:not(:disabled) :global(.label) {
    filter: grayscale(1) saturate(1) contrast(10) invert(1);
  }

  .button:disabled {
    cursor: not-allowed;
    background-color: #e0e0e0;
    color: #9e9e9e;
  }

  .button:disabled.bordered {
    background-color: transparent;
    border: ${spacings[1]} solid #9e9e9e;
  }

  .button:disabled:hover {
    filter: none;
  }
`

export { buttonStyles }
