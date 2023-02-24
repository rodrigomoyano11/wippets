import css from 'styled-jsx/css'

import { Text } from '.'

const styles = css`
  main {
    padding: 1rem;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: #eee;
    border-radius: 3rem;
    gap: 1rem;
  }

  .main-title {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    margin-bottom: 1.5rem;
  }

  .examples {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: 100%;
  }

  .example {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 1rem 1.5rem;
    border-radius: 2rem;
    gap: 1.5rem;
    flex: 1;
    max-width: 100%;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
  }

  .subtitle {
    font-size: 1.25rem;
    font-weight: 500;
    font-style: italic;
    margin: 0;
  }

  .description {
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
  }

  .icons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  .icon-container :global(.icon) {
    font-size: 2rem;
  }

  .icon-title {
    font-size: 0.75rem;
    font-weight: 400;
    margin-top: 0.5rem;
    white-space: nowrap;
  }
`

const TextExamples = () => (
  <div className="main-container">
    <h1 className="main-title">Text</h1>

    <div className="examples">
      <div className="example">
        <h2 className="title">Variant</h2>

        <div className="example">
          <h3 className="subtitle">Display</h3>
          <div className="icons">
            <div className="icon-container">
              <Text variant="display" size="large">
                Example
              </Text>
              <h4 className="icon-title">display-large</h4>
            </div>

            <div className="icon-container">
              <Text variant="display" size="medium">
                Example
              </Text>
              <h4 className="icon-title">display-medium</h4>
            </div>

            <div className="icon-container">
              <Text variant="display" size="small">
                Example
              </Text>
              <h4 className="icon-title">display-small</h4>
            </div>
          </div>
        </div>

        <div className="example">
          <h3 className="subtitle">Headline</h3>
          <div className="icons">
            <div className="icon-container">
              <Text variant="headline" size="large">
                Example
              </Text>
              <h4 className="icon-title">headline-large</h4>
            </div>

            <div className="icon-container">
              <Text variant="headline" size="medium">
                Example
              </Text>
              <h4 className="icon-title">headline-medium</h4>
            </div>

            <div className="icon-container">
              <Text variant="headline" size="small">
                Example
              </Text>
              <h4 className="icon-title">headline-small</h4>
            </div>
          </div>
        </div>

        <div className="example">
          <h3 className="subtitle">Title</h3>
          <div className="icons">
            <div className="icon-container">
              <Text variant="title" size="large">
                Example
              </Text>
              <h4 className="icon-title">title-large</h4>
            </div>

            <div className="icon-container">
              <Text variant="title" size="medium">
                Example
              </Text>
              <h4 className="icon-title">title-medium</h4>
            </div>

            <div className="icon-container">
              <Text variant="title" size="small">
                Example
              </Text>
              <h4 className="icon-title">title-small</h4>
            </div>
          </div>
        </div>

        <div className="example">
          <h3 className="subtitle">Body</h3>
          <div className="icons">
            <div className="icon-container">
              <Text variant="body" size="large">
                Example
              </Text>
              <h4 className="icon-title">body-large</h4>
            </div>

            <div className="icon-container">
              <Text variant="body" size="medium">
                Example
              </Text>
              <h4 className="icon-title">body-medium</h4>
            </div>

            <div className="icon-container">
              <Text variant="body" size="small">
                Example
              </Text>
              <h4 className="icon-title">body-small</h4>
            </div>
          </div>
        </div>

        <div className="example">
          <h3 className="subtitle">Label</h3>
          <div className="icons">
            <div className="icon-container">
              <Text variant="label" size="large">
                Example
              </Text>
              <h4 className="icon-title">label-large</h4>
            </div>

            <div className="icon-container">
              <Text variant="label" size="medium">
                Example
              </Text>
              <h4 className="icon-title">label-medium</h4>
            </div>

            <div className="icon-container">
              <Text variant="label" size="small">
                Example
              </Text>
              <h4 className="icon-title">label-small</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="example">
        <h2 className="title">WithSpacing</h2>
        <div className="example">
          <h3 className="subtitle">Display</h3>
          <div className="icons">
            <div className="icon-container">
              <Text variant="display" size="large" withSpacing>
                Example
              </Text>
              <h4 className="icon-title">display-large</h4>
            </div>

            <div className="icon-container">
              <Text variant="display" size="medium" withSpacing>
                Example
              </Text>
              <h4 className="icon-title">display-medium</h4>
            </div>

            <div className="icon-container">
              <Text variant="display" size="small" withSpacing>
                Example
              </Text>
              <h4 className="icon-title">display-small</h4>
            </div>
          </div>
        </div>

        <div className="example">
          <h3 className="subtitle">Headline</h3>
          <div className="icons">
            <div className="icon-container">
              <Text variant="headline" size="large" withSpacing>
                Example
              </Text>
              <h4 className="icon-title">headline-large</h4>
            </div>

            <div className="icon-container">
              <Text variant="headline" size="medium" withSpacing>
                Example
              </Text>
              <h4 className="icon-title">headline-medium</h4>
            </div>

            <div className="icon-container">
              <Text variant="headline" size="small" withSpacing>
                Example
              </Text>
              <h4 className="icon-title">headline-small</h4>
            </div>
          </div>
        </div>

        <div className="example">
          <h3 className="subtitle">Title</h3>
          <div className="icons">
            <div className="icon-container">
              <Text variant="title" size="large" withSpacing>
                Example
              </Text>
              <h4 className="icon-title">title-large</h4>
            </div>

            <div className="icon-container">
              <Text variant="title" size="medium" withSpacing>
                Example
              </Text>
              <h4 className="icon-title">title-medium</h4>
            </div>

            <div className="icon-container">
              <Text variant="title" size="small" withSpacing>
                Example
              </Text>
              <h4 className="icon-title">title-small</h4>
            </div>
          </div>
        </div>

        <div className="example">
          <h3 className="subtitle">Body</h3>
          <div className="icons">
            <div className="icon-container">
              <Text variant="body" size="large" withSpacing>
                Example
              </Text>
              <h4 className="icon-title">body-large</h4>
            </div>

            <div className="icon-container">
              <Text variant="body" size="medium" withSpacing>
                Example
              </Text>
              <h4 className="icon-title">body-medium</h4>
            </div>

            <div className="icon-container">
              <Text variant="body" size="small" withSpacing>
                Example
              </Text>
              <h4 className="icon-title">body-small</h4>
            </div>
          </div>
        </div>

        <div className="example">
          <h3 className="subtitle">Label</h3>
          <div className="icons">
            <div className="icon-container">
              <Text variant="label" size="large" withSpacing>
                Example
              </Text>
              <h4 className="icon-title">label-large</h4>
            </div>

            <div className="icon-container">
              <Text variant="label" size="medium" withSpacing>
                Example
              </Text>
              <h4 className="icon-title">label-medium</h4>
            </div>

            <div className="icon-container">
              <Text variant="label" size="small" withSpacing>
                Example
              </Text>
              <h4 className="icon-title">label-small</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="example">
        <h2 className="title">Color</h2>
        <div className="icons">
          <div className="icon-container">
            <Text variant="display" size="large" color="primary">
              Example
            </Text>
            <h4 className="icon-title">Primary</h4>
          </div>

          <div className="icon-container">
            <Text variant="headline" size="large" color="secondary">
              Example
            </Text>
            <h4 className="icon-title">Secondary</h4>
          </div>

          <div className="icon-container">
            <Text variant="title" size="large" color="tertiary">
              Example
            </Text>
            <h4 className="icon-title">Tertiary</h4>
          </div>

          <div className="icon-container">
            <Text variant="body" size="large" color="error">
              Example
            </Text>

            <h4 className="icon-title">Error</h4>
          </div>

          <div className="icon-container">
            <Text variant="label" size="large" color="#53E465">
              Example
            </Text>
            <h4 className="icon-title">Custom</h4>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{styles}</style>
  </div>
)
export { TextExamples }
