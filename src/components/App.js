import React from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import images from '../config/images.json';
import { SLIDESHOW_SPEED } from '../config/appSettings';
import './App.css';
import arrow from './dot-arrow.svg';

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

    this.getNextImageIndex = this.getNextImageIndex.bind(this);
    this.getPreviousImageIndex = this.getPreviousImageIndex.bind(this);
    this.slideToNext = this.slideToNext.bind(this);
    this.slideToPrevious = this.slideToPrevious.bind(this);
    this.slideOnInterval = this.slideOnInterval.bind(this);

    this.inverval = null;
  }

  componentDidMount() {
    this.slideOnInterval();
  }

  getNextImageIndex() {
    return this.state.imageIndex === images.length - 1
      ? 0
      : this.state.imageIndex + 1;
  }

  getPreviousImageIndex() {
    return this.state.imageIndex === 0
      ? images.length - 1
      : this.state.imageIndex - 1;
  }

  slideToNext() {
    const newImageIndex = this.getNextImageIndex();

    this.setState({
      imageIndex: newImageIndex,
    });

    clearInterval(this.interval);
    this.slideOnInterval();
  }

  slideToPrevious() {
    const newImageIndex = this.getPreviousImageIndex();
    this.setState({
      imageIndex: newImageIndex,
    });

    clearInterval(this.interval);
    this.slideOnInterval();
  }

  slideOnInterval() {
    this.interval = window.setInterval(() => {
      const newImageIndex = this.getNextImageIndex();

      this.setState({
        imageIndex: newImageIndex,
      });
    }, SLIDESHOW_SPEED);
  }

  render() {
    const image = images[this.state.imageIndex];

    return (
      <div className="container">
        <button
          onClick={this.slideToNext}
          className="slideButton slideButtonNext"
        >
          <img src={arrow} alt="next arrow" className="buttonIcon" />
        </button>
        <button
          onClick={this.slideToPrevious}
          className="slideButton slideButtonPrevious"
        >
          <img src={arrow} alt="previous arrow" className="buttonIcon" />
        </button>
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
