import css from 'styled-jsx/css'

import { Button } from '.'

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

const ButtonExamples = () => (
  <div className="main-container">
    <h1 className="main-title">Button</h1>

    <div className="examples">
      <div className="example">
        <h2 className="title">Variants</h2>
        <div className="icons">
          <div className="icon-container">
            <Button variant="filled">Example</Button>
            <h3 className="icon-title">Filled</h3>
          </div>
          <div className="icon-container">
            <Button variant="bordered">Example</Button>
            <h3 className="icon-title">Bordered</h3>
          </div>
          <div className="icon-container">
            <Button variant="text">Example</Button>
            <h3 className="icon-title">Text</h3>
          </div>
        </div>
      </div>

      <div className="example">
        <h2 className="title">Size</h2>
        <div className="icons">
          <div className="icon-container">
            <Button size="small">Example</Button>
            <h3 className="icon-title">Small</h3>
          </div>
          <div className="icon-container">
            <Button size="medium">Example</Button>
            <h3 className="icon-title">Medium</h3>
          </div>
          <div className="icon-container">
            <Button size="large">Example</Button>
            <h3 className="icon-title">Large</h3>
          </div>
        </div>
      </div>

      <div className="example">
        <h2 className="title">Fill</h2>
        <div className="icons">
          <div className="icon-container">
            <Button fill="primary">Example</Button>
            <h3 className="icon-title">Color</h3>
          </div>
          <div className="icon-container">
            <Button fill="#53E465" onFill="#ffffff">
              Example
            </Button>
            <h3 className="icon-title">Custom Color</h3>
          </div>
          <div className="icon-container">
            <Button fill="primary" withGradient>
              Example
            </Button>
            <h3 className="icon-title">Gradient</h3>
          </div>

          <div className="icon-container">
            <Button
              fill="linear-gradient(90deg, #02a316 0%, #53E465 100%)"
              onFill="#ffffff"
              withGradient>
              Example
            </Button>
            <h3 className="icon-title">Custom Gradient</h3>
          </div>
        </div>
      </div>

      <div className="example">
        <h2 className="title">Disabled</h2>
        <div className="icons">
          <div className="icon-container">
            <Button variant="filled" disabled>
              Example
            </Button>
            <h3 className="icon-title">Filled</h3>
          </div>
          <div className="icon-container">
            <Button variant="bordered" disabled>
              Example
            </Button>
            <h3 className="icon-title">Bordered</h3>
          </div>
          <div className="icon-container">
            <Button variant="text" disabled>
              Example
            </Button>
            <h3 className="icon-title">Text</h3>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{styles}</style>
  </div>
)
export { ButtonExamples }
