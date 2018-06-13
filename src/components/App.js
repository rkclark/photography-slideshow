import React from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import images from '../config/images.json';
import { SLIDESHOW_SPEED } from '../config/appSettings';
import './App.css';

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imageIndex: 0,
    };
  }

  componentDidMount() {
    window.setInterval(() => {
      const newImageIndex =
        this.state.imageIndex === images.length - 1
          ? 0
          : this.state.imageIndex + 1;

      this.setState({
        imageIndex: newImageIndex,
      });
    }, SLIDESHOW_SPEED);
  }

  render() {
    const image = images[this.state.imageIndex];

    return (
      <div className="container">
        <TransitionGroup component={null}>
          <Transition
            timeout={1000}
            classNames="image"
            appear
            key={this.state.imageIndex}
          >
            {state => (
              <div
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                <div
                  className="imageContainer"
                  style={{
                    background: `url(${
                      image.src
                    }) center center / contain fixed no-repeat`,
                  }}
                />
                <div
                  className={`watermark watermark-${image.watermarkPosition}`}
                >
                  <p className="title">{image.title}</p>
                  <p className="photographer">{image.photographer}</p>
                </div>
              </div>
            )}
          </Transition>
        </TransitionGroup>
      </div>
    );
  }
}
