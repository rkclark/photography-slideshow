import React from 'react';
import images from '../config/images.json';
import { SLIDESHOW_SPEED } from '../config/appSettings';
import './App.css';

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
        <img className="image" src={image.src} alt="Curent slide" />
        <span className={`watermark watermark-${image.watermarkPosition}`}>
          {image.author}
        </span>
      </div>
    );
  }
}
